import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, 'dist');

function getHtmlFiles(dir) {
  const results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results.push(...getHtmlFiles(filePath));
    } else if (stat.isFile() && file.endsWith('.html')) {
      results.push(filePath);
    }
  }
  return results;
}

function auditCanonical(filePath) {
  const html = fs.readFileSync(filePath, 'utf-8');
  
  // Regex to extract all <link rel="canonical" href="...">
  const regex = /<link\s+[^>]*rel=["']canonical["'][^>]*>/gi;
  const hrefRegex = /href=["'](.*?)["']/i;
  
  const tags = html.match(regex) || [];
  const canonicals = [];
  
  for (const tag of tags) {
    const hrefMatch = tag.match(hrefRegex);
    const href = hrefMatch ? hrefMatch[1] : 'NO HREF';
    canonicals.push({ tag, href });
  }
  
  // Calculate relative URL path
  let relativePath = path.relative(DIST_DIR, filePath).replace(/\\/g, '/');
  // Format page path nicely
  let pagePath = '/' + relativePath;
  if (pagePath.endsWith('/index.html')) {
    pagePath = pagePath.replace('/index.html', '');
    if (pagePath === '') pagePath = '/';
  }
  
  return {
    pagePath,
    count: canonicals.length,
    hrefs: canonicals.map(c => c.href).join(', ')
  };
}

const htmlFiles = getHtmlFiles(DIST_DIR);
const results = htmlFiles.map(auditCanonical);

console.log('| Página | Contagem | Href |');
console.log('| :--- | :--- | :--- |');
let failed = false;
for (const res of results) {
  const isHome = res.pagePath === '/';
  const expectedPrefix = 'https://onethank.com.br';
  
  let valid = res.count === 1;
  if (valid) {
    const href = res.hrefs;
    if (isHome) {
      if (href !== 'https://onethank.com.br/') {
        valid = false;
      }
    } else {
      if (href.endsWith('/') || href.includes('www.') || !href.startsWith(expectedPrefix)) {
        valid = false;
      }
    }
  }
  
  const statusIcon = valid ? '✅' : '❌';
  if (!valid) failed = true;
  
  console.log(`| ${res.pagePath} | ${res.count} (${statusIcon}) | ${res.hrefs || 'Nenhum'} |`);
}

if (failed) {
  console.error('\n❌ CANONICAL AUDIT FAILED! Some pages do not conform to SEO rules.');
  process.exit(1);
} else {
  console.log('\n✅ CANONICAL AUDIT PASSED! All pages have exactly 1 valid canonical tag.');
}
