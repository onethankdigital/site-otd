import fs from 'fs';
import path from 'path';
import { blogPosts, getPublishedPosts } from './src/data/blogPosts.js';
import { landings } from './src/data/landings.js';
import PrerendererModule from '@prerenderer/prerenderer';
import PuppeteerRendererModule from '@prerenderer/renderer-puppeteer';

const Prerenderer = PrerendererModule.default || PrerendererModule;
const PuppeteerRenderer = PuppeteerRendererModule.default || PuppeteerRendererModule;

const distDir = './dist';
// Rotas fixas (páginas, guias e insights próprios) + artigos do blogPosts.js já publicados.
// ATUALIZAR ROTAS_FIXAS AO ADICIONAR PÁGINAS QUE NÃO SEJAM ARTIGOS DO blogPosts.js
const ROTAS_FIXAS = 23;
const EXPECTED_SITEMAP_URLS = ROTAS_FIXAS + getPublishedPosts().length + landings.length;

// O Puppeteer executa o snippet inline do GTM durante o pré-render e grava no HTML
// estático o <script src="gtm.js"> que ele injeta. No navegador, o snippet roda de novo
// e injeta uma segunda tag → GTM duplicado. Remove a tag gravada; o snippet inline fica.
function stripPrerenderedGtm(html) {
  return html.replace(/<script[^>]*src="https:\/\/www\.googletagmanager\.com\/gtm\.js[^"]*"[^>]*><\/script>/g, '');
}

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
      html = stripPrerenderedGtm(html);

      if (normalizedPath === rootIndexPath) {
        if (!html.includes('rel="canonical"')) {
          html = html.replace('</head>', '    <link rel="canonical" href="https://onethank.com.br/" />\n  </head>');
          console.log(`Injected homepage canonical in ${filePath}`);
        }
        fs.writeFileSync(filePath, html, 'utf-8');
        continue;
      }

      // Remover tag title e description padrão da home para que cada página tenha apenas o seu title/description específico
      // Por regex (não por texto exato), para não quebrar quando o title/description da home mudar no index.html.
      if ((html.match(/<title[\s>]/g) || []).length > 1) {
        html = html.replace(/<title data-rh="true">[^<]*<\/title>/, '');
      }
      if ((html.match(/<meta name="description"/g) || []).length > 1) {
        html = html.replace(/<meta name="description" content="[^"]*" data-rh="true">/, '');
      }

      // Open Graph / Twitter: o index.html traz as tags da home antes das da página.
      // Quando a página define as suas, remove a primeira (a da home).
      for (const prop of ['og:title', 'og:description', 'og:url', 'og:image', 'twitter:title', 'twitter:description', 'twitter:image']) {
        const re = new RegExp(`<meta (?:property|name)="${prop}" content="[^"]*"[^>]*>`, 'g');
        if ((html.match(re) || []).length > 1) {
          html = html.replace(new RegExp(`<meta (?:property|name)="${prop}" content="[^"]*"[^>]*>`), '');
        }
      }

      // Injetar preconnects para Google Fonts no head
      const preconnects = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  </head>`;
      html = html.replace('</head>', preconnects);

      // Página do link da bio: fica só com o noindex da própria página
      if (normalizedPath.includes(path.normalize('links/index.html'))) {
        html = html.replace(/<meta name="robots" content="index, follow"\s*\/?>/, '');
      }

      // Se for a Pillar Page, injetar o preload da imagem hero
      if (normalizedPath.includes(path.normalize('guia/automacao-digital/index.html'))) {
        const preloadHero = `
    <link rel="preload" as="image" href="/hero-automacao-digital.webp" type="image/webp">
  </head>`;
        html = html.replace('</head>', preloadHero);
      }

      // Se for uma página de post do blog em /insights/<slug>/index.html, atualizar meta tags OG com dados específicos
      for (const post of blogPosts) {
        if (normalizedPath.includes(path.normalize(`insights/${post.slug}/index.html`))) {
          const absImg = `https://onethank.com.br${post.imagem}`;
          const absUrl = `https://onethank.com.br/insights/${post.slug}/`;
          const ogTitle = `${post.titulo} | One Thank Digital`;
          html = html.replace(/<meta property="og:image" content="[^"]*">/g, `<meta property="og:image" content="${absImg}">`);
          html = html.replace(/<meta property="twitter:image" content="[^"]*">/g, `<meta property="twitter:image" content="${absImg}">`);
          html = html.replace(/<meta property="og:title" content="[^"]*">/g, `<meta property="og:title" content="${ogTitle}">`);
          html = html.replace(/<meta property="twitter:title" content="[^"]*">/g, `<meta property="twitter:title" content="${ogTitle}">`);
          html = html.replace(/<meta property="og:url" content="[^"]*">/g, `<meta property="og:url" content="${absUrl}">`);
          break;
        }
      }

      fs.writeFileSync(filePath, html, 'utf-8');
      console.log(`Optimized static HTML in ${filePath}`);
    }
  }
}

console.log('Running post-build duplicate canonical cleanup and optimization...');
if (fs.existsSync(distDir)) {
  processDirectory(distDir);

  // llms.txt: a lista de artigos do blog é gerada a partir dos posts já publicados (publishDate),
  // para cada artigo agendado entrar sozinho no dia da publicação.
  const llmsPath = path.join(distDir, 'llms.txt');
  if (fs.existsSync(llmsPath)) {
    const posts = [...getPublishedPosts()].sort((x, y) => (y.publishDate || '').localeCompare(x.publishDate || ''));
    const linhas = posts.map((p) => `- [${p.titulo}](https://onethank.com.br/insights/${p.slug}/)`).join('\n');
    const llms = fs.readFileSync(llmsPath, 'utf-8');
    if (!llms.includes('{{ARTIGOS_BLOG}}')) throw new Error('llms.txt sem o marcador {{ARTIGOS_BLOG}}');
    fs.writeFileSync(llmsPath, llms.replace('{{ARTIGOS_BLOG}}', linhas), 'utf-8');
    console.log(`llms.txt: ${posts.length} artigos publicados listados.`);
  }

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

async function prerenderHomepage() {
  console.log('Starting standalone pre-rendering for the homepage...');
  const prerenderer = new Prerenderer({
    staticDir: path.resolve(distDir),
    renderer: new PuppeteerRenderer({
      headless: true,
      inject: { isPrerender: true },
      injectProperty: '__PRERENDER_INJECTED',
      // Espera o aviso do main.jsx: páginas carregadas sob demanda levam mais que o evento load.
      renderAfterDocumentEvent: 'prerender-ready',
      timeout: 30000,
      skipThirdPartyRequests: true,
      consoleHandler: (route, message) => {
        console.log(`[Browser Console - ${route}] ${message.text()}`);
      },
      pageSetup: async (page, route) => {
        page.on('requestfailed', request => {
          console.log(`[Request Failed - ${route}] ${request.url()} - ${request.failure() ? request.failure().errorText : 'unknown'}`);
        });
      }
    })
  });

  try {
    await prerenderer.initialize();
    const renderedRoutes = await prerenderer.renderRoutes(['/']);
    let html = stripPrerenderedGtm(renderedRoutes[0].html.trim());
    
    // Clean up any duplicate canonical tags and write exactly one
    html = html.replace(/<link rel="canonical"[^>]*>/g, '');
    html = html.replace('</head>', '    <link rel="canonical" href="https://onethank.com.br/" />\n  </head>');

    const outputPath = path.join(distDir, 'index.html');
    fs.writeFileSync(outputPath, html, 'utf-8');
    console.log(`Successfully pre-rendered homepage to ${outputPath} (${html.length} bytes).`);
  } catch (err) {
    console.error('Error pre-rendering homepage:', err);
    throw err;
  } finally {
    await prerenderer.destroy();
  }
}

prerenderHomepage().then(() => {
  console.log('Post-build cleanup and optimization finished.');
}).catch(err => {
  console.error('Post-build failed:', err);
  process.exit(1);
});
