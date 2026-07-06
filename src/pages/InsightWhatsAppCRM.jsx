import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function InsightWhatsAppCRM() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,600;1,600&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

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

    .insight-tag {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: #D42B2B;
      background: rgba(212,43,43,0.1);
      border: 1px solid rgba(212,43,43,0.3);
      padding: 6px 16px;
      border-radius: 100px;
      margin-bottom: 24px;
    }

    .insight-h1 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(38px, 5.5vw, 68px);
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
      align-items: center;
      gap: 16px;
    }
    .insight-meta span { color: #D42B2B; font-weight: 600; }

    /* BODY */
    .insight-body {
      max-width: 860px;
      margin: 0 auto;
      padding: clamp(48px, 6vw, 80px) clamp(24px, 5vw, 48px);
    }

    .insight-lead {
      font-size: clamp(17px, 1.5vw, 21px);
      line-height: 1.8;
      color: #dddddd;
      margin-bottom: 48px;
      padding-bottom: 48px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      font-weight: 400;
    }

    .insight-section {
      margin-bottom: 48px;
    }

    .insight-section h2 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(26px, 3.5vw, 42px);
      letter-spacing: 0.5px;
      color: #ffffff;
      margin-bottom: 20px;
      line-height: 1.15;
    }

    .insight-section p {
      font-size: clamp(16px, 1.25vw, 18px);
      line-height: 1.85;
      color: #cccccc;
      margin-bottom: 20px;
    }

    .insight-list {
      list-style: none;
      margin: 28px 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .insight-list li {
      font-size: clamp(16px, 1.25vw, 18px);
      line-height: 1.7;
      color: #cccccc;
      padding-left: 24px;
      position: relative;
      background: rgba(255,255,255,0.02);
      padding: 20px 24px 20px 36px;
      border-left: 3px solid #D42B2B;
      border-radius: 0 8px 8px 0;
    }

    .insight-list li::before {
      content: '→';
      position: absolute;
      left: 14px;
      color: #D42B2B;
      font-weight: 700;
    }

    .insight-list li strong {
      color: #ffffff;
      font-weight: 600;
    }

    .insight-link {
      color: #D42B2B;
      text-decoration: underline;
      text-underline-offset: 4px;
      font-weight: 600;
      transition: color 0.2s;
    }
    .insight-link:hover {
      color: #ff4d4d;
    }

    /* CTA BOX */
    .insight-cta-box {
      margin-top: 64px;
      padding: 48px clamp(24px, 5vw, 64px);
      background: linear-gradient(135deg, rgba(212,43,43,0.15) 0%, rgba(212,43,43,0.03) 100%);
      border: 1px solid rgba(212,43,43,0.4);
      border-radius: 16px;
      text-align: center;
    }

    .insight-cta-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px, 3.5vw, 44px);
      color: #ffffff;
      letter-spacing: 1px;
      margin-bottom: 12px;
    }

    .insight-cta-sub {
      font-size: 16px;
      color: #dddddd;
      margin-bottom: 32px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }

    .insight-cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: #D42B2B;
      color: #ffffff;
      font-family: 'DM Sans', sans-serif;
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 18px 40px;
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.2s;
      border: none;
      cursor: pointer;
    }
    .insight-cta-btn:hover {
      background: #b82020;
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(212,43,43,0.35);
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      <Helmet>
        <title>Como Organizar os Leads do WhatsApp no CRM | One Thank Digital</title>
        <meta name="description" content="Descubra como eliminar o apagão de dados sincronizando contatos do WhatsApp Business API com o seu CRM de forma automática em tempo real." />
        <link rel="canonical" href="https://onethank.com.br/insights/como-organizar-leads-whatsapp-no-crm" />
        <meta property="og:title" content="Como Organizar os Leads do WhatsApp no CRM de Forma Automática" />
        <meta property="og:description" content="Sincronização em tempo real entre WhatsApp e CRM para eliminar gargalos operacionais e perda de histórico de vendas B2B." />
        <meta property="og:url" content="https://onethank.com.br/insights/como-organizar-leads-whatsapp-no-crm" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Como Organizar os Leads do WhatsApp no CRM de Forma Automática",
            "description": "Investir em um software de CRM de última geração não resolve o problema comercial se o seu time de vendas continua fechando negócios e recebendo contatos exclusivamente pelo WhatsApp.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://onethank.com.br/insights/como-organizar-leads-whatsapp-no-crm"
            },
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
            }
          })}
        </script>
      </Helmet>

      <Navbar
        onOpenQuiz={() => { window.location.href = '/diagnostico'; }}
        onOpenPilares={() => { window.location.href = '/pilares'; }}
        onOpenHistoria={() => { window.location.href = '/historia'; }}
      />

      <div className="insight-wrap">
        {/* HERO */}
        <header className="insight-hero">
          <div className="insight-hero-inner">
            <div className="insight-tag">🎯 CLUSTER B2B // AUTOMAÇÃO & CRM</div>
            <h1 className="insight-h1">Como Organizar os Leads do WhatsApp no CRM de Forma Automática</h1>
            <div className="insight-meta">
              Por <span>One Thank Digital</span> • Leitura de 4 min • Estratégia B2B
            </div>
          </div>
        </header>

        {/* BODY */}
        <main className="insight-body">
          <p className="insight-lead">
            Investir em um software de CRM de última geração não resolve o problema comercial se o seu time de vendas continua fechando negócios e recebendo contatos exclusivamente pelo WhatsApp. O maior gargalo operacional de empresas em crescimento é o "apagão de dados": o lead chega, o vendedor atende pelo celular, mas as informações críticas da negociação nunca são registradas no sistema central.
          </p>

          <section className="insight-section">
            <h2>O Problema: O CRM Vazio e o WhatsApp Sobrecarregado</h2>
            <p>
              Quando o processo de transferência de dados é manual, a operação quebra. O gestor perde o controle do pipeline e a empresa enfrenta três sintomas claros:
            </p>
            <ul className="insight-list">
              <li>
                <strong>Perda de Histórico:</strong> Se o vendedor sai da empresa ou perde o aparelho, o relacionamento com o cliente desaparece.
              </li>
              <li>
                <strong>Lentidão no Follow-up:</strong> Leads quentes esfriam porque o processo de triagem depende da digitação manual de dados básicos.
              </li>
              <li>
                <strong>Métricas Cegas:</strong> É impossível mensurar o ROI real das campanhas de tráfego se o CRM não registra a origem exata do contato que veio do aplicativo de mensagens.
              </li>
            </ul>
          </section>

          <section className="insight-section">
            <h2>A Solução: Sincronização Invisível de Dados</h2>
            <p>
              A resposta para escalar as vendas não é cobrar mais relatórios da sua equipe, mas tornar a entrada de dados imperceptível. Uma arquitetura de dados eficiente conecta o fluxo do WhatsApp diretamente às APIs do seu CRM.
            </p>
            <p>
              No momento em que o cliente inicia o contato, o sistema realiza a captura do perfil, faz a triagem inicial e cria a oportunidade estruturada no funil de vendas em tempo real. O vendedor foca estritamente em negociar, enquanto os dados trabalham sozinhos na retaguarda.
            </p>
            <p>
              Para entender como desenhar e implementar essa conexão sob medida na sua estrutura atual, conheça nossa solução de <a href="https://onethank.com.br/servicos/automacao-digital" className="insight-link">Automação Digital</a>.
            </p>
          </section>

          {/* CTA BOX */}
          <div className="insight-cta-box">
            <div className="insight-cta-title">QUER ELIMINAR O APAGÃO DE DADOS NA SUA EMPRESA?</div>
            <p className="insight-cta-sub">
              Faça um diagnóstico gratuito da sua estrutura e veja como sincronizar o seu WhatsApp Business diretamente ao seu CRM sem perda de conversas ou histórico comercial.
            </p>
            <a href="/diagnostico" className="insight-cta-btn">
              SOLICITAR DIAGNÓSTICO TÉCNICO →
            </a>
          </div>
        </main>
      </div>

      <Footer
        onOpenQuiz={() => { window.location.href = '/diagnostico'; }}
        onOpenPilares={() => { window.location.href = '/pilares'; }}
        onOpenHistoria={() => { window.location.href = '/historia'; }}
      />
    </>
  );
}
