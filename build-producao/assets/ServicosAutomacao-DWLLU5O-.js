import{r as e,t}from"./jsx-runtime-kxeFmgq_.js";import{t as n}from"./react-t6MS7ObK.js";import{n as r,t as i}from"./Navbar-DMwXdsX5.js";import a from"./Footer-DlCbP0Lr.js";var o=e(n(),1),s=t();function c(){let[e,t]=(0,o.useState)(null);(0,o.useEffect)(()=>{document.title=`Automação Digital | One Thank Digital`,window.scrollTo(0,0)},[]);let n=n=>{t(e===n?null:n)},c=[{q:`Como parar de perder leads que mandam mensagem no WhatsApp fora do horário?`,a:`Com automação de WhatsApp você configura resposta imediata 24h, qualificação automática por perguntas, agendamento direto no seu calendário e notificação para retorno no horário certo. O lead não espera, não some e já chega qualificado para a conversa.`},{q:`Automação de WhatsApp é permitida pelo Meta?`,a:`Sim, desde que feita com a API Oficial do WhatsApp Business — que é o que utilizamos. Diferente de ferramentas não oficiais que podem banir o número, a API oficial é homologada pelo Meta e garante estabilidade e conformidade.`},{q:`CRM e automação valem a pena para escritório contábil ou clínica pequena?`,a:`Vale. Para empresas que dependem de relacionamento contínuo, o CRM integrado ao WhatsApp garante que nenhum cliente ativo vire cliente esquecido. O custo é acessível: menos de R$300/mês para um fluxo completo implementado.`},{q:`Automação de marketing é só para empresas grandes?`,a:`Não. Ferramentas como n8n e a API do WhatsApp permitem criar fluxos completos de captação, qualificação e follow-up com custo mensal abaixo de R$300. O que diferencia não é o tamanho da empresa — é ter o processo configurado corretamente.`},{q:`Quanto tempo leva para implementar a automação?`,a:`Entre 2 e 4 semanas dependendo da complexidade do fluxo. Um funil básico de WhatsApp com qualificação e agendamento fica pronto em 2 semanas. Integrações com CRM, Google Calendar e diagnóstico automático levam de 3 a 4 semanas.`}];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`style`,{children:`
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
      `}),(0,s.jsx)(i,{onOpenQuiz:()=>{window.location.href=`/diagnostico`},onOpenPilares:()=>{window.location.href=`/pilares`},onOpenHistoria:()=>{window.location.href=`/historia`}}),(0,s.jsxs)(`div`,{className:`lp-wrap`,children:[(0,s.jsxs)(r,{children:[(0,s.jsx)(`title`,{children:`Automação Digital de WhatsApp e CRM para Empresas B2B | One Thank Digital`}),(0,s.jsx)(`meta`,{name:`description`,content:`Automação de WhatsApp, CRM e funil de atendimento para escritórios contábeis, clínicas e empresas B2B em Santo André. Atendimento 24h sem depender do seu horário.`}),(0,s.jsx)(`meta`,{property:`og:title`,content:`Automação Digital para Empresas B2B | One Thank Digital`}),(0,s.jsx)(`meta`,{property:`og:description`,content:`WhatsApp e CRM automatizados para nunca mais perder lead fora do horário. Para escritórios, clínicas e B2B no ABC Paulista.`}),(0,s.jsx)(`meta`,{property:`og:url`,content:`https://onethank.com.br/servicos/automacao-digital`}),(0,s.jsx)(`link`,{rel:`canonical`,href:`https://onethank.com.br/servicos/automacao-digital`}),(0,s.jsx)(`script`,{type:`application/ld+json`,children:JSON.stringify([{"@context":`https://schema.org`,"@type":`FAQPage`,mainEntity:c.map(e=>({"@type":`Question`,name:e.q,acceptedAnswer:{"@type":`Answer`,text:e.a}}))},{"@context":`https://schema.org`,"@type":`Service`,name:`Automação Digital de WhatsApp e CRM`,provider:{"@type":`Organization`,name:`One Thank Digital`},offers:{"@type":`Offer`,priceSpecification:{"@type":`PriceSpecification`,priceType:`https://schema.org/MinimumBasePrice`},availability:`https://schema.org/InStock`}}])})]}),(0,s.jsx)(`section`,{className:`lp-header`,children:(0,s.jsxs)(`div`,{className:`lp-container`,children:[(0,s.jsx)(`div`,{className:`lp-label`,children:`// AUTOMAÇÃO DE ATENDIMENTO E CRM PARA WHATSAPP BUSINESS`}),(0,s.jsx)(`h1`,{className:`lp-h1`,children:`AUTOMAÇÃO DIGITAL DE WHATSAPP E CRM PARA EMPRESAS B2B EM SANTO ANDRÉ`}),(0,s.jsx)(`p`,{className:`lp-intro`,children:`A One Thank Digital implementa automação de WhatsApp, CRM e funil de atendimento para escritórios contábeis, clínicas e empresas B2B no ABC Paulista — para que seu negócio responda, qualifique e feche clientes 24 horas por dia, sem depender do seu horário ou da sua equipe.`})]})}),(0,s.jsx)(`section`,{className:`lp-dor-section`,children:(0,s.jsxs)(`div`,{className:`lp-container`,children:[(0,s.jsx)(`h2`,{className:`lp-section-title`,children:`O GARGALO DO ATENDIMENTO MANUAL NO WHATSAPP.`}),(0,s.jsxs)(`div`,{className:`lp-dor-list`,children:[(0,s.jsxs)(`div`,{className:`lp-dor-item`,children:[(0,s.jsx)(`div`,{className:`lp-dor-number`,children:`01`}),(0,s.jsx)(`h3`,{className:`lp-dor-item-title`,children:`LENTIDÃO COMERCIAL`}),(0,s.jsx)(`div`,{className:`lp-dor-text`,children:`Você perde leads que mandam mensagem no WhatsApp fora do horário comercial e não recebem resposta rápida.`})]}),(0,s.jsxs)(`div`,{className:`lp-dor-item`,children:[(0,s.jsx)(`div`,{className:`lp-dor-number`,children:`02`}),(0,s.jsx)(`h3`,{className:`lp-dor-item-title`,children:`FALTA DE CONTROLE`}),(0,s.jsx)(`div`,{className:`lp-dor-text`,children:`Você não tem visibilidade de quantos leads chegaram esta semana, quantos responderam e quantos fecharam.`})]}),(0,s.jsxs)(`div`,{className:`lp-dor-item`,children:[(0,s.jsx)(`div`,{className:`lp-dor-number`,children:`03`}),(0,s.jsx)(`h3`,{className:`lp-dor-item-title`,children:`GARGALO OPERACIONAL`}),(0,s.jsx)(`div`,{className:`lp-dor-text`,children:`Sua equipe gasta horas respondendo as mesmas perguntas básicas no WhatsApp que poderiam ser automatizadas.`})]})]})]})}),(0,s.jsx)(`section`,{className:`lp-showcase-section`,children:(0,s.jsx)(`div`,{className:`lp-container`,children:(0,s.jsxs)(`div`,{className:`lp-showcase-grid`,children:[(0,s.jsxs)(`div`,{className:`lp-showcase-content`,children:[(0,s.jsxs)(`h2`,{className:`lp-showcase-content-title`,children:[`A VELOCIDADE VENCE `,(0,s.jsx)(`span`,{children:`O VAZAMENTO.`})]}),(0,s.jsxs)(`div`,{className:`lp-showcase-content-text`,children:[`O cliente corporativo de hoje não tem paciência. Se ele manda mensagem às 20h e você só responde às 9h do dia seguinte, ele já fechou contrato com o seu concorrente.`,(0,s.jsx)(`br`,{}),(0,s.jsx)(`br`,{}),`A Automação não existe para transformar sua empresa num robô frio. Ela existe para reter o lead "quente" exatamente na hora em que ele tem a intenção de compra, estancando o vazamento de orçamentos e otimizando o fechamento da sua equipe.`]})]}),(0,s.jsx)(`div`,{className:`lp-showcase-image-wrapper`,children:(0,s.jsx)(`img`,{src:`/servico-automacao.png`,alt:`Automação Digital OTD`})})]})})}),(0,s.jsx)(`section`,{className:`lp-solucao-section`,children:(0,s.jsxs)(`div`,{className:`lp-container`,children:[(0,s.jsx)(`h2`,{className:`lp-section-title`,children:`COMO IMPLEMENTAMOS SUA AUTOMAÇÃO DIGITAL.`}),(0,s.jsxs)(`div`,{className:`lp-solucao-grid`,children:[(0,s.jsxs)(`div`,{className:`lp-solucao-card`,children:[(0,s.jsx)(`div`,{className:`lp-solucao-ghost`,children:`01`}),(0,s.jsx)(`div`,{className:`lp-solucao-title`,children:`AUTOMAÇÃO DE WHATSAPP 24H`}),(0,s.jsx)(`div`,{className:`lp-solucao-desc`,children:`Configuramos fluxos automáticos de resposta, qualificação e agendamento no WhatsApp — para que nenhum lead fique sem resposta, independente do horário ou dia da semana.`})]}),(0,s.jsxs)(`div`,{className:`lp-solucao-card`,children:[(0,s.jsx)(`div`,{className:`lp-solucao-ghost`,children:`02`}),(0,s.jsx)(`div`,{className:`lp-solucao-title`,children:`CRM INTEGRADO AO ATENDIMENTO`}),(0,s.jsx)(`div`,{className:`lp-solucao-desc`,children:`Implementamos CRM conectado ao WhatsApp para registrar cada contato, acompanhar o funil de vendas e nunca perder o histórico de um cliente — mesmo com equipe pequena.`})]}),(0,s.jsxs)(`div`,{className:`lp-solucao-card`,children:[(0,s.jsx)(`div`,{className:`lp-solucao-ghost`,children:`03`}),(0,s.jsx)(`div`,{className:`lp-solucao-title`,children:`FUNIL AUTOMÁTICO DE CAPTAÇÃO`}),(0,s.jsx)(`div`,{className:`lp-solucao-desc`,children:`Criamos o fluxo completo de captação: lead entra pelo site ou WhatsApp, é qualificado automaticamente, agenda a reunião e você recebe o diagnóstico pronto antes da conversa.`})]})]}),(0,s.jsxs)(`p`,{className:`lp-internal-link`,children:[`A automação é mais poderosa quando integrada ao seu `,(0,s.jsx)(`a`,{href:`/servicos/criacao-de-sites`,children:`site`}),` e ao `,(0,s.jsx)(`a`,{href:`/servicos/google-meu-negocio`,children:`Google Meu Negócio`}),` — capturando e convertendo leads em todo o funil.`]}),(0,s.jsx)(`div`,{style:{textAlign:`center`,marginTop:`64px`},children:(0,s.jsx)(`a`,{href:`/diagnostico`,className:`lp-btn`,children:`AVALIAR MINHA ESTRUTURA →`})})]})}),(0,s.jsx)(`section`,{className:`lp-roi-section`,children:(0,s.jsxs)(`div`,{className:`lp-container`,children:[(0,s.jsx)(`h2`,{className:`lp-section-title`,children:`O RETORNO DA AUTOMAÇÃO EM NÚMEROS.`}),(0,s.jsxs)(`div`,{className:`lp-roi-grid`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{className:`lp-roi-number`,children:`[24/7]`}),(0,s.jsx)(`div`,{className:`lp-roi-title`,children:`ATENDIMENTO ININTERRUPTO`}),(0,s.jsx)(`div`,{className:`lp-roi-desc`,children:`Sua empresa não perde leads aos finais de semana e feriados.`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{className:`lp-roi-number`,children:`[0 R$]`}),(0,s.jsx)(`div`,{className:`lp-roi-title`,children:`NOVOS ATENDENTES`}),(0,s.jsx)(`div`,{className:`lp-roi-desc`,children:`Escale as respostas e a triagem sem inflar a folha de pagamento.`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{className:`lp-roi-number`,children:`[3X]`}),(0,s.jsx)(`div`,{className:`lp-roi-title`,children:`REUNIÕES QUALIFICADAS`}),(0,s.jsx)(`div`,{className:`lp-roi-desc`,children:`O funil elimina curiosos e agenda diretamente no calendário apenas os reais interessados.`})]})]})]})}),(0,s.jsx)(`section`,{className:`lp-invest-section`,children:(0,s.jsxs)(`div`,{className:`lp-container`,children:[(0,s.jsxs)(`div`,{className:`lp-invest-box`,children:[(0,s.jsx)(`h2`,{className:`lp-invest-title`,children:`TRANSPARÊNCIA DE INVESTIMENTO`}),(0,s.jsx)(`div`,{className:`lp-invest-text`,children:`Nós não instalamos chatbots robóticos. O investimento em Automação Digital e CRM é projetado após mapear o gargalo do seu fluxo de atendimento atual. O objetivo não é ser mais uma ferramenta paga por mês, mas uma secretária digital avançada que aumenta o volume de fechamentos sem precisar contratar mais pessoas.`})]}),(0,s.jsxs)(`div`,{className:`lp-other-services`,children:[(0,s.jsx)(`div`,{className:`lp-other-services-title`,children:`AVALIE OUTRAS ESTRUTURAS:`}),(0,s.jsxs)(`div`,{className:`lp-other-services-list`,children:[(0,s.jsx)(`a`,{href:`/servicos/google-meu-negocio`,className:`lp-other-services-btn`,children:`GOOGLE MEU NEGÓCIO`}),(0,s.jsx)(`a`,{href:`/servicos/criacao-de-sites`,className:`lp-other-services-btn`,children:`CRIAÇÃO DE SITES`}),(0,s.jsx)(`a`,{href:`/servicos/seo-trafego-organico`,className:`lp-other-services-btn`,children:`SEO E TRÁFEGO ORGÂNICO`})]})]})]})}),(0,s.jsx)(`section`,{className:`lp-cases-section`,children:(0,s.jsxs)(`div`,{className:`lp-container`,children:[(0,s.jsxs)(`h2`,{className:`lp-cases-title`,children:[`NÃO ACREDITE APENAS NA `,(0,s.jsx)(`span`,{children:`NOSSA PALAVRA.`})]}),(0,s.jsx)(`div`,{className:`lp-cases-desc`,children:`Veja o padrão técnico dos projetos e sistemas que já entregamos para escritórios, clínicas e empresas do ABC Paulista.`}),(0,s.jsx)(`a`,{href:`/cases`,className:`lp-btn`,children:`VER PORTFÓLIO E CASES REAIS ↗`})]})}),(0,s.jsx)(`section`,{className:`lp-faq-section`,children:(0,s.jsxs)(`div`,{className:`lp-container lp-faq-grid`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{className:`lp-label`,children:`TIRE SUAS DÚVIDAS`}),(0,s.jsxs)(`h2`,{className:`lp-faq-title`,children:[`O que você `,(0,s.jsx)(`em`,{children:`AINDA PERGUNTA.`})]})]}),(0,s.jsx)(`div`,{children:c.map((t,r)=>(0,s.jsxs)(`div`,{className:`lp-faq-item `+(e===r?`active`:``),children:[(0,s.jsxs)(`h3`,{className:`lp-faq-q`,onClick:()=>n(r),children:[t.q,(0,s.jsx)(`span`,{className:`lp-faq-icon`,children:`+`})]}),(0,s.jsx)(`div`,{className:`lp-faq-a`,children:t.a})]},r))})]})}),(0,s.jsx)(`section`,{className:`lp-cta-section`,children:(0,s.jsxs)(`div`,{className:`lp-container`,children:[(0,s.jsxs)(`div`,{className:`lp-cta-text`,children:[`PRONTO PARA ESTRUTURAR `,(0,s.jsx)(`br`,{}),(0,s.jsx)(`em`,{children:`A SUA AUTOMAÇÃO DIGITAL`})]}),(0,s.jsx)(`a`,{href:`/diagnostico`,className:`lp-btn`,children:`AVALIAR MINHA ESTRUTURA →`})]})})]}),(0,s.jsx)(a,{onOpenQuiz:()=>{window.location.href=`/diagnostico`},onOpenPilares:()=>{window.location.href=`/pilares`},onOpenHistoria:()=>{window.location.href=`/historia`}})]})}export{c as default};