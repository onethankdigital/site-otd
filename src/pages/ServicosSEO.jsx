import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQS = [
  {
    q: "Quanto tempo leva para ver resultado?",
    a: "Os primeiros sinais aparecem entre 60 e 90 dias, quando o Google começa a mostrar suas páginas. Resultados consistentes chegam entre 4 e 6 meses de trabalho contínuo. Em buscas locais com pouca concorrência, pode ser mais rápido."
  },
  {
    q: "Preciso parar de pagar anúncio?",
    a: "Não. Anúncio e SEO funcionam juntos: o anúncio traz contato agora, enquanto o SEO é construído. Quando as páginas se firmam no Google, você pode reduzir o investimento em anúncio sem sumir das buscas."
  },
  {
    q: "SEO funciona para empresa pequena no ABC?",
    a: "Sim, e muitas vezes funciona melhor. Em buscas locais, como \"contador em Santo André\", a concorrência é menor do que nas buscas nacionais, e uma empresa bem estruturada consegue disputar as primeiras posições."
  },
  {
    q: "O que é GEO e AEO?",
    a: "São os nomes técnicos do trabalho para as buscas feitas por IA. AEO prepara o conteúdo para virar resposta direta, como na visão geral criada por IA do Google. GEO trabalha para que o ChatGPT, o Gemini e o Perplexity citem sua empresa. Os dois dependem de um site bem estruturado."
  },
  {
    q: "Como aparecer na resposta da IA do Google?",
    a: "Com páginas que respondem perguntas reais do cliente de forma direta, dados organizados que o Google consegue ler e as mesmas informações da empresa no site, no Perfil do Google e nas redes."
  }
];

const PIECES = [
  { n: 1, t: "Descobrir o que seu cliente digita", w: "O título da página passa a usar as palavras da busca: quem procura “abrir empresa” encontra “abertura de empresa”.", tech: "pesquisa de palavras-chave" },
  { n: 2, t: "Arrumar o site para o Google ler", w: "Página rápida no celular, com nota, avaliações e informações organizadas. O Google confia mais e sobe o resultado.", tech: "SEO técnico e dados estruturados" },
  { n: 3, t: "Responder as dúvidas antes da ligação", w: "Perguntas reais respondidas no site aparecem direto no Google. O cliente já chega sabendo como funciona.", tech: "conteúdo e perguntas frequentes" },
  { n: 4, t: "Ser a empresa que a IA indica", w: "Mesmos dados no site, no Google e nas redes. Quando alguém pergunta ao ChatGPT, ele consegue confirmar e citar você.", tech: "GEO, AEO e llms.txt" }
];
const POS = ["Página 3 do Google", "Página 2 do Google", "Fim da 1ª página", "Entre os 3 primeiros", "1º resultado e citada pela IA"];
const FILL = [8, 30, 55, 78, 100];

const SEGMENTS = {
  cont: { label: "Contabilidade", link: ["/segmentos/escritorios-de-contabilidade/", "Ver como atendemos escritórios de contabilidade"], q: [["abrir empresa em Santo André", "Google"], ["contador para MEI em São Bernardo", "Google"], ["quanto custa trocar de contador", "Google"], ["contabilidade perto de mim aberta sábado", "Maps"], ["qual o melhor regime tributário para clínica", "IA"], ["contador para empresa de serviços no ABC", "IA"]] },
  adv: { label: "Advocacia", link: ["/segmentos/escritorios-de-advocacia/", "Ver como atendemos escritórios de advocacia"], q: [["advogado trabalhista em Santo André", "Google"], ["advogado de família em São Caetano", "Google"], ["como funciona inventário extrajudicial", "Google"], ["escritório de advocacia perto de mim", "Maps"], ["preciso de advogado para rescisão, o que levar", "IA"], ["advogado previdenciário no ABC atende online", "IA"]] },
  cli: { label: "Clínicas", link: ["/segmentos/clinicas-e-consultorios/", "Ver como atendemos clínicas e consultórios"], q: [["fisioterapia pós-cirúrgica em Santo André", "Google"], ["dermatologista particular em São Bernardo", "Google"], ["clínica de ortopedia que aceita convênio no ABC", "Google"], ["clínica perto de mim aberta agora", "Maps"], ["quanto tempo dura tratamento de fisioterapia", "IA"], ["clínica bem avaliada em Santo André", "IA"]] },
  b2b: { label: "Indústria e B2B", link: ["/diagnostico/", "Fazer o diagnóstico da sua indústria"], q: [["fabricante de displays em São Paulo", "Google"], ["empresa de manutenção industrial no ABC", "Google"], ["fornecedor de embalagens personalizadas", "Google"], ["usinagem sob encomenda em Diadema", "Maps"], ["como escolher fornecedor de peças sob medida", "IA"], ["indústria no ABC que faz lote pequeno", "IA"]] }
};

const REVIEWS = [
  { t: "Refez todo o site da minha empresa em poucos dias. Ágil, comunicativo e com ótimos insights.", who: "Ana Paula Afonso" },
  { t: "Profissional, entrega o trabalho além do que foi solicitado.", who: "Contábil Resta" },
  { t: "Empresa com enorme comprometimento ao cliente. Precisei dos serviços e fui atendido com rapidez.", who: "Jeferson Saroa" }
];

const Lupa = ({ c = '#5f6368', s = 15 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);

const FLOW = [
  { t: "Cliente pesquisa", p: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></> },
  { t: "Sua empresa aparece", p: <><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></> },
  { t: "Visita o site", p: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 21h8" /></> },
  { t: "Chama no WhatsApp", p: <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.2A8.5 8.5 0 1 1 21 12z" /> }
];

export default function ServicosSEO() {
  const [serp, setSerp] = useState('hoje');
  const [touched, setTouched] = useState(false);
  const [flowStep, setFlowStep] = useState(0);
  const [on, setOn] = useState({ 1: true, 2: false, 3: false, 4: false });
  const [seg, setSeg] = useState('cont');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;
    const flow = setInterval(() => setFlowStep((s) => (s + 1) % FLOW.length), 1800);
    return () => clearInterval(flow);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || touched) return undefined;
    const t = setTimeout(() => setSerp('com'), 3000);
    return () => clearTimeout(t);
  }, [touched]);

  const n = Object.values(on).filter(Boolean).length;
  const toggle = (k) => setOn((o) => ({ ...o, [k]: !o[k] }));
  const S = SEGMENTS[seg];

  return (
    <>
      <style>{`
        .seo2 {
          --bg:#050505; --panel:#0f0f10; --panel2:#161618; --line:#26262a;
          --fg:#f5f5f4; --mute:#a3a3a8; --red:#e0040b; --red-soft:rgba(224,4,11,.14); --ok:#16a34a;
          --paper:#ffffff; --ink:#202124; --link:#1a0dab; --gmute:#5f6368;
          --display:'Space Grotesk',system-ui,sans-serif; --serif:'DM Serif Display',Georgia,serif;
          --body:'Manrope',system-ui,sans-serif; --mono:'Space Mono',ui-monospace,monospace;
          background:var(--bg); color:var(--fg); font-family:var(--body); font-size:16px; line-height:1.6;
          padding-top:120px; overflow-x:hidden;
        }
        .seo2 *{box-sizing:border-box}
        .seo2 .wrap{max-width:1160px;margin:0 auto;padding-left:24px;padding-right:24px}
        .seo2 section{padding-block:72px;border-top:1px solid var(--line)}
        .seo2 h1,.seo2 h2,.seo2 h3{font-family:var(--display);text-wrap:balance;margin:0;letter-spacing:-.02em;color:inherit}
        .seo2 .display{font-family:var(--display);font-size:clamp(34px,5vw,58px);line-height:1.04;font-weight:700;letter-spacing:-.02em;text-wrap:balance;margin:0}
        .seo2 h2{font-size:clamp(28px,3.6vw,42px);line-height:1.1;font-weight:700}
        .seo2 h3{font-size:20px;font-weight:600}
        .seo2 em{font-family:var(--serif);font-style:italic;font-weight:400;letter-spacing:0}
        .seo2 p{margin:0}
        .seo2 .lead{color:var(--mute);font-size:18px;max-width:62ch}
        .seo2 .eyebrow{font-family:var(--mono);font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin:0 0 14px;font-weight:700;line-height:1.5}
        .seo2 .btn{display:inline-flex;align-items:center;gap:10px;background:var(--red);color:#fff;font-family:var(--display);font-weight:600;font-size:16px;padding:14px 22px;border-radius:10px;text-decoration:none;border:0;cursor:pointer;transition:transform .2s}
        .seo2 .btn:hover{transform:translateY(-2px)}
        .seo2 button:focus-visible,.seo2 a:focus-visible,.seo2 summary:focus-visible{outline:2px solid #fff;outline-offset:3px}

        .seo2 .head-grid{display:grid;grid-template-columns:1.05fr 1fr;gap:48px;align-items:center}
        .seo2 .head-grid>*{min-width:0}
        .seo2 .head-grid .lead{margin-top:20px}
        .seo2 .head-cta{margin-top:28px;display:flex;gap:16px;flex-wrap:wrap;align-items:center}
        .seo2 .head-cta small{color:var(--mute);font-size:13px}
        .seo2 .serp-box{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:16px}
        .seo2 .segc{display:flex;background:var(--panel2);border-radius:10px;padding:4px;gap:4px;margin-bottom:14px}
        .seo2 .segc button{flex:1;border:0;background:transparent;color:var(--mute);font-family:var(--display);font-weight:600;font-size:14px;padding:10px;border-radius:8px;cursor:pointer}
        .seo2 .segc button[aria-selected="true"]{background:var(--fg);color:var(--bg)}
        .seo2 .serp{background:var(--paper);color:var(--ink);border-radius:12px;padding:16px 18px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.45;min-height:400px}
        .seo2 .qbar{display:flex;align-items:center;gap:10px;border:1px solid #dfe1e5;border-radius:24px;padding:9px 14px;margin-bottom:14px;color:var(--ink)}
        .seo2 .aio{background:#f1f5fe;border-radius:12px;padding:12px 14px;margin-bottom:14px}
        .seo2 .aio-t{font-size:12px;font-weight:700;color:#174ea6;margin-bottom:6px}
        .seo2 .cite{background:#fff;border:1px solid #d2e3fc;border-radius:999px;padding:1px 8px;font-size:12px;color:#174ea6;white-space:nowrap}
        .seo2 .res{padding:8px 0;border-bottom:1px solid #f1f3f4}
        .seo2 .res .u{font-size:12px;color:var(--gmute)}
        .seo2 .res .t{color:var(--link);font-size:17px}
        .seo2 .res .d{color:#4d5156;font-size:13px}
        .seo2 .res.you{background:#fff4f4;outline:2px solid var(--red);border-radius:8px;padding:8px 10px;margin:4px -10px}
        .seo2 .res.you .t{font-weight:700}
        .seo2 .pin{display:inline-block;background:var(--red);color:#fff;font-size:11px;font-weight:700;border-radius:4px;padding:1px 6px;margin-left:6px;vertical-align:middle}
        .seo2 .missing{margin-top:12px;border:2px dashed #e8a5a5;border-radius:8px;padding:12px;color:#b3261e;font-size:13px;text-align:center}
        .seo2 .cap{margin-top:12px;font-family:var(--mono);font-size:11px;color:#9a9aa1;text-align:center}

        .seo2 section.flowband{padding-block:28px;background:var(--panel)}
        .seo2 .fb{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
        .seo2 .fb-t{font-family:var(--mono);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--red);margin-right:8px}
        .seo2 .fb-s{display:flex;align-items:center;gap:10px;font-family:var(--display);font-weight:600;font-size:15px;color:var(--mute);transition:color .4s}
        .seo2 .fb-s .ic{width:36px;height:36px;border-radius:10px;background:var(--panel2);display:grid;place-items:center;transition:background .4s}
        .seo2 .fb-s.on{color:var(--fg)}
        .seo2 .fb-s.on .ic{background:var(--red)}
        .seo2 .fb-a{color:var(--red)}

        .seo2 .lab4{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:36px;align-items:start}
        .seo2 .lab4>*{min-width:0}
        .seo2 .lab4-preview{position:sticky;top:100px;background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:18px}
        .seo2 .meter-top{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;font-family:var(--mono);font-size:12px;color:var(--mute)}
        .seo2 .meter-top b{color:var(--fg);font-family:var(--display);font-size:16px}
        .seo2 .meter-bar{height:10px;background:var(--panel2);border-radius:5px;margin:12px 0;overflow:hidden}
        .seo2 .meter-bar i{display:block;height:100%;background:linear-gradient(90deg,#7a0306,var(--red));border-radius:5px;transition:width .6s cubic-bezier(.2,.8,.2,1)}
        .seo2 .chips{display:flex;gap:8px;flex-wrap:wrap}
        .seo2 .chip{font-family:var(--mono);font-size:11px;border:1px solid var(--line);color:var(--mute);border-radius:999px;padding:4px 10px;transition:all .3s}
        .seo2 .chip.on{border-color:var(--ok);color:#fff;background:rgba(22,163,74,.18)}
        .seo2 .chip.on::before{content:"✓ "}
        .seo2 .mini-serp{background:var(--paper);color:var(--ink);border-radius:12px;padding:14px 16px;margin-top:16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.45;min-height:300px}
        .seo2 .r-you{padding:10px;border-radius:8px;transition:background .4s;outline:2px solid transparent}
        .seo2 .r-you.up{background:#fff4f4;outline-color:var(--red)}
        .seo2 .r-you .u{font-size:12px;color:var(--gmute)}
        .seo2 .r-you .t{color:var(--link);font-size:17px}
        .seo2 .r-you .d{color:#4d5156;font-size:13px}
        .seo2 .rich{font-size:12px;color:var(--gmute);margin:2px 0}
        .seo2 .rich .stars{color:#f5a623;letter-spacing:1px}
        .seo2 .rich .fast{color:#137333;font-weight:700}
        .seo2 .faqmini{margin-top:8px;border-top:1px solid #ebebeb}
        .seo2 .faqmini div{display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #ebebeb;font-size:13px;color:var(--ink)}
        .seo2 .ai-mini{margin-top:12px;background:#f1f5fe;border-radius:10px;padding:10px 12px}
        .seo2 .ai-q{font-size:12px;color:var(--gmute);margin-bottom:4px}
        .seo2 .ai-a{font-size:13px;color:var(--ink)}
        .seo2 .ai-a b{color:#174ea6}
        .seo2 .pieces{display:flex;flex-direction:column;gap:12px}
        .seo2 .piece{display:flex;gap:16px;align-items:flex-start;text-align:left;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:18px;color:var(--fg);font:inherit;cursor:pointer;transition:border-color .3s,background .3s;width:100%}
        .seo2 .piece:hover{border-color:#3a3a40}
        .seo2 .piece[aria-pressed="true"]{border-color:var(--red);background:linear-gradient(180deg,var(--red-soft),var(--panel) 80%)}
        .seo2 .sw{flex:none;width:44px;height:26px;border-radius:13px;background:var(--panel2);border:1px solid var(--line);position:relative;margin-top:2px;transition:background .3s}
        .seo2 .sw i{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:var(--mute);transition:transform .3s,background .3s}
        .seo2 .piece[aria-pressed="true"] .sw{background:var(--red);border-color:var(--red)}
        .seo2 .piece[aria-pressed="true"] .sw i{transform:translateX(18px);background:#fff}
        .seo2 .pc{display:flex;flex-direction:column;gap:6px;min-width:0}
        .seo2 .pn{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--red)}
        .seo2 .pc strong{font-family:var(--display);font-size:18px;font-weight:600;line-height:1.25}
        .seo2 .pw{color:var(--mute);font-size:14px;line-height:1.5}
        .seo2 .pt{font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:#9a9aa1}
        .seo2 .pieces-foot{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:4px}
        .seo2 .pieces-foot span{font-family:var(--mono);font-size:12px;color:var(--mute);margin-left:auto}
        .seo2 .btn-ghost{border:1px solid var(--line);background:transparent;color:var(--fg);font-family:var(--display);font-weight:600;font-size:14px;padding:9px 16px;border-radius:999px;cursor:pointer}
        .seo2 .btn-ghost:hover{border-color:var(--red)}
        .seo2 .eco{margin-top:36px;border:1px dashed var(--line);border-radius:16px;padding:22px}
        .seo2 .eco-t{font-family:var(--mono);font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--mute)}
        .seo2 .eco-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:16px 0}
        .seo2 .eco-n{background:var(--panel2);border:1px solid var(--line);border-radius:12px;padding:10px 14px;font-family:var(--display);font-weight:600;font-size:15px;display:flex;flex-direction:column;color:var(--fg);text-decoration:none}
        .seo2 .eco-n small{font-family:var(--body);font-weight:500;font-size:12px;color:var(--mute)}
        .seo2 .eco-n.on,.seo2 .eco.lit .eco-n{border-color:var(--red)}
        .seo2 .eco-n.on{background:var(--red-soft)}
        .seo2 .eco-a{color:var(--red);font-weight:700}
        .seo2 .eco p{color:var(--mute);font-size:15px;max-width:70ch}
        .seo2 .mid-cta{margin-top:28px;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
        .seo2 .mid-cta small{color:var(--mute)}

        .seo2 section.light{background:#f3f1ec;--panel:#ffffff;--line:#e2ddd3;--fg:#141414;--mute:#5b5852;color:var(--fg);border-top:0}
        .seo2 .tabs{display:flex;gap:8px;flex-wrap:wrap;margin-top:32px}
        .seo2 .tabs button{border:1px solid var(--line);background:var(--panel);color:var(--fg);font-family:var(--display);font-weight:600;padding:10px 18px;border-radius:999px;cursor:pointer;font-size:14px}
        .seo2 .tabs button[aria-selected="true"]{background:var(--red);border-color:var(--red);color:#fff}
        .seo2 .queries{list-style:none;padding:0;margin:20px 0 0;display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
        .seo2 .queries li{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:14px 16px;display:flex;align-items:center;gap:12px;min-width:0}
        .seo2 .queries li span{min-width:0}
        .seo2 .kind{margin-left:auto;font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--mute);border:1px solid var(--line);border-radius:6px;padding:3px 7px;white-space:nowrap}
        .seo2 .kind.ia{color:var(--red);border-color:var(--red)}
        .seo2 .seg-link{display:inline-flex;margin-top:18px;font-family:var(--display);font-weight:600;color:var(--red);text-decoration:none;border-bottom:1px solid currentColor;padding-bottom:2px}

        .seo2 .chat-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:48px;align-items:center}
        .seo2 .chat-grid>*{min-width:0}
        .seo2 .chat{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:20px;display:flex;flex-direction:column;gap:14px}
        .seo2 .bub{max-width:88%;padding:12px 16px;border-radius:16px;font-size:15px}
        .seo2 .bub.me{align-self:flex-end;background:var(--panel2);border-bottom-right-radius:4px}
        .seo2 .bub.ai{border:1px solid var(--line);border-bottom-left-radius:4px}
        .seo2 .src{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}
        .seo2 .src span{font-family:var(--mono);font-size:11px;border:1px solid var(--line);border-radius:999px;padding:2px 9px;color:var(--mute)}
        .seo2 .src span.me2{border-color:var(--red);color:var(--fg)}
        .seo2 .why-list{list-style:none;padding:0;margin:22px 0 0;display:flex;flex-direction:column;gap:12px}
        .seo2 .why-list li{display:flex;gap:12px;color:var(--mute)}
        .seo2 .why-list li::before{content:"";flex:none;width:8px;height:8px;margin-top:9px;background:var(--red);border-radius:2px}
        .seo2 .why-list b{color:var(--fg)}

        .seo2 .curve{width:100%;height:auto;display:block;margin-top:36px}
        .seo2 .curve text{font-family:var(--mono);font-size:11px;fill:var(--mute)}
        .seo2 .timeline{display:grid;grid-template-columns:repeat(3,1fr);margin-top:28px}
        .seo2 .tl{padding-right:22px}
        .seo2 .when{font-family:var(--mono);font-size:12px;letter-spacing:.14em;color:var(--red);text-transform:uppercase}
        .seo2 .tl h3{margin:8px 0 12px}
        .seo2 .tl ul{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:8px}
        .seo2 .tl li{color:var(--mute);font-size:15px;padding-left:16px;position:relative}
        .seo2 .tl li::before{content:"–";position:absolute;left:0;color:var(--red)}
        .seo2 .honest{margin-top:32px;color:var(--mute);font-size:14px;max-width:70ch}

        .seo2 .score{display:flex;align-items:center;gap:14px;margin-top:36px;flex-wrap:wrap}
        .seo2 .score b{font-family:var(--display);font-size:44px;line-height:1}
        .seo2 .st{color:#f5b301;letter-spacing:2px}
        .seo2 .score span{color:var(--mute)}
        .seo2 .reviews{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:16px}
        .seo2 .rev{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:22px;display:flex;flex-direction:column;gap:12px;margin:0}
        .seo2 .rev blockquote{margin:0;font-size:15px;color:var(--fg)}
        .seo2 .rev figcaption{margin-top:auto;font-family:var(--mono);font-size:12px;color:var(--mute)}
        .seo2 .lab2{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:16px}
        .seo2 .metric{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:24px}
        .seo2 .metric .k{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--mute)}
        .seo2 .metric .v{font-family:var(--display);font-size:40px;font-weight:700;margin-top:10px;font-variant-numeric:tabular-nums;display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
        .seo2 .metric .v s{font-size:20px;color:var(--mute);font-weight:500}
        .seo2 .metric p{color:var(--mute);font-size:14px;margin-top:8px}

        .seo2 .inv{display:grid;grid-template-columns:1.2fr 1fr;gap:40px;align-items:start}
        .seo2 .inv>*{min-width:0}
        .seo2 .inv ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px}
        .seo2 .inv li{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:14px 16px;color:var(--mute);font-size:15px}
        .seo2 .inv li b{color:var(--fg);display:block;font-family:var(--display);font-size:16px}

        .seo2 .faq-list{margin-top:32px;border-top:1px solid var(--line)}
        .seo2 .faq-list details{border-bottom:1px solid var(--line)}
        .seo2 .faq-list summary{list-style:none;cursor:pointer;padding:20px 40px 20px 0;font-family:var(--display);font-weight:600;font-size:18px;position:relative}
        .seo2 .faq-list summary::-webkit-details-marker{display:none}
        .seo2 .faq-list summary::after{content:"+";position:absolute;right:4px;top:16px;color:var(--red);font-size:24px;transition:transform .3s}
        .seo2 .faq-list details[open] summary::after{transform:rotate(45deg)}
        .seo2 .faq-list p{color:var(--mute);padding:0 0 20px;max-width:75ch}
        .seo2 .links{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:36px}
        .seo2 .links h3{font-family:var(--mono);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--mute);font-weight:400;margin-bottom:12px}
        .seo2 .links .row{display:flex;flex-wrap:wrap;gap:8px}
        .seo2 .links a{border:1px solid var(--line);border-radius:999px;padding:8px 14px;color:var(--fg);text-decoration:none;font-size:14px}
        .seo2 .links a:hover{border-color:var(--red)}

        .seo2 section.redband{background:linear-gradient(135deg,#e0040b,#9e0307);border-top:0}
        .seo2 .rb{display:grid;grid-template-columns:1.4fr auto;gap:28px;align-items:center}
        .seo2 .rb>*{min-width:0}
        .seo2 .rb h2,.seo2 .rb p{color:#fff}
        .seo2 .rb p{opacity:.9;margin-top:12px;max-width:60ch}
        .seo2 .btn-w{display:inline-flex;align-items:center;gap:10px;background:#0a0a0a;color:#fff;font-family:var(--display);font-weight:600;font-size:16px;padding:16px 24px;border-radius:10px;text-decoration:none}
        .seo2 .mbar{display:none}

        @media (max-width:860px){
          .seo2{padding-top:96px}
          .seo2 section{padding-block:56px}
          .seo2 .head-grid,.seo2 .chat-grid,.seo2 .lab4,.seo2 .inv,.seo2 .links,.seo2 .rb{grid-template-columns:1fr}
          .seo2 .queries,.seo2 .reviews,.seo2 .lab2{grid-template-columns:1fr}
          .seo2 .timeline{grid-template-columns:1fr;gap:28px}
          .seo2 .fb-a{display:none}
          .seo2 .fb{gap:14px}
          .seo2 .lab4-preview{top:72px;z-index:2;padding:12px}
          .seo2 .mini-serp{min-height:0;padding:10px 12px;margin-top:10px}
          .seo2 .r-you .d,.seo2 .lab4 .cap{display:none}
          .seo2 .pw{font-size:13px}
          .seo2 .mbar{display:flex;position:fixed;left:0;right:0;bottom:0;z-index:40;gap:12px;align-items:center;justify-content:space-between;background:rgba(10,10,10,.96);border-top:1px solid var(--line);padding:12px 16px calc(12px + env(safe-area-inset-bottom,0px))}
          .seo2 .mbar span{font-size:13px;color:var(--mute)}
          .seo2 .mbar a{background:var(--red);color:#fff;text-decoration:none;font-family:var(--display);font-weight:600;padding:10px 16px;border-radius:9px;font-size:14px;white-space:nowrap}
          .seo2{padding-bottom:72px}
        }
        @media (prefers-reduced-motion:reduce){.seo2 *{transition:none!important;animation:none!important}}
      `}</style>

      <Navbar
        onOpenQuiz={() => { window.location.href = '/diagnostico/'; }}
        onOpenPilares={() => { window.location.href = '/pilares/'; }}
        onOpenHistoria={() => { window.location.href = '/historia/'; }}
      />

      <div className="seo2">
        <Helmet>
          <title>SEO e Busca por IA para Empresas no ABC | One Thank Digital</title>
          <meta name="description" content="SEO para o Google e para as respostas de IA (GEO/AEO): sua empresa no Google, no AI Overview, no ChatGPT e no Gemini, sem depender de anúncio." />
          <meta property="og:title" content="SEO e Busca por IA (GEO/AEO) para Empresas B2B | One Thank Digital" />
          <meta property="og:description" content="SEO para o Google e para as respostas de IA (GEO/AEO): sua empresa no Google, no AI Overview, no ChatGPT e no Gemini, sem depender de anúncio." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://onethank.com.br/servicos/seo-trafego-organico/" />
          <meta property="og:image" content="https://onethank.com.br/hero-seo-organico.webp" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="SEO e Busca por IA (GEO/AEO) para Empresas B2B | One Thank Digital" />
          <meta property="twitter:description" content="SEO para o Google e para as respostas de IA (GEO/AEO): sua empresa no Google, no AI Overview, no ChatGPT e no Gemini, sem depender de anúncio." />
          <meta property="twitter:image" content="https://onethank.com.br/hero-seo-organico.webp" />
          <link rel="canonical" href="https://onethank.com.br/servicos/seo-trafego-organico/" />
          <script type="application/ld+json">
            {JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": FAQS.map(faq => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": { "@type": "Answer", "text": faq.a }
                }))
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "SEO e Otimização para Buscas por IA (GEO/AEO)",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "One Thank Digital",
                  "address": { "@type": "PostalAddress", "addressLocality": "Santo André", "addressRegion": "SP" }
                },
                "areaServed": [
                  { "@type": "City", "name": "Santo André" },
                  { "@type": "City", "name": "São Bernardo do Campo" },
                  { "@type": "City", "name": "São Caetano do Sul" }
                ],
                "offers": {
                  "@type": "Offer",
                  "priceSpecification": { "@type": "PriceSpecification", "priceType": "https://schema.org/MinimumBasePrice" },
                  "availability": "https://schema.org/InStock"
                }
              }
            ])}
          </script>
        </Helmet>

        {/* TOPO com simulação de busca */}
        <section style={{ borderTop: 0, paddingTop: 40 }}>
          <div className="wrap head-grid">
            <div>
              <h1 className="eyebrow">SEO e busca por IA para empresas B2B no ABC Paulista</h1>
              <p className="display">Seu cliente está pesquisando agora. <em>Ele encontra você</em> ou o concorrente?</p>
              <p className="lead">Fazemos sua empresa aparecer quando alguém do ABC procura o seu serviço no Google ou pergunta ao ChatGPT. Sem pagar por clique.</p>
              <div className="head-cta">
                <a className="btn" href="/diagnostico/">Ver como minha empresa aparece hoje →</a>
                <small>Diagnóstico gratuito em 3 minutos</small>
              </div>
            </div>
            <div className="serp-box">
              <div className="segc" role="tablist" aria-label="Comparar resultado">
                <button type="button" role="tab" aria-selected={serp === 'hoje'} onClick={() => { setTouched(true); setSerp('hoje'); }}>Hoje, sem SEO</button>
                <button type="button" role="tab" aria-selected={serp === 'com'} onClick={() => { setTouched(true); setSerp('com'); }}>Com SEO e busca por IA</button>
              </div>
              <div className="serp" aria-live="polite">
                <div className="qbar"><Lupa s={16} /> contabilidade para pequena empresa em santo andré</div>
                {serp === 'hoje' ? (
                  <div>
                    <div className="res"><div className="u">contabilidadealfa.com.br</div><div className="t">Contabilidade Alfa · Santo André</div><div className="d">Abertura de empresa, MEI e Simples Nacional. Atendimento no centro.</div></div>
                    <div className="res"><div className="u">escritoriobeta.com.br</div><div className="t">Escritório Beta Contábil</div><div className="d">Contabilidade para empresas do ABC há 15 anos.</div></div>
                    <div className="res"><div className="u">guiadoabc.com.br › contadores</div><div className="t">10 contadores em Santo André</div><div className="d">Lista com endereço e telefone de escritórios contábeis da cidade.</div></div>
                    <div className="missing">Sua empresa não aparece na primeira página.<br />Quem pesquisou fechou com quem estava aqui.</div>
                  </div>
                ) : (
                  <div>
                    <div className="aio">
                      <div className="aio-t">✦ Visão geral criada por IA</div>
                      <p>Para pequenas empresas em Santo André, escritórios como a <b>Sua Contabilidade</b> <span className="cite">suacontabilidade.com.br</span> oferecem abertura de empresa, MEI e Simples Nacional, com atendimento no centro e aos sábados.</p>
                    </div>
                    <div className="res you"><div className="u">suacontabilidade.com.br › pequenas-empresas</div><div className="t">Contabilidade para pequenas empresas em Santo André<span className="pin">VOCÊ</span></div><div className="d">Abertura de empresa em até 7 dias, MEI e Simples Nacional. Fale no WhatsApp.</div></div>
                    <div className="res"><div className="u">contabilidadealfa.com.br</div><div className="t">Contabilidade Alfa · Santo André</div><div className="d">Abertura de empresa, MEI e Simples Nacional.</div></div>
                    <div className="res"><div className="u">escritoriobeta.com.br</div><div className="t">Escritório Beta Contábil</div><div className="d">Contabilidade para empresas do ABC.</div></div>
                  </div>
                )}
              </div>
              <div className="cap">Exemplo ilustrativo · toque nas abas para comparar</div>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA (faixa) */}
        <section className="flowband">
          <div className="wrap">
            <div className="fb">
              <span className="fb-t">Como funciona</span>
              {FLOW.map((f, i) => (
                <React.Fragment key={f.t}>
                  <span className={'fb-s' + (i === flowStep ? ' on' : '')}>
                    <span className="ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" aria-hidden="true">{f.p}</svg></span>
                    {f.t}
                  </span>
                  {i < FLOW.length - 1 && <span className="fb-a" aria-hidden="true">→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* O QUE FAZEMOS (interativo) */}
        <section>
          <div className="wrap">
            <p className="eyebrow">O que fazemos</p>
            <h2>Ligue cada peça e veja <em>sua empresa subir no Google</em></h2>
            <p className="lead" style={{ marginTop: 14 }}>SEO é montar quatro peças. Toque em cada uma e acompanhe, ao lado, o que muda para quem pesquisa.</p>
            <div className="lab4">
              <div className="lab4-preview" aria-live="polite">
                <div className="meter-top"><span>Onde sua empresa aparece</span><b>{POS[n]}</b></div>
                <div className="meter-bar"><i style={{ width: FILL[n] + '%' }} /></div>
                <div className="chips">
                  <span className={'chip' + (n >= 2 ? ' on' : '')}>Google</span>
                  <span className={'chip' + (on[2] && n >= 2 ? ' on' : '')}>Google Maps</span>
                  <span className={'chip' + (on[4] ? ' on' : '')}>ChatGPT e Gemini</span>
                </div>
                <div className="mini-serp">
                  <div className="qbar"><Lupa /> abrir empresa em santo andré</div>
                  <div className={'r-you' + (n >= 3 ? ' up' : '')}>
                    <div className="u">{on[1] ? 'suacontabilidade.com.br › abertura-de-empresa' : 'suacontabilidade.com.br'}</div>
                    <div className="t">{on[1] ? 'Abertura de empresa em Santo André em até 7 dias | Sua Contabilidade' : 'Home - Sua Contabilidade'}</div>
                    {on[2] && <div className="rich"><span className="stars">★★★★★</span> 4,9 · 87 avaliações · <span className="fast">⚡ carrega em 1,2 s</span></div>}
                    <div className="d">{on[1] ? 'Abra seu CNPJ em Santo André com acompanhamento do início ao fim. MEI, Simples Nacional e prestadores de serviço.' : 'Bem-vindo ao nosso site. Somos uma empresa séria e comprometida com nossos clientes.'}</div>
                    {on[3] && (
                      <div className="faqmini">
                        <div>Quanto custa abrir uma empresa em 2026? <span>▾</span></div>
                        <div>Quanto tempo leva para abrir o CNPJ? <span>▾</span></div>
                      </div>
                    )}
                  </div>
                  {on[4] && (
                    <div className="ai-mini">
                      <div className="ai-q">“Qual contabilidade em Santo André abre empresa rápido?”</div>
                      <div className="ai-a">✦ A <b>Sua Contabilidade</b> abre empresas em até 7 dias e atende MEI, segundo o site e o perfil no Google.</div>
                    </div>
                  )}
                </div>
                <div className="cap">Exemplo ilustrativo</div>
              </div>
              <div className="pieces" role="group" aria-label="Peças do SEO">
                {PIECES.map((p) => (
                  <button type="button" key={p.n} className="piece" aria-pressed={on[p.n]} onClick={() => toggle(p.n)}>
                    <span className="sw" aria-hidden="true"><i /></span>
                    <span className="pc">
                      <span className="pn">Peça {p.n}</span>
                      <strong>{p.t}</strong>
                      <span className="pw">{p.w}</span>
                      <span className="pt">Termo técnico: {p.tech}</span>
                    </span>
                  </button>
                ))}
                <div className="pieces-foot">
                  <button type="button" className="btn-ghost" onClick={() => setOn({ 1: true, 2: true, 3: true, 4: true })}>Ligar todas</button>
                  <button type="button" className="btn-ghost" onClick={() => setOn({ 1: false, 2: false, 3: false, 4: false })}>Recomeçar</button>
                  <span>{n} de 4 peças ligadas</span>
                </div>
              </div>
            </div>
            <div className={'eco' + (n === 4 ? ' lit' : '')}>
              <div className="eco-t">Onde o SEO se encaixa na sua estrutura digital</div>
              <div className="eco-row">
                <a className="eco-n" href="/servicos/google-meu-negocio/">Google Meu Negócio<small>aparecer no mapa</small></a><span className="eco-a">+</span>
                <span className="eco-n on">SEO e busca por IA<small>aparecer na pesquisa</small></span><span className="eco-a">→</span>
                <a className="eco-n" href="/servicos/criacao-de-sites/">Site<small>convencer</small></a><span className="eco-a">→</span>
                <a className="eco-n" href="/servicos/automacao-digital/">Automação com IA<small>responder na hora</small></a>
              </div>
              <p>Sem SEO, o site existe mas ninguém chega até ele. Com SEO, cada pesquisa vira uma visita, e a automação transforma a visita em conversa.</p>
            </div>
            <div className="mid-cta">
              <a className="btn" href="/diagnostico/">Quero ver minha empresa assim →</a>
              <small>Diagnóstico gratuito, resultado na hora</small>
            </div>
          </div>
        </section>

        {/* BUSCAS POR SEGMENTO */}
        <section className="light">
          <div className="wrap">
            <p className="eyebrow">O que seus clientes pesquisam</p>
            <h2>Escolha o seu segmento e veja <em>as buscas que disputamos</em></h2>
            <div className="tabs" role="tablist" aria-label="Segmento">
              {Object.entries(SEGMENTS).map(([k, v]) => (
                <button type="button" key={k} role="tab" aria-selected={seg === k} onClick={() => setSeg(k)}>{v.label}</button>
              ))}
            </div>
            <ul className="queries">
              {S.q.map(([q, kind]) => (
                <li key={q}>
                  <Lupa c="currentColor" s={16} />
                  <span>{q}</span>
                  <span className={'kind' + (kind === 'IA' ? ' ia' : '')}>{kind === 'IA' ? 'pergunta à IA' : kind === 'Maps' ? 'Google Maps' : 'Google'}</span>
                </li>
              ))}
            </ul>
            <a className="seg-link" href={S.link[0]}>{S.link[1]} →</a>
          </div>
        </section>

        {/* BUSCA POR IA */}
        <section>
          <div className="wrap chat-grid">
            <div>
              <p className="eyebrow">Busca por IA</p>
              <h2>Cada vez mais gente pergunta à IA <em>antes de pesquisar</em></h2>
              <p className="lead" style={{ marginTop: 18 }}>A resposta vem pronta, com uma ou duas empresas. A IA cita quem ela consegue confirmar em várias fontes.</p>
              <ul className="why-list">
                <li><span><b>Perfil do Google completo</b>, com serviços e avaliações recentes</span></li>
                <li><span><b>Site que responde perguntas reais</b>, não só "somos referência"</span></li>
                <li><span><b>Mesmos dados em todo lugar</b>: site, Google, redes e diretórios</span></li>
              </ul>
            </div>
            <div className="chat">
              <div className="bub me">Qual contabilidade em Santo André atende MEI e abre aos sábados?</div>
              <div className="bub ai">Algumas opções em Santo André: a <b>Sua Contabilidade</b>, no centro, atende MEI e Simples Nacional e abre aos sábados pela manhã, segundo o site e o perfil no Google.
                <div className="src"><span className="me2">suacontabilidade.com.br</span><span>Google Maps</span></div>
              </div>
              <div className="cap" style={{ textAlign: 'left', marginTop: 0 }}>Exemplo ilustrativo de resposta de assistente de IA</div>
            </div>
          </div>
        </section>

        {/* O QUE ESPERAR */}
        <section>
          <div className="wrap">
            <p className="eyebrow">O que esperar</p>
            <h2>SEO é construção. <em>Veja o que acontece em cada fase</em></h2>
            <svg className="curve" viewBox="0 0 1000 170" role="img" aria-label="Curva ilustrativa de crescimento das visitas vindas do Google ao longo de 6 meses">
              <defs><linearGradient id="seo2cg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#e0040b" stopOpacity=".35" /><stop offset="1" stopColor="#e0040b" stopOpacity="0" /></linearGradient></defs>
              <line x1="0" y1="140" x2="1000" y2="140" stroke="#26262a" />
              <line x1="333" y1="10" x2="333" y2="140" stroke="#26262a" strokeDasharray="3 5" />
              <line x1="666" y1="10" x2="666" y2="140" stroke="#26262a" strokeDasharray="3 5" />
              <path d="M0 136 C 200 134, 300 128, 400 112 S 650 60, 800 38 S 950 22, 1000 18 L1000 140 L0 140Z" fill="url(#seo2cg)" />
              <path d="M0 136 C 200 134, 300 128, 400 112 S 650 60, 800 38 S 950 22, 1000 18" fill="none" stroke="#e0040b" strokeWidth="3" />
              <circle cx="994" cy="18" r="5" fill="#e0040b" />
              <text x="6" y="160">MÊS 1</text><text x="339" y="160">MÊS 3</text><text x="672" y="160">MÊS 6</text>
              <text x="6" y="24">VISITAS VINDAS DO GOOGLE (ILUSTRATIVO)</text>
            </svg>
            <div className="timeline">
              <div className="tl"><div className="when">Mês 1</div><h3>Base arrumada</h3><ul><li>Diagnóstico do site e do Perfil do Google</li><li>Correções técnicas e de velocidade</li><li>Mapa das buscas do seu segmento</li></ul></div>
              <div className="tl"><div className="when">Meses 2 e 3</div><h3>Primeiras posições</h3><ul><li>Páginas de serviço e artigos publicados</li><li>Google começa a mostrar suas páginas</li><li>Buscas locais aparecendo no relatório</li></ul></div>
              <div className="tl"><div className="when">Meses 4 a 6</div><h3>Contatos chegando</h3><ul><li>Posições mais estáveis nas buscas certas</li><li>Primeiros contatos vindos do Google</li><li>Relatório mensal com o que trouxe cliente</li></ul></div>
            </div>
            <p className="honest">Prazos variam conforme a concorrência do seu segmento na região. Não prometemos primeira posição: mostramos todo mês o que mudou e o que trouxe contato.</p>
          </div>
        </section>

        {/* PROVA */}
        <section>
          <div className="wrap">
            <p className="eyebrow">Prova, não promessa</p>
            <h2>Testamos primeiro em casa. <em>Os clientes confirmam.</em></h2>
            <div className="score"><b>5,0</b><span className="st" aria-hidden="true">★★★★★</span><span>16 avaliações no Google</span></div>
            <div className="reviews">
              {REVIEWS.map((r) => (
                <figure className="rev" key={r.who}>
                  <span className="st" aria-label="5 estrelas">★★★★★</span>
                  <blockquote>“{r.t}”</blockquote>
                  <figcaption>{r.who} · Google</figcaption>
                </figure>
              ))}
            </div>
            <div className="lab2">
              <div className="metric"><div className="k">Nota no celular · site da OTD</div><div className="v"><s>48</s> 86</div><p>Teste de desempenho do Google na página inicial, novembro de 2026.</p></div>
              <div className="metric"><div className="k">Imagens dos serviços · site da OTD</div><div className="v"><s>2,2 MB</s> 82 KB</div><p>Site mais leve carrega antes do cliente desistir.</p></div>
            </div>
          </div>
        </section>

        {/* INVESTIMENTO */}
        <section>
          <div className="wrap inv">
            <div>
              <p className="eyebrow">Investimento</p>
              <h2>Sem pacote de links, <em>sem promessa de 1º lugar</em></h2>
              <p className="lead" style={{ marginTop: 16 }}>O valor é definido depois de olhar o seu segmento na região: quantos concorrentes disputam as mesmas buscas e o que o seu site já tem. O objetivo é trocar um gasto que nunca termina, o anúncio, por um ativo que continua trazendo cliente.</p>
            </div>
            <ul>
              <li><b>Diagnóstico antes da proposta</b>Você sabe onde está antes de decidir.</li>
              <li><b>Relatório todo mês</b>Buscas, posições e contatos que vieram do Google.</li>
              <li><b>Funciona junto com anúncio</b>O anúncio traz resultado agora, o SEO reduz essa dependência com o tempo.</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="wrap">
            <p className="eyebrow">Perguntas frequentes</p>
            <h2>O que você <em>ainda pergunta</em></h2>
            <div className="faq-list">
              {FAQS.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
            <div className="links">
              <div>
                <h3>Aprofunde no tema</h3>
                <div className="row">
                  <a href="/guia/seo-trafego-organico/">Guia de SEO B2B</a>
                  <a href="/insights/seo-organico-vs-trafego-pago/">SEO ou tráfego pago?</a>
                  <a href="/insights/concorrente-aparece-antes-no-google/">Concorrente aparece antes de você?</a>
                  <a href="/insights/como-aparecer-no-chatgpt-e-na-ia-do-google/">Como aparecer no ChatGPT</a>
                </div>
              </div>
              <div>
                <h3>Outras estruturas</h3>
                <div className="row">
                  <a href="/servicos/google-meu-negocio/">Google Meu Negócio</a>
                  <a href="/servicos/criacao-de-sites/">Criação de sites</a>
                  <a href="/servicos/automacao-digital/">Automação com IA</a>
                  <a href="/cases/">Cases</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAMADA FINAL */}
        <section className="redband">
          <div className="wrap rb">
            <div>
              <h2>Como sua empresa aparece <em>hoje</em> no Google?</h2>
              <p>Responda 20 perguntas em 3 minutos e receba o resultado por pilar, incluindo SEO e busca por IA.</p>
            </div>
            <a className="btn-w" href="/diagnostico/">Fazer diagnóstico gratuito →</a>
          </div>
        </section>

        <div className="mbar"><span>Sua empresa aparece no Google?</span><a href="/diagnostico/">Diagnóstico grátis</a></div>
      </div>

      <Footer
        onOpenQuiz={() => { window.location.href = '/diagnostico/'; }}
        onOpenPilares={() => { window.location.href = '/pilares/'; }}
        onOpenHistoria={() => { window.location.href = '/historia/'; }}
      />
    </>
  );
}
