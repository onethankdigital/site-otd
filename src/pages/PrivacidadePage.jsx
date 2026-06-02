export default function Privacidade() {
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

    .pw{background:#fff;min-height:100vh;font-family:'DM Sans',sans-serif;color:#0a0a0a}

    .ph{background:#080808;padding:clamp(32px,4vw,56px) clamp(24px,5vw,96px);border-bottom:2px solid #D42B2B}
    .ph-in{max-width:900px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}
    .ph-logo-img{height:36px;object-fit:contain}
    .ph-back{font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#888;text-decoration:none;transition:color .2s}
    .ph-back:hover{color:#D42B2B}

    .pb{max-width:900px;margin:0 auto;padding:clamp(48px,6vw,80px) clamp(24px,5vw,96px)}

    .doc-eye{font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#D42B2B;font-weight:700;margin-bottom:16px}
    .doc-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(40px,6vw,72px);letter-spacing:1px;line-height:.95;margin-bottom:8px}
    .doc-date{font-size:12px;color:#aaa;letter-spacing:1px;margin-bottom:48px;padding-bottom:32px;border-bottom:1px solid #f0f0f0}

    .doc-section{margin-bottom:40px}
    .doc-h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(20px,2.5vw,28px);letter-spacing:1px;color:#0a0a0a;margin-bottom:16px;padding-bottom:8px;border-bottom:1px solid #f5f5f5}
    .doc-p{font-size:clamp(14px,1.1vw,16px);color:#555;line-height:1.9;margin-bottom:12px}
    .doc-p strong{color:#0a0a0a;font-weight:600}
    .doc-ul{list-style:none;margin:12px 0;display:flex;flex-direction:column;gap:10px}
    .doc-ul li{font-size:clamp(14px,1.1vw,16px);color:#555;line-height:1.7;padding-left:20px;position:relative}
    .doc-ul li::before{content:'→';position:absolute;left:0;color:#D42B2B;font-size:12px;top:3px}

    .doc-contact{background:#f9f9f9;border:1px solid #f0f0f0;border-radius:12px;padding:28px;margin-top:48px}
    .doc-contact-title{font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:1px;margin-bottom:16px;color:#0a0a0a}
    .doc-contact p{font-size:14px;color:#666;line-height:1.8}
    .doc-contact a{color:#D42B2B;text-decoration:none}

    @media(max-width:600px){.pb{padding:40px 20px}}
  `;

  return (
    <>
      <style>{css}</style>
      <div className="pw">

        <div className="ph">
          <div className="ph-in">
            <img src="/logo.svg" alt="One Thank Digital" className="ph-logo-img" />
            <a href="/" className="ph-back">← Voltar ao início</a>
          </div>
        </div>

        <div className="pb">
          <div className="doc-eye">// Documento Legal</div>
          <h1 className="doc-title">POLÍTICA DE<br />PRIVACIDADE</h1>
          <div className="doc-date">Última atualização: Maio de 2026</div>

          <div className="doc-section">
            <h2 className="doc-h2">1. QUEM SOMOS</h2>
            <p className="doc-p">
              A <strong>One Thank Digital</strong>, inscrita no CNPJ sob o nº <strong>44.589.097/0001-95</strong>, com sede em Santo André, SP, é responsável pelo tratamento dos seus dados pessoais conforme esta Política de Privacidade e a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">2. QUAIS DADOS COLETAMOS</h2>
            <p className="doc-p">Coletamos os seguintes dados quando você interage com nosso site ou Quiz:</p>
            <ul className="doc-ul">
              <li><strong>Nome completo</strong> — identificação do contato</li>
              <li><strong>Endereço de e-mail</strong> — envio de comunicações e confirmações</li>
              <li><strong>Número de WhatsApp</strong> — comunicação e agendamento</li>
              <li><strong>Respostas do Quiz</strong> — diagnóstico da estrutura digital da sua empresa</li>
              <li><strong>Data e horário de agendamento</strong> — organização da call de avaliação</li>
              <li><strong>Dados de navegação</strong> — cookies e analytics para melhoria do site</li>
            </ul>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">3. COMO USAMOS SEUS DADOS</h2>
            <p className="doc-p">Utilizamos seus dados exclusivamente para:</p>
            <ul className="doc-ul">
              <li>Entrar em contato para confirmar ou realizar agendamentos</li>
              <li>Enviar sua avaliação de estrutura digital por e-mail</li>
              <li>Enviar a mensagem de boas-vindas via WhatsApp</li>
              <li>Melhorar nossos serviços e a experiência no site</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">4. COMPARTILHAMENTO DE DADOS</h2>
            <p className="doc-p">
              Seus dados <strong>não são vendidos, alugados ou compartilhados</strong> com terceiros para fins comerciais. Podemos compartilhar informações apenas com ferramentas de tecnologia que utilizamos para operação do serviço (Google Calendar, sistemas de e-mail e WhatsApp), sempre sob acordos de confidencialidade.
            </p>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">5. COOKIES E RASTREAMENTO</h2>
            <p className="doc-p">
              Utilizamos cookies para melhorar sua experiência de navegação, analisar o tráfego do site e medir o desempenho de nossas páginas. Ao acessar o site, você será informado sobre o uso de cookies e poderá aceitar ou recusar.
            </p>
            <ul className="doc-ul">
              <li><strong>Cookies essenciais</strong> — necessários para o funcionamento do site</li>
              <li><strong>Cookies analíticos</strong> — Google Analytics para análise de tráfego</li>
              <li><strong>Cookies de marketing</strong> — rastreamento de campanhas (Pixel Meta)</li>
            </ul>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">6. POR QUANTO TEMPO GUARDAMOS SEUS DADOS</h2>
            <p className="doc-p">
              Mantemos seus dados pelo tempo necessário para prestar o serviço contratado ou pelo prazo exigido por lei. Você pode solicitar a exclusão dos seus dados a qualquer momento entrando em contato conosco.
            </p>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">7. SEUS DIREITOS (LGPD)</h2>
            <p className="doc-p">Conforme a LGPD, você tem direito a:</p>
            <ul className="doc-ul">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação dos seus dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Solicitar a portabilidade dos dados</li>
            </ul>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">8. SEGURANÇA</h2>
            <p className="doc-p">
              Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Todas as transmissões de dados são protegidas por criptografia SSL.
            </p>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">9. ALTERAÇÕES NESTA POLÍTICA</h2>
            <p className="doc-p">
              Esta política pode ser atualizada periodicamente. Notificaremos sobre mudanças significativas por e-mail ou através de aviso no site. O uso contínuo do site após as alterações implica na aceitação da nova política.
            </p>
          </div>

          <div className="doc-contact">
            <h2 className="doc-contact-title">CONTATO — ENCARREGADO DE DADOS (DPO)</h2>
            <p>
              <strong>One Thank Digital</strong><br />
              CNPJ: 44.589.097/0001-95<br />
              Santo André, SP — Brasil<br />
              E-mail: <a href="mailto:contato@onethank.com.br">contato@onethank.com.br</a><br />
              WhatsApp: <a href="https://wa.me/5511987879090">+55 11 98787-9090</a>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
