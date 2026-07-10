import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PillarDesenvolvimentoWeb() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const FAQS = [
    {
      q: "Qual a diferença entre um site template simples e um Site Premium B2B?",
      a: "Um site template comum é construído sobre construtores genéricos lentos, sem otimização semântica ou foco em conversão. Um Site Premium B2B é projetado com código limpo de alta performance (React/Vite), arquitetura semântica para indexação imediata no Google e nas IAs (AEO), e UI/UX desenhado estrategicamente para transmitir autoridade corporativa a decisores."
    },
    {
      q: "O que são Core Web Vitals e por que afetam minhas vendas?",
      a: "Core Web Vitals são as métricas oficiais do Google que medem a velocidade real de carregamento (LCP), estabilidade visual (CLS) e tempo de resposta interativa (INP). Sites que demoram mais de 3 segundos para carregar perdem até 53% dos visitantes no mobile e são penalizados nas buscas orgânicas."
    },
    {
      q: "O que significa AEO (Answer Engine Optimization) em sites modernos?",
      a: "AEO é a otimização estruturada para motores de resposta com Inteligência Artificial (como Google AI Overview, ChatGPT e Perplexity). Envolve estruturar o conteúdo com marcação semântica clara, resumos executivos e respostas diretas para que as IAs citem sua empresa como fonte de autoridade no setor."
    },
    {
      q: "Quanto tempo leva para desenvolver um Site Premium B2B na One Thank Digital?",
      a: "Nosso ciclo de engenharia e design leva de 3 a 5 semanas, cobrindo imersão estratégica, arquitetura da informação, redação copywriting focada em conversão, desenvolvimento front-end de alta performance e configuração técnica completa de SEO."
    },
    {
      q: "Meu site precisa ser refeito do zero ou pode apenas ser ajustado?",
      a: "Se o seu site atual carrega lentamente, não possui responsividade móvel perfeita, tem código legado pesado ou design defasado, remendá-lo custa mais caro do que construir uma nova fundação moderna. Realizamos um diagnóstico técnico gratuito para indicar o caminho ideal."
    }
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Arquitetura Web & Criação de Sites B2B de Alta Conversão (Guia Prático)",
      "description": "O manual definitivo de Core Web Vitals, estrutura AEO para Inteligências Artificiais e design executivo para captação corporativa B2B.",
      "author": {
        "@type": "Organization",
        "name": "One Thank Digital",
        "url": "https://onethank.com.br/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "One Thank Digital",
        "logo": {
          "@type": "ImageObject",
          "url": "https://onethank.com.br/logo.svg"
        }
      },
      "datePublished": "2026-07-08",
      "dateModified": "2026-07-08",
      "mainEntityOfPage": "https://onethank.com.br/guia/desenvolvimento-web"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    },
    {
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
          "name": "Guias Práticos",
          "item": "https://onethank.com.br/guia"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Criação de Sites B2B",
          "item": "https://onethank.com.br/guia/desenvolvimento-web"
        }
      ]
    }
  ];

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,600;1,600&display=swap');
    
    .pillar-web-wrap *, .pillar-web-wrap *::before, .pillar-web-wrap *::after {
      box-sizing: border-box; margin: 0; padding: 0;
    }

    .pillar-web-wrap {
      background: #050505;
      min-height: 100vh;
      font-family: 'DM Sans', sans-serif;
      color: #ffffff;
      padding-top: 100px;
    }

    /* HERO */
    .web-hero {
      padding: 80px 0 60px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      background: linear-gradient(180deg, rgba(224,4,11,0.04) 0%, rgba(5,5,5,0) 100%);
    }

    .web-hero-inner {
      max-width: 880px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .web-breadcrumb {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
      font-size: 12px;
      color: #888;
      margin-bottom: 24px;
    }
    .web-breadcrumb a {
      color: #aaa;
      text-decoration: none;
      transition: color 0.2s;
    }
    .web-breadcrumb a:hover {
      color: #fff;
    }
    .web-breadcrumb-sep {
      color: #555;
    }

    .web-tag {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: #e0040b;
      background: rgba(224,4,11,0.08);
      border: 1px solid rgba(224,4,11,0.25);
      padding: 6px 16px;
      border-radius: 100px;
      margin-bottom: 24px;
    }

    .web-h1 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(40px, 5.5vw, 70px);
      line-height: 1.05;
      letter-spacing: 1px;
      color: #ffffff;
      margin-bottom: 24px;
    }

    .web-lead {
      font-size: clamp(17px, 1.4vw, 21px);
      line-height: 1.7;
      color: #c5c5c5;
      margin-bottom: 36px;
    }

    .web-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding-top: 24px;
      border-top: 1px solid rgba(255,255,255,0.08);
      font-size: 13px;
      color: #888;
    }
    .web-meta span strong {
      color: #fff;
    }

    /* CONTAINER PRINCIPAL */
    .web-container {
      max-width: 880px;
      margin: 0 auto;
      padding: 64px 24px 100px;
    }

    /* SUMÁRIO INTERATIVO */
    .web-toc {
      background: #0c0c0c;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px;
      padding: 28px 32px;
      margin-bottom: 64px;
    }
    .web-toc-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 22px;
      letter-spacing: 1px;
      color: #e0040b;
      margin-bottom: 16px;
    }
    .web-toc-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .web-toc-list li a {
      color: #d0d0d0;
      text-decoration: none;
      font-size: 15px;
      transition: color 0.2s;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .web-toc-list li a:hover {
      color: #e0040b;
    }

    /* SEÇÕES DE CONTEÚDO */
    .web-section {
      margin-bottom: 64px;
    }

    .web-section h2 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px, 3.5vw, 44px);
      letter-spacing: 0.8px;
      color: #ffffff;
      margin-bottom: 20px;
      line-height: 1.15;
    }

    .web-section h3 {
      font-size: 20px;
      font-weight: 700;
      color: #ffffff;
      margin: 28px 0 14px;
    }

    .web-section p {
      font-size: 16px;
      line-height: 1.85;
      color: #b0b0b0;
      margin-bottom: 20px;
    }

    /* CALLOUT BOX */
    .web-callout {
      background: rgba(224,4,11,0.05);
      border-left: 4px solid #e0040b;
      padding: 24px 28px;
      border-radius: 0 12px 12px 0;
      margin: 32px 0;
    }
    .web-callout-title {
      font-size: 13px;
      font-weight: 700;
      color: #e0040b;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .web-callout p {
      color: #ffffff;
      font-size: 16px;
      margin-bottom: 0;
    }

    /* HUB DE SATÉLITES CONECTADOS */
    .web-hub-section {
      background: #0d0d0d;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px;
      padding: 40px;
      margin: 64px 0;
    }
    .web-hub-header {
      margin-bottom: 24px;
    }
    .web-hub-eyebrow {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #e0040b;
    }
    .web-hub-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 32px;
      letter-spacing: 1px;
      color: #ffffff;
      margin-top: 8px;
    }
    .web-spokes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
    }
    .web-spoke-card {
      background: #141414;
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: border-color 0.2s;
      text-decoration: none;
    }
    .web-spoke-card:hover {
      border-color: #e0040b;
    }
    .web-spoke-tag {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #e0040b;
      margin-bottom: 10px;
    }
    .web-spoke-h4 {
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
      line-height: 1.4;
      margin-bottom: 14px;
    }
    .web-spoke-link {
      font-size: 13px;
      font-weight: 600;
      color: #e0040b;
    }

    /* FAQ ACORDEÃO */
    .web-faq-section {
      margin: 64px 0;
      padding-top: 48px;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    .web-faq-item {
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .web-faq-q {
      padding: 22px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      font-weight: 600;
      font-size: 17px;
      color: #ffffff;
      gap: 16px;
    }
    .web-faq-q:hover {
      color: #e0040b;
    }
    .web-faq-icon {
      font-size: 22px;
      color: #e0040b;
    }
    .web-faq-a {
      padding-bottom: 22px;
      font-size: 15px;
      line-height: 1.8;
      color: #a0a0a0;
    }

    /* CTA FINAL */
    .web-cta {
      background: linear-gradient(135deg, rgba(224,4,11,0.15) 0%, rgba(10,10,10,0.9) 100%);
      border: 1px solid rgba(224,4,11,0.4);
      border-radius: 20px;
      padding: 56px 40px;
      text-align: center;
      margin-top: 80px;
    }
    .web-cta h2 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(32px, 4vw, 48px);
      letter-spacing: 1px;
      color: #ffffff;
      margin-bottom: 16px;
    }
    .web-cta p {
      font-size: 17px;
      color: #cccccc;
      max-width: 600px;
      margin: 0 auto 32px;
    }
    .web-cta-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
    }
    .btn-red {
      background: #e0040b;
      color: #ffffff;
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 16px 36px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.2s;
    }
    .btn-red:hover {
      background: #b80309;
    }
    .btn-outline {
      background: transparent;
      color: #ffffff;
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 16px 36px;
      border-radius: 8px;
      border: 1px solid rgba(255,255,255,0.3);
      cursor: pointer;
      text-decoration: none;
      transition: border-color 0.2s;
    }
    .btn-outline:hover {
      border-color: #e0040b;
      color: #e0040b;
    }
  `;

  return (
    <>
      <Helmet>
        <title>Arquitetura Web & Criação de Sites B2B de Alta Conversão | Guia Prático OTD</title>
        <meta name="description" content="Manual prático de arquitetura web B2B, Core Web Vitals, AEO (Answer Engine Optimization para IAs) e design executivo para empresas que buscam escalabilidade." />
        <meta property="og:title" content="Arquitetura Web & Criação de Sites B2B | Guia Prático OTD" />
        <meta property="og:description" content="Manual prático de arquitetura web B2B, Core Web Vitals, AEO e design executivo para empresas." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://onethank.com.br/guia/desenvolvimento-web/" />
        <meta property="og:image" content="https://onethank.com.br/hero-desenvolvimento-web.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Arquitetura Web & Criação de Sites B2B | Guia Prático OTD" />
        <meta property="twitter:description" content="Manual prático de arquitetura web B2B, Core Web Vitals, AEO e design executivo para empresas." />
        <meta property="twitter:image" content="https://onethank.com.br/hero-desenvolvimento-web.webp" />
        <link rel="canonical" href="https://onethank.com.br/guia/desenvolvimento-web/" />
        <script type="application/ld+json">
          {JSON.stringify(schemas)}
        </script>
      </Helmet>

      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <Navbar
        onOpenQuiz={() => navigateTo('/diagnostico')}
        onOpenPilares={() => navigateTo('/pilares')}
        onOpenHistoria={() => navigateTo('/historia')}
      />

      <div className="pillar-web-wrap">
        {/* HERO */}
        <section className="web-hero">
          <div className="web-hero-inner">
            <nav className="web-breadcrumb" aria-label="Breadcrumb">
              <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('/'); }}>Home</a>
              <span className="web-breadcrumb-sep">&gt;</span>
              <a href="/guia/" onClick={(e) => { e.preventDefault(); navigateTo('/guia'); }}>Guias Práticos</a>
              <span className="web-breadcrumb-sep">&gt;</span>
              <span>Criação de Sites B2B</span>
            </nav>

            <span className="web-tag">Guia Técnico · Pilar 02</span>
            <h1 className="web-h1">Arquitetura Web & Criação de Sites B2B de Alta Conversão (Guia Prático)</h1>
            <p className="web-lead">
              Descubra por que 90% dos sites institucionais falham em converter decisores corporativos e aprenda a arquitetar um ativo digital proprietário que une Core Web Vitals de ponta, otimização para IAs (AEO) e experiência executiva de alta confiança.
            </p>

            <div className="web-meta">
              <span>Leitura: <strong>19 minutos</strong></span>
              <span>Nível: <strong>Avançado / Executivo</strong></span>
              <span>Atualização: <strong>Julho/2026</strong></span>
            </div>
          </div>
        </section>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="web-container">
          
          {/* SUMÁRIO INTERATIVO */}
          <nav className="web-toc">
            <div className="web-toc-title">// Sumário Executivo do Guia</div>
            <ul className="web-toc-list">
              <li><a href="#capitulo-1">1. Por que Sites Institucionais Comuns Falham em Converter Decisores B2B</a></li>
              <li><a href="#capitulo-2">2. Core Web Vitals 2026: LCP, CLS e INP como Fatores de Lucro</a></li>
              <li><a href="#capitulo-3">3. Arquitetura Semântica & AEO (Answer Engine Optimization para IAs)</a></li>
              <li><a href="#capitulo-4">4. UI/UX Executivo: Hierarquia de Proposta de Valor e Prova Social</a></li>
              <li><a href="#capitulo-5">5. O Checklist Técnico de Segurança e Indexação do Site Premium</a></li>
            </ul>
          </nav>

          {/* CAPÍTULO 1 */}
          <section id="capitulo-1" className="web-section">
            <h2>1. Por que Sites Institucionais Comuns Falham em Converter Decisores B2B</h2>
            <p>
              No mercado corporativo e de serviços B2B, o site institucional não é um mero "panfleto online". Ele é a ferramenta definitiva de validação de credibilidade. Quando um diretor ou empresário recebe uma indicação da sua empresa ou clica em um anúncio de alto valor, a primeira ação dele é abrir o seu site para avaliar a robustez da sua operação.
            </p>
            <p>
              Sites construídos em plataformas lentas, com design genérico ou textos centrados no ego da empresa ("Somos líderes desde 1990") geram atrito cognitivo e rejeição imediata. O decisor moderno busca clareza cirúrgica: <em>o que você resolve, como resolve e por que devo confiar na sua entrega</em>.
            </p>
            <div className="web-callout">
              <div className="web-callout-title">Regra de Ouro da OTD</div>
              <p>O site de uma empresa B2B madura deve carregar em menos de 1.5 segundo e responder às três perguntas críticas do cliente em até 5 segundos de leitura na primeira dobra (Hero section).</p>
            </div>
          </section>

          {/* CAPÍTULO 2 */}
          <section id="capitulo-2" className="web-section">
            <h2>2. Core Web Vitals 2026: LCP, CLS e INP como Fatores de Lucro</h2>
            <p>
              O Google não ranqueia apenas "conteúdo bom". O algoritmo avalia a experiência fisiológica do usuário através dos <strong>Core Web Vitals</strong>. Em 2026, três métricas definem se o seu site é priorizado ou sepultado nas buscas orgânicas:
            </p>
            <p>
              <strong>• LCP (Largest Contentful Paint):</strong> O tempo que o elemento principal da tela leva para carregar. Deve ser inferior a 2.5 segundos (meta OTD: &lt; 1.2s).<br/>
              <strong>• CLS (Cumulative Layout Shift):</strong> A estabilidade visual. Elementos que pulam ou mudam de lugar enquanto a página carrega destroem a nota do site.<br/>
              <strong>• INP (Interaction to Next Paint):</strong> A latência de resposta quando o usuário clica em um botão, menu ou formulário.
            </p>
          </section>

          {/* CAPÍTULO 3 */}
          <section id="capitulo-3" className="web-section">
            <h2>3. Arquitetura Semântica & AEO (Answer Engine Optimization para IAs)</h2>
            <p>
              Com a ascensão do Google AI Overview, do ChatGPT Search e do Perplexity, o tráfego da internet está migrando da busca de links para a busca de respostas diretas. Para que sua empresa seja citada por essas Inteligências Artificiais como autoridade no setor, o site precisa ser estruturado com <strong>AEO (Answer Engine Optimization)</strong>.
            </p>
            <p>
              Isso exige marcação semântica HTML5 estrita (uso correto de <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code> e hierarquia <code>h1-h4</code>) e injeção de dados estruturados JSON-LD no padrão Schema.org (Organization, LocalBusiness, Service, FAQPage), permitindo que os robôs compreendam univocamente o seu portfólio.
            </p>
          </section>

          {/* CAPÍTULO 4 */}
          <section id="capitulo-4" className="web-section">
            <h2>4. UI/UX Executivo: Hierarquia de Proposta de Valor e Prova Social</h2>
            <p>
              Um design corporativo de alta performance combina estética limpa, tipografia de leitura confortável e eliminação de ruídos visuais. Cada seção da página deve conduzir o visitante por uma escada lógica de persuasão:
            </p>
            <p>
              1. <strong>Dobra Principal (Hero):</strong> Proposta de valor clara e botão de ação direta.<br/>
              2. <strong>Aderência de Dor:</strong> Identificação clara dos gargalos que o cliente enfrenta hoje.<br/>
              3. <strong>Metodologia e Entregáveis:</strong> Explicação transparente de como o serviço funciona.<br/>
              4. <strong>Prova Social Real:</strong> Estudos de caso, métricas concretas e depoimentos verificáveis.<br/>
              5. <strong>CTA Final de Baixo Atrito:</strong> Direcionamento rápido para diagnóstico ou conversa no WhatsApp.
            </p>
          </section>

          {/* CAPÍTULO 5 */}
          <section id="capitulo-5" className="web-section">
            <h2>5. O Checklist Técnico de Segurança e Indexação do Site Premium</h2>
            <p>
              Antes do lançamento oficial de qualquer ativo web corporativo, nossa equipe técnica valida um protocolo rigoroso com mais de 30 pontos de controle, incluindo:
            </p>
            <p>
              • Certificação SSL/TLS com redirecionamento canônico estrito 301.<br/>
              • Sitemap XML gerado dinamicamente e submetido ao Google Search Console.<br/>
              • Compressão avançada de imagens em formato WebP/AVIF com lazy loading nativo.<br/>
              • Integração limpa com Google Analytics 4 (GA4) e Pixel sem perda de performance.
            </p>
          </section>

          {/* HUB DE SATÉLITES CONECTADOS */}
          <section className="web-hub-section">
            <div className="web-hub-header">
              <span className="web-hub-eyebrow">Ecossistema Hub-and-Spoke</span>
              <h2 className="web-hub-title">Aprofunde seu Conhecimento com Nossos Artigos Satélites</h2>
            </div>
            <div className="web-spokes-grid">
              <a
                href="/insights/site-ou-instagram-qual-mais-importante/"
                className="web-spoke-card"
                onClick={(e) => { e.preventDefault(); navigateTo('/insights/site-ou-instagram-qual-mais-importante'); }}
              >
                <div>
                  <div className="web-spoke-tag">Estratégia de Canais</div>
                  <div className="web-spoke-h4">Site ou Instagram: qual é o ativo digital mais importante para sua empresa</div>
                </div>
                <span className="web-spoke-link">Ler artigo satélite →</span>
              </a>

              <a
                href="/insights/por-que-site-nao-aparece-google/"
                className="web-spoke-card"
                onClick={(e) => { e.preventDefault(); navigateTo('/insights/por-que-site-nao-aparece-google'); }}
              >
                <div>
                  <div className="web-spoke-tag">Auditoria Técnica</div>
                  <div className="web-spoke-h4">Por que seu site existe mas não aparece no Google</div>
                </div>
                <span className="web-spoke-link">Ler artigo satélite →</span>
              </a>

              <a
                href="/insights/4-pilares-empresa-encontrada-online/"
                className="web-spoke-card"
                onClick={(e) => { e.preventDefault(); navigateTo('/insights/4-pilares-empresa-encontrada-online'); }}
              >
                <div>
                  <div className="web-spoke-tag">Metodologia OTD</div>
                  <div className="web-spoke-h4">Os 4 pilares que toda empresa precisa para ser encontrada online</div>
                </div>
                <span className="web-spoke-link">Ler artigo satélite →</span>
              </a>
            </div>
          </section>

          {/* FAQ ACORDEÃO */}
          <section className="web-faq-section">
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: '#fff', marginBottom: 24 }}>
              Perguntas Frequentes sobre Criação de Sites B2B
            </h2>
            <div>
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div className="web-faq-item" key={idx}>
                    <div
                      className="web-faq-q"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                    >
                      <span>{faq.q}</span>
                      <span className="web-faq-icon">{isOpen ? '−' : '+'}</span>
                    </div>
                    <div className="web-faq-a" style={{ display: isOpen ? 'block' : 'block' }}>
                      {faq.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA FINAL */}
          <section className="web-cta">
            <h2>Sua Empresa Tem um Site que Converte ou Apenas um Cartão Digital?</h2>
            <p>
              Solicite uma avaliação técnica completa com nossos especialistas e descubra como transformar seu site em um motor de geração de negócios B2B.
            </p>
            <div className="web-cta-buttons">
              <a
                href="/diagnostico/"
                className="btn-red"
                onClick={(e) => { e.preventDefault(); navigateTo('/diagnostico'); }}
              >
                Fazer Diagnóstico Gratuito →
              </a>
              <a
                href="/servicos/criacao-de-sites/"
                className="btn-outline"
                onClick={(e) => { e.preventDefault(); navigateTo('/servicos/criacao-de-sites'); }}
              >
                Conhecer Criação de Sites
              </a>
            </div>
          </section>

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
