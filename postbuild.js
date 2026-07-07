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
      const originalHtml = html;
      html = html.replace(targetTag, '');
      
      if (html !== originalHtml) {
        fs.writeFileSync(filePath, html, 'utf-8');
        console.log(`Cleaned up duplicate canonical in ${filePath}`);
      }
    }
  }
}

console.log('Running post-build duplicate canonical cleanup...');
if (fs.existsSync(distDir)) {
  processDirectory(distDir);
}
console.log('Post-build cleanup finished.');
