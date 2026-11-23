import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ComoFunciona, SimuladorIA, SimuladorEstrutura, Jornada, Prova, Investimento, FaqLinks, CtaFinal, PaginaServico } from '../components/servico2/blocos';

const FAQS = [
  {
    q: "O site é feito com inteligência artificial?",
    a: "A IA acelera o desenvolvimento, mas não substitui o trabalho técnico. Estrutura, textos e código são revisados por nós antes de ir ao ar, e o site sai preparado para o Google e para as buscas por IA."
  },
  {
    q: "Por que meu site tem visitas mas não gera clientes?",
    a: "Visitas sem contato costumam indicar problema de comunicação, não de tráfego. Se a primeira tela não diz o que você resolve, se não há um botão claro para falar com você ou se o site demora no celular, a maioria das pessoas vai embora antes de ler."
  },
  {
    q: "Vale mais ter site ou só Instagram para empresa B2B?",
    a: "O Instagram é terreno alugado: o algoritmo muda, o alcance cai e a conta pode ser suspensa. O site é território próprio: você controla os dados, a experiência e o posicionamento no Google. O Instagram amplifica. O site converte."
  },
  {
    q: "Quanto tempo leva para desenvolver um site profissional?",
    a: "Entre 3 e 6 semanas, conforme a complexidade. Sites institucionais para escritórios e clínicas costumam ficar prontos em cerca de 3 semanas. Projetos com blog, área de membros ou e-commerce levam de 4 a 6 semanas."
  },
  {
    q: "O site já vem otimizado para o Google?",
    a: "Sim. Todo site entregue pela One Thank Digital inclui estrutura semântica, títulos e descrições, dados estruturados (Schema.org), sitemap, robots.txt e meta de 90 ou mais no PageSpeed para celular. O próprio site da OTD está com 97."
  },
  {
    q: "Preciso pagar hospedagem separadamente?",
    a: "A hospedagem é configurada e entregue por nós com o projeto. Usamos servidores com SSL, CDN e backups automáticos. O custo mensal de manutenção é discutido no diagnóstico conforme o escopo do projeto."
  }
];

const PIECES = [
  { n: 1, t: "Mensagem clara na primeira tela", w: "Em 3 segundos o cliente entende o que você resolve, para quem e onde. Nada de “Bem-vindo ao nosso site”.", tech: "proposta de valor e arquitetura de conversão" },
  { n: 2, t: "Rápido no celular", w: "É no celular que o cliente pesquisa. Site leve abre antes de ele desistir, e o Google prefere páginas rápidas.", tech: "performance e Core Web Vitals" },
  { n: 3, t: "Prova e confiança", w: "Avaliações reais, casos e quem está por trás da empresa. O cliente confia antes de chamar.", tech: "prova social e autoridade" },
  { n: 4, t: "Contato sem atrito", w: "WhatsApp em um toque e formulário curto, ligados ao seu atendimento. Nenhum contato se perde.", tech: "CTA, integração e CRM" }
];
const CONV = ["0,4%", "1%", "1,8%", "2,7%", "3,5%"];
const FILL = [8, 30, 55, 78, 100];

const SEGMENTS = {
  cont: { label: "Contabilidade", link: ["/segmentos/escritorios-de-contabilidade/", "Ver como atendemos escritórios de contabilidade"], q: [["Abertura de empresa", "Serviço"], ["Troca de contador", "Serviço"], ["Contabilidade para MEI", "Serviço"], ["Quanto custa abrir uma empresa?", "Dúvida"], ["Quando devo sair do MEI?", "Dúvida"], ["Clientes atendidos e equipe", "Confiança"]] },
  adv: { label: "Advocacia", link: ["/segmentos/escritorios-de-advocacia/", "Ver como atendemos escritórios de advocacia"], q: [["Direito trabalhista", "Serviço"], ["Direito de família", "Serviço"], ["Direito previdenciário", "Serviço"], ["O que levar na primeira consulta?", "Dúvida"], ["Como funciona o inventário?", "Dúvida"], ["Equipe e registro na OAB", "Confiança"]] },
  cli: { label: "Clínicas", link: ["/segmentos/clinicas-e-consultorios/", "Ver como atendemos clínicas e consultórios"], q: [["Especialidades e exames", "Serviço"], ["Convênios aceitos", "Serviço"], ["Agendamento on-line", "Serviço"], ["Como me preparar para o exame?", "Dúvida"], ["Quanto tempo dura o tratamento?", "Dúvida"], ["Corpo clínico e registros", "Confiança"]] },
  b2b: { label: "Indústria e B2B", link: ["/diagnostico/", "Fazer o diagnóstico da sua empresa"], q: [["Linha de produtos", "Serviço"], ["Sob medida e lotes", "Serviço"], ["Pedido de orçamento", "Serviço"], ["Qual o prazo de produção?", "Dúvida"], ["Atendem lote pequeno?", "Dúvida"], ["Clientes, certificações e fábrica", "Confiança"]] }
};
const KIND = { 'Serviço': 'página de serviço', 'Dúvida': 'pergunta frequente', 'Confiança': 'prova de confiança' };

const FASES = [
  {
    when: 'Semana 1', t: 'Estratégia', x0: 0, x1: 333,
    resumo: 'Antes de qualquer código, definimos o que o site precisa dizer e para quem.',
    entrega: ['Diagnóstico do site atual e dos concorrentes da região', 'Mapa das páginas e das buscas de cada serviço', 'Textos com base nas informações reais da sua empresa', 'Layout aprovado por você antes do desenvolvimento'],
    ve: 'O mapa do site e o layout para você aprovar.'
  },
  {
    when: 'Semanas 2 a 4', t: 'Desenvolvimento com IA', x0: 333, x1: 666,
    resumo: 'A IA acelera o trabalho braçal; cada página é revisada por quem entende de código, busca e conversão.',
    entrega: ['Site desenvolvido com IA e revisado página por página', 'Rápido no celular, com meta de 90 ou mais no PageSpeed', 'SEO técnico, dados estruturados e llms.txt', 'WhatsApp e formulário ligados ao seu atendimento'],
    ve: 'Uma versão de teste para você navegar e pedir ajustes.'
  },
  {
    when: 'Semana 5 em diante', t: 'No ar e evoluindo', x0: 666, x1: 1000,
    resumo: 'O site entra no ar medido desde o primeiro dia, e melhora com o que os dados mostram.',
    entrega: ['Publicação com domínio e SSL configurados', 'Google Search Console e Analytics ligados', 'Ajustes a partir das primeiras visitas e contatos', 'Manutenção e melhorias conforme o plano combinado'],
    ve: 'Relatório com visitas, contatos e a nota de desempenho do site.'
  }
];

const ST_CSS = `
  .seo2 .phone{width:100%;max-width:330px;margin:0 auto;background:#111;border-radius:30px;padding:10px;box-shadow:0 30px 60px -20px rgba(0,0,0,.7),inset 0 0 0 1px #2a2a2e}
  .seo2 .phone-in{background:#fff;color:#202124;border-radius:22px;overflow:hidden;min-height:430px;display:flex;flex-direction:column;font-family:Arial,Helvetica,sans-serif}
  .seo2 .ph-bar{display:flex;align-items:center;gap:8px;padding:8px 12px;background:#f1f3f4;font-size:11px;color:#5f6368}
  .seo2 .ph-url{flex:1;background:#fff;border-radius:999px;padding:3px 10px}
  .seo2 .ph-score{flex:none;font-weight:700;border-radius:999px;padding:2px 8px;font-size:11px;color:#fff}
  .seo2 .ph-score.bad{background:#d93025}
  .seo2 .ph-score.ok{background:#f29900}
  .seo2 .ph-score.good{background:#188038}
  .seo2 .ph-load{flex:1;display:grid;place-items:center;align-content:center;gap:10px;color:#80868b;font-size:13px;padding:20px;text-align:center}
  .seo2 .ph-spin{width:34px;height:34px;border-radius:50%;border:4px solid #e8eaed;border-top-color:#9aa0a6;animation:seo2spin 1s linear infinite}
  @keyframes seo2spin{to{transform:rotate(360deg)}}
  .seo2 .ph-hero{padding:18px 16px;background:linear-gradient(160deg,#1f2937,#111827);color:#fff}
  .seo2 .ph-hero.old{background:#cfd8dc;color:#455a64}
  .seo2 .ph-hero h4{margin:0 0 6px;font-size:19px;line-height:1.2;font-family:Arial,Helvetica,sans-serif}
  .seo2 .ph-hero p{font-size:12.5px;opacity:.85;margin:0}
  .seo2 .ph-cta{display:inline-block;margin-top:12px;background:#25d366;color:#fff;font-weight:700;font-size:13px;padding:8px 12px;border-radius:8px}
  .seo2 .ph-sec{padding:12px 16px;border-bottom:1px solid #f1f3f4;font-size:12.5px}
  .seo2 .ph-sec b{display:block;font-size:13px;margin-bottom:2px}
  .seo2 .ph-trust{display:flex;align-items:center;gap:8px;font-size:12px;color:#5f6368}
  .seo2 .ph-trust .st{color:#f5a623;letter-spacing:1px}
  .seo2 .ph-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px}
  .seo2 .ph-grid span{background:#f1f3f4;border-radius:6px;padding:6px 8px;font-size:11.5px}
  .seo2 .ph-old{padding:14px 16px;font-size:12.5px;color:#5f6368}
  .seo2 .ph-old .blk{height:8px;background:#e8eaed;border-radius:4px;margin:6px 0}
  .seo2 .ph-wa{margin:auto 12px 12px;background:#25d366;color:#fff;border-radius:10px;padding:10px;text-align:center;font-weight:700;font-size:13px}
  .seo2 .ph-form{margin:auto 12px 12px;border:1px dashed #dadce0;border-radius:10px;padding:10px;text-align:center;font-size:12px;color:#80868b}
  .seo2 .lab4-preview .phone{max-width:300px}
  .seo2 .lab4-preview .phone-in{min-height:400px}
  @media (max-width:860px){
    .seo2 .phone{max-width:280px}
    .seo2 .phone-in,.seo2 .lab4-preview .phone-in{min-height:0}
    .seo2 .lab4-preview .phone{max-width:240px}
    .seo2 .lab4-preview .ph-sec:nth-of-type(n+3){display:none}
  }
`;

function SiteHero() {
  const [v, setV] = useState('hoje');
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || touched) return undefined;
    const t = setTimeout(() => setV('com'), 3000);
    return () => clearTimeout(t);
  }, [touched]);
  const com = v === 'com';
  return (
    <div className="serp-box">
      <div className="segc" role="tablist" aria-label="Comparar site">
        <button type="button" role="tab" aria-selected={!com} onClick={() => { setTouched(true); setV('hoje'); }}>Site que só existe</button>
        <button type="button" role="tab" aria-selected={com} onClick={() => { setTouched(true); setV('com'); }}>Site que trabalha</button>
      </div>
      <div className="phone" aria-live="polite">
        <div className="phone-in">
          <div className="ph-bar">
            <span className="ph-url">suacontabilidade.com.br</span>
            <span className={'ph-score ' + (com ? 'good' : 'bad')}>{com ? '97 · 1,2 s' : '31 · 8,4 s'}</span>
          </div>
          {com ? (
            <>
              <div className="ph-hero">
                <h4>Abertura de empresa em Santo André em até 7 dias</h4>
                <p>Contabilidade para MEI, Simples Nacional e prestadores de serviço.</p>
                <span className="ph-cta">Falar no WhatsApp agora</span>
              </div>
              <div className="ph-sec ph-trust"><span className="st">★★★★★</span> 4,9 no Google · 87 avaliações</div>
              <div className="ph-sec"><b>Como funciona</b>1. Conversa de 15 minutos · 2. Documentos · 3. CNPJ pronto</div>
              <div className="ph-sec"><b>Perguntas frequentes</b>Quanto custa abrir uma empresa? ▾</div>
            </>
          ) : (
            <>
              <div className="ph-load"><span className="ph-spin" aria-hidden="true" />Carregando… a página ainda não abriu.<br />Muita gente já desistiu e voltou ao Google.</div>
              <div className="ph-hero old"><h4>Bem-vindo ao nosso site</h4><p>Somos uma empresa séria e comprometida.</p></div>
            </>
          )}
        </div>
      </div>
      <div className="cap">Exemplo ilustrativo · nota de desempenho no celular e tempo de carregamento</div>
    </div>
  );
}

export default function ServicosSite() {
  const [on, setOn] = useState({ 1: true, 2: false, 3: false, 4: false });
  const [seg, setSeg] = useState('cont');
  const n = Object.values(on).filter(Boolean).length;
  const toggle = (k) => setOn((o) => ({ ...o, [k]: !o[k] }));
  const S = SEGMENTS[seg];

  return (
    <PaginaServico>
      <style>{ST_CSS}</style>
      <Helmet>
        <title>Criação de Sites Profissionais B2B | One Thank Digital</title>
        <meta name="description" content="Sites de alta conversão desenvolvidos com IA para empresas B2B do ABC Paulista: rápidos, com SEO técnico e prontos para serem citados pelo Google e pelas IAs." />
        <meta property="og:title" content="Site Profissional para Empresas B2B | One Thank Digital" />
        <meta property="og:description" content="Sites de alta conversão desenvolvidos com IA para empresas B2B do ABC Paulista: rápidos, com SEO técnico e prontos para serem citados pelo Google e pelas IAs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onethank.com.br/servicos/criacao-de-sites/" />
        <meta property="og:image" content="https://onethank.com.br/hero-desenvolvimento-web.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Site Profissional para Empresas B2B | One Thank Digital" />
        <meta property="twitter:description" content="Sites de alta conversão desenvolvidos com IA para empresas B2B do ABC Paulista: rápidos, com SEO técnico e prontos para serem citados pelo Google e pelas IAs." />
        <meta property="twitter:image" content="https://onethank.com.br/hero-desenvolvimento-web.webp" />
        <link rel="canonical" href="https://onethank.com.br/servicos/criacao-de-sites/" />
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
              "name": "Criação de Sites B2B Desenvolvidos com IA",
              "provider": { "@type": "LocalBusiness", "name": "One Thank Digital", "address": { "@type": "PostalAddress", "addressLocality": "Santo André", "addressRegion": "SP" } },
              "areaServed": [{ "@type": "City", "name": "Santo André" }, { "@type": "City", "name": "São Bernardo do Campo" }, { "@type": "City", "name": "São Caetano do Sul" }],
              "offers": { "@type": "Offer", "priceSpecification": { "@type": "PriceSpecification", "priceType": "https://schema.org/MinimumBasePrice" }, "availability": "https://schema.org/InStock" }
            }
          ])}
        </script>
      </Helmet>

      {/* TOPO com simulação do site */}
      <section style={{ borderTop: 0, paddingTop: 40 }}>
        <div className="wrap head-grid">
          <div>
            <h1 className="eyebrow">Criação de sites profissionais para empresas B2B no ABC Paulista</h1>
            <p className="display">Seu site <em>traz cliente</em> ou só existe?</p>
            <p className="lead">Desenvolvemos sites com IA, revisados página por página: rápidos no celular, claros na primeira tela e prontos para o Google e para as respostas das IAs.</p>
            <div className="head-cta">
              <a className="btn" href="/diagnostico/">Avaliar meu site atual →</a>
              <small>Diagnóstico gratuito em 3 minutos</small>
            </div>
          </div>
          <SiteHero />
        </div>
      </section>

      <ComoFunciona atual="site" />

      {/* O QUE FAZEMOS (interativo) */}
      <section>
        <div className="wrap">
          <p className="eyebrow">O que fazemos</p>
          <h2>Ative cada etapa e veja <em>seu site virar vendedor</em></h2>
          <p className="lead" style={{ marginTop: 14 }}>Um site que gera contato tem quatro partes. Toque em cada uma e veja, ao lado, o que o cliente passa a encontrar.</p>
          <div className="lab4">
            <div className="lab4-preview" aria-live="polite">
              <div className="meter-top"><span>Visitas que viram contato (ilustrativo)</span><b>{CONV[n]}</b></div>
              <div className="meter-bar"><i style={{ width: FILL[n] + '%' }} /></div>
              <div className="chips">
                <span className={'chip' + (on[2] ? ' on' : '')}>Rápido no celular</span>
                <span className={'chip' + (on[3] ? ' on' : '')}>Passa confiança</span>
                <span className={'chip' + (on[4] ? ' on' : '')}>Contato em 1 toque</span>
              </div>
              <div className="phone" style={{ marginTop: 16 }}>
                <div className="phone-in">
                  <div className="ph-bar">
                    <span className="ph-url">suacontabilidade.com.br</span>
                    <span className={'ph-score ' + (on[2] ? 'good' : 'bad')}>{on[2] ? '97 · 1,2 s' : '34 · 7,9 s'}</span>
                  </div>
                  {on[1] ? (
                    <div className="ph-hero">
                      <h4>Abertura de empresa em Santo André em até 7 dias</h4>
                      <p>Contabilidade para MEI, Simples Nacional e prestadores de serviço.</p>
                      {on[4] && <span className="ph-cta">Falar no WhatsApp agora</span>}
                    </div>
                  ) : (
                    <div className="ph-hero old"><h4>Bem-vindo ao nosso site</h4><p>Somos uma empresa séria e comprometida com nossos clientes.</p></div>
                  )}
                  {on[3] ? (
                    <>
                      <div className="ph-sec ph-trust"><span className="st">★★★★★</span> 4,9 no Google · 87 avaliações</div>
                      <div className="ph-sec"><b>Quem cuida da sua empresa</b><div className="ph-grid"><span>12 anos no ABC</span><span>+300 empresas abertas</span></div></div>
                    </>
                  ) : (
                    <div className="ph-old"><div className="blk" style={{ width: '90%' }} /><div className="blk" style={{ width: '70%' }} /><div className="blk" style={{ width: '80%' }} /></div>
                  )}
                  {on[4] ? <div className="ph-wa">WhatsApp · resposta na hora</div> : <div className="ph-form">Formulário com 9 campos · “responderemos em breve”</div>}
                </div>
              </div>
              <div className="cap">Exemplo ilustrativo</div>
            </div>
            <div className="pieces" role="group" aria-label="Etapas do site">
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
            <a className="btn" href="/diagnostico/">Quero um site assim →</a>
            <small>Diagnóstico gratuito, resultado na hora</small>
          </div>
        </div>
      </section>

      {/* PÁGINAS POR SEGMENTO */}
      <section className="light">
        <div className="wrap">
          <p className="eyebrow">O que o seu site precisa ter</p>
          <h2>Escolha o seu segmento e veja <em>as páginas que o cliente procura</em></h2>
          <div className="tabs" role="tablist" aria-label="Segmento">
            {Object.entries(SEGMENTS).map(([k, x]) => (
              <button type="button" key={k} role="tab" aria-selected={seg === k} onClick={() => setSeg(k)}>{x.label}</button>
            ))}
          </div>
          <ul className="queries">
            {S.q.map(([q, kind]) => (
              <li key={q}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>
                <span>{q}</span>
                <span className={'kind' + (kind === 'Dúvida' ? ' ia' : '')}>{KIND[kind]}</span>
              </li>
            ))}
          </ul>
          <a className="seg-link" href={S.link[0]}>{S.link[1]} →</a>
        </div>
      </section>

      {/* BUSCA POR IA */}
      <section className="aisec">
        <SimuladorIA />
      </section>

      {/* ESTRUTURA DIGITAL */}
      <section className="leaksec">
        <SimuladorEstrutura atual="site" titulo={<>Site bonito não basta. <em>A estrutura traz o cliente.</em></>} />
      </section>

      {/* O QUE ESPERAR */}
      <section>
        <div className="wrap">
          <Jornada fases={FASES} rotulo="CONTATOS PELO SITE (ILUSTRATIVO)" titulo={<>Do briefing ao site no ar. <em>Veja o que entregamos em cada fase</em></>} />
        </div>
      </section>

      <Prova />

      <Investimento
        titulo={<>Escopo fechado, <em>sem surpresa no meio do caminho</em></>}
        texto="O valor depende do número de páginas, dos textos e das integrações. Depois do diagnóstico, você recebe a proposta com escopo, prazo e valor definidos, e aprova o layout antes de começarmos o desenvolvimento."
        itens={[
          ['Diagnóstico antes da proposta', 'Você sabe o que o site atual entrega antes de decidir.'],
          ['Layout aprovado antes do código', 'Nada é desenvolvido sem a sua aprovação.'],
          ['Meta de 90+ no celular', 'O site da própria OTD está com 97 no PageSpeed.']
        ]}
      />

      <FaqLinks
        atual="site"
        faqs={FAQS}
        aprofunde={[
          ['/guia/desenvolvimento-web/', 'Guia de criação de sites B2B'],
          ['/insights/quanto-custa-um-site-profissional/', 'Quanto custa um site profissional?'],
          ['/insights/por-que-site-nao-aparece-google/', 'Por que o site não aparece no Google?'],
          ['/insights/site-ou-instagram-qual-mais-importante/', 'Site ou Instagram?']
        ]}
      />

      <CtaFinal
        titulo={<>Seu site <em>trabalha</em> ou só existe?</>}
        texto="Responda 20 perguntas em 3 minutos e receba o resultado por pilar, incluindo Presença Digital."
        barra="Seu site traz cliente?"
      />
    </PaginaServico>
  );
}
