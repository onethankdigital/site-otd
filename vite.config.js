import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import Prerender from '@prerenderer/rollup-plugin'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Matriz MECE de caminhos reais e ativos na Agência One Thank Digital
const officialPaths = [
  '/diagnostico',
  '/pilares',
  '/historia',
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
    
    // Gerador de Índice Semântico Real para o Googlebot e AEO
    Sitemap({
      hostname: 'https://www.onethank.com.br',
      dynamicRoutes: officialPaths
    }),

    // Pré-renderização Estática: Transforma rotas dinâmicas em HTML físico
    Prerender({
      staticDir: resolve(__dirname, 'dist'),
      routes: officialPaths
    })
  ],
  build: {
    modulePreload: false
  }
})
