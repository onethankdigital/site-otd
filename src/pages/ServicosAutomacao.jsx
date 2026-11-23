import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ComoFunciona, SimuladorEstrutura, Jornada, Prova, Investimento, FaqLinks, CtaFinal, PaginaServico } from '../components/servico2/blocos';

const FAQS = [
  {
    q: "O agente de IA substitui minha equipe de atendimento?",
    a: "Não. Ele cuida do primeiro contato, das perguntas repetidas e dos horários em que ninguém está disponível. Quando a conversa pede uma pessoa, o atendimento passa para a equipe com o histórico registrado no CRM."
  },
  {
    q: "Como parar de perder clientes que mandam mensagem no WhatsApp fora do horário?",
    a: "Com o agente de IA na API oficial do WhatsApp, a mensagem é respondida na hora, 24 horas por dia. Ele tira as dúvidas frequentes, coleta os dados, oferece horários da agenda e avisa a equipe para o retorno. O cliente não espera e chega pronto para a conversa."
  },
  {
    q: "Automação de WhatsApp é permitida pela Meta?",
    a: "Sim, desde que feita com a API oficial do WhatsApp Business, que é a que utilizamos. Ferramentas não oficiais podem levar ao banimento do número; a API oficial segue as regras da Meta e dá estabilidade ao canal."
  },
  {
    q: "CRM e automação valem a pena para escritório contábil ou clínica pequena?",
    a: "Vale. Para empresas que dependem de relacionamento contínuo, o CRM integrado ao WhatsApp garante que nenhum cliente ativo vire cliente esquecido. O custo é acessível: menos de R$300/mês para um fluxo completo implementado."
  },
  {
    q: "Automação é só para empresas grandes?",
    a: "Não. Ferramentas como n8n e a API do WhatsApp permitem criar fluxos completos de captação, qualificação e retorno com custo mensal abaixo de R$300. O que diferencia não é o tamanho da empresa, é ter o processo configurado corretamente."
  },
  {
    q: "Quanto tempo leva para implementar a automação?",
    a: "Entre 2 e 4 semanas, conforme a complexidade. Um fluxo básico de WhatsApp com qualificação e agendamento fica pronto em cerca de 2 semanas. Integrações com CRM, Google Agenda e diagnóstico automático levam de 3 a 4 semanas."
  }
];

const PIECES = [
  { n: 1, t: "WhatsApp na API oficial", w: "Número protegido contra banimento e vários atendentes no mesmo número, com o histórico guardado fora do celular.", tech: "WhatsApp Business Platform (Meta)" },
  { n: 2, t: "Agente de IA no primeiro contato", w: "Responde na hora, 24 horas por dia, tira as dúvidas frequentes e entende o que o cliente precisa.", tech: "agente de IA treinado com a base da empresa" },
  { n: 3, t: "CRM com funil", w: "Cada contato vira um cartão com etapa, responsável e histórico. Você vê quem está parado e há quanto tempo.", tech: "CRM e pipeline de vendas" },
  { n: 4, t: "Agenda e retorno automáticos", w: "O agente oferece horários livres, confirma, lembra no dia anterior e avisa a equipe para o retorno.", tech: "integração com agenda e follow-up" }
];
const APROV = ["22%", "38%", "61%", "80%", "94%"];
const FILL = [8, 30, 55, 78, 100];

const SEGMENTS = {
  cont: { label: "Contabilidade", link: ["/segmentos/escritorios-de-contabilidade/", "Ver como atendemos escritórios de contabilidade"], q: [["Quais documentos preciso para abrir empresa?", "R"], ["Vocês atendem MEI?", "R"], ["Como funciona a troca de contador?", "R"], ["Quero agendar uma conversa", "R"], ["Qual regime tributário é melhor para mim?", "P"], ["Recebi uma notificação da Receita", "P"]] },
  adv: { label: "Advocacia", link: ["/segmentos/escritorios-de-advocacia/", "Ver como atendemos escritórios de advocacia"], q: [["Vocês atendem direito trabalhista?", "R"], ["O que levar na primeira consulta?", "R"], ["Qual o endereço e o horário?", "R"], ["Quero agendar uma consulta", "R"], ["Tenho direito a indenização?", "P"], ["Fui demitido, o que eu faço?", "P"]] },
  cli: { label: "Clínicas", link: ["/segmentos/clinicas-e-consultorios/", "Ver como atendemos clínicas e consultórios"], q: [["Vocês aceitam o meu convênio?", "R"], ["Como me preparo para o exame?", "R"], ["Atendem no sábado?", "R"], ["Quero marcar uma consulta", "R"], ["Esse remédio serve para mim?", "P"], ["Estou com uma dor forte agora", "U"]] },
  b2b: { label: "Indústria e B2B", link: ["/diagnostico/", "Fazer o diagnóstico da sua empresa"], q: [["Vocês fazem lote pequeno?", "R"], ["Qual o prazo de produção?", "R"], ["Posso enviar o desenho técnico?", "R"], ["Onde fica a fábrica?", "R"], ["Orçamento de projeto sob medida", "P"], ["Negociar condição de pagamento", "P"]] }
};
const KIND = { R: 'agente responde', P: 'passa para a equipe', U: 'orienta o 192 e avisa a equipe' };

const FASES = [
  {
    when: 'Semana 1', t: 'Mapeamento', x0: 0, x1: 333,
    resumo: 'Entendemos como o atendimento funciona hoje antes de automatizar qualquer coisa.',
    entrega: ['Mapa de como os contatos chegam e são atendidos hoje', 'Base de respostas do agente com as informações da empresa', 'Regras do que o agente responde e do que passa para a equipe', 'Número conectado à API oficial do WhatsApp'],
    ve: 'O roteiro do atendimento para você aprovar.'
  },
  {
    when: 'Semanas 2 a 4', t: 'Implantação', x0: 333, x1: 666,
    resumo: 'Tudo é montado e testado com conversas reais antes de ir para o seu cliente.',
    entrega: ['Agente de IA configurado e testado com conversas reais', 'CRM com o funil e as etapas do seu processo', 'Agenda, lembretes e retorno automáticos', 'Equipe treinada para assumir as conversas'],
    ve: 'Conversas de teste para você validar antes de ligar.'
  },
  {
    when: 'Mês 2 em diante', t: 'Operação e ajuste', x0: 666, x1: 1000,
    resumo: 'Com o atendimento rodando, os dados mostram onde melhorar.',
    entrega: ['Acompanhamento das conversas e ajustes nas respostas', 'Novas perguntas incluídas na base do agente', 'Relatório de contatos, tempo de resposta e agendamentos', 'Melhorias no funil conforme os resultados'],
    ve: 'Relatório mensal com contatos, respostas e o que virou cliente.'
  }
];

const AU_CSS = `
  .seo2 .wa{background:#efeae2;border-radius:12px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.4;color:#111b21}
  .seo2 .wa-head{display:flex;align-items:center;gap:10px;background:#075e54;color:#fff;padding:10px 12px}
  .seo2 .wa-av{width:32px;height:32px;border-radius:50%;background:#e0040b;display:grid;place-items:center;font-weight:700;font-size:13px}
  .seo2 .wa-head b{display:block;font-size:14px}
  .seo2 .wa-head small{font-size:11.5px;opacity:.85}
  .seo2 .wa-badge{margin-left:auto;background:rgba(255,255,255,.18);border-radius:999px;padding:2px 8px;font-size:10.5px;font-weight:700}
  .seo2 .wa-body{padding:12px;display:flex;flex-direction:column;gap:7px;min-height:330px;background-image:radial-gradient(rgba(0,0,0,.04) 1px,transparent 1px);background-size:14px 14px}
  .seo2 .wa-m{max-width:82%;padding:7px 10px 16px;border-radius:8px;position:relative;box-shadow:0 1px 1px rgba(0,0,0,.08);font-size:13.5px}
  .seo2 .wa-m.in{align-self:flex-start;background:#fff}
  .seo2 .wa-m.out{align-self:flex-end;background:#d9fdd3}
  .seo2 .wa-m time{position:absolute;right:8px;bottom:3px;font-size:10px;color:#667781}
  .seo2 .wa-sys{align-self:center;background:#fff6d1;color:#54656f;font-size:11.5px;border-radius:6px;padding:4px 10px;text-align:center}
  .seo2 .wa-sys.bad{background:#ffe1e1;color:#b3261e;font-weight:700}
  .seo2 .wa-sys.ok{background:#dcf8e8;color:#0a6b3b;font-weight:700}
  .seo2 .wa-tag{display:inline-block;font-size:10.5px;color:#667781;margin-bottom:2px}

  .seo2 .crm{background:var(--paper);color:var(--ink);border-radius:12px;padding:12px;margin-top:16px;font-family:Arial,Helvetica,sans-serif}
  .seo2 .crm-cols{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}
  .seo2 .crm-col{background:#f1f3f4;border-radius:8px;padding:6px;min-height:110px}
  .seo2 .crm-col h5{margin:0 0 6px;font-size:10.5px;text-transform:uppercase;letter-spacing:.05em;color:#5f6368}
  .seo2 .crm-card{background:#fff;border-radius:6px;padding:5px 6px;font-size:11px;box-shadow:0 1px 2px rgba(0,0,0,.08);margin-bottom:5px;border-left:3px solid #9aa0a6}
  .seo2 .crm-card.hot{border-left-color:var(--red)}
  .seo2 .crm-card.ok{border-left-color:#188038}
  .seo2 .crm-off{display:grid;place-items:center;min-height:110px;color:#80868b;font-size:12.5px;text-align:center;border:1px dashed #dadce0;border-radius:8px}
  .seo2 .crm-chat{background:#efeae2;border-radius:8px;padding:8px;margin-bottom:8px;display:flex;flex-direction:column;gap:5px}
  .seo2 .crm-chat .wa-m{font-size:12px;padding:5px 8px 13px}
  .seo2 .crm-agenda{margin-top:8px;display:flex;gap:6px;flex-wrap:wrap}
  .seo2 .crm-agenda span{background:#e6f4ea;color:#137333;border-radius:999px;padding:2px 9px;font-size:11.5px;font-weight:700}
  .seo2 .kind.pp{color:#b45309;border-color:#b45309}
  .seo2 .kind.uu{color:#b3261e;border-color:#b3261e}
  @media (max-width:860px){
    .seo2 .wa-body{min-height:0}
    .seo2 .crm-cols{grid-template-columns:1fr 1fr}
    .seo2 .crm-col{min-height:70px}
  }
`;

function WhatsHero() {
  const [v, setV] = useState('hoje');
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || touched) return undefined;
    const t = setTimeout(() => setV('com'), 3500);
    return () => clearTimeout(t);
  }, [touched]);
  const com = v === 'com';
  return (
    <div className="serp-box">
      <div className="segc" role="tablist" aria-label="Comparar atendimento">
        <button type="button" role="tab" aria-selected={!com} onClick={() => { setTouched(true); setV('hoje'); }}>Sem automação</button>
        <button type="button" role="tab" aria-selected={com} onClick={() => { setTouched(true); setV('com'); }}>Com agente de IA</button>
      </div>
      <div className="wa" aria-live="polite">
        <div className="wa-head">
          <span className="wa-av" aria-hidden="true">SC</span>
          <div><b>Sua Contabilidade</b><small>{com ? 'online' : 'visto por último ontem às 18:02'}</small></div>
          {com && <span className="wa-badge">API oficial</span>}
        </div>
        <div className="wa-body">
          <div className="wa-sys">Sexta-feira</div>
          <div className="wa-m in">Boa noite! Vocês atendem sábado? Quanto custa para abrir uma empresa?<time>21:04</time></div>
          {com ? (
            <>
              <div className="wa-m out"><span className="wa-tag">Assistente virtual</span><br />Boa noite! Sou o assistente virtual da Sua Contabilidade. Atendemos sábado das 9h às 12h. O valor depende do tipo de empresa: você vai abrir MEI ou empresa de serviços?<time>21:04</time></div>
              <div className="wa-m in">Empresa de serviços, sou designer.<time>21:05</time></div>
              <div className="wa-m out">Perfeito! Tenho sábado às 10h para uma conversa de 15 minutos com a contadora. Posso confirmar?<time>21:05</time></div>
              <div className="wa-m in">Pode sim!<time>21:06</time></div>
              <div className="wa-sys ok">Agendado: sábado, 10h · resumo enviado à equipe no CRM</div>
            </>
          ) : (
            <>
              <div className="wa-sys">Segunda-feira</div>
              <div className="wa-m out">Bom dia! Desculpe a demora, ainda precisa de ajuda?<time>09:42</time></div>
              <div className="wa-m in">Já resolvi com outro escritório, obrigado.<time>10:15</time></div>
              <div className="wa-sys bad">Cliente perdido: 60 horas sem resposta</div>
            </>
          )}
        </div>
      </div>
      <div className="cap">Exemplo ilustrativo · toque nas abas para comparar</div>
    </div>
  );
}

export default function ServicosAutomacao() {
  const [on, setOn] = useState({ 1: true, 2: false, 3: false, 4: false });
  const [seg, setSeg] = useState('cont');
  const n = Object.values(on).filter(Boolean).length;
  const toggle = (k) => setOn((o) => ({ ...o, [k]: !o[k] }));
  const S = SEGMENTS[seg];

  return (
    <PaginaServico>
      <style>{AU_CSS}</style>
      <Helmet>
        <title>Automação com IA no WhatsApp e CRM | One Thank Digital</title>
        <meta name="description" content="Agentes de IA no WhatsApp, CRM e funil automatizados para escritórios, clínicas e empresas B2B do ABC: responder, qualificar e não perder lead, 24 horas por dia." />
        <meta property="og:title" content="Automação com IA: WhatsApp, CRM e Leads 24h | One Thank Digital" />
        <meta property="og:description" content="Agentes de IA no WhatsApp, CRM e funil automatizados para escritórios, clínicas e empresas B2B do ABC: responder, qualificar e não perder lead, 24 horas por dia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onethank.com.br/servicos/automacao-digital/" />
        <meta property="og:image" content="https://onethank.com.br/hero-automacao-digital.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Automação com IA: WhatsApp, CRM e Leads 24h | One Thank Digital" />
        <meta property="twitter:description" content="Agentes de IA no WhatsApp, CRM e funil automatizados para escritórios, clínicas e empresas B2B do ABC: responder, qualificar e não perder lead, 24 horas por dia." />
        <meta property="twitter:image" content="https://onethank.com.br/hero-automacao-digital.webp" />
        <link rel="canonical" href="https://onethank.com.br/servicos/automacao-digital/" />
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": FAQS.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } }))
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Automação com IA: Agentes no WhatsApp e CRM",
              "provider": { "@type": "LocalBusiness", "name": "One Thank Digital", "address": { "@type": "PostalAddress", "addressLocality": "Santo André", "addressRegion": "SP" } },
              "areaServed": [{ "@type": "City", "name": "Santo André" }, { "@type": "City", "name": "São Bernardo do Campo" }, { "@type": "City", "name": "São Caetano do Sul" }],
              "offers": { "@type": "Offer", "priceSpecification": { "@type": "PriceSpecification", "priceType": "https://schema.org/MinimumBasePrice" }, "availability": "https://schema.org/InStock" }
            }
          ])}
        </script>
      </Helmet>

      {/* TOPO com simulação do WhatsApp */}
      <section style={{ borderTop: 0, paddingTop: 40 }}>
        <div className="wrap head-grid">
          <div>
            <h1 className="eyebrow">Automação com IA: WhatsApp, CRM e qualificação de leads</h1>
            <p className="display">21h de sexta: <em>“Quanto custa?”</em> Quem responde na sua empresa?</p>
            <p className="lead">Colocamos um agente de IA no WhatsApp oficial da sua empresa: responde na hora, agenda, registra tudo no CRM e passa para a sua equipe o que precisa de uma pessoa.</p>
            <div className="head-cta">
              <a className="btn" href="/diagnostico/">Ver quanto meu atendimento perde →</a>
              <small>Diagnóstico gratuito em 3 minutos</small>
            </div>
          </div>
          <WhatsHero />
        </div>
      </section>

      <ComoFunciona atual="auto" />

      {/* O QUE FAZEMOS (interativo) */}
      <section>
        <div className="wrap">
          <p className="eyebrow">O que fazemos</p>
          <h2>Ative cada etapa e veja <em>nenhum contato se perder</em></h2>
          <p className="lead" style={{ marginTop: 14 }}>Um atendimento automatizado de verdade tem quatro partes. Toque em cada uma e veja, ao lado, o que muda na rotina da sua equipe.</p>
          <div className="lab4">
            <div className="lab4-preview" aria-live="polite">
              <div className="meter-top"><span>Contatos aproveitados (ilustrativo)</span><b>{APROV[n]}</b></div>
              <div className="meter-bar"><i style={{ width: FILL[n] + '%' }} /></div>
              <div className="chips">
                <span className={'chip' + (on[2] ? ' on' : '')}>Resposta 24h</span>
                <span className={'chip' + (on[3] ? ' on' : '')}>Nada se perde</span>
                <span className={'chip' + (on[4] ? ' on' : '')}>Menos faltas</span>
              </div>
              <div className="crm">
                <div className="crm-chat">
                  <div className="wa-m in">Vocês atendem MEI?<time>21:04</time></div>
                  {on[2]
                    ? <div className="wa-m out">Atendemos sim! Posso te ajudar a escolher um horário com a contadora?<time>21:04</time></div>
                    : <div className="wa-sys">Sem resposta até o próximo dia útil</div>}
                </div>
                {on[3] ? (
                  <div className="crm-cols">
                    <div className="crm-col"><h5>Novo</h5><div className="crm-card hot">Marina · MEI</div><div className="crm-card">Paulo · troca</div></div>
                    <div className="crm-col"><h5>Qualificado</h5><div className="crm-card">Clínica Sol</div></div>
                    <div className="crm-col"><h5>Agendado</h5>{on[4] && <div className="crm-card ok">Rafael · sáb 10h</div>}</div>
                    <div className="crm-col"><h5>Cliente</h5><div className="crm-card ok">Ana · abertura</div></div>
                  </div>
                ) : (
                  <div className="crm-off">Contatos espalhados no celular de cada atendente.<br />Ninguém sabe quem ficou sem retorno.</div>
                )}
                {on[4] && <div className="crm-agenda"><span>Sáb 10h confirmado</span><span>Lembrete enviado 1 dia antes</span><span>Retorno agendado</span></div>}
                {!on[1] && <div className="wa-sys bad" style={{ marginTop: 8 }}>Ferramenta não oficial: risco de banimento do número</div>}
              </div>
              <div className="cap">Exemplo ilustrativo</div>
            </div>
            <div className="pieces" role="group" aria-label="Etapas da automação">
              {PIECES.map((p) => (
                <button type="button" key={p.n} className="piece" aria-pressed={on[p.n]} onClick={() => toggle(p.n)}>
                  <span className="sw" aria-hidden="true"><i /></span>
                  <span className="pc">
                    <span className="pn">Etapa {p.n}</span>
                    <strong>{p.t}</strong>
                    <span className="pw">{p.w}</span>
                    <span className="pt">Termo técnico: {p.tech}</span>
                  </span>
                </button>
              ))}
              <div className="pieces-foot">
                <button type="button" className="btn-ghost" onClick={() => setOn({ 1: true, 2: true, 3: true, 4: true })}>Ativar todas</button>
                <button type="button" className="btn-ghost" onClick={() => setOn({ 1: false, 2: false, 3: false, 4: false })}>Recomeçar</button>
                <span>{n} de 4 etapas ativas</span>
              </div>
            </div>
          </div>
          <div className="mid-cta">
            <a className="btn" href="/diagnostico/">Quero meu atendimento assim →</a>
            <small>Diagnóstico gratuito, resultado na hora</small>
          </div>
        </div>
      </section>

      {/* O QUE O AGENTE RESPONDE */}
      <section className="light">
        <div className="wrap">
          <p className="eyebrow">Limites claros</p>
          <h2>Escolha o seu segmento e veja <em>o que o agente responde e o que fica com a sua equipe</em></h2>
          <div className="tabs" role="tablist" aria-label="Segmento">
            {Object.entries(SEGMENTS).map(([k, x]) => (
              <button type="button" key={k} role="tab" aria-selected={seg === k} onClick={() => setSeg(k)}>{x.label}</button>
            ))}
          </div>
          <ul className="queries">
            {S.q.map(([q, kind]) => (
              <li key={q}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.2A8.5 8.5 0 1 1 21 12z" /></svg>
                <span>{q}</span>
                <span className={'kind' + (kind === 'P' ? ' pp' : kind === 'U' ? ' uu' : '')}>{KIND[kind]}</span>
              </li>
            ))}
          </ul>
          <a className="seg-link" href={S.link[0]}>{S.link[1]} →</a>
        </div>
      </section>

      {/* ESTRUTURA DIGITAL */}
      <section className="leaksec">
        <SimuladorEstrutura atual="auto" titulo={<>Responder rápido fecha negócio. <em>A estrutura traz o cliente até você.</em></>} />
      </section>

      {/* O QUE ESPERAR */}
      <section>
        <div className="wrap">
          <Jornada fases={FASES} rotulo="CONTATOS APROVEITADOS (ILUSTRATIVO)" titulo={<>Do mapeamento ao atendimento rodando. <em>Veja o que entregamos em cada fase</em></>} />
        </div>
      </section>

      <Prova />

      <Investimento
        titulo={<>Na API oficial, <em>sem risco para o seu número</em></>}
        texto="O valor depende do volume de contatos, das integrações e do número de atendentes. Usamos a API oficial do WhatsApp e testamos tudo antes na nossa própria operação, com o OneHub."
        itens={[
          ['Diagnóstico antes da proposta', 'Você sabe quanto o atendimento perde hoje antes de decidir.'],
          ['Teste antes de ligar', 'Você valida as conversas do agente antes de ir para o cliente.'],
          ['Dentro das regras', 'API oficial da Meta, aviso de assistente virtual e cuidado com a LGPD.']
        ]}
      />

      <FaqLinks
        atual="auto"
        faqs={FAQS}
        aprofunde={[
          ['/guia/automacao-digital/', 'Guia de automação digital'],
          ['/onehub/', 'Conheça o OneHub'],
          ['/insights/leads-perdidos-whatsapp-resposta-rapida/', 'Leads perdidos no WhatsApp'],
          ['/insights/o-que-e-crm-pequenas-empresas/', 'O que é CRM'],
          ['/insights/como-organizar-leads-whatsapp-no-crm/', 'Organizar leads no CRM']
        ]}
      />

      <CtaFinal
        titulo={<>Quantos clientes chamaram <em>e ninguém respondeu</em> este mês?</>}
        texto="Responda 20 perguntas em 3 minutos e receba o resultado por pilar, incluindo Automação."
        barra="Seu WhatsApp responde na hora?"
      />
    </PaginaServico>
  );
}
