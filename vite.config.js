import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import Prerender from '@prerenderer/rollup-plugin'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const _filename = fileURLToPath(import.meta.url)
const _dirname = dirname(_filename)

// Matriz MECE Oficial e Definitiva - One Thank Digital
const officialPaths = [
  '/',
  '/diagnostico',
  '/pilares',
  '/historia',
  '/cases',
  '/blog',
  '/servicos/google-meu-negocio',
  '/servicos/criacao-de-sites',
  '/servicos/seo-trafego-organico',
  '/servicos/automacao-digital',
  '/privacidade',
  '/termos'
]

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    
    // Geração do sitemap.xml com os 4 pilares e páginas institucionais
    Sitemap({
      hostname: 'https://www.onethank.com.br',
      dynamicRoutes: officialPaths
    }),

    // Pré-renderização: Geração física de pastas e arquivos index.html
    Prerender({
      staticDir: resolve(_dirname, 'dist'),
      routes: officialPaths
    })
  ],
  build: {
    modulePreload: false
  }
})
