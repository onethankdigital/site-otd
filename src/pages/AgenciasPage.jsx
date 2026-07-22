import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Webhook URL para recebimento dos leads de agência (n8n)
const WEBHOOK_URL = 'https://api.onethank.com.br/webhook/parceria-agencias';

export default function AgenciasPage() {
  const [formData, setFormData] = useState({
    nome_executivo: '',
    email_corporativo: '',
    agencia_website: '',
    tamanho_carteira: '',
    e_agencia: '',
    url_cliente_raiox: '',
  });

  const [formState, setFormState] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  const [redirectCountdown, setRedirectCountdown] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handler para redirecionar se o usuário não for uma agência de marketing
  useEffect(() => {
    if (formData.e_agencia === 'Não') {
      setRedirectCountdown(5);
    } else {
      setRedirectCountdown(null);
    }
  }, [formData.e_agencia]);

  useEffect(() => {
    if (redirectCountdown === null) return;
    if (redirectCountdown <= 0) {
      // Redireciona via SPA popstate ou fallback de window.location
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
      return;
    }
    const timer = setTimeout(() => {
      setRedirectCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [redirectCountdown]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.e_agencia === 'Não') return; // Bloqueia envio se não for agência

    setFormState({ submitting: true, success: false, error: false });

    // Payload JSON preparado para Webhook n8n
    const payload = {
      submission_type: 'parceria_agencia',
      timestamp: new Date().toISOString(),
      lead_info: {
        nome: formData.nome_executivo,
        email: formData.email_corporativo,
        agencia_website: formData.agencia_website,
        tamanho_carteira: formData.tamanho_carteira,
        url_cliente_raiox: formData.url_cliente_raiox || 'Nenhum informado',
      },
      utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direto',
      utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || 'nenhum',
      utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || 'nenhum',
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFormState({ submitting: false, success: true, error: false });
        // Envio de evento para Google Tag Manager / DataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'lead_parceria_agencia',
          agencia: formData.agencia_website,
          tamanho: formData.tamanho_carteira,
        });
      } else {
        throw new Error('Erro na resposta do servidor');
      }
    } catch (err) {
      console.error('Erro ao enviar lead:', err);
      // Fallback: mesmo em caso de erro de conexão, simulamos sucesso ou exibimos erro apropriado
      setFormState({ submitting: false, success: false, error: true });
    }
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // FAQs do Schema Graph e Accordion do rodapé (opcional, para alimentar dados estruturados)
  const FAQs = [
    {
      q: 'Como funciona o modelo de parceria white-label?',
      a: 'Nossa equipe assume o desenvolvimento técnico de sites, otimização de SEO e automações sob o selo da sua agência (white-label). O cliente final interage apenas com a sua equipe ou de forma transparente, eliminando seu custo fixo com desenvolvedores internos.',
    },
    {
      q: 'Há proteção jurídica para a carteira de clientes da minha agência?',
      a: 'Sim. Toda parceria é selada sob um Acordo de Não-Concorrência (NDA) rígido com assinatura digital válida em cartório, garantindo total segurança e exclusividade de atendimento à sua carteira.',
    },
    {
      q: 'Minha agência precisa pagar alguma taxa de adesão?',
      a: 'Não. O programa de parceiros não cobra mensalidades ou taxas de adesão. Nós cobramos pelos projetos executados com tabelas de desconto exclusivas para agências parceiras, permitindo que você revenda com margens excelentes.',
    },
    {
      q: 'Como funciona o Raio-X Técnico gratuito de um cliente?',
      a: 'Você insere o site de um cliente da sua carteira no formulário de contato. Nós realizamos uma auditoria profunda de velocidade (Core Web Vitals), tagueamento (GTM/GA4) e otimização semântica, identificando vazamentos de leads e pontos de melhoria que você pode apresentar diretamente a ele.',
    },
  ];

  const [activeFaq, setActiveFaq] = useState(null);
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        {/* Fontes personalizadas para estética premium B2B */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Metadados SEO */}
        <title>Parceria e Engenharia White-Label para Agências | One Thank Digital</title>
        <meta name="description" content="Assumimos a infraestrutura web, SEO de alta performance e automações de WhatsApp e CRM dos seus clientes. Reduza o churn, elimine custos fixos e aumente a margem da sua agência." />
        <link rel="canonical" href="https://onethank.com.br/agencias" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onethank.com.br/agencias" />
        <meta property="og:title" content="Parceria e Engenharia White-Label para Agências | One Thank Digital" />
        <meta property="og:description" content="Assumimos a infraestrutura web, SEO de alta performance e automações de WhatsApp e CRM dos seus clientes. Reduza o churn, elimine custos fixos e aumente a margem da sua agência." />
        <meta property="og:image" content="https://onethank.com.br/hero-bg.webp" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://onethank.com.br/agencias" />
        <meta property="twitter:title" content="Parceria e Engenharia White-Label para Agências | One Thank Digital" />
        <meta property="twitter:description" content="Assumimos a infraestrutura web, SEO de alta performance e automações de WhatsApp e CRM dos seus clientes. Reduza o churn, elimine custos fixos e aumente a margem da sua agência." />
        <meta property="twitter:image" content="https://onethank.com.br/hero-bg.webp" />

        {/* JSON-LD Schema Graph Completo */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://onethank.com.br/#organization',
                'name': 'One Thank Digital',
                'url': 'https://onethank.com.br/',
                'logo': 'https://onethank.com.br/logo.svg',
                'image': 'https://onethank.com.br/hero-bg.webp',
                'telephone': '+5511978679090',
                'address': {
                  '@type': 'PostalAddress',
                  'streetAddress': 'Rua Monte Casseros, 281 - Centro',
                  'addressLocality': 'Santo André',
                  'addressRegion': 'SP',
                  'postalCode': '09015-020',
                  'addressCountry': 'BR'
                }
              },
              {
                '@type': 'Service',
                '@id': 'https://onethank.com.br/agencias#service',
                'name': 'Engenharia White-Label de Presença Digital e Automação para Agências',
                'provider': { '@id': 'https://onethank.com.br/#organization' },
                'description': 'Terceirização e infraestrutura técnica de sites premium, SEO local, rastreamento Server-Side e automações comerciais n8n/WhatsApp para agências de marketing.',
                'areaServed': [
                  { '@type': 'Country', 'name': 'Brasil' }
                ]
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://onethank.com.br/agencias#faq',
                'mainEntity': FAQs.map(faq => ({
                  '@type': 'Question',
                  'name': faq.q,
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': faq.a
                  }
                }))
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Renders the global project header navigation */}
      <Navbar
        onOpenQuiz={() => { window.location.href = '/diagnostico'; }}
        onOpenPilares={() => { window.location.href = '/pilares'; }}
        onOpenHistoria={() => { window.location.href = '/historia'; }}
      />

      {/* Global page container in dark system */}
      <div className="pt-24 md:pt-28 bg-[#050505] min-h-screen text-slate-100 font-sans selection:bg-accent selection:text-white relative overflow-x-hidden">
        
        {/* Background grids and glowing gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.04),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(6,182,212,0.04),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* ─── BLOCO 1: HERO SECTION ─── */}
        <section className="relative py-16 md:py-28 overflow-hidden z-10">
          <div className="max-w-6xl mx-auto px-6 text-center">
            
            {/* Neon strategic badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-8 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              PARCERIA ESTRATÉGICA B2B | ENGENHARIA WHITE-LABEL
            </div>

            {/* H1 Heading */}
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.08] mb-8 font-sans">
              Engenharia de Presença Digital & Automação para Agências de Marketing
            </h1>

            {/* Paragraph Body */}
            <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Assumimos a infraestrutura web, o SEO de alta performance e as automações de WhatsApp e CRM dos seus clientes. 
              Sua agência reduz o churn, elimina o custo fixo de desenvolvimento interno e aumenta a margem operacional com total proteção jurídica de carteira.
            </p>

            {/* Call to Actions (CTAs) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
              <button
                onClick={() => handleScrollTo('agendar')}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold tracking-wide uppercase text-sm rounded shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 transform hover:-translate-y-0.5"
                id="btn-hero-primario"
              >
                Agendar Reunião de Parceria
              </button>
              <button
                onClick={() => handleScrollTo('auditoria')}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white font-bold tracking-wide uppercase text-sm rounded border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-0.5"
                id="btn-hero-secundario"
              >
                Solicitar Raio-X Técnico
              </button>
            </div>

            {/* Trust Micro-copy */}
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-emerald-400/90 font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>✔ Contrato de Não-Concorrência (NDA) assinado via Cartório Digital.</span>
            </div>

          </div>
        </section>


        {/* ─── BLOCO 2: DIAGNÓSTICO DO PROBLEMA ─── */}
        <section id="problemas" className="relative py-16 md:py-24 border-t border-white/[0.05] bg-neutral-950/40">
          <div className="max-w-6xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Por que Campanhas de Mídia Falham na Estrutura do Cliente Final?
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Mesmo com anúncios excelentes e campanhas de mídia bem configuradas, a conversão final falha na estrutura do cliente. 
                Erros de infraestrutura técnica aumentam o CPC e geram vazamento de leads. Isso gera frustração e cancelamento (churn) do contrato com a agência.
              </p>
            </div>

            {/* Grid 2x2 of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Card 1 */}
              <div className="p-8 rounded-lg bg-white/[0.01] border border-white/[0.05] hover:border-emerald-500/30 hover:bg-white/[0.02] transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-3xl md:text-4xl font-extrabold text-slate-800 group-hover:text-emerald-500/40 transition-colors duration-300">01</span>
                  <span className="px-2.5 py-1 rounded bg-red-500/10 text-red-400 text-[10px] font-bold tracking-wider uppercase border border-red-500/20">PERDA DE MÍDIA</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Core Web Vitals & Lentidão do Site</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Sites pesados, desotimizados para dispositivos móveis ou com servidores ruins elevam a taxa de rejeição nas Landing Pages. 
                  Você paga mais caro pelo clique (CPC alto) e o cliente abandona o site antes de carregar.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-lg bg-white/[0.01] border border-white/[0.05] hover:border-emerald-500/30 hover:bg-white/[0.02] transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-3xl md:text-4xl font-extrabold text-slate-800 group-hover:text-emerald-500/40 transition-colors duration-300">02</span>
                  <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 text-[10px] font-bold tracking-wider uppercase border border-cyan-500/20">ATRIBUIÇÃO CEGA</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cegueira de Atribuição no Tráfego</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Sem Server-Side Tracking configurado via GTM e GA4, o bloqueio de cookies de terceiros (iOS/Safari) impede a rastreabilidade real. 
                  Sua agência fica sem conseguir provar de onde estão vindo os leads e o ROI das campanhas.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-lg bg-white/[0.01] border border-white/[0.05] hover:border-emerald-500/30 hover:bg-white/[0.02] transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-3xl md:text-4xl font-extrabold text-slate-800 group-hover:text-emerald-500/40 transition-colors duration-300">03</span>
                  <span className="px-2.5 py-1 rounded bg-yellow-500/10 text-yellow-400 text-[10px] font-bold tracking-wider uppercase border border-yellow-500/20">ATENDIMENTO LENTO</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Latência de Contato no WhatsApp</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Leads gerados pelos anúncios demoram horas para serem respondidos. Sem uma automação inteligente (n8n/WhatsApp) respondendo em menos de 5 minutos, a intenção de compra esfria e a conversão cai drasticamente.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-8 rounded-lg bg-white/[0.01] border border-white/[0.05] hover:border-emerald-500/30 hover:bg-white/[0.02] transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-3xl md:text-4xl font-extrabold text-slate-800 group-hover:text-emerald-500/40 transition-colors duration-300">04</span>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold tracking-wider uppercase border border-emerald-500/20">ALTO CUSTO FIXO</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custo Fixo & Ineficiência com Devs Internos</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Contratar e gerenciar desenvolvedores internamente traz altos custos com encargos, ociosidade em períodos de baixa demanda, 
                  além de gargalos operacionais que atrasam a entrega de projetos da agência.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* ─── BLOCO 3: COMPARATIVO EM TABELA ─── */}
        <section id="comparativo" className="relative py-16 md:py-24 border-t border-white/[0.05]">
          <div className="max-w-6xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Modelo Operacional: Desenvolvimento Interno vs. Freelancer vs. Parceria OTD
              </h2>
              <p className="text-slate-400 text-sm md:text-base">
                Compare as alternativas de entrega técnica e veja por que a One Thank Digital é a solução mais escalável e lucrativa para o crescimento da sua agência.
              </p>
            </div>

            {/* Responsive Table Wrapper */}
            <div className="overflow-x-auto rounded-lg border border-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <table className="w-full text-left border-collapse min-w-[700px]">
                
                {/* Table Header */}
                <thead>
                  <tr className="bg-neutral-900/60 border-b border-white/[0.06] text-xs font-bold uppercase tracking-wider text-slate-300">
                    <th className="p-5 font-semibold text-slate-400">Critério</th>
                    <th className="p-5 font-semibold">Dev Interno</th>
                    <th className="p-5 font-semibold">Freelancer Genérico</th>
                    {/* Highlighted column header */}
                    <th className="p-5 font-semibold bg-emerald-500/5 border-x border-emerald-500/20 text-emerald-400 text-center relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-[9px] font-extrabold text-neutral-950 tracking-wider">RECOMENDADO</div>
                      Parceria One Thank Digital
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-white/[0.05] text-sm">
                  
                  {/* Row 1 */}
                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-5 font-medium text-white">Custo Operacional</td>
                    <td className="p-5 text-slate-400">Alto custo fixo (CLT, benefícios, licenças de softwares)</td>
                    <td className="p-5 text-slate-400">Variável, mas sem previsibilidade de preço corporativo</td>
                    <td className="p-5 bg-emerald-500/5 border-x border-emerald-500/10 text-slate-200 font-medium">Custo zero fixo. Você paga por demanda sob tabela B2B com margem diferenciada</td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-5 font-medium text-white">SLA & Velocidade</td>
                    <td className="p-5 text-slate-400">Dependente da capacidade interna e ociosidade da equipe</td>
                    <td className="p-5 text-slate-400">Atrasos frequentes, sumiços e sem garantias contratuais</td>
                    <td className="p-5 bg-emerald-500/5 border-x border-emerald-500/10 text-slate-200 font-medium">Cronograma de entrega estrito com metas controladas e equipe redundante</td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-5 font-medium text-white">Stack de Performance</td>
                    <td className="p-5 text-slate-400">Limitada ao conhecimento e tempo dos programadores contratados</td>
                    <td className="p-5 text-slate-400">Geralmente baseada em templates pesados com Elementor/WordPress</td>
                    <td className="p-5 bg-emerald-500/5 border-x border-emerald-500/10 text-slate-200 font-medium">Infraestrutura pura HTML/Vite/Tailwind, Server-Side Tracking e n8n de fábrica</td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-5 font-medium text-white">Segurança Jurídica</td>
                    <td className="p-5 text-slate-400">Vulnerável a rotatividade e processos trabalhistas</td>
                    <td className="p-5 text-slate-400">Risco total de concorrência direta ou captação de clientes da carteira</td>
                    <td className="p-5 bg-emerald-500/5 border-x border-emerald-500/10 text-slate-200 font-medium">NDA rígido em contrato com assinatura digital blindando sua base de clientes</td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-5 font-medium text-white">Gestão e Suporte</td>
                    <td className="p-5 text-slate-400">Exige tempo de gerência operacional da agência</td>
                    <td className="p-5 text-slate-400">Dificuldade extrema de comunicação, sem canal B2B dedicado</td>
                    <td className="p-5 bg-emerald-500/5 border-x border-emerald-500/10 text-slate-200 font-medium">Atendimento direto com gerentes de conta técnicos focados em resolver</td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>
        </section>


        {/* ─── BLOCO 4: OS 4 PILARES DA STACK OTD ─── */}
        <section id="pilares" className="relative py-16 md:py-24 border-t border-white/[0.05] bg-neutral-950/40">
          <div className="max-w-6xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                A Stack de Infraestrutura Técnica que Sua Agência Passa a Ofertar
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Ofereça soluções de tecnologia de ponta com selo de engenharia da sua própria agência. 
                Cuidamos da fundação de dados e código para que você se concentre na estratégia de tráfego e criação.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Pillar 1 */}
              <div className="p-8 rounded-lg bg-neutral-900/40 border border-white/[0.06] hover:bg-neutral-900/60 hover:border-emerald-500/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400 text-xl font-bold">01</div>
                  <h3 className="text-xl font-bold text-white">Websites & E-commerces Premium</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✔</span>
                    <span>Core Web Vitals & LCP ultra-rápidos (&lt; 1.5s)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✔</span>
                    <span>Lojas virtuais personalizadas e robustas via WooCommerce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✔</span>
                    <span>Server-Side Tracking nativo configurado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✔</span>
                    <span>Layouts e UX mobile-first focados em conversão comercial</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 2 */}
              <div className="p-8 rounded-lg bg-neutral-900/40 border border-white/[0.06] hover:bg-neutral-900/60 hover:border-emerald-500/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400 text-xl font-bold">02</div>
                  <h3 className="text-xl font-bold text-white">SEO Técnico & GEO Semântico</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">✔</span>
                    <span>Otimização para AI Overviews (motores de busca com IA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">✔</span>
                    <span>Marcação Schema.org avançada e dados estruturados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">✔</span>
                    <span>Clusters de Conteúdo & Engenharia de Busca Semântica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">✔</span>
                    <span>SEO Local avançado para dominância de buscas regionais</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 3 */}
              <div className="p-8 rounded-lg bg-neutral-900/40 border border-white/[0.06] hover:bg-neutral-900/60 hover:border-emerald-500/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 text-yellow-400 text-xl font-bold">03</div>
                  <h3 className="text-xl font-bold text-white">Automações & Integração CRM</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold">✔</span>
                    <span>Fluxos de trabalho eficientes integrados via n8n</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold">✔</span>
                    <span>Integrações bidirecionais robustas com APIs REST</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold">✔</span>
                    <span>Tempo de resposta e triagem no WhatsApp inferior a 5 min</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold">✔</span>
                    <span>Sincronização instantânea e higienização automática do CRM</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 4 */}
              <div className="p-8 rounded-lg bg-neutral-900/40 border border-white/[0.06] hover:bg-neutral-900/60 hover:border-emerald-500/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400 text-xl font-bold">04</div>
                  <h3 className="text-xl font-bold text-white">Presença Local & Infraestrutura</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">✔</span>
                    <span>Posicionamento e gestão do Google Meu Negócio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">✔</span>
                    <span>Painéis cPanel e WHM de nível corporativo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">✔</span>
                    <span>Servidores VPS dedicados de alto tráfego e redundância</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">✔</span>
                    <span>Bancos de dados serverless eficientes via Supabase/PostgreSQL</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>


        {/* ─── BLOCO 5: RISK REVERSAL & TESTE DE ESTRESSE ─── */}
        <section id="auditoria" className="relative py-16 md:py-24 border-t border-white/[0.05] overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full filter blur-[120px] pointer-events-none" />
            
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Identifique o Ponto Cego da Sua Carteira Sem Custo
            </h2>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Quer ver na prática como as falhas de infraestrutura afetam seus clientes? Nós faremos um <strong>Raio-X Técnico gratuito</strong> de 1 cliente atual da sua carteira. 
              Nossa auditoria vai expor gargalos ocultos de velocidade de carregamento, falhas de tagueamento do Facebook/Google Pixel e oportunidades de busca orgânica semântica.
            </p>
            <p className="text-sm text-slate-400 mb-10 max-w-xl mx-auto">
              Use este diagnóstico detalhado para justificar a otimização, fidelizar a marca dele com sua agência e aumentar a sua margem em cima do projeto.
            </p>
            
            <button
              onClick={() => handleScrollTo('agendar')}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold tracking-wide uppercase text-sm rounded shadow-[0_0_35px_rgba(16,185,129,0.25)] transition-all duration-300"
            >
              Solicitar Raio-X Técnico de Cliente
            </button>
          </div>
        </section>


        {/* ─── BLOCO 6: FORMULÁRIO DE CONVERSÃO & QUALIFICAÇÃO ─── */}
        <section id="agendar" className="relative py-16 md:py-24 border-t border-white/[0.05] bg-neutral-950/60">
          <div className="max-w-4xl mx-auto px-6">
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Solicite a Apresentação do Programa de Parceiros
              </h2>
              <p className="text-slate-400 text-sm md:text-base">
                Insira as informações da sua agência abaixo para receber a tabela de preços exclusiva para agências B2B e agendar sua call de apresentação.
              </p>
            </div>

            {/* Form Box */}
            <div className="p-8 md:p-12 rounded-lg bg-neutral-900/40 border border-white/[0.06] shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
              
              {/* Redirect Countdown Modal Overlay */}
              {redirectCountdown !== null && (
                <div className="absolute inset-0 bg-neutral-950/95 flex flex-col items-center justify-center text-center p-6 z-50">
                  <div className="w-16 h-16 rounded-full border-t-2 border-r-2 border-red-500 animate-spin mb-6" />
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Redirecionamento em Andamento</h3>
                  <p className="text-slate-400 text-sm md:text-base max-w-sm mx-auto mb-2">
                    O Programa de Parcerias da One Thank Digital é <strong>exclusivo para Agências de Marketing</strong>.
                  </p>
                  <p className="text-red-400 text-xs font-semibold uppercase tracking-wider">
                    Redirecionando você para a página principal em {redirectCountdown} segundos...
                  </p>
                </div>
              )}

              {formState.success ? (
                /* Success Message Block */
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-6 border border-emerald-500/20 text-3xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Solicitação Enviada com Sucesso!</h3>
                  <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto mb-8">
                    Recebemos seus dados corporativos. Nossa equipe de engenharia e parcerias entrará em contato via WhatsApp e E-mail nas próximas horas para apresentar a tabela B2B.
                  </p>
                  <button
                    onClick={() => setFormState(prev => ({ ...prev, success: false }))}
                    className="text-emerald-400 text-xs font-bold uppercase tracking-wider border-b border-emerald-500/30 hover:border-emerald-500 pb-0.5 transition-colors"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                /* Main HTML5 Qualified Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {formState.error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm">
                      Ocorreu um erro ao processar o seu envio. Se preferir, fale conosco diretamente pelo WhatsApp no rodapé.
                    </div>
                  )}

                  {/* 2 Column Row for Executivo & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome_executivo" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Nome do Executivo *
                      </label>
                      <input
                        type="text"
                        id="nome_executivo"
                        name="nome_executivo"
                        value={formData.nome_executivo}
                        onChange={handleChange}
                        required
                        placeholder="Ex: Thiago Ramos"
                        className="w-full bg-[#080808] border border-white/[0.08] focus:border-emerald-500/50 rounded px-4 py-3 text-white text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email_corporativo" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        id="email_corporativo"
                        name="email_corporativo"
                        value={formData.email_corporativo}
                        onChange={handleChange}
                        required
                        placeholder="Ex: thiago@suaagencia.com.br"
                        className="w-full bg-[#080808] border border-white/[0.08] focus:border-emerald-500/50 rounded px-4 py-3 text-white text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* 2 Column Row for Agencia/Website & Carteira */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="agencia_website" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Nome da Agência & Website *
                      </label>
                      <input
                        type="text"
                        id="agencia_website"
                        name="agencia_website"
                        value={formData.agencia_website}
                        onChange={handleChange}
                        required
                        placeholder="Ex: One Thank (onethank.com.br)"
                        className="w-full bg-[#080808] border border-white/[0.08] focus:border-emerald-500/50 rounded px-4 py-3 text-white text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="tamanho_carteira" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Tamanho da Carteira *
                      </label>
                      <select
                        id="tamanho_carteira"
                        name="tamanho_carteira"
                        value={formData.tamanho_carteira}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#080808] border border-white/[0.08] focus:border-emerald-500/50 rounded px-4 py-3 text-white text-sm outline-none transition-all cursor-pointer"
                      >
                        <option value="">Selecione uma opção...</option>
                        <option value="1-10">1 a 10 clientes</option>
                        <option value="11-30">11 a 30 clientes</option>
                        <option value="30+">Mais de 30 clientes</option>
                      </select>
                    </div>
                  </div>

                  {/* Qualification Select: Sim / Nao */}
                  <div>
                    <label htmlFor="e_agencia" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Sua empresa é uma Agência de Marketing? *
                    </label>
                    <select
                      id="e_agencia"
                      name="e_agencia"
                      value={formData.e_agencia}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#080808] border border-white/[0.08] focus:border-emerald-500/50 rounded px-4 py-3 text-white text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="">Selecione...</option>
                      <option value="Sim">Sim, somos agência</option>
                      <option value="Não">Não, sou anunciante / empresa final</option>
                    </select>
                  </div>

                  {/* Optional client URL for Raio-X */}
                  <div>
                    <label htmlFor="url_cliente_raiox" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      URL de um Cliente para Raio-X Técnico <span className="text-slate-500 text-[10px] font-normal">(Opcional)</span>
                    </label>
                    <input
                      type="text"
                      id="url_cliente_raiox"
                      name="url_cliente_raiox"
                      value={formData.url_cliente_raiox}
                      onChange={handleChange}
                      placeholder="Ex: www.cliente.com.br"
                      className="w-full bg-[#080808] border border-white/[0.08] focus:border-emerald-500/50 rounded px-4 py-3 text-white text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={formState.submitting}
                      className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/40 text-neutral-950 font-bold uppercase tracking-wider text-sm rounded shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300"
                    >
                      {formState.submitting ? 'Processando envio...' : 'Solicitar Reunião & Tabela B2B'}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>
        </section>


        {/* FAQs Accordion for semantic depth and SEO crawling */}
        <section id="faq" className="relative py-16 md:py-24 border-t border-white/[0.05]">
          <div className="max-w-4xl mx-auto px-6">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">TIRE SUAS DÚVIDAS</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mt-3">
                Dúvidas Frequentes sobre a Parceria
              </h2>
            </div>

            <div className="space-y-4">
              {FAQs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-white/[0.06] rounded bg-neutral-900/20 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/[0.01] transition-colors focus:outline-none"
                  >
                    <span className="font-semibold text-sm md:text-base text-white">{faq.q}</span>
                    <span className={`text-emerald-400 text-xl font-light transform transition-transform duration-300 ${activeFaq === index ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden text-sm text-slate-400 leading-relaxed ${activeFaq === index ? 'max-h-[300px] border-t border-white/[0.05] p-6 bg-neutral-950/20' : 'max-h-0'}`}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>

      {/* Renders the global project footer */}
      <Footer
        onOpenQuiz={() => { window.location.href = '/diagnostico'; }}
        onOpenPilares={() => { window.location.href = '/pilares'; }}
        onOpenHistoria={() => { window.location.href = '/historia'; }}
      />
    </>
  );
}
