import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PillarSEOTrafego() {
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
      q: "Quanto tempo demora para uma estratégia de SEO orgânico dar resultados?",
      a: "O SEO corporativo constrói um patrimônio digital duradouro. Os primeiros sinais de indexação técnica ocorrem nas primeiras 4 a 6 semanas, enquanto o crescimento consistente de tráfego orgânico e geração de oportunidades qualificadas atinge maturidade entre 3 a 6 meses de trabalho contínuo."
    },
    {
      q: "Devo pausar meus anúncios pagos (Google Ads) enquanto invisto em SEO?",
      a: "Não. A estratégia ideal é a sinergia entre canais: o tráfego pago garante o fluxo de caixa imediato e testa termos de conversão, enquanto o SEO orgânico constrói autoridade de longo prazo para reduzir o Custo de Aquisição de Clientes (CAC) médio da empresa."
    },
    {
      q: "O que são palavras-chave de fundo de funil no mercado B2B?",
      a: "São termos que expressam intenção direta de contratação ou compra corporativa — por exemplo, 'empresa de automação comercial em SP' ou 'consultoria tributária para indústrias', em oposição a termos amplos e informacionais como 'o que é imposto'."
    },
    {
      q: "Como as Inteligências Artificiais (ChatGPT, Google AI Overview) afetam o SEO?",
      a: "As IAs priorizam fontes estruturadas que oferecem respostas claras, dados técnicos verificáveis e marcação semântica AEO. Empresas que publicam guias aprofundados e dados originais passam a ser citadas diretamente nas respostas resumidas da IA."
    },
    {
      q: "O que é SEO Técnico e por que ele vem antes da produção de conteúdo?",
      a: "SEO Técnico é a otimização da infraestrutura do site: velocidade de carregamento, sitemaps limpos, canonical tags, segurança SSL e arquitetura mobile-first. Sem essa fundação técnica, mesmo o melhor artigo do mundo não consegue ser rastreado e ranqueado pelo Google."
    }
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Posicionamento Orgânico no Google e Estratégias de SEO B2B (Guia Prático)",
      "description": "O manual técnico de SEO B2B para conquistar palavras-chave transacionais, construir autoridade semântica e integrar tráfego orgânico a campanhas pagas.",
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
      "mainEntityOfPage": "https://onethank.com.br/guia/seo-trafego-organico"
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
          "name": "SEO & Tráfego Orgânico",
          "item": "https://onethank.com.br/guia/seo-trafego-organico"
        }
      ]
    }
  ];

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,600;1,600&display=swap');
    
    .pillar-seo-wrap *, .pillar-seo-wrap *::before, .pillar-seo-wrap *::after {
      box-sizing: border-box; margin: 0; padding: 0;
    }

    .pillar-seo-wrap {
      background: #050505;
      min-height: 100vh;
      font-family: 'DM Sans', sans-serif;
      color: #ffffff;
      padding-top: 100px;
    }

    /* HERO */
    .seo-hero {
      padding: 80px 0 60px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      background: linear-gradient(180deg, rgba(224,4,11,0.04) 0%, rgba(5,5,5,0) 100%);
    }

    .seo-hero-inner {
      max-width: 880px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .seo-breadcrumb {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
      font-size: 12px;
      color: #888;
      margin-bottom: 24px;
    }
    .seo-breadcrumb a {
      color: #aaa;
      text-decoration: none;
      transition: color 0.2s;
    }
    .seo-breadcrumb a:hover {
      color: #fff;
    }
    .seo-breadcrumb-sep {
      color: #555;
    }

    .seo-tag {
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

    .seo-h1 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(40px, 5.5vw, 70px);
      line-height: 1.05;
      letter-spacing: 1px;
      color: #ffffff;
      margin-bottom: 24px;
    }

    .seo-lead {
      font-size: clamp(17px, 1.4vw, 21px);
      line-height: 1.7;
      color: #c5c5c5;
      margin-bottom: 36px;
    }

    .seo-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding-top: 24px;
      border-top: 1px solid rgba(255,255,255,0.08);
      font-size: 13px;
      color: #888;
    }
    .seo-meta span strong {
      color: #fff;
    }

    /* CONTAINER PRINCIPAL */
    .seo-container {
      max-width: 880px;
      margin: 0 auto;
      padding: 64px 24px 100px;
    }

    /* SUMÁRIO INTERATIVO */
    .seo-toc {
      background: #0c0c0c;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px;
      padding: 28px 32px;
      margin-bottom: 64px;
    }
    .seo-toc-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 22px;
      letter-spacing: 1px;
      color: #e0040b;
      margin-bottom: 16px;
    }
    .seo-toc-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .seo-toc-list li a {
      color: #d0d0d0;
      text-decoration: none;
      font-size: 15px;
      transition: color 0.2s;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .seo-toc-list li a:hover {
      color: #e0040b;
    }

    /* SEÇÕES DE CONTEÚDO */
    .seo-section {
      margin-bottom: 64px;
    }

    .seo-section h2 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px, 3.5vw, 44px);
      letter-spacing: 0.8px;
      color: #ffffff;
      margin-bottom: 20px;
      line-height: 1.15;
    }

    .seo-section h3 {
      font-size: 20px;
      font-weight: 700;
      color: #ffffff;
      margin: 28px 0 14px;
    }

    .seo-section p {
      font-size: 16px;
      line-height: 1.85;
      color: #b0b0b0;
      margin-bottom: 20px;
    }

    /* CALLOUT BOX */
    .seo-callout {
      background: rgba(224,4,11,0.05);
      border-left: 4px solid #e0040b;
      padding: 24px 28px;
      border-radius: 0 12px 12px 0;
      margin: 32px 0;
    }
    .seo-callout-title {
      font-size: 13px;
      font-weight: 700;
      color: #e0040b;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .seo-callout p {
      color: #ffffff;
      font-size: 16px;
      margin-bottom: 0;
    }

    /* HUB DE SATÉLITES CONECTADOS */
    .seo-hub-section {
      background: #0d0d0d;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px;
      padding: 40px;
      margin: 64px 0;
    }
    .seo-hub-header {
      margin-bottom: 24px;
    }
    .seo-hub-eyebrow {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #e0040b;
    }
    .seo-hub-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 32px;
      letter-spacing: 1px;
      color: #ffffff;
      margin-top: 8px;
    }
    .seo-spokes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
    }
    .seo-spoke-card {
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
    .seo-spoke-card:hover {
      border-color: #e0040b;
    }
    .seo-spoke-tag {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #e0040b;
      margin-bottom: 10px;
    }
    .seo-spoke-h4 {
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
      line-height: 1.4;
      margin-bottom: 14px;
    }
    .seo-spoke-link {
      font-size: 13px;
      font-weight: 600;
      color: #e0040b;
    }

    /* FAQ ACORDEÃO */
    .seo-faq-section {
      margin: 64px 0;
      padding-top: 48px;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    .seo-faq-item {
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .seo-faq-q {
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
    .seo-faq-q:hover {
      color: #e0040b;
    }
    .seo-faq-icon {
      font-size: 22px;
      color: #e0040b;
    }
    .seo-faq-a {
      padding-bottom: 22px;
      font-size: 15px;
      line-height: 1.8;
      color: #a0a0a0;
    }

    /* CTA FINAL */
    .seo-cta {
      background: linear-gradient(135deg, rgba(224,4,11,0.15) 0%, rgba(10,10,10,0.9) 100%);
      border: 1px solid rgba(224,4,11,0.4);
      border-radius: 20px;
      padding: 56px 40px;
      text-align: center;
      margin-top: 80px;
    }
    .seo-cta h2 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(32px, 4vw, 48px);
      letter-spacing: 1px;
      color: #ffffff;
      margin-bottom: 16px;
    }
    .seo-cta p {
      font-size: 17px;
      color: #cccccc;
      max-width: 600px;
      margin: 0 auto 32px;
    }
    .seo-cta-buttons {
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
        <title>Posicionamento Orgânico no Google e Estratégias de SEO B2B | Guia Prático OTD</title>
        <meta name="description" content="Guia prático definitivo de SEO B2B, palavras-chave de fundo de funil, autoridade semântica e sinergia inteligente entre tráfego orgânico e mídia paga." />
        <link rel="canonical" href="https://onethank.com.br/guia/seo-trafego-organico/" />
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

      <div className="pillar-seo-wrap">
        {/* HERO */}
        <section className="seo-hero">
          <div className="seo-hero-inner">
            <nav className="seo-breadcrumb" aria-label="Breadcrumb">
              <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('/'); }}>Home</a>
              <span className="seo-breadcrumb-sep">&gt;</span>
              <a href="/guia" onClick={(e) => { e.preventDefault(); navigateTo('/guia'); }}>Guias Práticos</a>
              <span className="seo-breadcrumb-sep">&gt;</span>
              <span>SEO & Tráfego Orgânico</span>
            </nav>

            <span className="seo-tag">Guia Técnico · Pilar 03</span>
            <h1 className="seo-h1">Posicionamento Orgânico no Google e Estratégias de SEO B2B (Guia Prático)</h1>
            <p className="seo-lead">
              Aprenda a estruturar a autoridade semântica da sua marca, conquistar as palavras-chave transacionais de maior valor comercial do seu segmento e transformar o Google em um canal previsível de aquisição B2B em 2026.
            </p>

            <div className="seo-meta">
              <span>Leitura: <strong>21 minutos</strong></span>
              <span>Nível: <strong>Avançado / Executivo</strong></span>
              <span>Atualização: <strong>Julho/2026</strong></span>
            </div>
          </div>
        </section>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="seo-container">
          
          {/* SUMÁRIO INTERATIVO */}
          <nav className="seo-toc">
            <div className="seo-toc-title">// Sumário Executivo do Guia</div>
            <ul className="seo-toc-list">
              <li><a href="#capitulo-1">1. O Fim do SEO Amador: Como Ranquear no Google na Era das IAs</a></li>
              <li><a href="#capitulo-2">2. Palavras-Chave de Fundo de Funil: Mapeando Decisores B2B</a></li>
              <li><a href="#capitulo-3">3. SEO Técnico vs Conteúdo Semântico: O Tripé da Autoridade</a></li>
              <li><a href="#capitulo-4">4. Sinergia Estratégica: Integrando Tráfego Orgânico com Mídia Paga</a></li>
              <li><a href="#capitulo-5">5. Métricas de Valor: Do CAC Orgânico ao Patrimônio Digital</a></li>
            </ul>
          </nav>

          {/* CAPÍTULO 1 */}
          <section id="capitulo-1" className="seo-section">
            <h2>1. O Fim do SEO Amador: Como Ranquear no Google na Era das IAs</h2>
            <p>
              O SEO moderno deixou de ser uma tática mecânica de repetição de palavras-chave para se tornar uma disciplina de arquitetura semântica e autoridade de domínio. Com o avanço dos algoritmos baseados em processamento de linguagem natural (BERT e Gemini), o Google não busca apenas quem fala mais vezes uma palavra, mas quem oferece a resposta mais técnica, confiável e bem estruturada.
            </p>
            <p>
              Para empresas B2B, isso significa que produzir dezenas de artigos rasos gerados por IA sem edição técnica é perda de tempo. O algoritmo recompensa profundidade técnica, dados concretos e experiência demonstrada no mundo real (o princípio E-E-A-T do Google).
            </p>
            <div className="seo-callout">
              <div className="seo-callout-title">Regra de Ouro da OTD</div>
              <p>O objetivo de uma estratégia de SEO corporativo não é gerar tráfego de curiosos, mas dominar as 15 a 30 intenções de busca transacionais que representam decisões de compra de alto valor no seu setor.</p>
            </div>
          </section>

          {/* CAPÍTULO 2 */}
          <section id="capitulo-2" className="seo-section">
            <h2>2. Palavras-Chave de Fundo de Funil: Mapeando Decisores B2B</h2>
            <p>
              Em campanhas B2B, o volume bruto de buscas é uma métrica secundária. Uma palavra-chave como <em>"marketing digital"</em> tem 100.000 buscas mensais, mas converte quase zero contratos empresariais. Já termos de cauda longa transacional como <em>"agência de SEO para indústrias em São Paulo"</em> têm apenas 90 buscas mensais, mas com taxas de conversão acima de 12%.
            </p>
            <p>
              Nossa metodologia prioriza o mapeamento reverso: identificamos as dores exatas de compra do cliente empresarial e criamos Pillar Pages e Satélites dedicados a capturar essa demanda no momento exato de decisão.
            </p>
          </section>

          {/* CAPÍTULO 3 */}
          <section id="capitulo-3" className="seo-section">
            <h2>3. SEO Técnico vs Conteúdo Semântico: O Tripé da Autoridade</h2>
            <p>
              Uma estratégia de ranqueamento sólida repousa sobre três pilares inegociáveis:
            </p>
            <p>
              <strong>1. Infraestrutura Técnica:</strong> Core Web Vitals impecáveis, carregamento instantâneo, sitemap XML atualizado e indexação sem erros no Google Search Console.<br/><br/>
              <strong>2. Clusterização Semântica (Hub-and-Spoke):</strong> Em vez de posts isolados, estruturamos uma Página Pilar central de autoridade interligada por links contextuais a artigos satélites de nicho.<br/><br/>
              <strong>3. Autoridade Externa (Digital PR & Mentions):</strong> Conquista de menções institucionais e citações em portais relevantes do seu segmento econômico.
            </p>
          </section>

          {/* CAPÍTULO 4 */}
          <section id="capitulo-4" className="seo-section">
            <h2>4. Sinergia Estratégica: Integrando Tráfego Orgânico com Mídia Paga</h2>
            <p>
              O maior erro estratégico das empresas é tratar SEO orgânico e Google Ads como concorrentes. Na verdade, eles são complementares:
            </p>
            <p>
              • O <strong>Tráfego Pago</strong> traz fluxo de caixa rápido, valida ofertas e testa quais palavras-chave geram os clientes de maior ticket médio.<br/>
              • O <strong>SEO Orgânico</strong> consolida essas palavras-chave no patrimônio digital da empresa, reduzindo gradativamente a dependência exclusiva de anúncios pagos e abaixando o CAC geral da operação.
            </p>
          </section>

          {/* CAPÍTULO 5 */}
          <section id="capitulo-5" className="seo-section">
            <h2>5. Métricas de Valor: Do CAC Orgânico ao Patrimônio Digital</h2>
            <p>
              Avaliamos o sucesso de uma estratégia de SEO por indicadores de negócio, não por métricas de vaidade. Acompanhamos mensalmente:
            </p>
            <p>
              • Crescimento de tráfego orgânico qualificado para páginas comerciais.<br/>
              • Volume de leads corporativos capturados sem custo de clique.<br/>
              • Economia acumulada em mídia paga (o quanto você pagaria em anúncios para comprar o tráfego que hoje recebe de graça no Google).
            </p>
          </section>

          {/* HUB DE SATÉLITES CONECTADOS */}
          <section className="seo-hub-section">
            <div className="seo-hub-header">
              <span className="seo-hub-eyebrow">Ecossistema Hub-and-Spoke</span>
              <h2 className="seo-hub-title">Aprofunde seu Conhecimento com Nossos Artigos Satélites</h2>
            </div>
            <div className="seo-spokes-grid">
              <a
                href="/blog/seo-organico-vs-trafego-pago"
                className="seo-spoke-card"
                onClick={(e) => { e.preventDefault(); navigateTo('/blog/seo-organico-vs-trafego-pago'); }}
              >
                <div>
                  <div className="seo-spoke-tag">Estratégia de Investimento</div>
                  <div className="seo-spoke-h4">SEO orgânico vs tráfego pago: qual escolher primeiro para sua empresa</div>
                </div>
                <span className="seo-spoke-link">Ler artigo satélite →</span>
              </a>

              <a
                href="/blog/concorrente-aparece-antes-no-google"
                className="seo-spoke-card"
                onClick={(e) => { e.preventDefault(); navigateTo('/blog/concorrente-aparece-antes-no-google'); }}
              >
                <div>
                  <div className="seo-spoke-tag">Inteligência Competitiva</div>
                  <div className="seo-spoke-h4">Como seu concorrente aparece antes de você no Google — e como virar o jogo</div>
                </div>
                <span className="seo-spoke-link">Ler artigo satélite →</span>
              </a>

              <a
                href="/blog/presenca-digital-estruturada"
                className="seo-spoke-card"
                onClick={(e) => { e.preventDefault(); navigateTo('/blog/presenca-digital-estruturada'); }}
              >
                <div>
                  <div className="seo-spoke-tag">Filosofia OTD</div>
                  <div className="seo-spoke-h4">Presença digital estruturada: o que isso significa na prática corporativa</div>
                </div>
                <span className="seo-spoke-link">Ler artigo satélite →</span>
              </a>
            </div>
          </section>

          {/* FAQ ACORDEÃO */}
          <section className="seo-faq-section">
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: '#fff', marginBottom: 24 }}>
              Perguntas Frequentes sobre SEO Orgânico
            </h2>
            <div>
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div className="seo-faq-item" key={idx}>
                    <div
                      className="seo-faq-q"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                    >
                      <span>{faq.q}</span>
                      <span className="seo-faq-icon">{isOpen ? '−' : '+'}</span>
                    </div>
                    <div className="seo-faq-a" style={{ display: isOpen ? 'block' : 'block' }}>
                      {faq.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA FINAL */}
          <section className="seo-cta">
            <h2>Sua Empresa Está Visível Quando os Clientes Mais Importantes Buscam?</h2>
            <p>
              Agende um diagnóstico estratégico com nossa diretoria técnica e receba uma análise detalhada das palavras-chave transacionais que seus concorrentes estão dominando hoje.
            </p>
            <div className="seo-cta-buttons">
              <a
                href="/diagnostico"
                className="btn-red"
                onClick={(e) => { e.preventDefault(); navigateTo('/diagnostico'); }}
              >
                Fazer Diagnóstico Gratuito →
              </a>
              <a
                href="/servicos/seo-trafego-organico"
                className="btn-outline"
                onClick={(e) => { e.preventDefault(); navigateTo('/servicos/seo-trafego-organico'); }}
              >
                Conhecer Serviço de SEO
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
