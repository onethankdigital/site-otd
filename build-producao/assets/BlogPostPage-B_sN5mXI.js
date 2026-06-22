import{r as e,t}from"./jsx-runtime-BOg02Zln.js";import{t as n}from"./react-tXVM_ry1.js";import{n as r}from"./blogPosts-BUurRJJO.js";var i=e(n(),1),a=t(),o={GMN:`#D42B2B`,Website:`#1a56db`,SEO:`#0e9f6e`,Automação:`#7e3af2`,OTD:`#D42B2B`};function s(){let e=window.location.pathname.split(`/`);return e[e.length-1]||``}function c(){let e=s(),t=r(e);(0,i.useEffect)(()=>{window.scrollTo({top:0,behavior:`instant`}),t&&(document.title=`${t.titulo} | Blog One Thank Digital`)},[e,t]);let n=t&&o[t.categoria]||`#D42B2B`,c=`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@1,700&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .article-wrap {
      background: #ffffff;
      min-height: 100vh;
      font-family: 'DM Sans', sans-serif;
    }

    /* NAVBAR */
    .article-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      background: rgba(8,8,8,0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid #1a1a1a;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 clamp(20px,4vw,64px);
      height: 64px;
    }

    .nav-logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 20px;
      letter-spacing: 2px;
      color: #ffffff;
      text-decoration: none;
    }
    .nav-logo span { color: #D42B2B; }

    .btn-back-blog {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #888;
      text-decoration: none;
      border: 1px solid #2a2a2a;
      padding: 8px 18px;
      border-radius: 6px;
      transition: all 0.2s;
      cursor: pointer;
      background: none;
      font-family: 'DM Sans', sans-serif;
    }
    .btn-back-blog:hover {
      color: #D42B2B;
      border-color: #D42B2B;
      background: rgba(212,43,43,0.06);
    }

    /* HERO */
    .article-hero {
      background: #080808;
      padding: 120px clamp(24px,6vw,120px) 72px;
      position: relative;
      overflow: hidden;
    }
    .article-hero::before {
      content: '';
      position: absolute; inset: 0;
      background-image: linear-gradient(rgba(212,43,43,0.04) 1px,transparent 1px),
        linear-gradient(90deg,rgba(212,43,43,0.04) 1px,transparent 1px);
      background-size: 48px 48px;
    }

    .article-hero-inner {
      max-width: 860px;
      margin: 0 auto;
      position: relative; z-index: 1;
    }

    .article-cat {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      padding: 6px 16px;
      border-radius: 100px;
      margin-bottom: 24px;
    }

    .article-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(40px, 6vw, 80px);
      line-height: 1.0;
      letter-spacing: 1px;
      color: #ffffff;
      margin-bottom: 24px;
    }

    .article-meta {
      font-size: 13px;
      color: #999;
      letter-spacing: 0.5px;
    }

    /* BODY */
    .article-body {
      max-width: 860px;
      margin: 0 auto;
      padding: clamp(48px,6vw,80px) clamp(24px,5vw,48px);
    }

    .article-lead {
      font-size: clamp(17px,1.5vw,21px);
      line-height: 1.8;
      color: #333;
      margin-bottom: 48px;
      padding-bottom: 48px;
      border-bottom: 1px solid #f0f0f0;
      font-weight: 400;
    }

    .article-section {
      margin-bottom: 48px;
    }

    .article-section h2 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(24px,3vw,38px);
      letter-spacing: 0.5px;
      color: #0a0a0a;
      margin-bottom: 16px;
      line-height: 1.1;
    }

    .article-section p {
      font-size: clamp(15px,1.2vw,17px);
      line-height: 1.9;
      color: #444;
      white-space: pre-line;
    }

    /* CTA */
    .article-cta {
      margin: 64px 0 0;
      padding: 48px clamp(24px,4vw,56px);
      background: linear-gradient(135deg, rgba(212,43,43,0.08) 0%, rgba(212,43,43,0.02) 100%);
      border: 2px solid rgba(212,43,43,0.3);
      border-radius: 16px;
      text-align: center;
    }

    .cta-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(24px,3vw,38px);
      color: #0a0a0a;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }

    .cta-sub {
      font-size: 16px;
      color: #444;
      margin-bottom: 28px;
    }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: #D42B2B;
      color: white;
      font-family: 'DM Sans', sans-serif;
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 16px 36px;
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.2s;
      cursor: pointer;
      border: none;
    }
    .cta-btn:hover {
      background: #b82020;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(212,43,43,0.3);
    }

    /* FOOTER */
    .article-footer {
      background: #080808;
      padding: 40px clamp(24px,5vw,96px);
      text-align: center;
      margin-top: 80px;
    }
    .footer-brand {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 18px;
      letter-spacing: 2px;
      color: #555;
    }
    .footer-brand span { color: #D42B2B; }

    /* 404 */
    .not-found {
      min-height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 40px;
    }
  `;function l(){window.history.pushState({},``,`/blog`),window.dispatchEvent(new PopStateEvent(`popstate`))}function u(){window.history.pushState({},``,`/`),window.dispatchEvent(new PopStateEvent(`popstate`)),setTimeout(()=>{window.dispatchEvent(new CustomEvent(`openQuiz`))},100)}return t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`style`,{children:c}),(0,a.jsxs)(`div`,{className:`article-wrap`,children:[(0,a.jsxs)(`nav`,{className:`article-nav`,children:[(0,a.jsxs)(`a`,{href:`/`,className:`nav-logo`,children:[`ONE THANK `,(0,a.jsx)(`span`,{children:`DIGITAL`})]}),(0,a.jsx)(`button`,{className:`btn-back-blog`,onClick:l,children:`← Voltar ao Blog`})]}),(0,a.jsx)(`div`,{className:`article-hero`,children:(0,a.jsxs)(`div`,{className:`article-hero-inner`,children:[(0,a.jsx)(`div`,{className:`article-cat`,style:{background:`${n}20`,color:n,border:`1px solid ${n}40`},children:t.categoria}),(0,a.jsx)(`h1`,{className:`article-title`,children:t.titulo}),(0,a.jsx)(`div`,{className:`article-meta`,children:t.meta})]})}),t.imagem&&(0,a.jsx)(`div`,{style:{width:`100%`,height:400,overflow:`hidden`},children:(0,a.jsx)(`img`,{src:t.imagem,alt:t.titulo,style:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`}})}),(0,a.jsxs)(`div`,{className:`article-body`,children:[(0,a.jsx)(`p`,{className:`article-lead`,children:t.lead}),t.secoes.map((e,t)=>(0,a.jsxs)(`div`,{className:`article-section`,children:[(0,a.jsx)(`h2`,{children:e.titulo}),(0,a.jsx)(`p`,{children:e.corpo})]},t)),(0,a.jsxs)(`div`,{className:`article-cta`,children:[(0,a.jsx)(`div`,{className:`cta-title`,children:t.cta}),(0,a.jsxs)(`p`,{className:`cta-sub`,children:[t.ctaSub,` — gratuito, em 5 minutos.`]}),(0,a.jsx)(`button`,{className:`cta-btn`,onClick:u,children:`FAZER O DIAGNÓSTICO GRATUITO →`})]})]}),(0,a.jsxs)(`div`,{className:`article-footer`,children:[(0,a.jsxs)(`div`,{className:`footer-brand`,children:[`ONE THANK `,(0,a.jsx)(`span`,{children:`DIGITAL`})]}),(0,a.jsx)(`div`,{style:{fontSize:13,color:`#444`,marginTop:8},children:`Presença digital estruturada.`})]})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`style`,{children:c}),(0,a.jsxs)(`div`,{className:`article-wrap`,children:[(0,a.jsxs)(`nav`,{className:`article-nav`,children:[(0,a.jsxs)(`a`,{href:`/`,className:`nav-logo`,children:[`ONE THANK `,(0,a.jsx)(`span`,{children:`DIGITAL`})]}),(0,a.jsx)(`button`,{className:`btn-back-blog`,onClick:l,children:`← Voltar ao Blog`})]}),(0,a.jsxs)(`div`,{className:`not-found`,style:{paddingTop:120},children:[(0,a.jsx)(`div`,{style:{fontFamily:`'Bebas Neue', sans-serif`,fontSize:80,color:`#D42B2B`},children:`404`}),(0,a.jsx)(`div`,{style:{fontFamily:`'Bebas Neue', sans-serif`,fontSize:32,color:`#0a0a0a`,marginBottom:16},children:`ARTIGO NÃO ENCONTRADO`}),(0,a.jsx)(`button`,{className:`btn-back-blog`,onClick:l,style:{marginTop:8},children:`← Voltar ao Blog`})]})]})]})}export{c as default};