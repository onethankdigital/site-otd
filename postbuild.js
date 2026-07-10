import fs from 'fs';
import path from 'path';

const distDir = './dist';
const EXPECTED_SITEMAP_URLS = 31; // ATUALIZAR AO ADICIONAR ROTAS (deve bater com prerenderPaths no vite.config.js)

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (stat.isFile() && file.endsWith('.html')) {
      const normalizedPath = path.normalize(filePath);
      const rootIndexPath = path.normalize('dist/index.html');
      let html = fs.readFileSync(filePath, 'utf-8');
      
      if (normalizedPath === rootIndexPath) {
        if (!html.includes('rel="canonical"')) {
          html = html.replace('</head>', '    <link rel="canonical" href="https://onethank.com.br/" />\n  </head>');
          fs.writeFileSync(filePath, html, 'utf-8');
          console.log(`Injected homepage canonical in ${filePath}`);
        }
        continue;
      }
      
      // Remover tag title e description padrão da home para que cada página tenha apenas o seu title/description específico
      const defaultTitle = '<title data-rh="true">Agência de Marketing Digital em Santo André | One Thank Digital</title>';
      html = html.replace(defaultTitle, '');
      
      const defaultDesc = '<meta name="description" content="Agência de marketing digital e comunicação no Grande ABC. Estruturamos sua presença digital com sites premium, SEO, Google Meu Negócio e automações." data-rh="true">';
      html = html.replace(defaultDesc, '');
      
      // Injetar preconnects para Google Fonts no head
      const preconnects = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  </head>`;
      html = html.replace('</head>', preconnects);
      
      // Se for a Pillar Page, injetar o preload da imagem hero
      if (normalizedPath.includes(path.normalize('guia/automacao-digital/index.html'))) {
        const preloadHero = `
    <link rel="preload" as="image" href="/hero-automacao-digital.webp" type="image/webp">
  </head>`;
        html = html.replace('</head>', preloadHero);
      }
      
      fs.writeFileSync(filePath, html, 'utf-8');
      console.log(`Optimized static HTML in ${filePath}`);
    }
  }
}

console.log('Running post-build duplicate canonical cleanup and optimization...');
if (fs.existsSync(distDir)) {
  processDirectory(distDir);
  
  const templatePath = path.join(distDir, 'template.html');
  if (fs.existsSync(templatePath)) {
    fs.unlinkSync(templatePath);
    console.log('Removed temporary template.html');
  }
  
  const sitemapPath = path.join(distDir, 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    let sitemap = fs.readFileSync(sitemapPath, 'utf-8');
    
    // Extract all <url>...</url> blocks
    const urlBlocks = sitemap.match(/<url>[\s\S]*?<\/url>/g) || [];
    
    // Deduplicate by <loc> value (after normalizing trailing slash)
    const seen = new Map();
    for (const block of urlBlocks) {
      const locMatch = block.match(/<loc>(.*?)<\/loc>/);
      if (locMatch) {
        let loc = locMatch[1];
        
        // Normalize for comparison: strip trailing slash
        let normalizedKey = loc.endsWith('/') ? loc.slice(0, -1) : loc;
        
        // Ignore 404 page if it gets picked up by plugin's filesystem scan
        if (normalizedKey.endsWith('/404') || normalizedKey.endsWith('404.html')) {
          continue;
        }
        
        // Keep first occurrence (freshest lastmod), skip duplicates
        if (!seen.has(normalizedKey)) {
          // Enforce trailing slash for the final XML output
          let finalLoc = normalizedKey + '/';
          
          // Rewrite the block with the normalized loc
          const normalizedBlock = block.replace(/<loc>.*?<\/loc>/, `<loc>${finalLoc}</loc>`);
          seen.set(normalizedKey, normalizedBlock);
        }
      }
    }
    
    // Rebuild sitemap
    const header = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">';
    const footer = '</urlset>';
    const deduped = Array.from(seen.values()).join('');
    
    fs.writeFileSync(sitemapPath, header + deduped + footer, 'utf-8');
    console.log(`Optimized sitemap.xml: ${seen.size} unique URLs (deduplicated from ${urlBlocks.length}).`);
    
    if (seen.size !== EXPECTED_SITEMAP_URLS) {
      throw new Error(`Sitemap dedup validation failed: Expected exactly ${EXPECTED_SITEMAP_URLS} URLs, but got ${seen.size}`);
    }
  }
}
console.log('Post-build cleanup and optimization finished.');
