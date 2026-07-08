import fs from 'fs';
import path from 'path';

const distDir = './dist';

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (stat.isFile() && file.endsWith('.html')) {
      // Normalizar caminhos para pular apenas o index.html raiz da pasta dist
      const normalizedPath = path.normalize(filePath);
      const rootIndexPath = path.normalize('dist/index.html');
      
      if (normalizedPath === rootIndexPath) {
        continue;
      }
      
      let html = fs.readFileSync(filePath, 'utf-8');
      
      // Remover a tag canônica padrão da home que fica duplicada
      const targetTag = '<link rel="canonical" href="https://onethank.com.br/" data-rh="true">';
      html = html.replace(targetTag, '');
      
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
}
console.log('Post-build cleanup and optimization finished.');
