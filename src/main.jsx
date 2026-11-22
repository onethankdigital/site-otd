import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import { pageForPath } from './pages/registry'
import PrerenderReady from './utils/PrerenderReady'

// Carrega o código da página atual antes do primeiro render, para não piscar o HTML pré-renderizado.
const pagina = pageForPath(window.location.pathname)
const pronto = pagina ? pagina.preload().catch(() => {}) : Promise.resolve()

pronto.then(() => createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Suspense fallback={null}>
        <App />
      </Suspense>
      <PrerenderReady />
    </HelmetProvider>
  </StrictMode>,
))
