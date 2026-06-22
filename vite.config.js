import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
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
    modulePreload: false
  }
})

