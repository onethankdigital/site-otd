import { useState, useEffect, useRef } from "react";

const BRAND = {
  red: "#D42B2B",
  redDark: "#A01E1E",
  redGlow: "rgba(212,43,43,0.18)",
  bg: "#080808",
  surface: "#111111",
  border: "#1e1e1e",
  text: "#f0f0f0",
  muted: "#666",
  white: "#ffffff",
};

const CATEGORIES = [
  {
    id: "gmn",
    label: "Google Meu Negócio",
    icon: "📍",
    short: "GMN",
    description: "Presença e posicionamento local no Google",
    questions: [
      {
        q: "Seu Google Meu Negócio está criado e verificado pelo Google?",
        hint: "Perfil verificado aparece com o selo de confirmação no Maps",
        options: ["Sim, verificado", "Criado mas não verificado", "Não tenho"],
        scores: [2, 1, 0],
      },
      {
        q: "Seu perfil tem fotos profissionais atualizadas (fachada, equipe, produtos/serviços)?",
        hint: "Perfis com +10 fotos recebem até 42% mais direcionamentos",
        options: ["Sim, atualizadas", "Algumas fotos antigas", "Sem fotos"],
        scores: [2, 1, 0],
      },
      {
        q: "Você responde às avaliações dos clientes (positivas e negativas) regularmente?",
        hint: "Respostas a avaliações aumentam a confiança e o ranking local",
        options: ["Sim, sempre", "Às vezes", "Não respondo"],
        scores: [2, 1, 0],
      },
      {
        q: "Informações de horário, endereço, telefone e serviços estão corretas e atualizadas?",
        hint: "Inconsistências de NAP (Name, Address, Phone) prejudicam o ranqueamento",
        options: ["Tudo atualizado", "Parcialmente correto", "Desatualizado"],
        scores: [2, 1, 0],
      },
      {
        q: "Você publica posts, ofertas ou novidades no seu perfil GMN com frequência?",
        hint: "Publicações regulares sinalizam atividade e melhoram o posicionamento local",
        options: ["Semanalmente", "Raramente", "Nunca publiquei"],
        scores: [2, 1, 0],
      },
    ],
  },
  {
    id: "website",
    label: "Website",
    icon: "🌐",
    short: "Site",
    description: "Estrutura, comunicação e conversão do seu site",
    questions: [
      {
        q: "Sua empresa possui um site ativo e funcional atualmente?",
        hint: "Um site é o ativo digital mais importante para credibilidade e conversão",
        options: ["Sim, ativo", "Em construção", "Não tenho site"],
        scores: [2, 1, 0],
      },
      {
        q: "O site é responsivo e oferece boa experiência no celular?",
        hint: "+60% do tráfego web vem de dispositivos móveis",
        options: ["Sim, totalmente", "Parcialmente", "Não é responsivo"],
        scores: [2, 1, 0],
      },
      {
        q: "Quando você pesquisa o nome da sua empresa no Google, seu site aparece nos resultados?",
        hint: "Se seu site não aparece nem pelo nome da empresa, ele não está configurado corretamente para o Google",
        options: ["Sim, aparece bem posicionado", "Aparece, mas lá embaixo", "Não aparece / Não sei"],
        scores: [2, 1, 0],
      },
      {
        q: "O site está integrado e consistente com seu perfil no Google Meu Negócio?",
        hint: "Consistência entre site e GMN é fator crítico de ranqueamento local",
        options: ["Sim, integrado", "Parcialmente", "Não está integrado"],
        scores: [2, 1, 0],
      },
      {
        q: "O site possui CTAs claros, formulário de contato ou WhatsApp para conversão?",
        hint: "Sem CTA visível, o visitante não sabe o próximo passo e abandona o site",
        options: ["Sim, múltiplos CTAs", "Um CTA básico", "Sem CTA definido"],
        scores: [2, 1, 0],
      },
    ],
  },
  {
    id: "seo",
    label: "SEO & Tráfego",
    icon: "🔍",
    short: "SEO",
    description: "Visibilidade orgânica e paga nos mecanismos de busca",
    questions: [
      {
        q: "Sua empresa aparece na primeira página do Google para termos do seu segmento?",
        hint: "93% dos cliques ficam na primeira página. Não aparecer = não existir",
        options: ["Sim, frequentemente", "Em algumas buscas", "Não apareço"],
        scores: [2, 1, 0],
      },
      {
        q: "Você tem palavras-chave estratégicas definidas para seu negócio?",
        hint: "Palavras-chave certas determinam quem chega até você organicamente",
        options: ["Sim, mapeadas", "Tenho algumas ideias", "Não sei o que são"],
        scores: [2, 1, 0],
      },
      {
        q: "Seu site possui blog, artigos ou conteúdo atualizado periodicamente?",
        hint: "Conteúdo fresco é o principal combustível do SEO orgânico",
        options: ["Sim, regularmente", "Raramente", "Não tem conteúdo"],
        scores: [2, 1, 0],
      },
      {
        q: "Você utiliza Google Ads ou Meta Ads para atrair tráfego pago qualificado?",
        hint: "Tráfego pago bem configurado acelera resultados enquanto o orgânico amadurece",
        options: ["Sim, campanhas ativas", "Já testei mas parei", "Nunca usei"],
        scores: [2, 1, 0],
      },
      {
        q: "Seu site é rápido? Carrega em menos de 3 segundos?",
        hint: "Google penaliza sites lentos. 53% dos usuários abandonam páginas acima de 3s",
        options: ["Sim, rápido", "Razoável", "Lento / Não sei"],
        scores: [2, 1, 0],
      },
    ],
  },
  {
    id: "automacao",
    label: "Automação",
    icon: "⚙️",
    short: "Auto",
    description: "Processos automáticos de atendimento, leads e operation",
    questions: [
      {
        q: "Você utiliza algum CRM para gerenciar leads, clientes e oportunidades?",
        hint: "Sem CRM, leads se perdem. Empresas com CRM fecham até 29% mais negócios",
        options: ["Sim, uso ativamente", "Tenho mas não uso", "Não tenho CRM"],
        scores: [2, 1, 0],
      },
      {
        q: "Seu WhatsApp tem respostas automáticas ou chatbot para atendimento inicial?",
        hint: "Resposta em até 5 min aumenta em 21x a chance de conversão",
        options: ["Sim, automatizado", "Resposta rápida manual", "Sem automação"],
        scores: [2, 1, 0],
      },
      {
        q: "Você usa ferramenta de agendamento online (Calendly, Google Agenda, etc.)?",
        hint: "Agendamento automático elimina vai-e-vem de WhatsApp e profissionaliza o processo",
        options: ["Sim, uso", "Faço manual pelo WhatsApp", "Sem agendamento online"],
        scores: [2, 1, 0],
      },
      {
        q: "Novos leads recebem e-mail ou mensagem de boas-vindas automática?",
        hint: "Nutrição automatizada mantém o lead aquecido até a decisão de compra",
        options: ["Sim, automatizado", "Faço manualmente às vezes", "Não faço"],
        scores: [2, 1, 0],
      },
      {
        q: "Existe algum processo automático de follow-up ou pós-venda com seus clientes?",
        hint: "Clientes bem acompanhados compram mais e indicam mais. Retenção é mais barata que aquisição",
        options: ["Sim, estruturado", "Faço informalmente", "Não tenho processo"],
        scores: [2, 1, 0],
      },
    ],
  },
];

const TOTAL_MAX = 40;

function getLevel(score, max = 10) {
  const pct = score / max;
  if (pct >= 0.8) return { label: "Sólida", color: "#22c55e", emoji: "🟢" };
  if (pct >= 0.6) return { label: "Em Desenvolvimento", color: "#f59e0b", emoji: "🟡" };
  if (pct >= 0.3) return { label: "Frágil", color: "#f97316", emoji: "🟠" };
  return { label: "Crítica", color: "#ef4444", emoji: "🔴" };
}

function getTotalDiagnosis(score) {
  const pct = score / TOTAL_MAX;
  if (pct >= 0.8) return { title: "Estrutura Sólida", subtitle: "Sua base digital está bem construída. Hora de otimizar e escalar.", color: "#22c55e", urgency: "Otimização" };
  if (pct >= 0.6) return { title: "Estrutura em Desenvolvimento", subtitle: "Você começou bem, mas há lacunas estratégicas que limitam seu crescimento.", color: "#f59e0b", urgency: "Prioridade Alta" };
  if (pct >= 0.3) return { title: "Estrutura Frágil", subtitle: "Sua empresa está invisível para uma grande parte do mercado. Cada dia sem agir é oportunidade perdida.", color: "#f97316", urgency: "Ação Urgente" };
  return { title: "Estrutura Crítica", subtitle: "Sua presença digital está comprometendo ativamente seus resultados.", color: "#ef4444", urgency: "Intervenção Imediata" };
}

// ─── WEBHOOK URL ───────────────────────────────────────────────
const WEBHOOK_URL = "https://api.onethank.com.br/webhook/quiz-otd";

// ─── BUILD PAYLOAD ─────────────────────────────────────────────
// Inclui scores agregados + resposta individual de cada pergunta
function buildPayload({ formData, schedData, answers, scores, totalScore, diagnosis, utmSource }) {
  const payload = {
    // Dados pessoais
    nome: formData.nome,
    telefone: formData.telefone,
    email: formData.email,
    // Agendamento
    data_call: schedData.date,
    horario_call: schedData.time,
    // Scores agregados por pilar
    score_gmn: scores.gmn,
    score_website: scores.website,
    score_seo: scores.seo,
    score_automacao: scores.automacao,
    score_total: totalScore,
    // Diagnóstico geral
    nivel: diagnosis.title,
    urgencia: diagnosis.urgency,
    // Campos opcionais
    site: formData.site || "Não informado",
    nome_gmn: formData.nome_gmn || "Não informado",
    // Origem
    utm_source: utmSource || "direto",
  };

  CATEGORIES.forEach((cat) => {
    cat.questions.forEach((q, i) => {
      const idx = answers[cat.id]?.[i];
      const num = i + 1;
      payload[`${cat.id}_q${num}_pergunta`] = q.q;
      payload[`${cat.id}_q${num}_resposta`] = idx !== null && idx !== undefined 
        ? q.options[idx] 
        : "Não respondida";
      payload[`${cat.id}_q${num}_score`] = idx !== null && idx !== undefined 
        ? q.scores[idx] 
        : 0;
    });
  });

  return payload;
}

// ─── AVAILABLE TIMES ───────────────────────────────────────────
function getAvailableDates() {
  const dates = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      dates.push(`${yyyy}-${mm}-${dd}`);
    }
  }
  return dates;
}

function getMinDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

const TIME_SLOTS = [
  "08:00", "08:30", "09:00", "09:30",
  "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30"
];

export default function Quiz({ onClose }) {
  const [phase, setPhase] = useState("intro"); // intro | quiz | result | form | sched | done
  
  useEffect(() => {
    document.title = "Diagnóstico Gratuito de Estrutura Digital | One Thank Digital";
  }, []);

  const [catIdx, setCatIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [answers, setAnswers] = useState({ gmn: [], website: [], seo: [], automacao: [] });
  const [scores, setScores] = useState({ gmn: 0, website: 0, seo: 0, automacao: 0 });
  const [totalScore, setTotalScore] = useState(0);
  const [diagnosis, setDiagnosis] = useState(null);
  const [formData, setFormData] = useState({ nome: "", telefone: "", email: "", site: "", nome_gmn: "" });
  const [schedData, setSchedData] = useState({ date: "", time: "" });
  const [submitting, setSubmitting] = useState(false);
  const [busyTimes, setBusyTimes] = useState([]);
  const [loadingTimes, setLoadingTimes] = useState(false);
  const [utmSource, setUtmSource] = useState("direto");
  const [animKey, setAnimKey] = useState(0);
  const topRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmSource(params.get("utm_source") || "direto");
  }, []);

  useEffect(() => {
    if (!schedData.date) {
      setBusyTimes([]);
      return;
    }

    let active = true;
    setLoadingTimes(true);
    setBusyTimes([]);
    // Limpa o horário anterior para evitar conflito ao trocar de data
    setSchedData(prev => ({ ...prev, time: "" }));

    fetch(`https://api.onethank.com.br/webhook/horarios-disponiveis?data=${schedData.date}`)
      .then((res) => res.json())
      .then((data) => {
        if (active && data && Array.isArray(data.ocupados)) {
          setBusyTimes(data.ocupados);
        }
      })
      .catch((err) => {
        console.error("Erro ao buscar horários ocupados:", err);
      })
      .finally(() => {
        if (active) setLoadingTimes(false);
      });

    return () => {
      active = false;
    };
  }, [schedData.date]);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [phase, catIdx, qIdx]);

  const currentCat = CATEGORIES[catIdx];
  const currentQ = currentCat?.questions[qIdx];
  const totalQuestions = CATEGORIES.reduce((a, c) => a + c.questions.length, 0);
  const answeredCount = CATEGORIES.reduce((a, c) => a + (answers[c.id]?.filter((v) => v !== undefined && v !== null).length || 0), 0);
  const progress = answeredCount / totalQuestions;

  function selectAnswer(optionIdx) {
    const newAnswers = { ...answers, [currentCat.id]: [...(answers[currentCat.id] || [])] };
    newAnswers[currentCat.id][qIdx] = optionIdx;
    setAnswers(newAnswers);
    setAnimKey((k) => k + 1);

    setTimeout(() => {
      if (qIdx < currentCat.questions.length - 1) {
        setQIdx(qIdx + 1);
      } else if (catIdx < CATEGORIES.length - 1) {
        setCatIdx(catIdx + 1);
        setQIdx(0);
      } else {
        // Calcular scores
        const newScores = {};
        let total = 0;
        CATEGORIES.forEach((cat) => {
          const catAnswers = cat.id === currentCat.id ? newAnswers[cat.id] : answers[cat.id];
          const s = cat.questions.reduce((sum, q, i) => {
            const a = catAnswers?.[i];
            return sum + (a !== null && a !== undefined ? q.scores[a] : 0);
          }, 0);
          newScores[cat.id] = s;
          total += s;
        });
        setScores(newScores);
        setTotalScore(total);
        setDiagnosis(getTotalDiagnosis(total));
        setPhase("result");
      }
    }, 300);
  }

  async function handleSubmit() {
    if (!formData.nome || !formData.telefone || !formData.email) return;
    if (!schedData.date || !schedData.time) return;
    setSubmitting(true);
    try {
      const payload = buildPayload({ formData, schedData, answers, scores, totalScore, diagnosis, utmSource });
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      console.error("Webhook error:", e);
    }
    setSubmitting(false);
    setPhase("done");
  }

  function formatPhone(v) {
    const d = v.replace(/\D/g, "").slice(0, 11);
    if (d.length <= 2) return d;
    if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  }

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:ital@1&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background: ${BRAND.bg};
      color: ${BRAND.text};
      font-family: 'DM Sans', sans-serif;
      min-height: 100vh;
      overflow-x: hidden;
    }

    .quiz-wrap {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px 32px 48px;
      position: relative;
    }

    .noise {
      position: fixed; inset: 0; pointer-events: none; z-index: 0;
      opacity: 0.03;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 200px;
    }

    .grid-bg {
      position: fixed; inset: 0; pointer-events: none; z-index: 0;
      background-image: linear-gradient(rgba(212,43,43,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(212,43,43,0.04) 1px, transparent 1px);
      background-size: 48px 48px;
    }

    .top-bar {
      width: 100%; max-width: 1060px;
      padding: 0 0 0;
      display: flex; align-items: center; justify-content: space-between;
      position: relative; z-index: 10;
    }

    .logo-text {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 22px;
      letter-spacing: 2px;
      color: ${BRAND.white};
    }
    .logo-text span { color: ${BRAND.red}; }

    .progress-bar-wrap {
      width: 100%; max-width: 1060px;
      margin-top: 16px;
      position: relative; z-index: 10;
    }
    .progress-track {
      height: 2px; background: #1a1a1a; border-radius: 2px; overflow: hidden;
    }
    .progress-fill {
      height: 100%; background: ${BRAND.red};
      border-radius: 2px;
      transition: width 0.5s cubic-bezier(.4,0,.2,1);
      box-shadow: 0 0 8px ${BRAND.red};
    }
    .progress-label {
      font-size: 13px; color: #aaa;
      margin-top: 8px; letter-spacing: 1.5px; text-transform: uppercase;
      font-weight: 500;
    }

    .card {
      width: 100%; max-width: 960px;
      background: ${BRAND.surface};
      border: 1px solid ${BRAND.border};
      border-radius: 20px;
      padding: 32px 20px; /* Padding reduzido e super amigável para celular */
      position: relative; z-index: 10;
      margin-top: 24px;
    }

    @media (min-width: 640px) {
      .card { padding: 40px 36px; }
    }

    @media (min-width: 768px) {
      .card { padding: 48px 56px; }
    }

    @media (min-width: 1024px) {
      .card { padding: 64px 88px; max-width: 1060px; }
      .q-hint { font-size: 16px; padding: 16px 20px; }
      .option-btn { padding: 24px 28px; font-size: 18px; }
      .intro-sub { font-size: 22px; max-width: 860px; line-height: 1.6; }
      .pillars { gap: 24px; }
      .pillar { padding: 32px 36px; gap: 28px; border-radius: 16px; }
      .pillar-name { font-size: 30px; margin-bottom: 8px; }
      .pillar-desc { font-size: 22px; line-height: 1.6; color: #ddd; }
      .pillar-icon { font-size: 56px; }
      .btn-primary { font-size: 18px; padding: 24px 54px; }
      .form-title { font-size: 48px; }
      .form-sub { font-size: 21px; }
      .form-input { font-size: 20px; padding: 18px 22px; }
      .form-label { font-size: 16px; }
      .q-number { font-size: 16px; }
      .cat-badge { font-size: 15px; padding: 10px 22px; }
      .section-label { font-size: 18px; }
      .time-btn { font-size: 19px; padding: 18px; }
      .privacy-note { font-size: 17px; }
      .done-title { font-size: 56px; }
      .done-sub { font-size: 24px; }
      .done-step { font-size: 19px; padding: 20px 26px; }
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-up { animation: fadeUp 0.4s ease forwards; }

    .intro-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(48px, 6vw, 96px);
      line-height: 1;
      letter-spacing: 2px;
      margin-bottom: 8px;
    }
    .intro-title em {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      color: ${BRAND.red};
    }

    .intro-sub {
      font-size: clamp(16px, 1.5vw, 24px);
      line-height: 1.7;
      color: #bbb; margin-bottom: 36px;
      max-width: 100%;
    }

    .pillars {
      display: grid;
      grid-template-columns: 1fr; /* Coluna única por padrão no celular */
      gap: 12px;
      margin-bottom: 32px;
    }
    @media (min-width: 640px) {
      .pillars {
        grid-template-columns: 1fr 1fr; /* Duas colunas em telas maiores */
        gap: 16px;
        margin-bottom: 40px;
      }
    }
    .pillar {
      background: #161616; border: 1px solid #222;
      border-radius: 12px; padding: 20px;
      display: flex; align-items: center; gap: 16px;
    }
    .pillar-icon { font-size: 32px; }
    .pillar-name {
      font-size: 20px; font-weight: 600; color: ${BRAND.text};
      letter-spacing: 0.5px;
    }
    .pillar-desc { font-size: 15px; color: #aaa; margin-top: 6px; line-height: 1.5; }

    .btn-primary {
      background: ${BRAND.red};
      color: white;
      border: none; cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      font-weight: 600; font-size: 13px;
      letter-spacing: 2px; text-transform: uppercase;
      padding: 16px 36px; border-radius: 6px;
      transition: all 0.2s;
      display: inline-flex; align-items: center; gap: 10px;
    }
    .btn-primary:hover { background: #b82020; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(212,43,43,0.3); }
    .btn-primary:disabled { opacity: 0.4; cursor: not-allowed; transform: none; box-shadow: none; }

    .cat-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(212,43,43,0.12);
      border: 1px solid rgba(212,43,43,0.3);
      color: ${BRAND.red}; font-size: 14px; font-weight: 600;
      letter-spacing: 2px; text-transform: uppercase;
      padding: 8px 18px; border-radius: 100px;
      margin-bottom: 20px;
    }

    .q-number {
      font-size: 14px; color: #999; letter-spacing: 1.5px;
      text-transform: uppercase; margin-bottom: 12px;
      font-weight: 500;
    }

    .q-text {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(26px, 3vw, 48px);
      line-height: 1.15; letter-spacing: 0.5px;
      margin-bottom: 12px;
    }

    .q-hint {
      font-size: 14px; color: #ccc;
      line-height: 1.6; margin-bottom: 28px;
      padding: 12px 16px;
      background: #0f0f0f; border-left: 2px solid #555;
      border-radius: 0 6px 6px 0;
    }

    .options { display: flex; flex-direction: column; gap: 10px; }

    .option-btn {
      background: #161616; border: 1px solid #252525;
      border-radius: 10px; padding: 20px 22px;
      cursor: pointer; text-align: left;
      font-family: 'DM Sans', sans-serif;
      font-size: 16px; color: ${BRAND.text};
      transition: all 0.2s;
      display: flex; align-items: center; gap: 14px;
    }
    .option-btn:hover {
      border-color: ${BRAND.red};
      background: rgba(212,43,43,0.06);
    }
    .option-btn.selected {
      border-color: ${BRAND.red};
      background: rgba(212,43,43,0.1);
      color: white;
    }
    .option-dot {
      width: 18px; height: 18px; border-radius: 50%;
      border: 2px solid #333; flex-shrink: 0;
      transition: all 0.2s;
      display: flex; align-items: center; justify-content: center;
    }
    .option-btn.selected .option-dot {
      border-color: ${BRAND.red}; background: ${BRAND.red};
    }
    .option-dot-inner {
      width: 6px; height: 6px; border-radius: 50%; background: white;
      opacity: 0;
    }
    .option-btn.selected .option-dot-inner { opacity: 1; }

    .cat-nav {
      display: flex; gap: 8px; flex-wrap: wrap; margin-top: 28px;
    }
    .cat-dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: #333; transition: all 0.3s;
    }
    .cat-dot.active { background: ${BRAND.red}; box-shadow: 0 0 6px ${BRAND.red}; }
    .cat-dot.done { background: #555; }

    /* Results */
    .result-header {
      text-align: center; margin-bottom: 36px;
    }
    .result-total {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 80px; line-height: 1;
      margin-bottom: 4px;
    }
    .result-label {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 28px; letter-spacing: 2px;
    }
    .result-sub { font-size: 14px; color: #aaa; margin-top: 10px; line-height: 1.6; max-width: 480px; margin-inline: auto; }

    .score-grid { display: flex; flex-direction: column; gap: 16px; margin: 28px 0; }
    .score-row {
      background: #161616; border: 1px solid #1e1e1e;
      border-radius: 10px; padding: 16px 20px;
    }
    .score-row-top {
      display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;
    }
    .score-row-left { display: flex; align-items: center; gap: 10px; }
    .score-row-name { font-weight: 600; font-size: 14px; }
    .score-row-status { font-size: 11px; letter-spacing: 1px; text-transform: uppercase; font-weight: 600; }
    .score-track {
      height: 4px; background: #222; border-radius: 4px; overflow: hidden;
    }
    .score-fill {
      height: 100%; border-radius: 4px;
      transition: width 1s ease 0.3s;
    }

    .insight-box {
      background: rgba(212,43,43,0.06);
      border: 1px solid rgba(212,43,43,0.2);
      border-radius: 12px; padding: 24px;
      margin: 20px 0 28px;
    }
    .insight-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 18px; letter-spacing: 1px;
      color: ${BRAND.red}; margin-bottom: 12px;
    }
    .insight-list { list-style: none; }
    .insight-list li {
      font-size: 13px; color: #ccc; line-height: 1.6;
      padding: 6px 0; border-bottom: 1px solid #1a1a1a;
      display: flex; align-items: flex-start; gap: 8px;
    }
    .insight-list li:last-child { border: none; }
    .insight-list li::before { content: "→"; color: ${BRAND.red}; flex-shrink: 0; margin-top: 1px; }

    /* Form */
    .form-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 42px; letter-spacing: 2px; margin-bottom: 12px;
    }
    .form-sub { font-size: 18px; color: #aaaaaa; margin-bottom: 32px; line-height: 1.6; }

    .form-field { margin-bottom: 22px; }
    .form-label {
      display: block; font-size: 13px; letter-spacing: 1.5px;
      text-transform: uppercase; color: ${BRAND.muted};
      margin-bottom: 10px; font-weight: 600;
    }
    .form-input {
      width: 100%;
      background: #161616; border: 1px solid #2a2a2a;
      border-radius: 8px; padding: 16px 18px;
      color: ${BRAND.text}; font-family: 'DM Sans', sans-serif;
      font-size: 18px; font-weight: 500; outline: none;
      transition: border-color 0.2s;
    }
    .form-input:focus { border-color: ${BRAND.red}; }
    .form-input::placeholder { color: #444; }
    .form-input[type="date"]::-webkit-calendar-picker-indicator {
      filter: invert(23%) sepia(93%) saturate(6084%) hue-rotate(354deg) brightness(88%) contrast(90%);
      cursor: pointer;
    }

    .privacy-note {
      display: flex; align-items: center; gap: 8px;
      font-size: 15px; color: #888; margin-top: 24px; margin-bottom: 28px;
    }
    .privacy-note span { color: #888; }

    /* Schedule */
    .time-grid {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 18px;
    }
    .time-btn {
      background: #161616; border: 1px solid #252525;
      border-radius: 8px; padding: 14px 10px;
      cursor: pointer; font-family: 'DM Sans', sans-serif;
      font-size: 17px; font-weight: 500; color: #aaa;
      transition: all 0.15s; text-align: center;
    }
    .time-btn:hover { border-color: ${BRAND.red}; color: white; }
    .time-btn.sel { background: ${BRAND.red}; border-color: ${BRAND.red}; color: white; }
    .time-btn:disabled {
      opacity: 0.35;
      cursor: not-allowed;
      text-decoration: line-through;
      background: #0d0d0d;
      border-color: #1a1a1a;
      color: #555;
    }
    .time-btn:disabled:hover {
      background: #0d0d0d;
      border-color: #1a1a1a;
      color: #555;
      transform: none;
      box-shadow: none;
    }

    .section-label {
      font-size: 16px; text-transform: uppercase; letter-spacing: 2px;
      color: ${BRAND.muted}; font-weight: 600; margin: 28px 0 14px;
    }

    /* Done */
    .done-icon { font-size: 56px; margin-bottom: 20px; }
    .done-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 40px; letter-spacing: 2px; margin-bottom: 12px;
    }
    .done-sub {
      font-size: 20px;
      color: #aaa;
      line-height: 1.8;
      max-width: 560px;
      margin: 0 auto;
    }
    .done-steps {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin: 32px auto;
      text-align: left;
      max-width: 560px;
    }
    .done-step {
      background: #161616;
      border: 1px solid #1e1e1e;
      border-radius: 12px;
      padding: 18px 22px;
      display: flex;
      align-items: flex-start;
      gap: 14px;
      font-size: 17px;
      color: #ccc;
      line-height: 1.6;
    }
    .done-step-icon {
      font-size: 24px;
      flex-shrink: 0;
    }
  `;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, overflowY: "auto", background: "#080808" }}>
      <style>{styles}</style>
      <div className="noise" />
      <div className="grid-bg" />
      <div className="quiz-wrap" ref={topRef}>

        {/* TOP BAR */}
        <div className="top-bar">
          <img src="/logo.svg" alt="One Thank Digital" className="h-10 md:h-14 object-contain" />
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {phase === "quiz" && (
              <div style={{ fontSize: 14, color: "#aaa", letterSpacing: 1, fontWeight: 500 }}>
                {answeredCount}/{totalQuestions} RESPONDIDAS
              </div>
            )}
            {onClose && (
              <button onClick={onClose} style={{
                background: "none", border: "1px solid #333", color: "#ccc",
                cursor: "pointer", borderRadius: 6, padding: "8px 16px",
                fontSize: 14, letterSpacing: 1.5, fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                transition: "all 0.2s",
              }}>✕ FECHAR</button>
            )}
          </div>
        </div>

        {/* PROGRESS */}
        {phase === "quiz" && (
          <div className="progress-bar-wrap">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress * 100}%` }} />
            </div>
            <div className="progress-label">{currentCat.short} — {currentCat.label}</div>
          </div>
        )}

        {/* INTRO */}
        {phase === "intro" && (
          <div className="card fade-up">
            <div className="intro-title">
              AVALIE SUA<br /><em>Estrutura Digital</em>
            </div>
            <p className="intro-sub">
              20 perguntas em 4 pilares estratégicos. Descubra com precisão onde sua empresa está e o que impede seu crescimento digital. <strong style={{ color: "white" }}>Resultado imediato.</strong>
            </p>

            <div className="pillars">
              {CATEGORIES.map((c) => (
                <div className="pillar" key={c.id}>
                  <span className="pillar-icon">{c.icon}</span>
                  <div>
                    <div className="pillar-name">{c.label}</div>
                    <div className="pillar-desc">{c.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-primary" onClick={() => setPhase("quiz")}>
              INICIAR AVALIAÇÃO →
            </button>

            <div style={{ marginTop: 24, fontSize: 14, color: "#999", display: "flex", alignItems: "center", gap: 8, fontWeight: 500 }}>
              🔒 Suas respostas são totalmente confidenciais
            </div>
          </div>
        )}

        {/* QUIZ */}
        {phase === "quiz" && currentQ && (
          <div className="card fade-up" key={animKey}>
            <div className="cat-badge">
              {currentCat.icon} {currentCat.label}
            </div>
            <div className="q-number">
              Pergunta {qIdx + 1} de {currentCat.questions.length}
            </div>
            <div className="q-text">{currentQ.q}</div>
            <div className="q-hint">💡 {currentQ.hint}</div>

            <div className="options">
              {currentQ.options.map((opt, i) => (
                <button
                  key={i}
                  className={`option-btn${answers[currentCat.id]?.[qIdx] === i ? " selected" : ""}`}
                  onClick={() => selectAnswer(i)}
                >
                  <div className="option-dot">
                    <div className="option-dot-inner" />
                  </div>
                  {opt}
                </button>
              ))}
            </div>

            <div className="cat-nav">
              {CATEGORIES.map((c, ci) => (
                <div
                  key={ci}
                  className={`cat-dot${ci === catIdx ? " active" : ci < catIdx ? " done" : ""}`}
                  title={c.label}
                />
              ))}
            </div>
          </div>
        )}

        {/* RESULT */}
        {phase === "result" && diagnosis && (
          <div className="card fade-up" style={{ textAlign: "center" }}>
            <div style={{ fontSize: 14, letterSpacing: 2.5, color: BRAND.red, textTransform: "uppercase", marginBottom: 24, fontWeight: "bold" }}>
              Diagnóstico Concluído
            </div>

            {/* Arc gauge */}
            <div style={{ position: "relative", display: "inline-block", marginBottom: 12 }}>
              <svg width="220" height="120" viewBox="0 0 200 110">
                <path d="M 15 100 A 85 85 0 0 1 185 100" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" />
                <path d="M 15 100 A 85 85 0 0 1 185 100" fill="none" stroke={diagnosis.color} strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${(totalScore / TOTAL_MAX) * 267} 267`}
                  style={{ transition: "stroke-dasharray 1.4s cubic-bezier(.4,0,.2,1)" }}
                />
              </svg>
              <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 34,
                  letterSpacing: 2,
                  color: "#ffffff",
                  textShadow: "0 2px 10px rgba(0,0,0,0.9), 0 0 15px rgba(255,255,255,0.15)"
                }}>
                  {diagnosis.title}
                </div>
              </div>
            </div>

            <p style={{ fontSize: 18, color: "#e0e0e0", lineHeight: 1.7, maxWidth: 520, margin: "16px auto 32px" }}>
              {diagnosis.subtitle}
            </p>

            {/* Blurred breakdown — creates curiosity */}
            <div style={{ position: "relative", marginBottom: 32 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, filter: "blur(6px)", userSelect: "none", pointerEvents: "none" }}>
                {CATEGORIES.map((cat) => (
                  <div key={cat.id} style={{
                    background: "#161616", border: "1px solid #1e1e1e",
                    borderRadius: 10, padding: "14px 20px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span>{cat.icon}</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "#ccc" }}>{cat.label}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 80, height: 4, background: "#222", borderRadius: 4, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: "60%", background: "#555", borderRadius: 4 }} />
                      </div>
                      <span style={{ fontSize: 12, color: "#666", fontWeight: 600 }}>■■/10</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Lock overlay */}
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                background: "linear-gradient(rgba(17,17,17,0.15) 0%, rgba(17,17,17,0.99) 75%)",
                borderRadius: 10,
              }}>
                <div style={{
                  background: "rgba(10, 10, 10, 0.9)",
                  border: `1px solid rgba(212, 43, 43, 0.45)`,
                  borderRadius: "14px",
                  padding: "18px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "0 10px 30px rgba(212, 43, 43, 0.25)",
                  backdropFilter: "blur(5px)",
                  transform: "translateY(15px)",
                }}>
                  <span style={{ fontSize: "32px", marginBottom: "8px" }}>🔒</span>
                  <span style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "24px",
                    color: BRAND.white,
                    letterSpacing: "1.5px",
                    textAlign: "center",
                  }}>
                    ANÁLISE DETALHADA BLOQUEADA
                  </span>
                  <span style={{
                    fontSize: "13px",
                    color: BRAND.red,
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginTop: "6px",
                  }}>
                    Liberada Gratuitamente na Call
                  </span>
                </div>
              </div>
            </div>

            {/* HIGH VALUE HIGHLIGHT BOX */}
            <div style={{
              background: "linear-gradient(135deg, rgba(212, 43, 43, 0.16) 0%, rgba(212, 43, 43, 0.04) 100%)",
              border: `2px solid rgba(212, 43, 43, 0.55)`,
              borderRadius: "14px",
              padding: "26px 30px",
              marginBottom: "32px",
              fontSize: "17px",
              color: "#e5e5e5",
              lineHeight: "1.7",
              textAlign: "left",
              boxShadow: "0 10px 35px rgba(212, 43, 43, 0.15)",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "150px",
                height: "150px",
                background: "radial-gradient(circle, rgba(212,43,43,0.3) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />
              
              <div style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
                <span style={{ fontSize: "36px", lineHeight: "1", filter: "drop-shadow(0 0 10px rgba(212,43,43,0.8))" }}>🔥</span>
                <div>
                  <h4 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "24px",
                    color: BRAND.white,
                    letterSpacing: "1.5px",
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}>
                    ANÁLISE ESTRATÉGICA DETALHADA LIBERADA!
                  </h4>
                  <p style={{ margin: 0, color: "#e2e2e2" }}>
                    Analisamos minuciosamente os <strong style={{ color: "#fff", borderBottom: `2px solid ${BRAND.red}`, paddingBottom: "1.5px" }}>4 pilares fundamentais da sua estrutura digital</strong>. Na sua call gratuita de 30 minutos, nosso especialista apresentará o plano de ação estratégico e personalizado para destravar o crescimento e atrair mais clientes para sua empresa imediatamente.
                  </p>
                </div>
              </div>
            </div>

            <button className="btn-primary" onClick={() => setPhase("form")} style={{
              width: "100%",
              justifyContent: "center",
              fontSize: "18px",
              padding: "20px 40px",
              borderRadius: "8px",
              boxShadow: `0 10px 30px rgba(212, 43, 43, 0.4)`,
              letterSpacing: "2.5px",
            }}>
              QUERO RECEBER MINHA ANÁLISE E AGENDAR CALL →
            </button>
            <div style={{ fontSize: "13px", color: BRAND.text, opacity: 0.7, marginTop: "14px", fontWeight: "500", letterSpacing: "0.5px" }}>
              🎁 Call Gratuita de 30 Minutos com Especialista + Diagnóstico Completo enviado por E-mail
            </div>
          </div>
        )}

        {/* FORM */}
        {phase === "form" && (
          <div className="card fade-up">
            <div className="cat-badge">✅ Última etapa</div>
            <div className="form-title">SEUS DADOS DE CONTATO</div>
            <p className="form-sub">
              Precisamos de poucos dados para enviar sua análise e confirmar a call gratuita de 30 minutos.
            </p>

            <div className="form-field">
              <label className="form-label">Nome completo</label>
              <input
                className="form-input"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              />
            </div>
            <div className="form-field">
              <label className="form-label">WhatsApp</label>
              <input
                className="form-input"
                placeholder="(11) 99999-9999"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: formatPhone(e.target.value) })}
              />
            </div>
            <div className="form-field">
              <label className="form-label">E-mail</label>
              <input
                className="form-input"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Endereço do seu site <span style={{ color: BRAND.muted, fontWeight: 400 }}>(opcional)</span></label>
              <input
                className="form-input"
                type="url"
                placeholder="https://seusite.com.br"
                value={formData.site}
                onChange={(e) => setFormData({ ...formData, site: e.target.value })}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Nome da sua empresa no Google <span style={{ color: BRAND.muted, fontWeight: 400 }}>(opcional)</span></label>
              <input
                className="form-input"
                placeholder="Ex: Clínica Silva ou Escritório Advocacia ABC"
                value={formData.nome_gmn}
                onChange={(e) => setFormData({ ...formData, nome_gmn: e.target.value })}
              />
            </div>

            <div className="privacy-note">
              🔒 <span>Seus dados são 100% seguros e sigilosos. Nunca serão compartilhados.</span>
            </div>

            <button
              className="btn-primary"
              style={{
                width: "100%",
                justifyContent: "center",
                fontSize: "18px",
                padding: "20px 40px",
                borderRadius: "8px",
                boxShadow: `0 10px 30px rgba(212, 43, 43, 0.4)`,
                letterSpacing: "2.5px",
              }}
              disabled={!formData.nome || !formData.telefone || !formData.email}
              onClick={() => setPhase("sched")}
            >
              AGENDAR MINHA CALL →
            </button>
          </div>
        )}

        {/* SCHED */}
        {phase === "sched" && (
          <div className="card fade-up">
            <div className="cat-badge">📅 Agendamento</div>
            <div className="form-title">ESCOLHA DATA E HORÁRIO</div>
            <p className="form-sub">
              Call de 30 minutos com nosso especialista para entregar sua avaliação de estrutura digital.
            </p>

            <div className="section-label">Selecione a data</div>
            <input
              className="form-input"
              type="date"
              style={{ cursor: "pointer" }}
              min={getMinDate()}
              value={schedData.date}
              onChange={(e) => setSchedData({ ...schedData, date: e.target.value })}
            />

            {schedData.date && (
              <>
                <div className="section-label">Selecione o horário</div>
                {loadingTimes ? (
                  <div style={{ color: BRAND.muted, fontSize: "16px", padding: "14px 0", fontStyle: "italic", textAlign: "center" }}>
                    🔄 Buscando horários disponíveis...
                  </div>
                ) : (
                  <div className="time-grid">
                    {TIME_SLOTS.map((t) => {
                      const isBusy = busyTimes.includes(t);
                      return (
                        <button
                          key={t}
                          disabled={isBusy}
                          className={`time-btn${schedData.time === t ? " sel" : ""}`}
                          onClick={() => setSchedData({ ...schedData, time: t })}
                          title={isBusy ? "Horário indisponível" : `Escolher ${t}`}
                        >
                          {t}
                          {isBusy && <span style={{ display: "block", fontSize: "10px", marginTop: "2px", opacity: 0.6 }}>Indisponível</span>}
                        </button>
                      );
                    })}
                  </div>
                )}
              </>
            )}

            <button
              className="btn-primary"
              style={{
                width: "100%",
                justifyContent: "center",
                fontSize: "18px",
                padding: "20px 40px",
                borderRadius: "8px",
                boxShadow: `0 10px 30px rgba(212, 43, 43, 0.4)`,
                letterSpacing: "2.5px",
                marginTop: 28,
              }}
              disabled={!schedData.date || !schedData.time || submitting}
              onClick={handleSubmit}
            >
              {submitting ? "CONFIRMANDO..." : "CONFIRMAR AGENDAMENTO →"}
            </button>
          </div>
        )}

        {/* DONE */}
        {phase === "done" && (
          <div className="card fade-up" style={{ textAlign: "center" }}>
            <div className="done-icon">🎯</div>
            <div className="done-title">TUDO CERTO, {formData.nome.split(" ")[0].toUpperCase()}!</div>
            <p className="done-sub">
              Sua avaliação foi registrada. <br />
              Nos vemos na call em:
              <strong style={{ color: BRAND.red, fontSize: "36px", display: "block", marginTop: "12px", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1.5px" }}>
                {schedData.date?.split("-").reverse().join("/")} às {schedData.time}
              </strong>
            </p>

            <div className="done-steps">
              <div className="done-step">
                <span className="done-step-icon">📧</span>
                <span>Você receberá um e-mail em <strong>{formData.email}</strong> com os detalhes da call e um resumo da sua avaliação.</span>
              </div>
              <div className="done-step">
                <span className="done-step-icon">💬</span>
                <span>Enviaremos uma mensagem de boas-vindas no WhatsApp <strong>{formData.telefone}</strong> com link de acesso à reunião.</span>
              </div>
              <div className="done-step">
                <span className="done-step-icon">🚀</span>
                <span>Na call, nossa equipe entregará um plano de ação personalizado para a sua empresa.</span>
              </div>
            </div>

            <div style={{
              background: "rgba(212,43,43,0.06)",
              border: `1px solid rgba(212,43,43,0.12)`,
              borderRadius: "12px",
              padding: "24px 30px",
              maxWidth: "560px",
              margin: "0 auto",
            }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "20px",
                color: BRAND.white,
                letterSpacing: "1.5px",
                marginBottom: "6px",
              }}>
                One Thank Digital
              </div>
              <div style={{ fontSize: "14px", color: BRAND.muted, fontWeight: "500" }}>
                Presença digital estruturada.
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
