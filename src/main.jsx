import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import { pageForPath } from './pages/registry'
import PrerenderReady from './utils/PrerenderReady'

// Carrega o código da página atual antes do primeiro render, para não piscar o HTML pré-renderizado.
const pagina = pageForPath(window.location.pathname)
const pronto = pagina ? pagina.preload().catch(() => {}) : Promise.resolve()

// Mesmo conteúdo do app, usado pelo pré-render para gerar o HTML com renderToString.
const conteudo = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
)

const app = (
  <StrictMode>
    <HelmetProvider>
      <App />
      <PrerenderReady snapshot={conteudo} />
    </HelmetProvider>
  </StrictMode>
)

// Página pré-renderizada: hidrata o HTML que já chegou (sem redesenhar a tela).
// Se algo não bater com o HTML, o React refaz a página no cliente, como antes.
const container = document.getElementById('root')
pronto.then(() => {
  if (container.hasChildNodes()) {
    hydrateRoot(container, app, {
      onRecoverableError: (error) => console.warn('[hidratacao]', error?.message || error),
    })
  } else {
    createRoot(container).render(app)
  }
})
