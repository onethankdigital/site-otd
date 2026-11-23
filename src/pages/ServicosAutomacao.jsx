import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import { HTML_ANTES, HTML_DEPOIS, CSS } from './servicoAutomacao/conteudo';
import iniciarPaginaAutomacao from './servicoAutomacao/iniciar';
import FAQS from './servicoAutomacao/faqs';

const ir = (url) => () => { window.location.href = url; };
const DESCRICAO = 'Agente de IA que atende WhatsApp, Instagram, e-mail e site a qualquer hora, agenda e registra tudo no CRM. Para escritórios, clínicas e empresas do ABC.';

export default function ServicosAutomacao() {
  const antes = useRef(null);
  const depois = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // a página pré-renderizada já vem com as interações montadas: volta ao HTML original antes de iniciar
    if (antes.current) antes.current.innerHTML = HTML_ANTES;
    if (depois.current) depois.current.innerHTML = HTML_DEPOIS;
    return iniciarPaginaAutomacao();
  }, []);

  return (
    <>
      <Helmet>
        <title>Automação com IA no WhatsApp e CRM | One Thank Digital</title>
        <meta name="description" content={DESCRICAO} />
        <meta property="og:title" content="Automação com IA: WhatsApp, Instagram e CRM 24h | One Thank Digital" />
        <meta property="og:description" content={DESCRICAO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onethank.com.br/servicos/automacao-digital/" />
        <meta property="og:image" content="https://onethank.com.br/hero-automacao-digital.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Automação com IA: WhatsApp, Instagram e CRM 24h | One Thank Digital" />
        <meta property="twitter:description" content={DESCRICAO} />
        <meta property="twitter:image" content="https://onethank.com.br/hero-automacao-digital.webp" />
        <link rel="canonical" href="https://onethank.com.br/servicos/automacao-digital/" />
        <script type="application/ld+json">
          {JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Automação com IA no WhatsApp e CRM',
              serviceType: 'Automação de atendimento',
              provider: {
                '@type': 'LocalBusiness',
                name: 'One Thank Digital',
                url: 'https://onethank.com.br/',
                address: { '@type': 'PostalAddress', addressLocality: 'Santo André', addressRegion: 'SP', addressCountry: 'BR' }
              },
              areaServed: [
                { '@type': 'City', name: 'Santo André' },
                { '@type': 'City', name: 'São Bernardo do Campo' },
                { '@type': 'City', name: 'São Caetano do Sul' }
              ]
            }
          ])}
        </script>
      </Helmet>

      <style>{CSS}</style>
      <Navbar onOpenQuiz={ir('/diagnostico/')} onOpenPilares={ir('/pilares/')} onOpenHistoria={ir('/historia/')} />
      <main className="autopg">
        <div ref={antes} dangerouslySetInnerHTML={{ __html: HTML_ANTES }} />
        <Faq itens={FAQS} />
        <div ref={depois} dangerouslySetInnerHTML={{ __html: HTML_DEPOIS }} />
      </main>
      <Footer onOpenQuiz={ir('/diagnostico/')} onOpenPilares={ir('/pilares/')} onOpenHistoria={ir('/historia/')} />
    </>
  );
}
