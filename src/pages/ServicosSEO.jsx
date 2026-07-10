import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ServicosSEO() {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "Preciso parar de pagar anúncio para continuar aparecendo no Google?",
      a: "Sim. Tráfego pago some quando você para de investir. SEO orgânico é o oposto: você investe por 3 a 6 meses e continua aparecendo por anos sem pagar por cada clique. Para empresas B2B com ciclo de venda longo, o ROI do SEO é muito superior ao longo prazo."
    },
    {
      q: "SEO funciona para pequenas empresas no ABC ou só para grandes marcas?",
      a: "Funciona melhor para pequenas empresas justamente porque a concorrência local é baixa. Um escritório contábil ou de advocacia que publicar conteúdo otimizado hoje pode dominar o topo do Google em Santo André em 3 a 6 meses."
    },
    {
      q: "Quanto tempo leva para ver resultados de SEO?",
      a: "Os primeiros resultados aparecem entre 60 e 90 dias. Resultados consistentes e escaláveis chegam entre 4 e 6 meses de trabalho contínuo. Para keywords locais no ABC Paulista com baixa concorrência, esse prazo pode ser menor."
    },
    {
      q: "O que é o Google AI Overview e como aparecer nele?",
      a: "O AI Overview é o bloco de resposta gerado por IA que aparece no topo das buscas do Google antes dos resultados orgânicos. Para aparecer nele, seu conteúdo precisa responder perguntas reais do cliente de forma direta, com estrutura semântica correta e autoridade de domínio construída."
    },
    {
      q: "SEO e tráfego pago podem funcionar juntos?",
      a: "Sim, e é a combinação mais inteligente. O tráfego pago gera resultado imediato enquanto o SEO é construído. Quando o orgânico matura, você reduz o investimento em anúncio sem perder visibilidade. É a transição de dependência para autonomia digital."
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
      `}</style>

      <Navbar
        onOpenQuiz={() => { window.location.href = '/diagnostico'; }}
        onOpenPilares={() => { window.location.href = '/pilares'; }}
        onOpenHistoria={() => { window.location.href = '/historia'; }}
      />

      <div className="lp-wrap">
        <Helmet>
          <title>SEO e Tráfego Orgânico B2B no ABC | One Thank Digital</title>
          <meta name="description" content="Rankeamento orgânico no Google e AI Overview para escritórios contábeis, clínicas e empresas B2B em Santo André. Sem depender de anúncio pago. Resultados duradouros." />
          <meta property="og:title" content="SEO Orgânico para Empresas B2B no ABC | One Thank Digital" />
          <meta property="og:description" content="Apareça no Google e no AI Overview sem pagar por clique. SEO local para empresas B2B em Santo André e ABC Paulista." />
          <meta property="og:url" content="https://onethank.com.br/servicos/seo-trafego-organico" />
          <link rel="canonical" href="https://onethank.com.br/servicos/seo-trafego-organico/" />
          <script type="application/ld+json">
            {JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": FAQS.map(faq => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                  }
                }))
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "SEO e Tráfego Orgânico B2B",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "One Thank Digital",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Santo André",
                    "addressRegion": "SP"
                  }
                },
                "areaServed": [
                  { "@type": "City", "name": "Santo André" },
                  { "@type": "City", "name": "São Bernardo do Campo" },
                  { "@type": "City", "name": "São Caetano do Sul" }
                ],
                "offers": {
                  "@type": "Offer",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "priceType": "https://schema.org/MinimumBasePrice"
                  },
                  "availability": "https://schema.org/InStock"
                }
              }
            ])}
          </script>
        </Helmet>

        {/* HEADER */}
        <section className="lp-header">
          <div className="lp-container">
            <div className="lp-label">// CONSULTORIA EM SEO E POSICIONAMENTO ORGÂNICO</div>
            <h1 className="lp-h1">SEO E TRÁFEGO ORGÂNICO PARA EMPRESAS B2B NO ABC PAULISTA</h1>
            <p className="lp-intro">
              A One Thank Digital estrutura o rankeamento orgânico de escritórios contábeis, clínicas e empresas B2B em Santo André e ABC Paulista para aparecer no topo do Google e do AI Overview — sem depender de anúncio pago. Investimento único com resultado que cresce ao longo do tempo.
            </p>
          </div>
        </section>

        {/* DOR */}
        <section className="lp-dor-section">
          <div className="lp-container">
            <h2 className="lp-section-title">A DOR DE DEPENDER APENAS DE TRÁFEGO PAGO.</h2>
            <div className="lp-dor-list">
              <div className="lp-dor-item">
                <div className="lp-dor-number">01</div>
                <h3 className="lp-dor-item-title">REFÉM DE ANÚNCIOS</h3>
                <div className="lp-dor-text">Você investe em anúncio todo mês e some do Google no momento que para de pagar.</div>
              </div>
              <div className="lp-dor-item">
                <div className="lp-dor-number">02</div>
                <h3 className="lp-dor-item-title">INVISIBILIDADE DIGITAL</h3>
                <div className="lp-dor-text">Seu site está no ar mas não aparece em nenhuma busca relevante — os clientes que te procuram não te encontram.</div>
              </div>
              <div className="lp-dor-item">
                <div className="lp-dor-number">03</div>
                <h3 className="lp-dor-item-title">ZERO VENDAS PASSIVAS</h3>
                <div className="lp-dor-text">Você não sabe quais palavras seu cliente digita no Google antes de contratar o serviço que você oferece.</div>
              </div>
            </div>
          </div>
        </section>

        {/* SHOWCASE B2B */}
        <section className="lp-showcase-section">
          <div className="lp-container">
            <div className="lp-showcase-grid reverse">
              <div className="lp-showcase-image-wrapper">
                <img src="/servico-seo.png" alt="SEO Orgânico OTD" />
              </div>
              <div className="lp-showcase-content">
                <h2 className="lp-showcase-content-title">A SUA CASA PRÓPRIA <span>VS ALUGUEL.</span></h2>
                <div className="lp-showcase-content-text">
                  Tráfego pago é aluguel: no dia que você para de pagar, sua empresa simplesmente desaparece do mapa e o fluxo de vendas seca.<br /><br />
                  SEO Orgânico é construir o seu terreno próprio na internet. Uma empresa blindada constrói tráfego orgânico para dominar as buscas de longo prazo, reduzindo o custo por lead e nunca mais virando refém das taxas abusivas de anúncios.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUÇÃO */}
        <section className="lp-solucao-section">
          <div className="lp-container">
            <h2 className="lp-section-title">COMO ESTRUTURAMOS SEU SEO ORGÂNICO.</h2>
            <div className="lp-solucao-grid">
              <div className="lp-solucao-card">
                <div className="lp-solucao-ghost">01</div>
                <div className="lp-solucao-title">PESQUISA DE KEYWORDS E MAPEAMENTO</div>
                <div className="lp-solucao-desc">Identificamos as palavras exatas que seu cliente digita antes de contratar — especialmente as de baixa concorrência e alto valor no ABC Paulista — e estruturamos todo o conteúdo em torno delas.</div>
              </div>
              <div className="lp-solucao-card">
                <div className="lp-solucao-ghost">02</div>
                <div className="lp-solucao-title">SEO ON-PAGE E TÉCNICO</div>
                <div className="lp-solucao-desc">Otimizamos cada página com H1/H2/H3 semânticos, meta tags, Schema.org, velocidade e estrutura de links internos para aparecer no Google Search e no AI Overview.</div>
              </div>
              <div className="lp-solucao-card">
                <div className="lp-solucao-ghost">03</div>
                <div className="lp-solucao-title">TOPIC CLUSTERS E AUTORIDADE DE NICHO</div>
                <div className="lp-solucao-desc">Criamos clusters de conteúdo em torno dos seus nichos (contábil, advocacia, clínicas) para construir autoridade temática e ser citado como fonte pelo Google AI.</div>
              </div>
            </div>

            <p className="lp-internal-link">
              O SEO orgânico é maximizado com um <a href="/servicos/criacao-de-sites/">site técnico</a> e <a href="/servicos/automacao-digital/">automação de atendimento</a> que converte os leads que chegam.
            </p>
            <div style={{ textAlign: 'center', marginTop: '64px' }}>
              <a href="/diagnostico/" className="lp-btn">AVALIAR MINHA ESTRUTURA →</a>
            </div>
          </div>
        </section>



        {/* ROI */}
        <section className="lp-roi-section">
          <div className="lp-container">
            <h2 className="lp-section-title">O RETORNO DO RANKING ORGÂNICO EM NÚMEROS.</h2>
            <div className="lp-roi-grid">
              <div>
                <div className="lp-roi-number">[0 R$]</div>
                <div className="lp-roi-title">CUSTO POR LEAD (CPL)</div>
                <div className="lp-roi-desc">Cada visitante orgânico conquistado diminui o peso da sua verba de anúncios.</div>
              </div>
              <div>
                <div className="lp-roi-number">[6M]</div>
                <div className="lp-roi-title">VISÃO DE LONGO PRAZO</div>
                <div className="lp-roi-desc">O trabalho de hoje empilha resultados cumulativos e gera uma barreira de entrada para concorrentes em 6 meses.</div>
              </div>
              <div>
                <div className="lp-roi-number">[10X]</div>
                <div className="lp-roi-title">RETORNO CONTÍNUO</div>
                <div className="lp-roi-desc">Um artigo rankeado no topo do Google traz clientes de forma sustentável durante anos.</div>
              </div>
            </div>
          </div>
        </section>

        {/* INVESTIMENTO */}
        <section className="lp-invest-section">
          <div className="lp-container">
            <div className="lp-invest-box">
              <h2 className="lp-invest-title">TRANSPARÊNCIA DE INVESTIMENTO</h2>
              <div className="lp-invest-text">
                Nós não vendemos pacotes de links ou promessas irreais. O investimento em SEO Orgânico é uma parceria estratégica desenhada após auditar o seu nicho no ABC Paulista. O objetivo é reduzir sua dependência de tráfego pago, substituindo um custo recorrente infinito por um ativo de autoridade que se valoriza com o tempo.
              </div>
            </div>

            <div className="lp-other-services">
              <div className="lp-other-services-title">AVALIE OUTRAS ESTRUTURAS:</div>
              <div className="lp-other-services-list">
                <a href="/servicos/google-meu-negocio/" className="lp-other-services-btn">GOOGLE MEU NEGÓCIO</a>
                <a href="/servicos/criacao-de-sites/" className="lp-other-services-btn">CRIAÇÃO DE SITES</a>
                <a href="/servicos/automacao-digital/" className="lp-other-services-btn">AUTOMAÇÃO E CRM</a>
              </div>
            </div>
          </div>
        </section>

        {/* CASES CTA */}
        <section className="lp-cases-section">
          <div className="lp-container">
            <h2 className="lp-cases-title">NÃO ACREDITE APENAS NA <span>NOSSA PALAVRA.</span></h2>
            <div className="lp-cases-desc">Veja o padrão técnico dos projetos, sites e posicionamentos que já entregamos para escritórios, clínicas e empresas do ABC Paulista.</div>
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
              {FAQS.map((faq, index) => (
                <div
                  key={index}
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
            <div className="lp-cta-text">
              PRONTO PARA ESTRUTURAR <br /><em>O SEU SEO E TRÁFEGO ORGÂNICO</em>
            </div>
            <a href="/diagnostico/" className="lp-btn">AVALIAR MINHA ESTRUTURA →</a>
          </div>
        </section>
      </div>

      <Footer
        onOpenQuiz={() => { window.location.href = '/diagnostico'; }}
        onOpenPilares={() => { window.location.href = '/pilares'; }}
        onOpenHistoria={() => { window.location.href = '/historia'; }}
      />
    </>
  );
}
