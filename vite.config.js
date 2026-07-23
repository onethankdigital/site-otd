import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import Prerender from '@prerenderer/rollup-plugin'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const _filename = fileURLToPath(import.meta.url)
const _dirname = dirname(_filename)

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
  '/insights/google-meu-negocio-guia-completo-2026/',
  '/insights/site-ou-instagram-qual-mais-importante/',
  '/insights/por-que-site-nao-aparece-google/',
  '/insights/seo-organico-vs-trafego-pago/',
  '/insights/concorrente-aparece-antes-no-google/',
  '/insights/presenca-digital-estruturada/',
  '/insights/leads-perdidos-whatsapp-resposta-rapida/',
  '/insights/o-que-e-crm-pequenas-empresas/',
  '/insights/4-pilares-empresa-encontrada-online/',
  '/insights/leads-fora-do-horario-como-atender-24h/',
  '/guia/',
  '/guia/automacao-digital/',
  '/guia/google-meu-negocio/',
  '/guia/desenvolvimento-web/',
  '/guia/seo-trafego-organico/',
  '/insights/categoria/automacao-crm/',
  '/agencias/',
  '/privacidade/',
  '/termos/'
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
  '/insights/google-meu-negocio-guia-completo-2026/',
  '/insights/site-ou-instagram-qual-mais-importante/',
  '/insights/por-que-site-nao-aparece-google/',
  '/insights/seo-organico-vs-trafego-pago/',
  '/insights/concorrente-aparece-antes-no-google/',
  '/insights/presenca-digital-estruturada/',
  '/insights/leads-perdidos-whatsapp-resposta-rapida/',
  '/insights/o-que-e-crm-pequenas-empresas/',
  '/insights/4-pilares-empresa-encontrada-online/',
  '/insights/leads-fora-do-horario-como-atender-24h/',
  '/guia/',
  '/guia/automacao-digital/',
  '/guia/google-meu-negocio/',
  '/guia/desenvolvimento-web/',
  '/guia/seo-trafego-organico/',
  '/insights/categoria/automacao-crm/',
  '/agencias/',
  '/privacidade/',
  '/termos/'
]

export default defineConfig({
  base: '/',
  plugins: [
    react(),

    Sitemap({
      hostname: 'https://onethank.com.br',
      dynamicRoutes: sitemapPaths,
      trailingSlash: true
    }),

    Prerender({
      staticDir: resolve(_dirname, 'dist'),
      routes: prerenderPaths,
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

