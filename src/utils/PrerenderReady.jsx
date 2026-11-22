import { useEffect } from 'react'

// Só faz algo no pré-render (Puppeteer injeta window.__PRERENDER_INJECTED).
//
// 1. Espera a página e o <head> do Helmet serem aplicados.
// 2. Troca o HTML do #root pelo renderToString do React. O HTML que o navegador desenhou não tem os
//    marcadores que o React usa para hidratar (<!-- --> entre textos vizinhos); sem eles a hidratação
//    falha e a página é redesenhada do zero. O react-dom/server vira um chunk separado que só o
//    pré-render baixa: o visitante nunca carrega esse código.
// 3. Dispara 'prerender-ready' (renderAfterDocumentEvent no vite.config.js e no postbuild.js).
export default function PrerenderReady({ snapshot }) {
  useEffect(() => {
    if (!window.__PRERENDER_INJECTED) return
    const t = setTimeout(async () => {
      try {
        const { renderToString } = await import('react-dom/server')
        // O React 19 põe no início do renderToString as tags de <head> da página (title, meta, link,
        // JSON-LD). Elas já estão no <head> real; aqui seriam um segundo title dentro do <body>.
        const hoistable = /^(?:<link\b[^>]*>|<meta\b[^>]*>|<title\b[^>]*>[\s\S]*?<\/title>|<script\b[^>]*>[\s\S]*?<\/script>)/
        let html = renderToString(snapshot)
        while (hoistable.test(html)) html = html.replace(hoistable, '')
        // Só troca se veio a página de fato (nunca gravar HTML vazio).
        if (html && html.length > 200) document.getElementById('root').innerHTML = html
      } catch (e) {
        console.error('[prerender] renderToString falhou, mantendo o HTML do navegador', e)
      }
      document.dispatchEvent(new Event('prerender-ready'))
    }, 100)
    return () => clearTimeout(t)
  }, [snapshot])
  return null
}
