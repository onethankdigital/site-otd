import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GuiaListagem() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const GUIDES = [
    {
      id: 1,
      tag: "Automação",
      title: "Automação Digital para Empresas B2B: O Guia Completo",
      excerpt: "Aprenda a estruturar seu processo comercial de ponta a ponta: do WhatsApp conectado ao CRM via API oficial até a triagem inteligente com IA.",
      imagem: "/hero-automacao-digital.webp",
      readTime: "20 min de leitura",
      path: "/guia/automacao-digital",
      status: "ativo"
    },
    {
      id: 2,
      tag: "Google Meu Negócio",
      title: "SEO Local & Google Meu Negócio: Domínio no Google Maps (Guia Prático)",
      excerpt: "Como estruturar o NAP semântico, gerenciar avaliações 5 estrelas em escala e posicionar sua empresa entre os 3 primeiros do Local Pack.",
      imagem: "/Blog/artigo-02-gmn-guia-completo.jpg",
      readTime: "18 min de leitura",
      path: "/guia/google-meu-negocio",
      status: "ativo"
    },
    {
      id: 3,
      tag: "Websites Premium",
      title: "Arquitetura Web & Criação de Sites B2B de Alta Conversão",
      excerpt: "O manual definitivo de Core Web Vitals, estrutura AEO para Inteligências Artificiais e design executivo para captação corporativa.",
      imagem: "/Blog/artigo-03-site-vs-instagram.jpg",
      readTime: "19 min de leitura",
      path: "/guia/desenvolvimento-web",
      status: "ativo"
    },
    {
      id: 4,
      tag: "SEO & Tráfego",
      title: "Posicionamento Orgânico no Google e Estratégias de SEO B2B",
      excerpt: "Como construir autoridade semântica, conquistar palavras-chave de fundo de funil e integrar tráfego orgânico com campanhas pagas.",
      imagem: "/Blog/artigo-05-seo-vs-trafego-pago.jpg",
      readTime: "21 min de leitura",
      path: "/guia/seo-trafego-organico",
      status: "ativo"
    }
  ];

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@1,700&display=swap');
    
    .guia-wrap *, .guia-wrap *::before, .guia-wrap *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .guia-wrap {
      background: #050505;
      min-height: 100vh;
      font-family: 'DM Sans', sans-serif;
      color: #ffffff;
      padding-top: 100px;
    }

    .guia-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 24px 100px;
    }

    /* HEADER */
    .guia-header {
      max-width: 700px;
      margin-bottom: 64px;
    }

    .guia-eyebrow {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: #e0040b;
      display: inline-block;
      margin-bottom: 16px;
    }

    .guia-h1 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(40px, 6vw, 76px);
      line-height: 1.0;
      letter-spacing: 1px;
      color: #ffffff;
      margin-bottom: 20px;
    }

    .guia-desc {
      font-size: clamp(16px, 1.2vw, 19px);
      line-height: 1.6;
      color: #b0b0b0;
    }

    /* GRID */
    .guia-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 32px;
    }

    @media (max-width: 480px) {
      .guia-grid {
        grid-template-columns: 1fr;
      }
    }

    .guia-card {
      background: #0d0d0d;
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .guia-card:hover {
      transform: translateY(-6px);
      border-color: rgba(224, 4, 11, 0.3);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(224, 4, 11, 0.05);
    }

    .guia-card-img-box {
      width: 100%;
      aspect-ratio: 16/9;
      overflow: hidden;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .guia-card-img-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .guia-card:hover .guia-card-img-box img {
      transform: scale(1.05);
    }

    .guia-card-body {
      padding: 32px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .guia-card-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }

    .guia-card-tag {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #e0040b;
      background: rgba(224, 4, 11, 0.08);
      padding: 4px 10px;
      border-radius: 4px;
      border: 1px solid rgba(224, 4, 11, 0.15);
    }

    .guia-card-time {
      font-size: 13px;
      color: #777;
    }

    .guia-card-title {
      font-family: 'DM Sans', sans-serif;
      font-size: 22px;
      font-weight: 700;
      line-height: 1.3;
      color: #ffffff;
      margin-bottom: 16px;
    }

    .guia-card-title a {
      color: #ffffff;
      text-decoration: none;
      transition: color 0.2s;
    }

    .guia-card-title a:hover {
      color: #e0040b;
    }

    .guia-card-excerpt {
      font-size: 15px;
      line-height: 1.6;
      color: #a0a0a0;
      margin-bottom: 24px;
      flex-grow: 1;
    }

    .guia-card-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #ffffff;
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.5px;
      transition: color 0.2s;
      width: fit-content;
      margin-top: auto;
    }

    .guia-card-btn:hover {
      color: #e0040b;
    }

    .guia-card-btn-arrow {
      transition: transform 0.2s ease;
    }

    .guia-card-btn:hover .guia-card-btn-arrow {
      transform: translateX(4px);
    }
  `;

  return (
    <>
      <Helmet>
        <title>Guias Práticos e Técnicos B2B | One Thank Digital</title>
        <meta name="description" content="Aprenda a estruturar a presença digital e processos comerciais da sua empresa com nossos guias práticos de marketing, SEO, GMN e automação." />
        <link rel="canonical" href="https://onethank.com.br/guia/" />
        
        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://onethank.com.br/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Guias",
                "item": "https://onethank.com.br/guia/"
              }
            ]
          })}
        </script>
      </Helmet>

      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <Navbar
        onOpenQuiz={() => navigateTo('/diagnostico')}
        onOpenPilares={() => navigateTo('/pilares')}
        onOpenHistoria={() => navigateTo('/historia')}
      />

      <div className="guia-wrap">
        <main className="guia-container">
          <header className="guia-header">
            <span className="guia-eyebrow">Materiais Educativos</span>
            <h1 className="guia-h1">Guias Práticos B2B</h1>
            <p className="guia-desc">
              Manuais técnicos aprofundados para estruturar a presença digital, otimizar SEO local, desenhar sites de alta conversão e automatizar processos comerciais.
            </p>
          </header>

          <div className="guia-grid">
            {GUIDES.map((guide) => (
              <article key={guide.id} className="guia-card">
                <div className="guia-card-img-box">
                  <img src={guide.imagem} alt={guide.title} />
                </div>
                <div className="guia-card-body">
                  <div className="guia-card-meta">
                    <span className="guia-card-tag">{guide.tag}</span>
                    <span className="guia-card-time">{guide.readTime}</span>
                  </div>
                  <h2 className="guia-card-title">
                    <a
                      href={guide.path}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo(guide.path);
                      }}
                    >
                      {guide.title}
                    </a>
                  </h2>
                  <p className="guia-card-excerpt">{guide.excerpt}</p>
                  <a
                    href={guide.path}
                    className="guia-card-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(guide.path);
                    }}
                  >
                    {guide.status === 'ativo' ? 'Ler guia completo' : 'Conhecer serviço do pilar'} <span className="guia-card-btn-arrow">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>

      <Footer
        onOpenQuiz={() => navigateTo('/diagnostico')}
        onOpenPilares={() => navigateTo('/pilares')}
        onOpenHistoria={() => navigateTo('/historia')}
      />
    </>
  );
}
