import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import { resolve } from 'path'
import { blogPosts } from './src/data/blogPosts.js'

const paths = [
  '/diagnostico',
  '/quiz',
  '/pilares',
  '/4-pilares',
  '/historia',
  '/nossa-historia',
  '/blog',
  '/cases',
  '/privacidade',
  '/termos',
  '/automacoes-inteligentes',
  '/desenvolvimento-web-premium',
  '/seo-local',
  '/google-meu-negocio',
  ...blogPosts.map(post => `/blog/${post.slug}`)
]

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://onethank.com.br',
      dynamicRoutes: paths,
      generateRobotsTxt: false
    })
  ],
  build: {
    modulePreload: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        automacoes: resolve(__dirname, 'automacoes-inteligentes/index.html'),
        web: resolve(__dirname, 'desenvolvimento-web-premium/index.html'),
        seo: resolve(__dirname, 'seo-local/index.html'),
        gmn: resolve(__dirname, 'google-meu-negocio/index.html')
      }
    }
  }
})

