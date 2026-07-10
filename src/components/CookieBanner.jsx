import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("otd_cookies");
    if (!accepted) setTimeout(() => setVisible(true), 1500);
  }, []);

  function accept() {
    localStorage.setItem("otd_cookies", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("otd_cookies", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

    .ck-wrap {
      position: fixed;
      bottom: 24px;
      left: 24px;
      right: 24px;
      z-index: 99999;
      display: flex;
      justify-content: center;
      animation: slideUp 0.4s cubic-bezier(.4,0,.2,1) forwards;
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .ck-box {
      background: #0a0a0a;
      border: 1px solid #1e1e1e;
      border-radius: 14px;
      padding: 20px 24px;
      max-width: 640px;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 20px;
      box-shadow: 0 24px 60px rgba(0,0,0,0.4);
      font-family: 'DM Sans', sans-serif;
      flex-wrap: wrap;
    }

    .ck-icon { font-size: 24px; flex-shrink: 0; }

    .ck-text {
      flex: 1;
      min-width: 200px;
    }

    .ck-title {
      font-size: 13px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 4px;
      letter-spacing: 0.5px;
    }

    .ck-desc {
      font-size: 12px;
      color: #999;
      line-height: 1.6;
    }

    .ck-desc a {
      color: #D42B2B;
      text-decoration: none;
    }

    .ck-desc a:hover { text-decoration: underline; }

    .ck-actions {
      display: flex;
      gap: 10px;
      flex-shrink: 0;
    }

    .ck-accept {
      background: #D42B2B;
      color: white;
      border: none;
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 10px 20px;
      border-radius: 6px;
      transition: all 0.2s;
      white-space: nowrap;
    }

    .ck-accept:hover { background: #b82020; }

    .ck-decline {
      background: none;
      color: #888;
      border: 1px solid #333;
      cursor: pointer;
      font-family: 'DM Sans', sans-serif;
      font-weight: 600;
      font-size: 11px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 10px 16px;
      border-radius: 6px;
      transition: all 0.2s;
      white-space: nowrap;
    }

    .ck-decline:hover { border-color: #666; color: #fff; }

    @media (max-width: 480px) {
      .ck-wrap { bottom: 16px; left: 16px; right: 16px; }
      .ck-box { padding: 18px; gap: 14px; }
      .ck-actions { width: 100%; }
      .ck-accept, .ck-decline { flex: 1; text-align: center; }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="ck-wrap">
        <div className="ck-box">
          <div className="ck-icon">🍪</div>
          <div className="ck-text">
            <div className="ck-title">Este site usa cookies</div>
            <div className="ck-desc">
              Utilizamos cookies para melhorar sua experiência e analisar o tráfego. Saiba mais na nossa{" "}
              <a href="/privacidade/">Política de Privacidade</a>.
            </div>
          </div>
          <div className="ck-actions">
            <button className="ck-decline" onClick={decline}>Recusar</button>
            <button className="ck-accept" onClick={accept}>Aceitar</button>
          </div>
        </div>
      </div>
    </>
  );
}
