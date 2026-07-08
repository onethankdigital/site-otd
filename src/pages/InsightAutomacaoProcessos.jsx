import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function InsightAutomacaoProcessos() {
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
      q: "Preciso trocar meus sistemas atuais para automatizar processos?",
      a: "Não. A automação de processos moderna conecta os sistemas que a empresa já usa — CRM, financeiro, agenda, WhatsApp — fazendo com que conversem entre si. A troca de ferramenta só é recomendada quando o sistema atual comprovadamente não atende, e nunca como pré-requisito para começar."
    },
    {
      q: "Automação de processos serve para empresa pequena?",
      a: "Sim — e o ganho proporcional costuma ser maior. Em empresas menores, as tarefas administrativas caem sobre os próprios sócios e sobre uma equipe enxuta; cada hora devolvida pesa mais. O investimento se ajusta ao tamanho da operação: começa-se por um fluxo, não pela empresa inteira."
    },
    {
      q: "Quanto tempo leva para implementar?",
      a: "Um fluxo bem definido — como a passagem de bastão da venda para a operação ou a emissão automática de documentos — entra em funcionamento em poucas semanas. O cronograma depende menos da tecnologia e mais da clareza do processo: quanto melhor desenhado, mais rápida a implantação."
    },
    {
      q: "O que devo automatizar primeiro?",
      a: "O processo que mais consome horas da equipe em tarefas repetitivas e que mais gera erro quando feito manualmente. Na maioria das empresas, é a passagem de bastão da venda para a operação ou a rotina de cobrança. Um diagnóstico técnico identifica esse ponto com precisão antes de qualquer implantação."
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
      flex-wrap: wrap;
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

    .insight-hero-img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      margin-bottom: 36px;
      border: 1px solid rgba(255,255,255,0.08);
    }

    .insight-callout {
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.06);
      border-left: 4px solid #D42B2B;
      padding: 24px 28px;
      border-radius: 0 12px 12px 0;
      margin: 28px 0 32px;
      font-size: clamp(17px, 1.4vw, 20px);
      line-height: 1.8;
      color: #ffffff;
    }

    .insight-lead {
      font-size: clamp(17px, 1.5vw, 21px);
      line-height: 1.85;
      color: #d5d5d5;
      margin-bottom: 32px;
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
      margin-top: 48px;
      margin-bottom: 20px;
      line-height: 1.15;
    }

    .insight-section p {
      font-size: clamp(16px, 1.25vw, 18px);
      line-height: 1.85;
      color: #d5d5d5;
      margin-bottom: 20px;
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

    /* FAQ */
    .insight-faq-section {
      margin-top: 64px;
      margin-bottom: 64px;
      padding-top: 48px;
      border-top: 1px solid rgba(255,255,255,0.08);
    }
    .insight-faq-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px, 3.8vw, 44px);
      letter-spacing: 0.5px;
      color: #ffffff;
      margin-bottom: 28px;
      line-height: 1.15;
    }
    .insight-faq-item {
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .insight-faq-q {
      padding: 24px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      font-size: clamp(16px, 1.4vw, 19px);
      font-weight: 600;
      color: #ffffff;
      transition: color 0.3s ease;
      gap: 16px;
    }
    .insight-faq-q:hover {
      color: #D42B2B;
    }
    .insight-faq-icon {
      font-size: 24px;
      font-weight: 300;
      color: #D42B2B;
      transition: transform 0.3s ease;
      flex-shrink: 0;
    }
    .insight-faq-a {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.4s ease;
      font-size: clamp(15px, 1.2vw, 17px);
      line-height: 1.8;
      color: #cccccc;
    }
    .insight-faq-item.active .insight-faq-a {
      max-height: 400px;
      padding-bottom: 24px;
    }
    .insight-faq-item.active .insight-faq-icon {
      transform: rotate(45deg);
    }

    /* CTA BOX */
    .insight-cta-box {
      margin-top: 48px;
      padding: 56px clamp(24px, 5vw, 64px);
      background: linear-gradient(135deg, rgba(212,43,43,0.15) 0%, rgba(212,43,43,0.03) 100%);
      border: 1px solid rgba(212,43,43,0.4);
      border-radius: 16px;
      text-align: center;
    }

    .insight-cta-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(28px, 3.8vw, 46px);
      color: #ffffff;
      letter-spacing: 1px;
      margin-bottom: 16px;
      line-height: 1.1;
    }

    .insight-cta-sub {
      font-size: 16px;
      color: #dddddd;
      margin-bottom: 36px;
      max-width: 640px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.65;
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
        <title>Automação de Processos: O Que É e Como Implementar | One Thank Digital</title>
        <meta name="description" content="Entenda o que é automação de processos, a diferença para a automação comercial e o passo a passo para implementar nos bastidores da sua empresa sem inchar a equipe." />
        <link rel="canonical" href="https://onethank.com.br/insights/automacao-de-processos-para-empresas" />
        <meta property="og:title" content="Automação de Processos: O Que É e Como Implementar | One Thank Digital" />
        <meta property="og:description" content="Entenda o que é automação de processos, a diferença para a automação comercial e o passo a passo para implementar nos bastidores da sua empresa sem inchar a equipe." />
        <meta property="og:url" content="https://onethank.com.br/insights/automacao-de-processos-para-empresas" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://onethank.com.br/hero-automacao-processos.webp" />
        
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Automação de Processos para Empresas: Como Implementar em Qualquer Setor",
              "description": "Entenda o que é automação de processos, a diferença para a automação comercial e o passo a passo para implementar nos bastidores da sua empresa sem inchar a equipe.",
              "datePublished": "2026-07-08T08:00:00+00:00",
              "dateModified": "2026-07-08T08:00:00+00:00",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://onethank.com.br/insights/automacao-de-processos-para-empresas"
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
              },
              "image": "https://onethank.com.br/hero-automacao-processos.webp"
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
                  "item": "https://onethank.com.br/"
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
                  "name": "Automação de Processos",
                  "item": "https://onethank.com.br/insights/automacao-de-processos-para-empresas"
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
            <a 
              href="/insights/categoria/automacao-crm" 
              className="insight-tag"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/insights/categoria/automacao-crm');
              }}
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              AUTOMAÇÃO & CRM
            </a>
            <h1 className="insight-h1">Automação de Processos para Empresas: Como Implementar em Qualquer Setor</h1>
            <div className="insight-meta">
              Por <span>One Thank Digital</span> • Guia Técnico B2B • Leitura de 10 min
            </div>
          </div>
        </header>

        {/* BODY */}
        <main className="insight-body">
          <img 
            src="/hero-automacao-processos.webp" 
            alt="Fluxos administrativos automatizados conectando WhatsApp e sistemas de gestão em ambiente corporativo"
            width="1600"
            height="893"
            loading="eager"
            className="insight-hero-img"
          />

          <div className="insight-callout">
            Automação de processos é o uso de tecnologia para executar as rotinas administrativas e operacionais que acontecem nos bastidores de uma empresa — emissão de documentos, integração entre sistemas, passagem de informações entre setores e rotinas internas — sem depender de trabalho manual repetitivo. Enquanto a automação comercial cuida de vender mais, a automação de processos garante que a empresa consiga entregar bem sem aumentar a folha de pagamento na mesma proporção.
          </div>

          <p className="insight-lead">
            Toda empresa que cresce passa pelo mesmo momento: as vendas aumentam, e junto com elas aumenta o volume de tarefas invisíveis que ninguém contratou para fazer. Alguém precisa gerar o contrato, emitir a cobrança, avisar a equipe de entrega, cadastrar o cliente no sistema, cobrar o documento que falta. Essas tarefas não aparecem no faturamento — mas consomem as horas de quem deveria estar cuidando do cliente. Este guia explica como transferir essa camada de trabalho repetitivo para uma estrutura automatizada, em qualquer setor, sem trocar os sistemas que a sua empresa já usa.
          </p>

          <section className="insight-section">
            <h2>O que é automação de processos (e o que ela não é)</h2>
            <p>
              Automação de processos é fazer com que as etapas administrativas do seu negócio aconteçam sozinhas, em sequência, a partir de gatilhos definidos. Um exemplo simples: quando uma venda é fechada, o sistema gera o contrato, envia para assinatura, cria a cobrança e avisa a equipe responsável — tudo sem que ninguém precise lembrar de fazer, digitar ou encaminhar nada.
            </p>
            <p>
              Antes de avançar, vale desfazer três confusões comuns:
            </p>
            <p>
              <strong>Não é demissão disfarçada.</strong> A automação de processos não existe para substituir pessoas — existe para retirar delas o trabalho que nenhum profissional deveria estar fazendo: digitar o mesmo dado em dois sistemas, copiar informação de uma planilha para outra, mandar a mesma mensagem de cobrança todo mês. O tempo devolvido vai para o trabalho que gera valor: atender melhor, resolver casos difíceis, cuidar do relacionamento.
            </p>
            <p>
              <strong>Não é software caro de multinacional.</strong> Durante anos, automatizar bastidores era privilégio de grandes corporações com orçamentos de tecnologia de sete dígitos. Hoje, as ferramentas de integração conectam os sistemas que a sua empresa já usa — o CRM, o financeiro, a agenda, o WhatsApp — por uma fração desse custo, e em semanas, não anos.
            </p>
            <p>
              <strong>Não é um projeto de TI interminável.</strong> Automação de processos bem implantada começa pequena: um fluxo, uma dor, um resultado medível. A partir daí, expande-se processo a processo. Quem promete automatizar a empresa inteira de uma vez está vendendo exatamente o tipo de projeto que não termina.
            </p>
          </section>

          <section className="insight-section">
            <h2>Automação comercial vs. automação de processos: onde termina uma e começa a outra</h2>
            <p>
              A automação digital de uma empresa tem duas frentes que trabalham em momentos diferentes da jornada — e confundi-las é a receita para investir na ordem errada.
            </p>
            <p>
              A <strong>automação comercial</strong> atua antes e durante a venda. É ela que captura o lead que clicou no anúncio, registra a origem de cada contato, responde na hora e organiza as oportunidades no funil. O objetivo dela é claro: não deixar nenhuma oportunidade escapar. Ela é a porta de entrada da receita — e por isso costuma ser o primeiro investimento de quem está estruturando a operação, como mostramos na nossa <a 
                href="/guia/automacao-digital" 
                className="insight-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/guia/automacao-digital');
                }}
              >estrutura completa de automação digital</a>.
            </p>
            <p>
              A <strong>automação de processos</strong> assume depois que o negócio é fechado. É a passagem de bastão: o cliente que acabou de assinar precisa ser cadastrado, cobrado, atendido e acompanhado — e cada uma dessas etapas envolve tarefas que, feitas manualmente, atrasam a entrega e abrem espaço para erro humano.
            </p>
            <p>
              A régua para saber onde cada uma atua: se a tarefa acontece para conquistar o cliente, é automação comercial; se acontece para atender e manter o cliente, é automação de processos. Uma empresa escalável precisa das duas — a primeira para vender mais, a segunda para entregar bem sem inchar a equipe. Um negócio que só automatiza a venda cria um problema novo: vende num ritmo que a operação manual não consegue acompanhar.
            </p>
          </section>

          <section className="insight-section">
            <h2>Os 5 processos que toda empresa pode automatizar primeiro</h2>
            <p>
              Não é preciso mapear a empresa inteira para começar. Estes cinco fluxos concentram a maior parte do trabalho manual repetitivo na maioria dos negócios — e são os que devolvem tempo mais rápido:
            </p>
            <p>
              <strong>1. A passagem de bastão da venda para a operação.</strong> No fluxo manual, o vendedor fecha o negócio e precisa avisar alguém — por mensagem, e-mail ou na conversa de corredor. Quando esquece, o cliente novo fica dias sem retorno e a primeira impressão já nasce ruim. Automatizado: no momento em que a oportunidade é marcada como ganha no CRM, o sistema cria o projeto, notifica a equipe responsável e dispara a mensagem de boas-vindas ao cliente. Assim como os leads precisam nascer registrados no CRM — algo que detalhamos no guia de <a 
                href="/insights/como-organizar-leads-whatsapp-no-crm" 
                className="insight-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/insights/como-organizar-leads-whatsapp-no-crm');
                }}
              >organização de leads do WhatsApp</a> —, o cliente fechado precisa nascer registrado na operação.
            </p>
            <p>
              <strong>2. Emissão de documentos por gatilho.</strong> Contratos, propostas, boletos e notas são documentos que seguem sempre o mesmo modelo com dados diferentes. No fluxo manual, alguém abre o modelo, preenche campo a campo e confere se não errou. Automatizado: o documento se monta sozinho com os dados que já estão no sistema, no instante em que a etapa correspondente acontece — venda fechada gera contrato; contrato assinado gera cobrança; pagamento confirmado gera nota.
            </p>
            <p>
              <strong>3. Cobrança e acompanhamento financeiro.</strong> A inadimplência raramente é má-fé — na maioria das vezes é esquecimento dos dois lados: o cliente esquece de pagar e a empresa esquece de lembrar. Automatizado: lembretes educados saem no prazo certo, antes e depois do vencimento, e a equipe financeira só entra em cena nos casos que realmente precisam de conversa humana.
            </p>
            <p>
              <strong>4. Onboarding de cliente novo.</strong> As boas-vindas, a coleta de documentos e informações iniciais, o agendamento da primeira reunião — tudo isso segue um roteiro que se repete a cada cliente. Automatizado: o cliente recebe a sequência certa de mensagens e formulários no ritmo certo, e a equipe acompanha o progresso num painel em vez de gerenciar a memória.
            </p>
            <p>
              <strong>5. Relatórios que se montam sozinhos.</strong> Se alguém na sua empresa passa horas todo mês copiando números de um sistema para uma planilha para montar o relatório da diretoria, esse é um processo pedindo automação. Automatizado: os dados fluem dos sistemas direto para o painel, atualizados, sem digitação — e a reunião de resultados discute o que fazer com os números, não se os números estão certos.
            </p>
          </section>

          <section className="insight-section">
            <h2>Como implementar: os 4 passos na ordem certa</h2>
            <p>
              A tentação de sair conectando ferramentas é grande — e é o erro mais comum. A implantação que funciona segue uma ordem lógica:
            </p>
            <p>
              <strong>Passo 1: Desenhe o processo no papel.</strong> Antes de qualquer tecnologia, descreva como o fluxo acontece hoje: quem faz o quê, em que ordem, com que informação. A maioria das empresas descobre nesse desenho que nem os próprios sócios concordam sobre como o processo funciona — e esse alinhamento já vale o exercício.
            </p>
            <p>
              <strong>Passo 2: Elimine antes de automatizar.</strong> Todo processo desenhado revela etapas que existem por herança, não por necessidade — a aprovação que ninguém lê, o relatório que ninguém abre, o dado pedido duas vezes. Automatizar um processo ineficiente só faz a ineficiência rodar mais rápido. Primeiro enxugue; depois automatize o que sobrou — exatamente como alertamos na seção de erros comuns do nosso guia sobre <a 
                href="/guia/automacao-digital" 
                className="insight-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/guia/automacao-digital');
                }}
              >por onde começar a estruturação</a>.
            </p>
            <p>
              <strong>Passo 3: Conecte os sistemas que você já usa.</strong> A automação de processos moderna não exige trocar o seu CRM, o seu financeiro ou a sua agenda. Ela conecta o que já existe, fazendo os sistemas conversarem entre si — o dado entra uma vez e circula sozinho para onde precisa ir.
            </p>
            <p>
              <strong>Passo 4: Meça e ajuste todo mês.</strong> Processo automatizado não é processo esquecido. Sistemas atualizam, regras de negócio mudam, volumes crescem. Uma rotina mensal de revisão — os fluxos rodaram? onde travou? o que mudou na operação? — mantém a estrutura saudável e revela o próximo processo a automatizar.
            </p>
          </section>

          <section className="insight-section">
            <h2>Automação de processos por segmento</h2>
            <p>
              Cada setor tem seus bastidores — e em todos eles o padrão se repete: rotinas manuais consumindo horas de gente qualificada.
            </p>
            <p>
              <strong>Advocacia:</strong> o controle de prazos e protocolos é o exemplo perfeito — cada prazo processual dispara lembretes automáticos para o advogado responsável, e a atualização do andamento chega ao cliente sem que ninguém precise redigir e-mail por e-mail.
            </p>
            <p>
              <strong>Contabilidade:</strong> a coleta mensal de documentos dos clientes, hoje feita à base de cobrança individual, vira um fluxo automático de solicitação, recebimento, conferência e lembrete — liberando os analistas para a análise, que é o que o cliente paga para ter.
            </p>
            <p>
              <strong>Clínicas e consultórios:</strong> o pós-consulta ganha vida própria — orientações enviadas automaticamente, acompanhamento no prazo definido pelo profissional e o convite de retorno chegando na data certa, mantendo a agenda cheia sem esforço da recepção.
            </p>
            <p>
              <strong>Serviços financeiros:</strong> a esteira de análise de propostas — coleta de documentos, validação, encaminhamento ao analista — deixa de depender de anexos perdidos em conversas e passa a fluir com cada etapa registrada e auditável.
            </p>
            <p>
              Em todos os casos, o resultado é o mesmo: a empresa entrega mais, com a mesma equipe, com menos erro e mais previsibilidade. A automação de processos é a camada de Estrutura que sustenta o crescimento que a automação comercial gera — as duas engrenagens do mesmo motor.
            </p>
          </section>

          {/* FAQ SECTION */}
          <section className="insight-faq-section">
            <h2 className="insight-faq-title">Perguntas Frequentes</h2>
            <div>
              {FAQS.map((faq, index) => (
                <div 
                  key={index} 
                  className={`insight-faq-item ${activeFaq === index ? 'active' : ''}`}
                >
                  <div className="insight-faq-q" onClick={() => toggleFaq(index)}>
                    <span>{faq.q}</span>
                    <span className="insight-faq-icon">+</span>
                  </div>
                  <div className="insight-faq-a">
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA BOX */}
          <div className="insight-cta-box">
            <div className="insight-cta-title">QUER SABER COMO ESTÁ A ESTRUTURA DIGITAL DA SUA EMPRESA HOJE?</div>
            <p className="insight-cta-sub">
              Faça o nosso diagnóstico digital completo de forma gratuita. Analisamos seus processos comerciais e operacionais e geramos um relatório técnico imediato identificando seus principais gargalos e como resolvê-los.
            </p>
            <a 
              href="/diagnostico" 
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

      <Footer
        onOpenQuiz={() => navigateTo('/diagnostico')}
        onOpenPilares={() => navigateTo('/pilares')}
        onOpenHistoria={() => navigateTo('/historia')}
      />
    </>
  );
}
