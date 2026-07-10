import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function InsightAutomacaoComercial() {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const FAQS = [
    {
      q: "Automação comercial é a mesma coisa que automação de PDV?",
      a: "Não. Automação de PDV pertence ao varejo físico: caixa, cupom fiscal e estoque de loja. Automação comercial atua na frente de vendas de empresas de serviços e B2B — captura de leads, registro de origem, resposta imediata e organização do funil. São universos diferentes que compartilham o mesmo nome no Brasil."
    },
    {
      q: "Minha equipe de vendas é pequena. Faz sentido automatizar?",
      a: "Faz — e o impacto costuma ser maior. Em times enxutos, cada hora gasta cadastrando contatos ou respondendo perguntas repetitivas é uma hora a menos negociando. A automação assume a camada mecânica e devolve a equipe pequena ao trabalho que só ela pode fazer: fechar negócios."
    },
    {
      q: "A automação comercial substitui o CRM?",
      a: "Não — ela potencializa o CRM que a empresa já usa. A automação é a camada que alimenta o CRM automaticamente: captura os contatos, registra a origem e cria as negociações sem digitação manual. O CRM continua sendo o painel; a automação é quem o mantém sempre atualizado."
    },
    {
      q: "Quanto tempo leva para ver resultado?",
      a: "O controle operacional é imediato: a partir da ativação, todo contato novo nasce registrado com origem rastreada. Os ganhos de conversão aparecem nas primeiras semanas, conforme a velocidade de resposta e a triagem entram em regime. O diagnóstico técnico define o cronograma exato para cada operação."
    }
  ];

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,600;1,600&display=swap');
    .insight-wrap *, .insight-wrap *::before, .insight-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .insight-wrap {
      background: #080808;
      min-height: 100vh;
      font-family: 'DM Sans', sans-serif;
      color: #ffffff;
      padding-top: 100px;
    }

    /* HERO */
    .insight-hero {
      padding: 60px clamp(24px, 6vw, 96px) 60px;
      position: relative;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      background: linear-gradient(180deg, rgba(212,43,43,0.05) 0%, rgba(8,8,8,0) 100%);
    }

    .insight-hero-inner {
      max-width: 860px;
      margin: 0 auto;
    }

    .insight-breadcrumb {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
      font-size: 13px;
      color: #888;
      margin-bottom: 20px;
      font-family: 'DM Sans', sans-serif;
    }
    .insight-breadcrumb a {
      color: #888;
      text-decoration: none;
      transition: color 0.2s;
    }
    .insight-breadcrumb a:hover {
      color: #ffffff;
    }
    .insight-breadcrumb-sep {
      color: rgba(255, 255, 255, 0.15);
    }
    .insight-breadcrumb-current {
      color: #e0040b;
      font-weight: 500;
    }

    .insight-tag {
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
      text-decoration: none;
      transition: border-color 0.2s;
    }
    .insight-tag:hover {
      border-color: #e0040b;
    }

    .insight-h1 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(36px, 5.5vw, 64px);
      line-height: 1.05;
      letter-spacing: 1px;
      color: #ffffff;
      margin-bottom: 24px;
    }

    .insight-meta {
      font-size: 13px;
      color: #888;
      letter-spacing: 0.5px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 16px;
    }
    .insight-meta span { color: #e0040b; font-weight: 600; }

    /* CONTENT BODY */
    .insight-body {
      max-width: 860px;
      margin: 0 auto;
      padding: 60px clamp(24px, 5vw, 64px) 100px;
    }

    .insight-hero-img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.08);
      margin-bottom: 48px;
      display: block;
    }

    /* DESTAQUE RESPOSTA PRINCIPAL */
    .insight-callout {
      background: rgba(224,4,11,0.06);
      border-left: 3px solid #e0040b;
      padding: 24px 32px;
      border-radius: 0 12px 12px 0;
      margin: 36px 0 40px;
      font-size: 19px;
      line-height: 1.7;
      color: #ffffff;
      font-weight: 500;
    }

    .insight-lead {
      font-size: 20px;
      line-height: 1.8;
      color: #ffffff;
      margin-bottom: 40px;
      font-weight: 400;
    }

    .insight-section {
      margin-bottom: 48px;
    }

    .insight-section h2 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px, 3.5vw, 38px);
      line-height: 1.15;
      letter-spacing: 0.5px;
      color: #ffffff;
      margin-top: 48px;
      margin-bottom: 24px;
      border-top: 1px solid rgba(255,255,255,0.08);
      padding-top: 40px;
    }

    .insight-section p {
      font-size: 17px;
      line-height: 1.85;
      color: #cccccc;
      margin-bottom: 24px;
    }

    .insight-section p strong {
      color: #ffffff;
      font-weight: 600;
    }

    .insight-link {
      color: #e0040b;
      text-decoration: underline;
      text-underline-offset: 4px;
      font-weight: 500;
      transition: opacity 0.2s;
    }
    .insight-link:hover {
      opacity: 0.8;
    }

    /* FAQ ACCORDION */
    .insight-faq-section {
      margin-top: 64px;
      padding-top: 48px;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    .insight-faq-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px, 3.5vw, 38px);
      line-height: 1.15;
      letter-spacing: 0.5px;
      color: #ffffff;
      margin-bottom: 32px;
    }

    .insight-faq-item {
      border-bottom: 1px solid rgba(255,255,255,0.08);
      padding: 24px 0;
      cursor: pointer;
    }

    .insight-faq-q {
      font-size: 18px;
      font-weight: 600;
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }

    .insight-faq-icon {
      color: #e0040b;
      font-size: 24px;
      font-weight: 300;
      transition: transform 0.3s;
    }

    .insight-faq-item.active .insight-faq-icon {
      transform: rotate(45deg);
    }

    .insight-faq-a {
      font-size: 16px;
      line-height: 1.7;
      color: #cccccc;
      margin-top: 16px;
      padding-right: 24px;
      display: block;
    }

    .insight-faq-item:not(.active) .insight-faq-a {
      display: none;
    }

    /* CTA FINAL PADRÃO DO CLUSTER */
    .insight-cta-box {
      background: #111111;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px;
      padding: 48px clamp(24px, 5vw, 48px);
      text-align: center;
      margin-top: 64px;
    }

    .insight-cta-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px, 4vw, 42px);
      line-height: 1.1;
      letter-spacing: 1px;
      color: #ffffff;
      margin-bottom: 16px;
    }

    .insight-cta-sub {
      font-size: 16px;
      line-height: 1.6;
      color: #a0a0a0;
      max-width: 600px;
      margin: 0 auto 32px;
    }

    .insight-cta-btn {
      display: inline-block;
      background: #e0040b;
      color: #ffffff;
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 18px 40px;
      border-radius: 100px;
      text-decoration: none;
      transition: background 0.2s, transform 0.2s;
    }
    .insight-cta-btn:hover {
      background: #ff121a;
      transform: translateY(-2px);
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <Helmet>
        <title>Automação Comercial: O Que É e Como Implementar | One Thank Digital</title>
        <meta name="description" content="Entenda o que é automação comercial (e por que não é automação de PDV), como ela captura e organiza cada oportunidade de venda e por onde começar a implementar." />
        <link rel="canonical" href="https://onethank.com.br/insights/automacao-comercial-o-que-e/" />
        <meta property="og:title" content="Automação Comercial: O Que É e Como Implementar | One Thank Digital" />
        <meta property="og:description" content="Entenda o que é automação comercial (e por que não é automação de PDV), como ela captura e organiza cada oportunidade de venda e por onde começar a implementar." />
        <meta property="og:url" content="https://onethank.com.br/insights/automacao-comercial-o-que-e" />
        <meta property="og:image" content="https://onethank.com.br/hero-automacao-comercial.webp" />

        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Automação Comercial: O Que É, O Que Não É e Como Implementar",
              "description": "Entenda o que é automação comercial (e por que não é automação de PDV), como ela captura e organiza cada oportunidade de venda e por onde começar a implementar.",
              "datePublished": "2026-07-08T08:00:00+00:00",
              "dateModified": "2026-07-08T08:00:00+00:00",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://onethank.com.br/insights/automacao-comercial-o-que-e"
              },
              "author": {
                "@type": "Organization",
                "name": "One Thank Digital",
                "url": "https://onethank.com.br"
              },
              "publisher": {
                "@type": "Organization",
                "name": "One Thank Digital",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://onethank.com.br/logo.svg"
                }
              },
              "image": "https://onethank.com.br/hero-automacao-comercial.webp"
            },
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
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://onethank.com.br"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Insights",
                  "item": "https://onethank.com.br/insights"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Automação & CRM",
                  "item": "https://onethank.com.br/insights/categoria/automacao-crm"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Automação Comercial",
                  "item": "https://onethank.com.br/insights/automacao-comercial-o-que-e"
                }
              ]
            }
          ])}
        </script>
      </Helmet>

      <Navbar
        onOpenQuiz={() => navigateTo('/diagnostico')}
        onOpenPilares={() => navigateTo('/pilares')}
        onOpenHistoria={() => navigateTo('/historia')}
      />

      <div className="insight-wrap">
        {/* HERO */}
        <header className="insight-hero">
          <div className="insight-hero-inner">
            <nav className="insight-breadcrumb" aria-label="Breadcrumbs">
              <a 
                href="/" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  navigateTo('/'); 
                }}
              >
                Home
              </a>
              <span className="insight-breadcrumb-sep">&gt;</span>
              <a 
                href="/insights/" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  navigateTo('/insights'); 
                }}
              >
                Insights
              </a>
              <span className="insight-breadcrumb-sep">&gt;</span>
              <a 
                href="/insights/categoria/automacao-crm/" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  navigateTo('/insights/categoria/automacao-crm'); 
                }}
              >
                Automação & CRM
              </a>
              <span className="insight-breadcrumb-sep">&gt;</span>
              <span className="insight-breadcrumb-current">Automação Comercial</span>
            </nav>

            <a 
              href="/insights/categoria/automacao-crm/" 
              className="insight-tag"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/insights/categoria/automacao-crm');
              }}
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              AUTOMAÇÃO & CRM
            </a>
            <h1 className="insight-h1">Automação Comercial: O Que É, O Que Não É e Como Implementar</h1>
            <div className="insight-meta">
              Por <span>One Thank Digital</span> • Guia Técnico B2B • Leitura de 10 min
            </div>
          </div>
        </header>

        {/* BODY */}
        <main className="insight-body">
          <img 
            src="/hero-automacao-comercial.webp" 
            alt="Contatos do WhatsApp fluindo automaticamente para o funil de vendas em monitor corporativo"
            width="1600"
            height="893"
            loading="eager"
            className="insight-hero-img"
          />

          <div className="insight-callout">
            Automação comercial é a estruturação tecnológica da frente de vendas de uma empresa: ela captura automaticamente cada pessoa que entra em contato — pelo anúncio, pelo site ou pelo WhatsApp —, registra a origem de cada oportunidade, garante resposta imediata e organiza tudo no funil de vendas sem trabalho manual. Importante: automação comercial não é automação de PDV (frente de caixa ou emissão de cupom fiscal) — é a engenharia que faz nenhuma oportunidade de venda se perder no caminho.
          </div>

          <p className="insight-lead">
            Se você pesquisou "automação comercial" pensando em sistemas de caixa, balcão ou emissão de nota no varejo, este não é o artigo — e vale dizer isso logo, porque o termo carrega essa confusão no Brasil. Aqui, automação comercial é outra coisa: é a camada de tecnologia que trabalha na frente de vendas de empresas de serviços e negócios B2B, garantindo que cada pessoa que demonstra interesse seja atendida na hora, registrada com origem rastreada e conduzida pelo funil sem depender da memória ou da boa vontade de quem estava disponível naquele momento. É a diferença entre uma operação comercial que funciona por esforço e uma que funciona por estrutura.
          </p>

          <div style={{
            background: 'rgba(224,4,11,0.06)',
            border: '1px solid rgba(224,4,11,0.25)',
            borderRadius: 12,
            padding: '20px 24px',
            margin: '32px 0'
          }}>
            <div style={{
              fontSize: 12,
              fontWeight: 700,
              color: '#e0040b',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: 8
            }}>
              // Hub de Especialidade OTD
            </div>
            <div style={{ fontSize: 16, color: '#e5e5e5', lineHeight: 1.6 }}>
              Para aprofundar sua estratégia com nossa metodologia completa, acesse o nosso pilar definitivo de{' '}
              <a 
                href="/guia/automacao-digital/"
                onClick={(e) => { e.preventDefault(); navigateTo('/guia/automacao-digital'); }}
                style={{ color: '#e0040b', fontWeight: 600, textDecoration: 'underline' }}
              >
                Automação Digital para Empresas B2B (Guia Completo)
              </a>.
            </div>
          </div>

          <section className="insight-section">
            <h2>O que é automação comercial (e o que ela não é)</h2>
            <p>
              A automação comercial atua no intervalo mais caro da jornada de vendas: o que existe entre o interesse do cliente e o atendimento da empresa. É nesse intervalo que leads esfriam, contatos se perdem em conversas não registradas e o dinheiro investido em anúncios evapora sem explicação.
            </p>
            <p>
              Na prática, ela é um conjunto de fluxos que executa quatro tarefas sem intervenção humana: recebe cada novo contato no instante em que ele chega, identifica de onde ele veio (qual anúncio, qual campanha, qual busca), registra tudo no CRM — o painel onde a empresa acompanha suas negociações — e garante que a conversa comece imediatamente, a qualquer hora.
            </p>
            <p>
              Três confusões que valem ser desfeitas:
            </p>
            <p>
              <strong>Não é automação de PDV.</strong> Sistemas de frente de caixa, emissores de cupom fiscal e controle de estoque de loja pertencem a outro universo — o do varejo físico. A automação comercial de que tratamos aqui opera em empresas de serviços, escritórios e negócios B2B, onde a venda acontece em conversas e propostas, não no balcão.
            </p>
            <p>
              <strong>Não é disparo em massa.</strong> Automação comercial profissional não sai atirando mensagens para listas frias. Ela trabalha de forma receptiva: organiza e acelera o atendimento de quem já procurou a empresa — o que protege o número de WhatsApp, a reputação da marca e as taxas de conversão.
            </p>
            <p>
              <strong>Não é um robô vendedor.</strong> A tecnologia não fecha negócios — pessoas fecham. O que a automação faz é entregar ao time comercial oportunidades já organizadas, com contexto e histórico, para que a energia humana seja gasta onde ela é insubstituível: entender, negociar e concluir.
            </p>
          </section>

          <section className="insight-section">
            <h2>Automação comercial e automação de processos: as duas engrenagens do mesmo motor</h2>
            <p>
              Todo negócio escalável tem duas frentes de automação trabalhando em momentos diferentes. A automação comercial atua antes e durante a venda — é ela que garante que as oportunidades entrem. A automação de processos assume depois que o contrato é fechado — é ela que garante que a empresa consiga entregar sem inchar a equipe, cuidando dos fluxos administrativos e operacionais dos bastidores, como explicamos em detalhe no guia de{' '}
              <a 
                href="/insights/automacao-de-processos-para-empresas/" 
                className="insight-link"
                onClick={(e) => { e.preventDefault(); navigateTo('/insights/automacao-de-processos-para-empresas'); }}
              >automação de processos para empresas</a>.
            </p>
            <p>
              A régua é simples: tarefas para conquistar o cliente pertencem à automação comercial; tarefas para atender e manter o cliente pertencem à automação de processos. Empresas que automatizam só a venda criam um gargalo novo na entrega; empresas que automatizam só a operação continuam perdendo oportunidades na porta de entrada. As duas engrenagens compõem a mesma{' '}
              <a 
                href="/guia/automacao-digital/" 
                className="insight-link"
                onClick={(e) => { e.preventDefault(); navigateTo('/guia/automacao-digital'); }}
              >estrutura de automação digital</a>{' '}
              — e a ordem certa de implantação depende de onde está o vazamento maior de cada negócio.
            </p>
          </section>

          <section className="insight-section">
            <h2>Os 4 momentos em que a automação comercial gera receita</h2>
            <p>
              <strong>1. No primeiro segundo do contato.</strong> Estudos do setor mostram que responder um interessado nos primeiros minutos multiplica as chances de conversão. A automação garante esse padrão em qualquer horário: a pessoa que chama no WhatsApp às 22h de um domingo recebe acolhimento imediato, tem seus dados registrados e, quando a equipe chega na segunda-feira, a oportunidade está viva — não fria.
            </p>
            <p>
              <strong>2. No registro da origem.</strong> Sem automação, o gestor investe em anúncios e nunca sabe qual campanha gerou qual contrato — a verba é renovada no escuro. Com a captura automática, cada lead nasce no CRM com a etiqueta de onde veio, e a decisão de investimento passa a ser feita com dados, não com impressão.
            </p>
            <p>
              <strong>3. Na organização do funil.</strong> Cada conversa vira um card no painel de negociações, preenchido automaticamente com nome, telefone e histórico — sem depender de alguém "passar para a planilha depois". A empresa se torna dona da sua base de contatos, como detalhamos no guia de{' '}
              <a 
                href="/insights/como-organizar-leads-whatsapp-no-crm/" 
                className="insight-link"
                onClick={(e) => { e.preventDefault(); navigateTo('/insights/como-organizar-leads-whatsapp-no-crm'); }}
              >organização de leads do WhatsApp no CRM</a>, em vez de deixá-la presa no celular de cada atendente.
            </p>
            <p>
              <strong>4. Na triagem do que merece atenção.</strong> Fluxos inteligentes fazem as perguntas iniciais — porte, necessidade, urgência — e separam curiosos de oportunidades reais. O time comercial recebe na agenda apenas conversas que valem seu tempo, acompanhadas de uma ficha pronta.
            </p>
          </section>

          <section className="insight-section">
            <h2>Sinais de que a sua empresa precisa de automação comercial</h2>
            <p>
              Alguns sintomas aparecem antes de qualquer relatório: leads que reclamam da demora para serem respondidos; a sensação de que "entra muito contato mas fecha pouco"; a impossibilidade de responder qual anúncio gerou o último contrato; o histórico de negociações que vai embora junto com o funcionário que saiu; e o time comercial gastando mais tempo cadastrando e organizando do que conversando com clientes. Dois ou mais desses sinais indicam que o problema da operação não é de esforço — é de estrutura.
            </p>
          </section>

          <section className="insight-section">
            <h2>Como implementar: por onde começar</h2>
            <p>
              A implantação segue a mesma lógica de fundação que rege qualquer estrutura de automação digital: primeiro o diagnóstico (mapear por onde os contatos chegam e onde se perdem), depois a base técnica (o CRM configurado com o funil da empresa), em seguida a conexão oficial do WhatsApp (a fundação que protege o número e permite integrações), e só então os fluxos de captura, triagem e mensuração. Pular etapas é o erro mais comum — e o mais caro. O passo a passo completo dessa ordem de implantação, com os erros a evitar em cada fase, está no nosso guia completo de{' '}
              <a 
                href="/guia/automacao-digital/" 
                className="insight-link"
                onClick={(e) => { e.preventDefault(); navigateTo('/guia/automacao-digital'); }}
              >automação digital para empresas B2B</a>.
            </p>
            <p>
              No fim, automação comercial é a resposta estrutural para uma pergunta que todo gestor já se fez: "quantas vendas estamos perdendo sem perceber?". Quando a captura, o registro e a resposta deixam de depender do improviso, a empresa para de contar com a sorte — e a receita passa a ser consequência de Presença, Comunicação e Estrutura trabalhando juntas.
            </p>
          </section>

          <section className="insight-faq-section">
            <h2 className="insight-faq-title">Perguntas frequentes</h2>
            <div>
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className={`insight-faq-item ${activeFaq === idx ? 'active' : ''}`}
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="insight-faq-q">
                    <span>{faq.q}</span>
                    <span className="insight-faq-icon">{activeFaq === idx ? '−' : '+'}</span>
                  </div>
                  <div className="insight-faq-a">
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="insight-cta-box">
            <div className="insight-cta-title">QUER SABER COMO ESTÁ A ESTRUTURA DIGITAL DA SUA EMPRESA HOJE?</div>
            <p className="insight-cta-sub">
              Faça o nosso diagnóstico digital completo de forma gratuita. Analisamos seus processos comerciais e geramos um relatório técnico imediato identificando seus principais gargalos e como resolvê-los.
            </p>
            <a 
              href="/diagnostico/" 
              className="insight-cta-btn"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/diagnostico');
              }}
            >
              AVALIAR MINHA ESTRUTURA →
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
