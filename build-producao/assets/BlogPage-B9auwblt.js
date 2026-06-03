import{r as e,t}from"./jsx-runtime-BOY_dY-B.js";import{t as n}from"./react-CaZqsTFt.js";import{t as r}from"./blogPosts-BSeEIMSE.js";var i=e(n(),1),a=t(),o=[`Todos`,`GMN`,`Website`,`SEO`,`Automação`,`OTD`],s=r.map((e,t)=>({id:e.id,featured:t===0,category:e.categoria,date:`Mai 2026`,title:e.titulo,excerpt:e.lead.slice(0,140)+`...`,imagem:e.imagem,readTime:e.meta.split(` `)[0]+` `+e.meta.split(` `)[1],slug:e.slug,comingSoon:!1})),c={GMN:`#D42B2B`,Website:`#1a56db`,SEO:`#0e9f6e`,Automação:`#7e3af2`,OTD:`#D42B2B`};function l({src:e,alt:t,style:n}){return(0,a.jsx)(`img`,{src:e,alt:t||``,style:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`,...n}})}function u(){let[e,t]=(0,i.useState)(`Todos`);(0,i.useEffect)(()=>{document.title=`Blog | One Thank Digital - Somos Comunicação`},[]);let n=s.find(e=>e.featured),r=s.filter(e=>!e.featured),u=e===`Todos`?r:r.filter(t=>t.category===e);function d(e){window.history.pushState({},``,`/blog/${e}`),window.dispatchEvent(new PopStateEvent(`popstate`))}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`style`,{children:`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@1,700&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .blog-wrap {
      background: #ffffff;
      min-height: 100vh;
      font-family: 'DM Sans', sans-serif;
      position: relative;
    }

    .blog-header {
      background: #080808 url('/blog-header-bg.webp') center center / cover no-repeat;
      padding: clamp(96px,12vw,160px) clamp(24px,5vw,96px) clamp(48px,6vw,80px);
      position: relative;
      overflow: hidden;
    }

    .blog-header::before {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(to right, rgba(8,8,8,0.85) 40%, rgba(8,8,8,0.4) 100%);
    }

    .blog-header::after {
      content: '';
      position: absolute; inset: 0;
      background-image: linear-gradient(rgba(212,43,43,0.04) 1px,transparent 1px),
        linear-gradient(90deg,rgba(212,43,43,0.04) 1px,transparent 1px);
      background-size: 48px 48px;
      pointer-events: none;
    }

    .blog-header-inner {
      max-width: 1400px;
      margin: 0 auto;
      position: relative; z-index: 1;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 32px;
      flex-wrap: wrap;
    }

    .blog-eyebrow {
      font-size: 11px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #D42B2B;
      font-weight: 700;
      margin-bottom: 16px;
    }

    .blog-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(56px,8vw,120px);
      line-height: 0.9;
      letter-spacing: 2px;
      color: #ffffff;
    }

    .blog-title em {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      color: #D42B2B;
    }

    .blog-tagline {
      font-size: clamp(14px,1.2vw,17px);
      color: #777;
      line-height: 1.7;
      max-width: 360px;
      padding-bottom: 8px;
      border-left: 2px solid #D42B2B;
      padding-left: 16px;
    }

    .btn-back {
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
      border-radius: 4px;
      font-weight: 500;
    }
    .btn-back:hover {
      border-color: #D42B2B !important;
      color: #D42B2B !important;
      background: rgba(212,43,43,0.08) !important;
    }

    .blog-body {
      max-width: 1400px;
      margin: 0 auto;
      padding: clamp(48px,6vw,80px) clamp(24px,5vw,96px);
    }

    .featured-card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      border: 1px solid #e8e8e8;
      border-radius: 16px;
      overflow: hidden;
      margin-bottom: clamp(48px,6vw,80px);
      min-height: clamp(320px,40vh,480px);
      transition: box-shadow 0.3s;
      cursor: pointer;
      text-decoration: none;
    }

    .featured-card:hover {
      box-shadow: 0 20px 60px rgba(0,0,0,0.08);
    }

    .featured-image {
      position: relative;
      background: #f5f5f5;
      min-height: 300px;
    }

    .featured-content {
      padding: clamp(32px,4vw,56px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #ffffff;
    }

    .featured-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
    }

    .cat-tag {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 5px 12px;
      border-radius: 100px;
    }

    .post-date {
      font-size: 12px;
      color: #aaa;
      letter-spacing: 0.5px;
    }

    .read-time {
      font-size: 12px;
      color: #aaa;
      margin-left: auto;
    }

    .featured-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px,3.5vw,52px);
      line-height: 1.05;
      letter-spacing: 0.5px;
      color: #0a0a0a;
      margin-bottom: 16px;
    }

    .featured-excerpt {
      font-size: clamp(14px,1.1vw,16px);
      color: #444;
      line-height: 1.8;
      margin-bottom: 28px;
    }

    .btn-read {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: #0a0a0a;
      color: white;
      border: none;
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      font-weight: 700;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 14px 28px;
      border-radius: 6px;
      text-decoration: none;
      transition: all 0.2s;
      align-self: flex-start;
    }

    .btn-read:hover {
      background: #D42B2B;
      transform: translateX(4px);
    }

    .filter-bar {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: clamp(36px,4vw,56px);
      padding-bottom: clamp(24px,3vw,36px);
      border-bottom: 1px solid #f0f0f0;
    }

    .filter-btn {
      background: none;
      border: 1px solid #e0e0e0;
      color: #888;
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      font-weight: 600;
      font-size: 12px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 9px 20px;
      border-radius: 100px;
      transition: all 0.2s;
    }

    .filter-btn:hover { border-color: #D42B2B; color: #D42B2B; }
    .filter-btn.active { background: #D42B2B; border-color: #D42B2B; color: white; }

    .posts-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: clamp(20px,2.5vw,32px);
    }

    .post-card {
      border: 1px solid #f0f0f0;
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.25s;
      cursor: pointer;
      background: #ffffff;
      position: relative;
      text-decoration: none;
      display: block;
    }

    .post-card:hover {
      border-color: #e0e0e0;
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(0,0,0,0.06);
    }

    .post-image {
      height: clamp(160px,18vw,220px);
      position: relative;
      overflow: hidden;
    }

    .post-content { padding: clamp(20px,2vw,28px); }

    .post-meta {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
    }

    .post-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(20px,2vw,28px);
      line-height: 1.1;
      letter-spacing: 0.5px;
      color: #0a0a0a;
      margin-bottom: 10px;
    }

    .post-excerpt {
      font-size: clamp(13px,1vw,14px);
      color: #888;
      line-height: 1.7;
      margin-bottom: 20px;
    }

    .post-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #f5f5f5;
      padding-top: 14px;
    }

    .post-readtime { font-size: 11px; color: #bbb; letter-spacing: 0.5px; }
    .post-arrow { font-size: 16px; color: #D42B2B; transition: transform 0.2s; }
    .post-card:hover .post-arrow { transform: translateX(4px); }

    @media (max-width: 1024px) { .posts-grid { grid-template-columns: repeat(2,1fr); } }
    @media (max-width: 768px) {
      .featured-card { grid-template-columns: 1fr; }
      .featured-image { min-height: 240px; }
      .blog-header-inner { flex-direction: column; align-items: flex-start; }
    }
    @media (max-width: 540px) { .posts-grid { grid-template-columns: 1fr; } }
  `}),(0,a.jsxs)(`div`,{className:`blog-wrap`,children:[(0,a.jsx)(`div`,{className:`absolute top-6 left-6 md:top-8 md:left-12 z-10`,children:(0,a.jsx)(`a`,{href:`/`,className:`btn-back font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white border border-white/10 px-4 py-2 hover:bg-white/5 transition-all`,children:`← Voltar ao Início`})}),(0,a.jsx)(`div`,{className:`blog-header`,children:(0,a.jsxs)(`div`,{className:`blog-header-inner`,children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{className:`blog-eyebrow`,children:`// Conteúdo OTD`}),(0,a.jsxs)(`h1`,{className:`blog-title`,children:[`BLOG`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`em`,{children:`Estrutura.`})]})]}),(0,a.jsx)(`p`,{className:`blog-tagline`,children:`Conteúdo direto ao ponto sobre os 4 pilares que fazem empresas serem encontradas, escolhidas e lembradas.`})]})}),(0,a.jsxs)(`div`,{className:`blog-body`,children:[n&&(0,a.jsxs)(`div`,{className:`featured-card`,onClick:()=>d(n.slug),style:{cursor:`pointer`},children:[(0,a.jsx)(`div`,{className:`featured-image`,children:(0,a.jsx)(l,{src:n.imagem,alt:n.title})}),(0,a.jsxs)(`div`,{className:`featured-content`,children:[(0,a.jsxs)(`div`,{className:`featured-meta`,children:[(0,a.jsx)(`span`,{className:`cat-tag`,style:{background:`${c[n.category]}15`,color:c[n.category]},children:n.category}),(0,a.jsx)(`span`,{className:`post-date`,children:n.date}),(0,a.jsxs)(`span`,{className:`read-time`,children:[n.readTime,` de leitura`]})]}),(0,a.jsx)(`h2`,{className:`featured-title`,children:n.title}),(0,a.jsx)(`p`,{className:`featured-excerpt`,children:n.excerpt}),(0,a.jsx)(`span`,{className:`btn-read`,children:`LER ARTIGO →`})]})]}),(0,a.jsx)(`div`,{className:`filter-bar`,children:o.map(n=>(0,a.jsx)(`button`,{className:`filter-btn${e===n?` active`:``}`,onClick:()=>t(n),children:n},n))}),(0,a.jsx)(`div`,{className:`posts-grid`,children:u.map(e=>(0,a.jsxs)(`div`,{className:`post-card`,onClick:()=>d(e.slug),children:[(0,a.jsx)(`div`,{className:`post-image`,children:(0,a.jsx)(l,{src:e.imagem,alt:e.title})}),(0,a.jsxs)(`div`,{className:`post-content`,children:[(0,a.jsxs)(`div`,{className:`post-meta`,children:[(0,a.jsx)(`span`,{className:`cat-tag`,style:{background:`${c[e.category]}12`,color:c[e.category],fontSize:9},children:e.category}),(0,a.jsx)(`span`,{className:`post-date`,children:e.date})]}),(0,a.jsx)(`h3`,{className:`post-title`,children:e.title}),(0,a.jsx)(`p`,{className:`post-excerpt`,children:e.excerpt}),(0,a.jsxs)(`div`,{className:`post-footer`,children:[(0,a.jsxs)(`span`,{className:`post-readtime`,children:[e.readTime,` de leitura`]}),(0,a.jsx)(`span`,{className:`post-arrow`,children:`→`})]})]})]},e.id))})]})]})]})}export{u as default};