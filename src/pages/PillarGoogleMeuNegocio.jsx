import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PillarGoogleMeuNegocio() {
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
      q: "Preciso ter um endereço físico aberto ao público para cadastrar no Google Meu Negócio?",
      a: "Não necessariamente. Empresas prestadoras de serviço (como consultorias, agências ou assistência técnica) que atendem o cliente no domicílio ou escritório podem cadastrar o perfil configurando uma Área de Cobertura e ocultando o endereço físico residencial das buscas públicas, respeitando plenamente as diretrizes do Google."
    },
    {
      q: "Por que minha empresa não aparece entre os 3 primeiros (Local Pack) mesmo sendo verificada?",
      a: "A verificação é apenas o pré-requisito de existência. O ranqueamento no Local Pack depende de três pilares algorítmicos: Proximidade (raio geográfico da busca), Relevância (categoria semântica exata e otimização da descrição) e Proeminência (autoridade local gerada pelo volume, nota média e constância de avaliações, além de citações NAP na internet)."
    },
    {
      q: "Posso colocar palavras-chave no nome da empresa no Google para subir mais rápido?",
      a: "Não é recomendado se não fizer parte da sua razão social ou marca registrada. O Google possui algoritmos anti-spam rigorosos e concorrentes podem denunciar perfis com 'stuffing' de palavras-chave no título, resultando em suspensão imediata e perda de todas as avaliações acumuladas."
    },
    {
      q: "Qual é o tempo médio para recuperar um perfil suspenso pelo Google?",
      a: "O processo de contestação e verificação manual de documentação oficial (CNPJ, contas de consumo do imóvel ou contrato social) junto ao suporte do Google leva em média de 3 a 10 dias úteis quando o processo técnico é montado sem inconsistências."
    },
    {
      q: "Como integrar a estratégia de Google Meu Negócio com o site institucional da empresa?",
      a: "O site institucional funciona como o validador de autoridade semântica do perfil. Incorporamos o mapa georreferenciado, estruturamos os dados da empresa via Schema JSON-LD LocalBusiness e garantimos consistência absoluta de NAP (Nome, Endereço e Telefone) entre o rodapé do site e o perfil do Google."
    }
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "SEO Local & Google Meu Negócio: Domínio no Google Maps (Guia Prático B2B)",
      "description": "O manual técnico definitivo para estruturar o NAP semântico, conquistar avaliações 5 estrelas em escala e posicionar sua empresa entre os 3 primeiros resultados do Google Maps (Local Pack).",
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
      "mainEntityOfPage": "https://onethank.com.br/guia/google-meu-negocio"
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
          "name": "Google Meu Negócio & SEO Local",
          "item": "https://onethank.com.br/guia/google-meu-negocio"
        }
      ]
    }
  ];

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,600;1,600&display=swap');
    
    .pillar-gmn-wrap *, .pillar-gmn-wrap *::before, .pillar-gmn-wrap *::after {
      box-sizing: border-box; margin: 0; padding: 0;
    }

    .pillar-gmn-wrap {
      background: #050505;
      min-height: 100vh;
      font-family: 'DM Sans', sans-serif;
      color: #ffffff;
      padding-top: 100px;
    }

    /* HERO */
    .gmn-hero {
      padding: 80px 0 60px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      background: linear-gradient(180deg, rgba(224,4,11,0.04) 0%, rgba(5,5,5,0) 100%);
    }

    .gmn-hero-inner {
      max-width: 880px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .gmn-breadcrumb {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
      font-size: 12px;
      color: #888;
      margin-bottom: 24px;
    }
    .gmn-breadcrumb a {
      color: #aaa;
      text-decoration: none;
      transition: color 0.2s;
    }
    .gmn-breadcrumb a:hover {
      color: #fff;
    }
    .gmn-breadcrumb-sep {
      color: #555;
    }

    .gmn-tag {
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

    .gmn-h1 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(40px, 5.5vw, 70px);
      line-height: 1.05;
      letter-spacing: 1px;
      color: #ffffff;
      margin-bottom: 24px;
    }

    .gmn-lead {
      font-size: clamp(17px, 1.4vw, 21px);
      line-height: 1.7;
      color: #c5c5c5;
      margin-bottom: 36px;
    }

    .gmn-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding-top: 24px;
      border-top: 1px solid rgba(255,255,255,0.08);
      font-size: 13px;
      color: #888;
    }
    .gmn-meta span strong {
      color: #fff;
    }

    /* CONTAINER PRINCIPAL */
    .gmn-container {
      max-width: 880px;
      margin: 0 auto;
      padding: 64px 24px 100px;
    }

    /* SUMÁRIO INTERATIVO */
    .gmn-toc {
      background: #0c0c0c;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px;
      padding: 28px 32px;
      margin-bottom: 64px;
    }
    .gmn-toc-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 22px;
      letter-spacing: 1px;
      color: #e0040b;
      margin-bottom: 16px;
    }
    .gmn-toc-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .gmn-toc-list li a {
      color: #d0d0d0;
      text-decoration: none;
      font-size: 15px;
      transition: color 0.2s;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .gmn-toc-list li a:hover {
      color: #e0040b;
    }

    /* SEÇÕES DE CONTEÚDO */
    .gmn-section {
      margin-bottom: 64px;
    }

    .gmn-section h2 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px, 3.5vw, 44px);
      letter-spacing: 0.8px;
      color: #ffffff;
      margin-bottom: 20px;
      line-height: 1.15;
    }

    .gmn-section h3 {
      font-size: 20px;
      font-weight: 700;
      color: #ffffff;
      margin: 28px 0 14px;
    }

    .gmn-section p {
      font-size: 16px;
      line-height: 1.85;
      color: #b0b0b0;
      margin-bottom: 20px;
    }

    /* CALLOUT BOX */
    .gmn-callout {
      background: rgba(224,4,11,0.05);
      border-left: 4px solid #e0040b;
      padding: 24px 28px;
      border-radius: 0 12px 12px 0;
      margin: 32px 0;
    }
    .gmn-callout-title {
      font-size: 13px;
      font-weight: 700;
      color: #e0040b;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .gmn-callout p {
      color: #ffffff;
      font-size: 16px;
      margin-bottom: 0;
    }

    /* HUB DE SATÉLITES CONECTADOS */
    .gmn-hub-section {
      background: #0d0d0d;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px;
      padding: 40px;
      margin: 64px 0;
    }
    .gmn-hub-header {
      margin-bottom: 24px;
    }
    .gmn-hub-eyebrow {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #e0040b;
    }
    .gmn-hub-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 32px;
      letter-spacing: 1px;
      color: #ffffff;
      margin-top: 8px;
    }
    .gmn-spokes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
    }
    .gmn-spoke-card {
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
    .gmn-spoke-card:hover {
      border-color: #e0040b;
    }
    .gmn-spoke-tag {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #e0040b;
      margin-bottom: 10px;
    }
    .gmn-spoke-h4 {
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
      line-height: 1.4;
      margin-bottom: 14px;
    }
    .gmn-spoke-link {
      font-size: 13px;
      font-weight: 600;
      color: #e0040b;
    }

    /* FAQ ACORDEÃO */
    .gmn-faq-section {
      margin: 64px 0;
      padding-top: 48px;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    .gmn-faq-item {
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .gmn-faq-q {
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
    .gmn-faq-q:hover {
      color: #e0040b;
    }
    .gmn-faq-icon {
      font-size: 22px;
      color: #e0040b;
    }
    .gmn-faq-a {
      padding-bottom: 22px;
      font-size: 15px;
      line-height: 1.8;
      color: #a0a0a0;
    }

    /* CTA FINAL */
    .gmn-cta {
      background: linear-gradient(135deg, rgba(224,4,11,0.15) 0%, rgba(10,10,10,0.9) 100%);
      border: 1px solid rgba(224,4,11,0.4);
      border-radius: 20px;
      padding: 56px 40px;
      text-align: center;
      margin-top: 80px;
    }
    .gmn-cta h2 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(32px, 4vw, 48px);
      letter-spacing: 1px;
      color: #ffffff;
      margin-bottom: 16px;
    }
    .gmn-cta p {
      font-size: 17px;
      color: #cccccc;
      max-width: 600px;
      margin: 0 auto 32px;
    }
    .gmn-cta-buttons {
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
        <title>SEO Local & Google Meu Negócio: Domínio no Google Maps | Guia Prático OTD</title>
        <meta name="description" content="Manual técnico e prático de SEO Local e Google Meu Negócio para posicionar sua empresa entre os 3 primeiros do Local Pack no Google Maps em 2026." />
        <link rel="canonical" href="https://onethank.com.br/guia/google-meu-negocio/" />
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

      <div className="pillar-gmn-wrap">
        {/* HERO */}
        <section className="gmn-hero">
          <div className="gmn-hero-inner">
            <nav className="gmn-breadcrumb" aria-label="Breadcrumb">
              <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('/'); }}>Home</a>
              <span className="gmn-breadcrumb-sep">&gt;</span>
              <a href="/guia" onClick={(e) => { e.preventDefault(); navigateTo('/guia'); }}>Guias Práticos</a>
              <span className="gmn-breadcrumb-sep">&gt;</span>
              <span>Google Meu Negócio & SEO Local</span>
            </nav>

            <span className="gmn-tag">Guia Técnico · Pilar 01</span>
            <h1 className="gmn-h1">SEO Local & Google Meu Negócio: Domínio no Google Maps (Guia Prático B2B)</h1>
            <p className="gmn-lead">
              Neste manual prático da One Thank Digital, você vai entender como funciona a arquitetura semântica do Google Maps, como construir autoridade georreferenciada e como transformar buscas locais de alta intenção em ligações, pedidos de rota e propostas comerciais em 2026.
            </p>

            <div className="gmn-meta">
              <span>Leitura: <strong>18 minutos</strong></span>
              <span>Nível: <strong>Intermediário / Executivo</strong></span>
              <span>Atualização: <strong>Julho/2026</strong></span>
            </div>
          </div>
        </section>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="gmn-container">
          
          {/* SUMÁRIO INTERATIVO */}
          <nav className="gmn-toc">
            <div className="gmn-toc-title">// Sumário Executivo do Guia</div>
            <ul className="gmn-toc-list">
              <li><a href="#capitulo-1">1. O Local Pack vs Website: A Geografia da Intenção de Compra</a></li>
              <li><a href="#capitulo-2">2. NAP Semântico: Como Consolidar Nome, Endereço e Telefone na Web</a></li>
              <li><a href="#capitulo-3">3. O Algoritmo Local 2026: Proximidade, Relevância e Proeminência</a></li>
              <li><a href="#capitulo-4">4. Máquina de Avaliações 5 Estrelas via WhatsApp (Pós-Venda Ativo)</a></li>
              <li><a href="#capitulo-5">5. Erros Técnicos Fatais que Causam Suspensão ou Sumiço do Perfil</a></li>
            </ul>
          </nav>

          {/* CAPÍTULO 1 */}
          <section id="capitulo-1" className="gmn-section">
            <h2>1. O Local Pack vs Website: A Geografia da Intenção de Compra</h2>
            <p>
              Quando um decisor comercial ou cliente consumidor pesquisa por termos transacionais com intenção geolocalizada — como <em>"escritório de advocacia empresarial em Santo André"</em> ou <em>"clínica de estética avançada perto de mim"</em> —, o primeiro bloco visual exibido pelo Google na página de resultados (SERP) não é uma listagem de sites orgânicos. É o chamado <strong>Local Pack (3-Pack do Google Maps)</strong>.
            </p>
            <p>
              Estar entre os 3 primeiros perfis do mapa garante até <strong>44% de todos os cliques orgânicos da página</strong>. Para negócios de serviços, clínicas, consultorias e empresas B2B regionais, dominar esse bloco visual representa o menor Custo de Aquisição de Clientes (CAC) de todo o marketing digital.
            </p>
            <div className="gmn-callout">
              <div className="gmn-callout-title">Regra de Ouro da OTD</div>
              <p>O Google Meu Negócio atua na captura de demanda urgente geolocalizada; o Website Institucional atua na conversão e validação da autoridade da marca. Ambos precisam estar sincronizados semântica e tecnicamente.</p>
            </div>
          </section>

          {/* CAPÍTULO 2 */}
          <section id="capitulo-2" className="gmn-section">
            <h2>2. NAP Semântico: Como Consolidar Nome, Endereço e Telefone na Web</h2>
            <p>
              A sigla <strong>NAP</strong> (Name, Address, Phone Number) representa a espinha dorsal do SEO Local. O algoritmo de indexação do Google valida a legitimidade de uma empresa cruzando as informações do perfil com as citações desse mesmo endereço na internet.
            </p>
            <h3>Padronização Estrita de Citações</h3>
            <p>
              Se no seu Google Meu Negócio consta <em>"Rua Monte Casseros, 281 - Centro, Santo André - SP"</em>, mas no rodapé do seu site ou em diretórios comerciais consta <em>"R. M. Casseros, nº 281"</em> ou com um telefone antigo, o Google interpreta divergências semânticas como sinal de insegurança e reduz a pontuação de confiança do perfil.
            </p>
          </section>

          {/* CAPÍTULO 3 */}
          <section id="capitulo-3" className="gmn-section">
            <h2>3. O Algoritmo Local 2026: Proximidade, Relevância e Proeminência</h2>
            <p>
              Diferente do SEO para páginas tradicionais, o ranqueamento no Google Maps é regido por três pesos algorítmicos distintos:
            </p>
            <p>
              <strong>1. Proximidade Geográfica:</strong> A distância física entre o usuário que pesquisa e o endereço verificado da empresa. Embora não possamos alterar onde o cliente está, podemos ampliar o raio semântico de alcance citando bairros vizinhos e áreas industriais atendidas nas descrições de serviços.<br/><br/>
              <strong>2. Relevância Categórica:</strong> A correspondência entre a busca do cliente e a Categoria Principal do seu perfil. Escolher a categoria primária exata (ex.: <em>Consultor de Marketing Digital</em> em vez de apenas <em>Agência de Publicidade</em>) é o fator técnico isolado de maior impacto.<br/><br/>
              <strong>3. Proeminência (Autoridade Local):</strong> Medida pela quantidade, qualidade e cadência constante de avaliações, menções na imprensa local e backlinks que apontam para o domínio institucional da empresa.
            </p>
          </section>

          {/* CAPÍTULO 4 */}
          <section id="capitulo-4" className="gmn-section">
            <h2>4. Máquina de Avaliações 5 Estrelas via WhatsApp (Pós-Venda Ativo)</h2>
            <p>
              A maioria das empresas espera que o cliente avalie espontaneamente. O resultado disso são poucas avaliações por ano ou avaliações apenas de clientes insatisfeitos. Em nossa metodologia, automatizamos o pedido de avaliação no momento de maior encantamento do cliente.
            </p>
            <p>
              Através da integração de CRM com WhatsApp, enviamos uma mensagem curta e humanizada 24 horas após a entrega do serviço ou reunião de onboarding, contendo o link direto para avaliação de 5 estrelas no Google. Essa cadência recorrente sinaliza ao algoritmo que a empresa é ativa, próspera e confiável.
            </p>
          </section>

          {/* CAPÍTULO 5 */}
          <section id="capitulo-5" className="gmn-section">
            <h2>5. Erros Técnicos Fatais que Causam Suspensão ou Sumiço do Perfil</h2>
            <p>
              O Google endureceu drasticamente as verificações de segurança em 2026. Os erros que mais causam suspensões imediatas de perfis comerciais são:
            </p>
            <p>
              • <strong>Keyword Stuffing no Título:</strong> Adicionar palavras-chave comerciais ao nome da empresa (ex.: <em>"One Thank Digital - Agência de Marketing e Sites em Santo André"</em> em vez de apenas <em>"One Thank Digital"</em>).<br/>
              • <strong>Endereços Virtuais ou Caixas Postais:</strong> Tentar cadastrar endereços de coworking rotativo sem locação de sala comercial fixa.<br/>
              • <strong>Edições em Massa Consecutivas:</strong> Alterar nome, endereço, telefone e categoria principal no mesmo dia dispara gatilhos antifraude no sistema do Google.
            </p>
          </section>

          {/* HUB DE SATÉLITES CONECTADOS */}
          <section className="gmn-hub-section">
            <div className="gmn-hub-header">
              <span className="gmn-hub-eyebrow">Ecossistema Hub-and-Spoke</span>
              <h2 className="gmn-hub-title">Aprofunde seu Conhecimento com Nossos Artigos Satélites</h2>
            </div>
            <div className="gmn-spokes-grid">
              <a
                href="/insights/empresa-nao-aparece-google-maps"
                className="gmn-spoke-card"
                onClick={(e) => { e.preventDefault(); navigateTo('/insights/empresa-nao-aparece-google-maps'); }}
              >
                <div>
                  <div className="gmn-spoke-tag">Diagnóstico Rápido</div>
                  <div className="gmn-spoke-h4">Por que sua empresa não aparece no Google Maps — e como resolver</div>
                </div>
                <span className="gmn-spoke-link">Ler artigo satélite →</span>
              </a>

              <a
                href="/insights/google-meu-negocio-guia-completo-2026"
                className="gmn-spoke-card"
                onClick={(e) => { e.preventDefault(); navigateTo('/insights/google-meu-negocio-guia-completo-2026'); }}
              >
                <div>
                  <div className="gmn-spoke-tag">Guia de Bolso</div>
                  <div className="gmn-spoke-h4">Google Meu Negócio: o guia completo para pequenas empresas em 2026</div>
                </div>
                <span className="gmn-spoke-link">Ler artigo satélite →</span>
              </a>

              <a
                href="/insights/concorrente-aparece-antes-no-google"
                className="gmn-spoke-card"
                onClick={(e) => { e.preventDefault(); navigateTo('/insights/concorrente-aparece-antes-no-google'); }}
              >
                <div>
                  <div className="gmn-spoke-tag">Análise Competitiva</div>
                  <div className="gmn-spoke-h4">Como seu concorrente aparece antes de você no Google</div>
                </div>
                <span className="gmn-spoke-link">Ler artigo satélite →</span>
              </a>
            </div>
          </section>

          {/* FAQ ACORDEÃO */}
          <section className="gmn-faq-section">
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: '#fff', marginBottom: 24 }}>
              Perguntas Frequentes sobre SEO Local
            </h2>
            <div>
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div className="gmn-faq-item" key={idx}>
                    <div
                      className="gmn-faq-q"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                    >
                      <span>{faq.q}</span>
                      <span className="gmn-faq-icon">{isOpen ? '−' : '+'}</span>
                    </div>
                    <div className="gmn-faq-a" style={{ display: isOpen ? 'block' : 'block' }}>
                      {faq.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA FINAL */}
          <section className="gmn-cta">
            <h2>Pronto para Dominar o Top 3 do Google Maps na sua Região?</h2>
            <p>
              Nossa equipe de engenharia digital realiza o diagnóstico e a otimização completa do seu Google Meu Negócio, integrando SEO Local com o seu site institucional.
            </p>
            <div className="gmn-cta-buttons">
              <a
                href="/diagnostico"
                className="btn-red"
                onClick={(e) => { e.preventDefault(); navigateTo('/diagnostico'); }}
              >
                Fazer Diagnóstico Gratuito →
              </a>
              <a
                href="/servicos/google-meu-negocio"
                className="btn-outline"
                onClick={(e) => { e.preventDefault(); navigateTo('/servicos/google-meu-negocio'); }}
              >
                Ver Serviço de SEO Local
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
