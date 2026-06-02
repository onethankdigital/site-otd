export default function Termos() {
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

    .tw{background:#fff;min-height:100vh;font-family:'DM Sans',sans-serif;color:#0a0a0a}
    .th{background:#080808;padding:clamp(32px,4vw,56px) clamp(24px,5vw,96px);border-bottom:2px solid #D42B2B}
    .th-in{max-width:900px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}
    .th-logo-img{height:36px;object-fit:contain}
    .th-back{font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#888;text-decoration:none;transition:color .2s}
    .th-back:hover{color:#D42B2B}

    .tb{max-width:900px;margin:0 auto;padding:clamp(48px,6vw,80px) clamp(24px,5vw,96px)}
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
    @media(max-width:600px){.tb{padding:40px 20px}}
  `;

  return (
    <>
      <style>{css}</style>
      <div className="tw">

        <div className="th">
          <div className="th-in">
            <img src="/logo.svg" alt="One Thank Digital" className="th-logo-img" />
            <a href="/" className="th-back">← Voltar ao início</a>
          </div>
        </div>

        <div className="tb">
          <div className="doc-eye">// Documento Legal</div>
          <h1 className="doc-title">TERMOS<br />DE USO</h1>
          <div className="doc-date">Última atualização: Maio de 2026</div>

          <div className="doc-section">
            <h2 className="doc-h2">1. ACEITAÇÃO DOS TERMOS</h2>
            <p className="doc-p">
              Ao acessar e utilizar o site <strong>onethank.com.br</strong>, você concorda com estes Termos de Uso. Se não concordar com qualquer parte destes termos, recomendamos que não utilize o site.
            </p>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">2. SOBRE A ONE THANK DIGITAL</h2>
            <p className="doc-p">
              A <strong>One Thank Digital</strong>, CNPJ <strong>44.589.097/0001-95</strong>, sediada em Santo André, SP, é uma empresa especializada em presença digital estruturada, oferecendo serviços de Google Meu Negócio, Website, SEO, Tráfego e Automação.
            </p>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">3. USO DO SITE E DO QUIZ</h2>
            <p className="doc-p">O site e o Quiz de Avaliação de Estrutura Digital são fornecidos gratuitamente para fins informativos e diagnósticos. Ao utilizar o Quiz, você:</p>
            <ul className="doc-ul">
              <li>Concorda em fornecer informações verdadeiras e precisas</li>
              <li>Autoriza o contato da One Thank Digital via e-mail e WhatsApp</li>
              <li>Entende que o diagnóstico é uma avaliação orientativa, não um laudo técnico definitivo</li>
              <li>Concorda com o agendamento da call gratuita de 30 minutos</li>
            </ul>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">4. PROPRIEDADE INTELECTUAL</h2>
            <p className="doc-p">
              Todo o conteúdo do site — incluindo textos, imagens, logotipos, metodologia dos 4 pilares, Quiz e materiais do blog — é de propriedade exclusiva da <strong>One Thank Digital</strong> e está protegido por lei. É proibida a reprodução, cópia ou uso sem autorização prévia e expressa.
            </p>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">5. LIMITAÇÃO DE RESPONSABILIDADE</h2>
            <p className="doc-p">A One Thank Digital não se responsabiliza por:</p>
            <ul className="doc-ul">
              <li>Decisões tomadas com base exclusivamente no diagnóstico do Quiz</li>
              <li>Interrupções temporárias do site por manutenção ou força maior</li>
              <li>Conteúdo de sites de terceiros linkados a partir deste site</li>
              <li>Resultados de negócio que dependam de fatores externos ao escopo dos serviços contratados</li>
            </ul>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">6. SERVIÇOS E CONTRATAÇÃO</h2>
            <p className="doc-p">
              A contratação de serviços da One Thank Digital está sujeita a proposta comercial específica, aceita formalmente pelas partes. O conteúdo deste site é informativo e não constitui proposta comercial vinculante.
            </p>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">7. BLOG E CONTEÚDO EDUCACIONAL</h2>
            <p className="doc-p">
              Os artigos publicados no blog da One Thank Digital têm fins exclusivamente educacionais e informativos. Não substituem consultoria profissional especializada para o caso específico do seu negócio.
            </p>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">8. COOKIES</h2>
            <p className="doc-p">
              Este site utiliza cookies para melhorar a experiência do usuário e analisar o tráfego. Ao continuar navegando, você concorda com o uso de cookies conforme nossa <a href="/privacidade" style={{color:"#D42B2B",textDecoration:"none"}}>Política de Privacidade</a>.
            </p>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">9. ALTERAÇÕES NOS TERMOS</h2>
            <p className="doc-p">
              Estes termos podem ser atualizados a qualquer momento. A versão vigente estará sempre disponível nesta página com a data de última atualização. O uso contínuo do site após alterações implica na aceitação dos novos termos.
            </p>
          </div>

          <div className="doc-section">
            <h2 className="doc-h2">10. LEI APLICÁVEL E FORO</h2>
            <p className="doc-p">
              Estes Termos de Uso são regidos pelas leis brasileiras. Fica eleito o foro da Comarca de Santo André, SP, para dirimir quaisquer controvérsias decorrentes deste documento.
            </p>
          </div>

          <div className="doc-contact">
            <h2 className="doc-contact-title">CONTATO</h2>
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
