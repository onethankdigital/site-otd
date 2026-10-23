import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { segmentos, cidades, linkPublicado } from '../data/landings';

// Página de segmento ou de cidade (dados em src/data/landings.js), no mesmo visual das páginas de serviço
export default function LandingPage({ landing }) {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [landing.path]);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const url = `https://onethank.com.br${landing.path}`;
  const vizinhas = (landing.tipo === 'segmento' ? segmentos : cidades).filter(l => l.path !== landing.path);
  const grupo = landing.tipo === 'segmento' ? 'Segmentos' : 'Atendimento';

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": landing.servicoNome,
      "url": url,
      "description": landing.descricao,
      "provider": { "@id": "https://onethank.com.br/#organization" },
      "areaServed": landing.cidade
        ? { "@type": "City", "name": landing.cidade }
        : ["Santo André", "São Bernardo do Campo", "São Caetano do Sul", "Diadema", "Mauá"].map(name => ({ "@type": "City", "name": name })),
      ...(landing.publico ? { "audience": { "@type": "BusinessAudience", "audienceType": landing.publico } } : {})
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": landing.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onethank.com.br/" },
        { "@type": "ListItem", "position": 2, "name": `${grupo}: ${landing.nomeCurto}`, "item": url }
      ]
    }
  ];

  return (
    <>
      <style>{`
        .lp-wrap {
          background: #000000;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          color: #ffffff;
          padding-top: 120px;
        }

        .lp-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* HEADER */
        .lp-header {
          padding: 80px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .lp-label {
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #E0040B;
          font-weight: 700;
          margin-bottom: 24px;
        }
        .lp-h1 {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-size: clamp(48px, 6vw, 84px);
          line-height: 1;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 32px;
          max-width: 900px;
        }
        .lp-intro {
          font-family: 'DM Sans', monospace;
          font-size: clamp(14px, 1.1vw, 16px);
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          max-width: 600px;
        }

        /* DOR */
        .lp-dor-section {
          padding: 100px 0;
          background: #000000;
        }
        .lp-section-title {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-size: clamp(36px, 4vw, 56px);
          line-height: 1;
          letter-spacing: 1px;
          margin-bottom: 64px;
          color: #ffffff;
        }
        .lp-dor-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        @media (max-width: 900px) {
          .lp-dor-list {
            grid-template-columns: 1fr;
          }
        }
        .lp-dor-item {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
          justify-content: flex-start;
          padding: 40px 32px;
          background: linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(20,0,0,0.95) 100%), url('/hero-bg.webp') center/cover;
          border: 1px solid rgba(224,4,11,0.2);
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .lp-dor-number {
          display: none; /* Números removidos pois confundiam com a solução */
        }
        .lp-dor-item-title {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-size: clamp(24px, 2.5vw, 32px);
          color: #E0040B;
          line-height: 1.1;
          letter-spacing: 1px;
        }
        .lp-dor-text {
          font-family: 'DM Sans', sans-serif;
          font-style: normal;
          font-size: clamp(15px, 1.1vw, 16px);
          line-height: 1.6;
          color: rgba(255,255,255,0.8);
          font-weight: 400;
        }

        /* SHOWCASE */
        .lp-showcase-section {
          padding: 100px 0;
          background: #000000;
          position: relative;
          overflow: hidden;
        }
        .lp-showcase-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .lp-showcase-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .lp-showcase-grid.reverse {
            display: flex;
            flex-direction: column-reverse;
          }
        }
        .lp-showcase-content-title {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-size: clamp(36px, 4vw, 54px);
          color: #ffffff;
          margin-bottom: 24px;
          line-height: 1;
        }
        .lp-showcase-content-title span {
          color: #E0040B;
        }
        .lp-showcase-content-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
        }
        .lp-showcase-image-wrapper {
          position: relative;
          border-radius: 12px;
          padding: 8px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          box-shadow: 0 0 80px rgba(224,4,11,0.15);
        }
        .lp-showcase-image-wrapper img {
          width: 100%;
          border-radius: 8px;
          display: block;
        }

        /* SOLUCAO */
        .lp-solucao-section {
          padding: 100px 0;
          background: #0a0a0a;
        }
        .lp-solucao-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .lp-solucao-card {
          position: relative;
          padding: 40px 32px;
          background: rgba(255,255,255,0.02);
          border-radius: 8px;
          border: 1px solid rgba(0, 200, 83, 0.4);
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow: hidden;
        }
        .lp-solucao-ghost {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-size: 120px;
          line-height: 0.8;
          color: rgba(255,255,255,0.03);
          position: absolute;
          top: 10px;
          right: 10px;
          pointer-events: none;
        }
        .lp-solucao-title {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-size: clamp(24px, 2.5vw, 32px);
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: 1px;
          margin-top: 80px;
          margin-bottom: 0;
          position: relative;
          z-index: 1;
        }
        .lp-solucao-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(15px, 1.1vw, 16px);
          color: rgba(255,255,255,0.8);
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }
        
        .lp-internal-link {
          margin-top: 56px;
          font-family: 'DM Sans', monospace;
          font-size: 15px;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          text-align: center;
        }
        .lp-internal-link a {
          color: #e02020;
          text-decoration: none;
        }
        .lp-internal-link a:hover {
          text-decoration: underline;
        }

        /* ROI */
        .lp-roi-section {
          padding: 100px 0;
          background: #000000;
        }
        .lp-roi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .lp-roi-number {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-size: clamp(64px, 8vw, 100px);
          color: #E0040B;
          line-height: 1;
          margin-bottom: 16px;
        }
        .lp-roi-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #ffffff;
          margin-bottom: 16px;
        }
        .lp-roi-desc {
          font-family: 'DM Sans', monospace;
          font-size: 14px;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
        }

        /* INVESTIMENTO */
        .lp-invest-section {
          padding: 80px 0;
          background: #000000;
        }
        .lp-invest-box {
          border: 1px solid rgba(224, 4, 11, 0.3);
          background: rgba(224, 4, 11, 0.02);
          padding: 56px;
          border-radius: 8px;
          text-align: center;
        }
        .lp-invest-title {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-size: clamp(32px, 4vw, 48px);
          letter-spacing: 1px;
          margin-bottom: 24px;
          color: #ffffff;
        }
        .lp-invest-text {
          font-family: 'DM Sans', monospace;
          font-size: clamp(15px, 1.5vw, 18px);
          color: rgba(255,255,255,0.7);
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
        }

        /* OUTROS SERVIÇOS PILLS */
        .lp-other-services {
          margin-top: 120px;
          padding-top: 60px;
          border-top: 1px solid rgba(255,255,255,0.05);
          text-align: center;
        }
        .lp-other-services-title {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-size: 24px;
          color: rgba(255,255,255,0.3);
          margin-bottom: 32px;
          letter-spacing: 1px;
        }
        .lp-other-services-list {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
        }
        .lp-other-services-btn {
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.7);
          padding: 12px 24px;
          border-radius: 40px;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          letter-spacing: 1px;
          transition: all 0.3s;
        }
        .lp-other-services-btn:hover {
          border-color: #E0040B;
          color: #ffffff;
          background: rgba(224,4,11,0.1);
        }

        /* CASES CTA */
        .lp-cases-section {
          padding: 80px 0;
          background: #050505;
          border-top: 1px solid rgba(224,4,11,0.2);
          border-bottom: 1px solid rgba(224,4,11,0.2);
          text-align: center;
        }
        .lp-cases-title {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-size: clamp(32px, 4vw, 48px);
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: 1px;
        }
        .lp-cases-title span {
          color: #E0040B;
        }
        .lp-cases-desc {
          font-family: 'DM Sans', monospace;
          font-size: 15px;
          color: rgba(255,255,255,0.6);
          max-width: 600px;
          margin: 0 auto 32px auto;
          line-height: 1.6;
        }

        /* FAQ */
        .lp-faq-section {
          padding: 100px 0;
          background: #000000;
        }
        .lp-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: flex-start;
        }
        @media (max-width: 900px) {
          .lp-faq-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        .lp-faq-title {
          font-family: var(--font-drama, 'Playfair Display', serif);
          font-style: italic;
          font-size: clamp(32px, 4vw, 48px);
          margin-bottom: 48px;
        }
        .lp-faq-title em {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-style: normal;
          color: #E0040B;
        }
        .lp-faq-item {
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .lp-faq-q {
          padding: 32px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-size: clamp(16px, 1.5vw, 20px);
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .lp-faq-q:hover {
          color: #E0040B;
        }
        .lp-faq-icon {
          font-size: 24px;
          font-weight: 300;
          color: #E0040B;
          transition: transform 0.3s ease;
        }
        .lp-faq-a {
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s ease;
          font-family: 'DM Sans', monospace;
          color: rgba(255,255,255,0.6);
          font-size: 15px;
          line-height: 1.7;
        }
        .lp-faq-item.active .lp-faq-a {
          max-height: 200px;
          padding-bottom: 32px;
        }
        .lp-faq-item.active .lp-faq-icon {
          transform: rotate(45deg);
        }

        /* CTA */
        .lp-cta-section {
          padding: 100px 0;
          background: #050505;
          text-align: center;
          border-top: 1px solid rgba(224,4,11,0.2);
        }
        .lp-cta-text {
          font-family: var(--font-heading, 'Bebas Neue', sans-serif);
          font-size: clamp(36px, 4vw, 64px);
          margin-bottom: 40px;
        }
        .lp-cta-text em {
          color: #E0040B;
          font-style: normal;
        }
        .lp-btn {
          display: inline-block;
          background: #E0040B;
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 20px 40px;
          border-radius: 4px;
          text-decoration: none;
          transition: background 0.3s, transform 0.3s;
        }
        .lp-btn:hover {
          background: #b80309;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .lp-solucao-grid { grid-template-columns: 1fr; }
          .lp-roi-grid { grid-template-columns: 1fr; }
          .lp-dor-item { flex-direction: column; gap: 12px; }
          .lp-faq-item.active .lp-faq-a { max-height: 400px; }
          .lp-invest-box { padding: 32px 24px; }
        }
        .lp-regras-text a, .lp-showcase-content-text a { color: #E0040B; }
      `}</style>

      <Navbar
        onOpenQuiz={() => { window.location.href = '/diagnostico/'; }}
        onOpenPilares={() => { window.location.href = '/pilares/'; }}
        onOpenHistoria={() => { window.location.href = '/historia/'; }}
      />

      <div className="lp-wrap">
        <Helmet>
          <title>{landing.titulo}</title>
          <meta name="description" content={landing.descricao} />
          <meta property="og:title" content={landing.titulo} />
          <meta property="og:description" content={landing.descricao} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:image" content={`https://onethank.com.br${landing.contexto.imagem}`} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={landing.titulo} />
          <meta property="twitter:description" content={landing.descricao} />
          <link rel="canonical" href={url} />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>

        {/* HEADER */}
        <section className="lp-header">
          <div className="lp-container">
            <div className="lp-label">{landing.label}</div>
            <h1 className="lp-h1">{landing.h1}</h1>
            <p className="lp-intro">{landing.intro}</p>
          </div>
        </section>

        {/* DOR */}
        <section className="lp-dor-section">
          <div className="lp-container">
            <h2 className="lp-section-title">O QUE TRAVA O CRESCIMENTO HOJE.</h2>
            <div className="lp-dor-list">
              {landing.dores.map((dor, i) => (
                <div className="lp-dor-item" key={dor.titulo}>
                  <div className="lp-dor-number">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="lp-dor-item-title">{dor.titulo}</h3>
                  <div className="lp-dor-text">{dor.texto}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTEXTO */}
        <section className="lp-showcase-section">
          <div className="lp-container">
            <div className="lp-showcase-grid reverse">
              <div className="lp-showcase-image-wrapper">
                <img src={landing.contexto.imagem} alt={landing.contexto.alt} loading="lazy" />
              </div>
              <div className="lp-showcase-content">
                <h2 className="lp-showcase-content-title" dangerouslySetInnerHTML={{ __html: landing.contexto.titulo }} />
                <div className="lp-showcase-content-text" dangerouslySetInnerHTML={{ __html: landing.contexto.texto }} />
              </div>
            </div>
          </div>
        </section>

        {/* SOLUÇÃO */}
        <section className="lp-solucao-section">
          <div className="lp-container">
            <h2 className="lp-section-title">{landing.solucaoTitulo}</h2>
            <div className="lp-solucao-grid">
              {landing.solucoes.map((s, i) => (
                <div className="lp-solucao-card" key={s.titulo}>
                  <div className="lp-solucao-ghost">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="lp-solucao-title">{s.titulo}</h3>
                  <div className="lp-solucao-desc">{s.texto}</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '64px' }}>
              <a href="/diagnostico/" className="lp-btn">AVALIAR MINHA ESTRUTURA →</a>
            </div>
          </div>
        </section>

        {/* REGRAS DO SETOR / ATENDIMENTO NA CIDADE */}
        <section className="lp-invest-section">
          <div className="lp-container">
            <div className="lp-invest-box">
              <h2 className="lp-invest-title">{landing.regras.titulo}</h2>
              <div className="lp-invest-text lp-regras-text">{landing.regras.texto}</div>
            </div>

            <div className="lp-other-services">
              <div className="lp-other-services-title">APROFUNDE NO TEMA:</div>
              <div className="lp-other-services-list">
                {landing.links.filter(linkPublicado).map(l => (
                  <a key={l.href} href={l.href} className="lp-other-services-btn">{l.texto}</a>
                ))}
              </div>
            </div>

            <div className="lp-other-services">
              <div className="lp-other-services-title">{landing.tipo === 'segmento' ? 'OUTROS SEGMENTOS:' : 'OUTRAS CIDADES DO ABC:'}</div>
              <div className="lp-other-services-list">
                {vizinhas.map(l => (
                  <a key={l.path} href={l.path} className="lp-other-services-btn">{l.nomeCurto.toUpperCase()}</a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CASES CTA */}
        <section className="lp-cases-section">
          <div className="lp-container">
            <h2 className="lp-cases-title">NÃO ACREDITE APENAS NA <span>NOSSA PALAVRA.</span></h2>
            <div className="lp-cases-desc">Veja o padrão técnico dos projetos e posicionamentos que já entregamos para escritórios, clínicas e empresas do ABC Paulista.</div>
            <a href="/cases/" className="lp-btn">VER PORTFÓLIO E CASES REAIS ↗</a>
          </div>
        </section>

        {/* FAQ */}
        <section className="lp-faq-section">
          <div className="lp-container lp-faq-grid">
            <div>
              <div className="lp-label">TIRE SUAS DÚVIDAS</div>
              <h2 className="lp-faq-title">O que você <em>AINDA PERGUNTA.</em></h2>
            </div>
            <div>
              {landing.faqs.map((faq, index) => (
                <div
                  key={faq.q}
                  className={"lp-faq-item " + (activeFaq === index ? "active" : "")}
                >
                  <h3 className="lp-faq-q" onClick={() => toggleFaq(index)}>
                    {faq.q}
                    <span className="lp-faq-icon">+</span>
                  </h3>
                  <div className="lp-faq-a">
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="lp-cta-section">
          <div className="lp-container">
            <div className="lp-cta-text" dangerouslySetInnerHTML={{ __html: landing.ctaTexto }} />
            <a href="/diagnostico/" className="lp-btn">AVALIAR MINHA ESTRUTURA →</a>
          </div>
        </section>
      </div>

      <Footer
        onOpenQuiz={() => { window.location.href = '/diagnostico/'; }}
        onOpenPilares={() => { window.location.href = '/pilares/'; }}
        onOpenHistoria={() => { window.location.href = '/historia/'; }}
      />
    </>
  );
}
