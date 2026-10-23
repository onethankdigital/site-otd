import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import Prerender from '@prerenderer/rollup-plugin'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { blogPosts, isPostPublished } from './src/data/blogPosts.js'
import { landings } from './src/data/landings.js'

const _filename = fileURLToPath(import.meta.url)
const _dirname = dirname(_filename)

// Artigos do blogPosts.js entram no sitemap e no prerender só a partir da publishDate.
// O deploy agendado (deploy.yml) refaz o build no dia para publicar sozinho.
const rotasDeArtigos = blogPosts.map(p => `/insights/${p.slug}/`)
const rotasPublicadas = blogPosts.filter(isPostPublished).map(p => `/insights/${p.slug}/`)
// Páginas de segmento e de cidade (src/data/landings.js) entram junto com os artigos
const rotasDeLandings = landings.map(l => l.path)
const comArtigosPublicados = (rotas) => [
  ...rotas.filter(r => !rotasDeArtigos.includes(r)),
  ...rotasPublicadas,
  ...rotasDeLandings
]

// 1. Rotas completas para o sitemap do Google Search Console
const sitemapPaths = [
  '/',
  '/diagnostico/',
  '/pilares/',
  '/historia/',
  '/cases/',
  '/insights/',
  '/servicos/google-meu-negocio/',
  '/servicos/criacao-de-sites/',
  '/servicos/seo-trafego-organico/',
  '/servicos/automacao-digital/',
  '/insights/como-organizar-leads-whatsapp-no-crm/',
  '/insights/automacao-comercial-o-que-e/',
  '/insights/automacao-de-processos-para-empresas/',
  '/insights/empresa-nao-aparece-google-maps/',
  '/insights/site-ou-instagram-qual-mais-importante/',
  '/insights/por-que-site-nao-aparece-google/',
  '/insights/seo-organico-vs-trafego-pago/',
  '/insights/concorrente-aparece-antes-no-google/',
  '/insights/presenca-digital-estruturada/',
  '/insights/leads-perdidos-whatsapp-resposta-rapida/',
  '/insights/o-que-e-crm-pequenas-empresas/',
  '/insights/4-pilares-empresa-encontrada-online/',
  '/insights/leads-fora-do-horario-como-atender-24h/',
  '/insights/whatsapp-business-api-oficial-ou-app/',
  '/guia/',
  '/guia/automacao-digital/',
  '/guia/google-meu-negocio/',
  '/guia/desenvolvimento-web/',
  '/guia/seo-trafego-organico/',
  '/insights/categoria/automacao-crm/',
  '/agencias/',
  '/privacidade/',
  '/termos/',
  '/onehub/'
]

const prerenderPaths = [
  '/diagnostico/',
  '/pilares/',
  '/historia/',
  '/cases/',
  '/insights/',
  '/servicos/google-meu-negocio/',
  '/servicos/criacao-de-sites/',
  '/servicos/seo-trafego-organico/',
  '/servicos/automacao-digital/',
  '/insights/como-organizar-leads-whatsapp-no-crm/',
  '/insights/automacao-comercial-o-que-e/',
  '/insights/automacao-de-processos-para-empresas/',
  '/insights/empresa-nao-aparece-google-maps/',
  '/insights/site-ou-instagram-qual-mais-importante/',
  '/insights/por-que-site-nao-aparece-google/',
  '/insights/seo-organico-vs-trafego-pago/',
  '/insights/concorrente-aparece-antes-no-google/',
  '/insights/presenca-digital-estruturada/',
  '/insights/leads-perdidos-whatsapp-resposta-rapida/',
  '/insights/o-que-e-crm-pequenas-empresas/',
  '/insights/4-pilares-empresa-encontrada-online/',
  '/insights/leads-fora-do-horario-como-atender-24h/',
  '/insights/whatsapp-business-api-oficial-ou-app/',
  '/guia/',
  '/guia/automacao-digital/',
  '/guia/google-meu-negocio/',
  '/guia/desenvolvimento-web/',
  '/guia/seo-trafego-organico/',
  '/insights/categoria/automacao-crm/',
  '/agencias/',
  '/privacidade/',
  '/termos/',
  '/onehub/',
  // Link da bio do Instagram: pré-renderizada, mas fora do sitemap (noindex)
  '/links/'
]

export default defineConfig({
  base: '/',
  plugins: [
    react(),

    Sitemap({
      hostname: 'https://onethank.com.br',
      dynamicRoutes: comArtigosPublicados(sitemapPaths),
      exclude: ['/links', '/links/'],
      trailingSlash: true
    }),

    Prerender({
      staticDir: resolve(_dirname, 'dist'),
      routes: comArtigosPublicados(prerenderPaths),
      renderer: new PuppeteerRenderer({
        headless: true,
        inject: { isPrerender: true },
        injectProperty: '__PRERENDER_INJECTED',
        skipThirdPartyRequests: true
      })
    })
  ],
  build: {
    modulePreload: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) {
              return 'vendor-gsap';
            }
            if (id.includes('react-dom') || id.includes('react/')) {
              return 'vendor-react';
            }
            return 'vendor-others';
          }
        }
      }
    }
  }
})

