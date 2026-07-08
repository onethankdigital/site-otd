import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import Prerender from '@prerenderer/rollup-plugin'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const _filename = fileURLToPath(import.meta.url)
const _dirname = dirname(_filename)

// 1. Rotas completas para o sitemap do Google Search Console
const sitemapPaths = [
  '/',
  '/diagnostico',
  '/pilares',
  '/historia',
  '/cases',
  '/insights',
  '/servicos/google-meu-negocio',
  '/servicos/criacao-de-sites',
  '/servicos/seo-trafego-organico',
  '/servicos/automacao-digital',
  '/insights/como-organizar-leads-whatsapp-no-crm',
  '/insights/automacao-de-processos-para-empresas',
  '/guia',
  '/guia/automacao-digital',
  '/insights/categoria/automacao-crm',
  '/privacidade',
  '/termos'
]

// 2. Subrotas para pré-renderização estática (sem a '/' para evitar conflito de escrita)
const prerenderPaths = [
  '/diagnostico',
  '/pilares',
  '/historia',
  '/cases',
  '/insights',
  '/servicos/google-meu-negocio',
  '/servicos/criacao-de-sites',
  '/servicos/seo-trafego-organico',
  '/servicos/automacao-digital',
  '/insights/como-organizar-leads-whatsapp-no-crm',
  '/insights/automacao-de-processos-para-empresas',
  '/guia',
  '/guia/automacao-digital',
  '/insights/categoria/automacao-crm',
  '/privacidade',
  '/termos'
]

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    
    Sitemap({
      hostname: 'https://onethank.com.br',
      dynamicRoutes: sitemapPaths
    }),

    Prerender({
      staticDir: resolve(_dirname, 'dist'),
      routes: prerenderPaths
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

