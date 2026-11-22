import { useEffect } from 'react'

// Avisa o pré-render (Puppeteer, renderAfterDocumentEvent) que a página e o <head> do Helmet já foram aplicados.
export default function PrerenderReady() {
  useEffect(() => {
    const t = setTimeout(() => document.dispatchEvent(new Event('prerender-ready')), 100)
    return () => clearTimeout(t)
  }, [])
  return null
}
