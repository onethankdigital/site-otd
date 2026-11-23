import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Lupa, ComoFunciona, SimuladorIA, SimuladorEstrutura, Jornada, Prova, Investimento, FaqLinks, CtaFinal, PaginaServico } from '../components/servico2/blocos';

const FAQS = [
  {
    q: "O Google Meu Negócio ajuda minha empresa a aparecer no ChatGPT e no Gemini?",
    a: "Ajuda. As respostas de IA sobre empresas locais se apoiam em fontes públicas como o Perfil da Empresa no Google, as avaliações e o site. Um perfil completo, com os mesmos dados do site e avaliações recentes, aumenta a chance de a sua empresa ser citada."
  },
  {
    q: "Por que minha empresa não aparece no Google Maps mesmo tendo cadastro?",
    a: "Ter cadastro não basta. O Google prioriza perfis verificados, completos, com fotos, horários atualizados e avaliações recentes. Um perfil incompleto ou parado perde espaço para os concorrentes, mesmo na sua própria cidade."
  },
  {
    q: "Quanto tempo leva para subir no Google Maps?",
    a: "Os primeiros sinais costumam aparecer entre 4 e 8 semanas depois que o perfil está completo e verificado. Em buscas locais com pouca concorrência, pode ser mais rápido. Mostramos a evolução todo mês no relatório."
  },
  {
    q: "Google Meu Negócio funciona para empresas que não atendem presencialmente?",
    a: "Sim. Empresas de serviço sem loja física podem configurar o perfil com área de atendimento, aparecer nas buscas da região e receber contatos pelo Maps sem exibir o endereço publicamente."
  },
  {
    q: "Preciso ter site para otimizar o Google Meu Negócio?",
    a: "Não é obrigatório, mas ajuda bastante. O Google cruza as informações do site com o perfil para confirmar que a empresa é real e que os dados batem. Site e perfil coerentes passam mais confiança para o Google e para as IAs."
  },
  {
    q: "Como as avaliações influenciam a posição no Maps?",
    a: "Muito. Quantidade, frequência e nota das avaliações estão entre os fatores que o Google considera no ranking local, e o texto que o cliente escreve ajuda o Google e as IAs a entender para quais serviços indicar você. O cuidado é não oferecer vantagem em troca nem induzir o texto, o que fere as regras do Google."
  },
  {
    q: "Meu perfil foi suspenso. Vocês ajudam a recuperar?",
    a: "Sim. Identificamos o motivo informado pelo Google, corrigimos o que está fora das diretrizes, reunimos as provas de que a empresa funciona no endereço e preparamos a contestação pelo caminho oficial."
  }
];

const PIECES = [
  { n: 1, t: "Categoria e serviços certos", w: "O Google entende o que você faz: categoria principal, categorias adicionais e cada serviço com uma descrição curta.", tech: "categorias e serviços do perfil" },
  { n: 2, t: "Fotos, horários e atributos", w: "Fotos reais, horário atualizado (inclusive feriados) e atributos como estacionamento e atendimento on-line. Perfil completo sobe no mapa.", tech: "completude do perfil" },
  { n: 3, t: "Avaliações com resposta", w: "Rotina para pedir avaliação depois de cada atendimento e resposta a todas. O que o cliente escreve vira argumento para o Google.", tech: "gestão de reputação" },
  { n: 4, t: "Atualizações e dados iguais em todo lugar", w: "Novidades no perfil e o mesmo nome, endereço e telefone no site e nos diretórios. A IA confirma os dados e indica você.", tech: "NAP consistente e postagens" }
];
const POS = ["Fora do mapa", "Página 2 do mapa", "Fim da lista do mapa", "Entre os 3 do mapa", "1º no mapa e citada pela IA"];
const FILL = [8, 30, 55, 78, 100];

const SEGMENTS = {
  cont: { label: "Contabilidade", link: ["/segmentos/escritorios-de-contabilidade/", "Ver como atendemos escritórios de contabilidade"], q: [["contador perto de mim", "Maps"], ["escritório de contabilidade aberto agora", "Maps"], ["contabilidade no centro de Santo André", "Maps"], ["Ok Google, contador que abre sábado", "Voz"], ["qual contador bem avaliado em São Bernardo", "IA"], ["contabilidade para MEI perto de mim", "Maps"]] },
  adv: { label: "Advocacia", link: ["/segmentos/escritorios-de-advocacia/", "Ver como atendemos escritórios de advocacia"], q: [["advogado perto de mim", "Maps"], ["escritório de advocacia em Santo André", "Maps"], ["advogado trabalhista aberto agora", "Maps"], ["Ok Google, advogado de família perto daqui", "Voz"], ["qual escritório de advocacia bem avaliado no ABC", "IA"], ["advogado previdenciário em São Caetano", "Maps"]] },
  cli: { label: "Clínicas", link: ["/segmentos/clinicas-e-consultorios/", "Ver como atendemos clínicas e consultórios"], q: [["clínica perto de mim", "Maps"], ["fisioterapia aberta agora em Santo André", "Maps"], ["dentista perto de mim que aceita convênio", "Maps"], ["Ok Google, clínica de exames perto daqui", "Voz"], ["qual clínica bem avaliada em São Bernardo", "IA"], ["psicólogo em Santo André", "Maps"]] },
  b2b: { label: "Indústria e B2B", link: ["/diagnostico/", "Fazer o diagnóstico da sua empresa"], q: [["gráfica perto de mim", "Maps"], ["empresa de manutenção industrial em Santo André", "Maps"], ["usinagem em Diadema", "Maps"], ["Ok Google, fornecedor de embalagens perto daqui", "Voz"], ["qual empresa de manutenção bem avaliada no ABC", "IA"], ["distribuidora no ABC aberta agora", "Maps"]] }
};
const KIND = { Maps: 'Google Maps', Voz: 'busca por voz', IA: 'pergunta à IA' };

const FASES = [
  {
    when: 'Mês 1', t: 'Perfil completo', x0: 0, x1: 333,
    resumo: 'Primeiro o perfil fica completo, verificado e dentro das regras do Google.',
    entrega: ['Verificação ou recuperação do acesso ao perfil', 'Categoria principal, categorias adicionais e serviços com descrição', 'Fotos reais da fachada, da equipe e do ambiente', 'Horários, inclusive feriados, e área de atendimento'],
    ve: 'Relatório inicial com o ponto de partida do seu perfil.'
  },
  {
    when: 'Meses 2 e 3', t: 'Subindo no mapa', x0: 333, x1: 666,
    resumo: 'Com o perfil completo, ele passa a ter vida: avaliações, respostas e novidades.',
    entrega: ['Rotina de pedido de avaliação depois de cada atendimento', 'Resposta a todas as avaliações, com cuidado e contexto', 'Atualizações frequentes no perfil', 'Nome, endereço e telefone iguais no site e nos diretórios'],
    ve: 'As buscas em que sua empresa aparece no mapa, direto do painel do Google.'
  },
  {
    when: 'Meses 4 a 6', t: 'Ligações e rotas', x0: 666, x1: 1000,
    resumo: 'Reforçamos o que traz contato e ligamos o mapa ao seu atendimento.',
    entrega: ['Ajustes nas categorias e serviços que mais trazem ligação', 'Novas fotos e atualizações com o que dá resultado', 'Preparação para buscas por voz e respostas das IAs', 'Botão de WhatsApp ligado ao seu atendimento e CRM'],
    ve: 'Relatório mensal com ligações, rotas, cliques no site e mensagens.'
  }
];

const GM_CSS = `
  .seo2 .gmap{background:var(--paper);color:var(--ink);border-radius:12px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.45}
  .seo2 .gmap .qbar{margin:12px}
  .seo2 .gm-map{position:relative;height:150px;background:#e8eef0;background-image:linear-gradient(90deg,rgba(255,255,255,.9) 0 6px,transparent 6px),linear-gradient(0deg,rgba(255,255,255,.9) 0 6px,transparent 6px),linear-gradient(35deg,transparent 48%,#fff 48% 52%,transparent 52%);background-size:90px 70px,90px 70px,100% 100%;border-top:1px solid #dfe1e5;border-bottom:1px solid #dfe1e5}
  .seo2 .gm-park{position:absolute;left:58%;top:18%;width:22%;height:34%;background:#cfe8d3;border-radius:10px}
  .seo2 .gm-pin{position:absolute;width:18px;height:18px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:#9aa0a6;border:2px solid #fff;box-shadow:0 2px 4px rgba(0,0,0,.25)}
  .seo2 .gm-pin.you{background:var(--red);width:26px;height:26px;animation:seo2pin 1.6s ease-in-out infinite}
  @keyframes seo2pin{50%{transform:rotate(-45deg) translate(3px,-3px)}}
  .seo2 .gm-tag{position:absolute;background:#fff;color:var(--ink);font-size:11px;font-weight:700;padding:2px 7px;border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,.25);white-space:nowrap}
  .seo2 .gm-list{padding:6px 12px 12px}
  .seo2 .gm-it{display:flex;gap:10px;padding:9px 6px;border-bottom:1px solid #f1f3f4}
  .seo2 .gm-it:last-child{border-bottom:0}
  .seo2 .gm-it .n{font-weight:700;color:var(--gmute);min-width:14px}
  .seo2 .gm-it b{color:#202124;font-size:15px}
  .seo2 .gm-it small{display:block;color:var(--gmute);font-size:12.5px}
  .seo2 .gm-it .st{color:#f5a623;letter-spacing:1px}
  .seo2 .gm-it.you{background:#fff4f4;outline:2px solid var(--red);border-radius:8px}
  .seo2 .gm-acts{display:flex;gap:6px;margin-top:6px;flex-wrap:wrap}
  .seo2 .gm-acts span{border:1px solid #dadce0;border-radius:999px;padding:2px 10px;font-size:12px;color:#1a73e8;font-weight:600}
  .seo2 .gm-open{color:#188038;font-weight:700}
  .seo2 .gm-missing{margin:4px 12px 12px;border:2px dashed #e8a5a5;border-radius:8px;padding:10px;color:#b3261e;font-size:13px;text-align:center}

  .seo2 .gp{background:var(--paper);color:var(--ink);border-radius:12px;overflow:hidden;margin-top:16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.45;outline:2px solid transparent;outline-offset:-2px;transition:outline-color .4s}
  .seo2 .gp.up{outline-color:var(--red)}
  .seo2 .gp-photos{display:grid;grid-template-columns:2fr 1fr 1fr;gap:3px;height:96px;background:#f1f3f4}
  .seo2 .gp-photos span{display:grid;place-items:end start;padding:6px;font-size:11px;font-weight:700;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.5)}
  .seo2 .gp-photos .p1{background:linear-gradient(135deg,#7a2a2a,#c74b4b)}
  .seo2 .gp-photos .p2{background:linear-gradient(135deg,#2a4a7a,#5b86c7)}
  .seo2 .gp-photos .p3{background:linear-gradient(135deg,#2f5f3a,#5fa86e)}
  .seo2 .gp-nophoto{height:96px;display:grid;place-items:center;background:#f1f3f4;color:#80868b;font-size:12px}
  .seo2 .gp-body{padding:12px 14px 14px;display:flex;flex-direction:column;gap:5px}
  .seo2 .gp-name{font-size:18px;color:#202124}
  .seo2 .gp-rate,.seo2 .gp-cat{color:#70757a;font-size:13px}
  .seo2 .gp-rate b{color:#202124}
  .seo2 .gp-rate .st{color:#f5a623;letter-spacing:1px}
  .seo2 .gp-svc{display:flex;gap:6px;flex-wrap:wrap}
  .seo2 .gp-svc span{background:#e8f0fe;color:#1967d2;border-radius:999px;padding:2px 9px;font-size:12px}
  .seo2 .gp-rev{background:#f8f9fa;border-radius:8px;padding:8px 10px;font-size:13px}
  .seo2 .gp-rev small{display:block;color:#70757a;margin-top:4px}
  .seo2 .gp-post{border:1px solid #dadce0;border-radius:8px;padding:8px 10px;font-size:13px}
  .seo2 .gp-post b{display:block;font-size:11px;color:#70757a;text-transform:uppercase;letter-spacing:.06em}
  @media (max-width:860px){
    .seo2 .gm-map{height:120px}
    .seo2 .gp-photos,.seo2 .gp-nophoto{height:64px}
    .seo2 .gp-rev,.seo2 .gp-post{display:none}
  }
`;

function MapaHero() {
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
      <div className="segc" role="tablist" aria-label="Comparar resultado no mapa">
        <button type="button" role="tab" aria-selected={!com} onClick={() => { setTouched(true); setV('hoje'); }}>Perfil abandonado</button>
        <button type="button" role="tab" aria-selected={com} onClick={() => { setTouched(true); setV('com'); }}>Perfil otimizado</button>
      </div>
      <div className="gmap" aria-live="polite">
        <div className="qbar"><Lupa s={16} /> contador perto de mim</div>
        <div className="gm-map" aria-hidden="true">
          <span className="gm-park" />
          <span className="gm-pin" style={{ left: '18%', top: '30%' }} />
          <span className="gm-pin" style={{ left: '44%', top: '58%' }} />
          <span className="gm-pin" style={{ left: '76%', top: '62%' }} />
          {com && <><span className="gm-pin you" style={{ left: '30%', top: '36%' }} /><span className="gm-tag" style={{ left: '35%', top: '18%' }}>Sua Contabilidade</span></>}
        </div>
        <div className="gm-list">
          {com && (
            <div className="gm-it you">
              <span className="n">1</span>
              <div>
                <b>Sua Contabilidade</b>
                <small><b style={{ fontSize: 12.5 }}>4,9</b> <span className="st">★★★★★</span> (87) · Escritório de contabilidade</small>
                <small><span className="gm-open">Aberto agora</span> · Fecha às 18h · Centro, Santo André</small>
                <div className="gm-acts"><span>Ligar</span><span>Rotas</span><span>WhatsApp</span><span>Site</span></div>
              </div>
            </div>
          )}
          <div className="gm-it"><span className="n">{com ? 2 : 1}</span><div><b>Contabilidade Alfa</b><small>4,6 <span className="st">★★★★★</span> (32) · Contador</small></div></div>
          <div className="gm-it"><span className="n">{com ? 3 : 2}</span><div><b>Escritório Beta Contábil</b><small>4,4 <span className="st">★★★★</span> (18) · Contador</small></div></div>
          {!com && <div className="gm-it"><span className="n">3</span><div><b>Gama Assessoria</b><small>4,8 <span className="st">★★★★★</span> (9) · Consultoria</small></div></div>}
        </div>
        {!com && <div className="gm-missing">Sua empresa não aparece entre as 3 do mapa.<br />Quem procurou ligou para o concorrente.</div>}
      </div>
      <div className="cap">Exemplo ilustrativo · toque nas abas para comparar</div>
    </div>
  );
}

export default function ServicosGMN() {
  const [on, setOn] = useState({ 1: true, 2: false, 3: false, 4: false });
  const [seg, setSeg] = useState('cont');
  const n = Object.values(on).filter(Boolean).length;
  const toggle = (k) => setOn((o) => ({ ...o, [k]: !o[k] }));
  const S = SEGMENTS[seg];

  return (
    <PaginaServico>
      <style>{GM_CSS}</style>
      <Helmet>
        <title>Google Meu Negócio em Santo André | One Thank Digital</title>
        <meta name="description" content="Otimização do Google Meu Negócio para empresas do ABC Paulista: apareça no Google Maps, nas buscas por voz e nas respostas de IA quando o cliente decide." />
        <meta property="og:title" content="Google Meu Negócio para Empresas B2B | One Thank Digital" />
        <meta property="og:description" content="Otimização do Google Meu Negócio para empresas do ABC Paulista: apareça no Google Maps, nas buscas por voz e nas respostas de IA quando o cliente decide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onethank.com.br/servicos/google-meu-negocio/" />
        <meta property="og:image" content="https://onethank.com.br/hero-google-meu-negocio.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Google Meu Negócio para Empresas B2B | One Thank Digital" />
        <meta property="twitter:description" content="Otimização do Google Meu Negócio para empresas do ABC Paulista: apareça no Google Maps, nas buscas por voz e nas respostas de IA quando o cliente decide." />
        <meta property="twitter:image" content="https://onethank.com.br/hero-google-meu-negocio.webp" />
        <link rel="canonical" href="https://onethank.com.br/servicos/google-meu-negocio/" />
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
              "name": "Otimização de Google Meu Negócio B2B",
              "provider": { "@type": "LocalBusiness", "name": "One Thank Digital", "address": { "@type": "PostalAddress", "addressLocality": "Santo André", "addressRegion": "SP" } },
              "areaServed": [{ "@type": "City", "name": "Santo André" }, { "@type": "City", "name": "São Bernardo do Campo" }, { "@type": "City", "name": "São Caetano do Sul" }],
              "offers": { "@type": "Offer", "priceSpecification": { "@type": "PriceSpecification", "priceType": "https://schema.org/MinimumBasePrice" }, "availability": "https://schema.org/InStock" }
            }
          ])}
        </script>
      </Helmet>

      {/* TOPO com simulação do mapa */}
      <section style={{ borderTop: 0, paddingTop: 40 }}>
        <div className="wrap head-grid">
          <div>
            <h1 className="eyebrow">Google Meu Negócio para empresas B2B em Santo André e ABC Paulista</h1>
            <p className="display">Quem procura perto de você <em>encontra a sua empresa</em> ou o concorrente?</p>
            <p className="lead">Deixamos o Perfil da Empresa no Google completo e ativo para sua empresa aparecer no mapa, nas buscas por voz e nas respostas da IA, na hora em que o cliente decide.</p>
            <div className="head-cta">
              <a className="btn" href="/diagnostico/">Ver como meu perfil aparece hoje →</a>
              <small>Diagnóstico gratuito em 3 minutos</small>
            </div>
          </div>
          <MapaHero />
        </div>
      </section>

      <ComoFunciona atual="gmn" />

      {/* O QUE FAZEMOS (interativo) */}
      <section>
        <div className="wrap">
          <p className="eyebrow">O que fazemos</p>
          <h2>Ative cada etapa e veja <em>seu perfil subir no mapa</em></h2>
          <p className="lead" style={{ marginTop: 14 }}>Um perfil forte se constrói em quatro etapas. Toque em cada uma e veja, ao lado, como o cliente passa a enxergar sua empresa no Google.</p>
          <div className="lab4">
            <div className="lab4-preview" aria-live="polite">
              <div className="meter-top"><span>Onde sua empresa aparece</span><b>{POS[n]}</b></div>
              <div className="meter-bar"><i style={{ width: FILL[n] + '%' }} /></div>
              <div className="chips">
                <span className={'chip' + (n >= 2 ? ' on' : '')}>Google Maps</span>
                <span className={'chip' + (on[2] && n >= 2 ? ' on' : '')}>Busca por voz</span>
                <span className={'chip' + (on[4] ? ' on' : '')}>ChatGPT e Gemini</span>
              </div>
              <div className={'gp' + (n >= 3 ? ' up' : '')}>
                {on[2] ? (
                  <div className="gp-photos" aria-hidden="true"><span className="p1">Fachada</span><span className="p2">Equipe</span><span className="p3">Recepção</span></div>
                ) : <div className="gp-nophoto">Nenhuma foto adicionada</div>}
                <div className="gp-body">
                  <div className="gp-name">Sua Contabilidade</div>
                  <div className="gp-rate">{on[3] ? <><b>4,9</b> <span className="st">★★★★★</span> (87 avaliações)</> : 'Nenhuma avaliação'}</div>
                  <div className="gp-cat">{on[1] ? 'Escritório de contabilidade · Centro, Santo André' : 'Empresa · Santo André'}</div>
                  <div className="gp-cat">{on[2] ? <><span className="gm-open">Aberto agora</span> · Fecha às 18h · Estacionamento</> : 'Horário não informado'}</div>
                  {on[1] && <div className="gp-svc"><span>Abertura de empresa</span><span>MEI</span><span>Simples Nacional</span></div>}
                  {on[3] && <div className="gp-rev">“Abriram minha empresa em uma semana e explicaram tudo.”<small>Resposta do proprietário: Obrigado pela confiança!</small></div>}
                  {on[4] && <div className="gp-post"><b>Atualização desta semana</b>Prazo do IR 2027: agende a revisão dos seus documentos.</div>}
                  {on[4] && (
                    <div className="ai-mini">
                      <div className="ai-q">“Qual contador perto de mim abre sábado?”</div>
                      <div className="ai-a">✦ A <b>Sua Contabilidade</b>, no centro de Santo André, tem nota 4,9 e atende aos sábados, segundo o perfil no Google.</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="cap">Exemplo ilustrativo</div>
            </div>
            <div className="pieces" role="group" aria-label="Etapas do Google Meu Negócio">
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
            <a className="btn" href="/diagnostico/">Quero meu perfil assim →</a>
            <small>Diagnóstico gratuito, resultado na hora</small>
          </div>
        </div>
      </section>

      {/* BUSCAS POR SEGMENTO */}
      <section className="light">
        <div className="wrap">
          <p className="eyebrow">O que seus clientes procuram perto deles</p>
          <h2>Escolha o seu segmento e veja <em>as buscas do mapa</em></h2>
          <div className="tabs" role="tablist" aria-label="Segmento">
            {Object.entries(SEGMENTS).map(([k, x]) => (
              <button type="button" key={k} role="tab" aria-selected={seg === k} onClick={() => setSeg(k)}>{x.label}</button>
            ))}
          </div>
          <ul className="queries">
            {S.q.map(([q, kind]) => (
              <li key={q}>
                <Lupa c="currentColor" s={16} />
                <span>{q}</span>
                <span className={'kind' + (kind === 'IA' ? ' ia' : '')}>{KIND[kind]}</span>
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
        <SimuladorEstrutura atual="gmn" titulo={<>Aparecer no mapa traz a visita. <em>A estrutura traz o cliente.</em></>} />
      </section>

      {/* O QUE ESPERAR */}
      <section>
        <div className="wrap">
          <Jornada fases={FASES} titulo={<>Perfil forte se constrói. <em>Veja o que entregamos em cada fase</em></>} />
        </div>
      </section>

      <Prova />

      <Investimento
        titulo={<>Dentro das regras do Google, <em>sem atalho arriscado</em></>}
        texto="O valor é definido depois de olhar o seu perfil e os concorrentes no mapa da sua região. Seguimos as diretrizes do Google: nada de palavra-chave no nome do perfil nem avaliação comprada, práticas que podem levar à suspensão."
        itens={[
          ['Diagnóstico do perfil antes da proposta', 'Você sabe onde está antes de decidir.'],
          ['Relatório todo mês', 'Ligações, rotas, mensagens e cliques no site vindos do mapa.'],
          ['Sem risco para o seu perfil', 'Nada de prática proibida que leve à suspensão.']
        ]}
      />

      <FaqLinks
        atual="gmn"
        faqs={FAQS}
        aprofunde={[
          ['/guia/google-meu-negocio/', 'Guia de Google Meu Negócio'],
          ['/insights/empresa-nao-aparece-google-maps/', 'Por que não aparece no Maps?'],
          ['/insights/como-pedir-avaliacoes-no-google/', 'Como pedir avaliações'],
          ['/insights/concorrente-aparece-antes-no-google/', 'Concorrente aparece antes de você?']
        ]}
      />

      <CtaFinal
        titulo={<>Sua empresa aparece <em>no mapa</em> de quem procura perto?</>}
        texto="Responda 20 perguntas em 3 minutos e receba o resultado por pilar, incluindo Presença Local no Google."
        barra="Sua empresa aparece no mapa?"
      />
    </PaginaServico>
  );
}
