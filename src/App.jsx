import React, { useEffect, useState } from "react";

export default function WeddingWebsitePreview() {
  const weddingDate = new Date("2026-07-17T20:30:00");

  const topBanner = "";

  const eventInfo = [
    { label: "التاريخ", value: "17 يوليو 2026", sub: "3 صفر 1448هـ", icon: "◌" },
    { label: "الموقع", value: "قاعة وايت هول", sub: "عمّان، الأردن", icon: "⌘" },
    { label: "الاستقبال", value: "8:30PM", sub: "الاستقبال", icon: "☼" },
    { label: "الزفة", value: "9:30PM", sub: "الزفة", icon: "✦" },
  ];

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(weddingDate));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeRemaining(weddingDate)), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const formattedDate = weddingDate.toLocaleDateString("ar-JO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;700&family=Amiri:wght@400;700&display=swap');

        :root {
          --bg: #fbf8f2;
          --paper: #f8f4ed;
          --paper-2: #f4efe6;
          --paper-3: #efe7dc;
          --text: #463c38;
          --muted: #8f8179;
          --gold: #a98d61;
          --gold-soft: #c8b08a;
          --line: rgba(170, 150, 121, 0.28);
          --white-emboss: inset 0 1px 0 rgba(255,255,255,.95), inset 0 -10px 18px rgba(228, 218, 204, 0.35);
          --shadow: 0 16px 50px rgba(108, 90, 79, 0.08);
          --shadow-soft: 0 8px 26px rgba(108, 90, 79, 0.05);
          --radius-xl: 36px;
          --radius-lg: 28px;
          --max-width: 1240px;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.9), transparent 24%),
            radial-gradient(circle at top right, rgba(244,239,230,0.9), transparent 22%),
            linear-gradient(180deg, #fffdfa 0%, #faf6ef 40%, #f6f1e8 100%);
          color: var(--text);
          font-family: "Alexandria", Tahoma, Arial, sans-serif;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        a { color: inherit; text-decoration: none; }
        h1, h2, h3, .brand, .footer-script, .arabic-calligraphy {
          font-family: "Amiri", serif;
          font-weight: 700;
        }

        .site-shell {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          direction: rtl;
        }

        .bg-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(60px);
          z-index: 0;
          pointer-events: none;
          opacity: 0.28;
        }
        .orb-1 { width: 260px; height: 260px; top: 8%; right: -70px; background: rgba(237, 224, 208, 0.8); }
        .orb-2 { width: 320px; height: 320px; left: -70px; top: 20%; background: rgba(234, 230, 220, 0.7); }
        .orb-3 { width: 240px; height: 240px; left: 40%; bottom: 4%; background: rgba(239, 232, 222, 0.8); }

        .corner-lily {
          position: fixed;
          z-index: 0;
          pointer-events: none;
          color: rgba(214, 207, 197, 0.42);
          font-size: clamp(7rem, 14vw, 14rem);
          line-height: 1;
          text-shadow: 0 1px 0 rgba(255,255,255,0.85), 0 10px 18px rgba(206,195,183,0.15);
          filter: blur(.25px);
        }
        .corner-lily.top-right { top: 86px; right: -20px; transform: rotate(-16deg); }
        .corner-lily.top-left { top: 120px; left: -10px; transform: rotate(14deg); }
        .corner-lily.bottom-right { bottom: -18px; right: -10px; transform: rotate(10deg); }
        .corner-lily.bottom-left { bottom: -16px; left: -6px; transform: rotate(-10deg); }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          align-items: center;
          padding: 18px 26px;
          background: rgba(255, 251, 245, 0.78);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(225, 214, 198, 0.55);
        }
        .brand {
          font-size: 1.45rem;
          letter-spacing: 0.1em;
          color: rgba(116, 102, 94, 0.95);
        }
        .nav { display: none; gap: 24px; }
        .nav a {
          color: var(--muted);
          font-size: 0.95rem;
          transition: color .25s ease;
        }
        .nav a:hover { color: var(--text); }

        .hero, .section, .footer { position: relative; z-index: 1; }
        .hero {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 32px 18px 60px;
        }

        .invitation-shell {
          width: min(var(--max-width), calc(100% - 12px));
          position: relative;
          padding: 44px 22px 30px;
          border-radius: 44px;
          background:
            radial-gradient(circle at top center, rgba(255,255,255,0.94), transparent 22%),
            linear-gradient(180deg, rgba(250,247,241,0.98), rgba(243,237,229,0.92));
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow: var(--shadow), var(--white-emboss);
          overflow: hidden;
        }

        .invitation-shell::before,
        .invitation-shell::after {
          content: "";
          position: absolute;
          width: 240px;
          height: 240px;
          top: -40px;
          border-radius: 0 0 160px 160px;
          background: linear-gradient(180deg, rgba(255,255,255,0.85), rgba(235,228,216,0.38));
          box-shadow: var(--white-emboss);
          opacity: 0.68;
          pointer-events: none;
        }
        .invitation-shell::before { left: 84px; transform: rotate(10deg); }
        .invitation-shell::after { right: 84px; transform: rotate(-10deg); }

        .hero-card {
          max-width: 940px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .chandelier {
          width: min(250px, 46vw);
          height: 140px;
          margin: 0 auto 10px;
          position: relative;
          opacity: 0.62;
        }
        .chandelier::before {
          content: "";
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 54px;
          background: linear-gradient(180deg, rgba(169,141,97,.78), rgba(169,141,97,.18));
        }
        .chandelier::after {
          content: "✦";
          position: absolute;
          top: 40px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(169,141,97,.62);
          font-size: 3.8rem;
          text-shadow: 0 1px 0 rgba(255,255,255,.9);
        }
        .chandelier-arc {
          position: absolute;
          inset: 54px 24px 0;
          border-top: 2px solid rgba(169,141,97,.32);
          border-radius: 999px 999px 0 0;
        }
        .chandelier-arc::before,
        .chandelier-arc::after {
          content: "✧";
          position: absolute;
          top: -16px;
          color: rgba(169,141,97,.48);
          font-size: 1.3rem;
        }
        .chandelier-arc::before { left: 8px; }
        .chandelier-arc::after { right: 8px; }

        .arabic-calligraphy {
          color: rgba(162, 148, 133, 0.78);
          font-size: clamp(1.7rem, 4vw, 3.1rem);
          line-height: 1.35;
          margin: 6px 0 18px;
          font-weight: 700;
        }

        .family-line {
          color: var(--muted);
          font-size: 1rem;
          margin: 12px 0 8px;
        }

        .parents-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 18px;
          align-items: center;
          margin: 6px auto 18px;
          max-width: 820px;
        }
        .parent-block {
          color: var(--text);
          line-height: 1.75;
          font-size: clamp(1rem, 2vw, 1.45rem);
        }
        .parent-block small {
          display: block;
          color: var(--muted);
          font-size: .8em;
          margin-bottom: 6px;
        }
        .parent-separator {
          font-family: "Amiri", serif;
          font-size: clamp(2rem, 4vw, 3rem);
          color: rgba(142, 126, 111, 0.9);
          line-height: 1;
        }

        .invite-copy {
          color: var(--text);
          font-size: clamp(1rem, 2vw, 1.25rem);
          line-height: 2;
          max-width: 860px;
          margin: 10px auto 20px;
        }

        .names-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 12px;
          align-items: center;
          max-width: 760px;
          margin: 18px auto 24px;
        }
        .name-stack {
          color: var(--gold);
          text-align: center;
        }
        .name-stack h1 {
          margin: 0;
          font-size: clamp(2.7rem, 6vw, 5.2rem);
          line-height: 1.15;
        }
        .name-stack .sub-last {
          display: block;
          margin-top: 4px;
        }
        .rings-wrap {
          display: grid;
          place-items: center;
          color: var(--gold);
          min-width: 110px;
        }
        .rings {
          font-size: 3rem;
          line-height: 1;
          opacity: .8;
          margin-bottom: 2px;
        }
        .ampersand {
          font-family: "Amiri", serif;
          font-size: 3.4rem;
          line-height: 1;
          color: var(--gold);
          opacity: .95;
        }

        .date-line {
          margin: 8px auto 10px;
          max-width: 760px;
          padding-top: 14px;
          border-top: 1px solid var(--line);
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          color: var(--text);
        }

        .event-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          max-width: 860px;
          margin: 16px auto 0;
        }
        .event-pill {
          padding: 14px 10px;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(255,255,255,0.72), rgba(245,238,227,0.82));
          box-shadow: var(--shadow-soft), var(--white-emboss);
          border: 1px solid rgba(255,255,255,.72);
          text-align: center;
        }
        .event-icon {
          font-size: 1.15rem;
          color: var(--gold);
          margin-bottom: 6px;
        }
        .event-label {
          color: var(--gold);
          font-size: .86rem;
          margin-bottom: 4px;
        }
        .event-value {
          color: var(--text);
          font-size: .95rem;
          line-height: 1.5;
        }
        .event-sub {
          display: block;
          color: var(--muted);
          font-size: .88rem;
        }

        .personal-note {
          margin-top: 34px;
          color: rgba(162, 148, 133, 0.85);
          font-size: 1rem;
        }

        .section {
          width: min(var(--max-width), calc(100% - 22px));
          margin: 22px auto;
          padding: 28px 14px;
        }
        .section-heading {
          text-align: center;
          margin-bottom: 24px;
        }
        .section-kicker {
          margin: 0 0 10px;
          color: var(--muted);
          font-size: .8rem;
          letter-spacing: .08em;
        }
        .section-heading h2 {
          margin: 0 auto;
          font-size: clamp(2rem, 5vw, 3.4rem);
          line-height: 1.25;
          max-width: 900px;
        }

        .countdown {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          max-width: 760px;
          margin: 0 auto;
        }
        .count-card,
        .info-card,
        .location-wrap,
        .contact-card {
          background: linear-gradient(180deg, rgba(255,254,250,.98), rgba(246,240,231,.88));
          border: 1px solid rgba(255,255,255,.9);
          box-shadow: var(--shadow-soft), var(--white-emboss);
          border-radius: 28px;
        }
        .count-card {
          padding: 20px 12px;
          text-align: center;
        }
        .count-card span {
          display: block;
          font-family: "Amiri", serif;
          font-size: 2.2rem;
          line-height: 1;
          margin-bottom: 8px;
        }
        .count-card small {
          color: var(--muted);
          font-size: .82rem;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          max-width: 980px;
          margin: 0 auto;
        }
        .info-card,
        .contact-card {
          padding: 28px 26px;
          text-align: center;
        }
        .info-card h3,
        .contact-card h3,
        .location-copy h3,
        .footer-script {
          margin: 0 0 12px;
          font-size: clamp(2rem, 4vw, 2.9rem);
        }
        .info-card p,
        .contact-card p,
        .location-copy p,
        .footer-text {
          margin: 0;
          color: var(--muted);
          line-height: 1.9;
          font-size: 1rem;
        }
        .travel-label {
          display: inline-block;
          margin-bottom: 10px;
          color: var(--muted);
          font-size: .8rem;
        }
        .travel-contact-card a {
          color: var(--gold);
          font-weight: 700;
          white-space: nowrap;
        }

        .location-wrap {
          padding: 18px;
          display: grid;
          grid-template-columns: 1.15fr .9fr;
          gap: 18px;
          align-items: stretch;
          max-width: 980px;
          margin: 0 auto;
        }
        .map-shell {
          border-radius: 24px;
          overflow: hidden;
          min-height: 320px;
          box-shadow: inset 0 0 0 1px rgba(126,110,102,0.08);
        }
        .map-shell iframe {
          width: 100%;
          height: 100%;
          min-height: 320px;
          border: 0;
          display: block;
        }
        .location-copy {
          text-align: right;
          padding: 8px 6px 4px;
        }
        .location-copy p + p { margin-top: 10px; }
        .hero-button,
        .location-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 18px;
          border: 0;
          border-radius: 999px;
          padding: 14px 24px;
          min-width: 180px;
          background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(244,237,227,0.82));
          color: var(--text);
          box-shadow: var(--shadow-soft), var(--white-emboss);
        }

        .footer {
          text-align: center;
          padding: 42px 20px 70px;
          position: relative;
          z-index: 1;
        }
        .footer-script {
          margin-bottom: 10px;
        }
        .footer-text {
          max-width: 660px;
          margin: 0 auto;
        }

        .fade-section {
          opacity: 0;
          transform: translateY(30px) scale(.985);
          filter: blur(10px);
          transition: opacity .95s ease, transform 1s cubic-bezier(.22,1,.36,1), filter .95s ease;
        }
        .fade-section.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        @media (min-width: 700px) {
          .nav { display: flex; }
        }
        @media (max-width: 980px) {
          .event-grid,
          .countdown,
          .info-grid,
          .location-wrap { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .parents-row,
          .names-row,
          .event-grid,
          .countdown,
          .info-grid,
          .location-wrap {
            grid-template-columns: 1fr;
          }
          .parent-separator,
          .rings-wrap { display: none; }
          .hero {
            padding-top: 18px;
          }
          .invitation-shell {
            padding-top: 28px;
          }
          .invitation-shell::before,
          .invitation-shell::after {
            width: 140px;
            height: 140px;
          }
          .hero-drape {
            width: 110px;
            height: 110px;
          }
          .hero-title,
          .name-stack h1 {
            font-size: clamp(2.5rem, 12vw, 4rem);
          }
          .corner-lily { opacity: .26; }
        }
        @media (max-width: 480px) {
          .topbar { padding: 16px 18px; }
          .nav { display: none; }
          .hero-button,
          .location-button { width: 100%; }
          .section { width: min(var(--max-width), calc(100% - 16px)); }
        }
      `}</style>

      <div className="site-shell" lang="ar" dir="rtl">
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
        <div className="bg-orb orb-3" />
        <div className="corner-lily top-right">❀</div>
        <div className="corner-lily top-left">❀</div>
        <div className="corner-lily bottom-right">❀</div>
        <div className="corner-lily bottom-left">❀</div>

        <header className="topbar">
          <div className="brand">A & L</div>
          <nav className="nav">
            <a href="#countdown">العد التنازلي</a>
            <a href="#location">الموقع</a>
            <a href="#travel">السفر</a>
          </nav>
        </header>

        <main>
          <section className="hero">
            <div className="invitation-shell">
              <div className="hero-card">
                <div className="chandelier"><div className="chandelier-arc" /></div>

                {topBanner && (
                  <div className="hero-banner-wrap">
                    <img className="hero-banner" src={topBanner} alt="عبارة ترحيبية" />
                  </div>
                )}

                <div className="arabic-calligraphy">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
                <p className="family-line">يتشرف</p>

                <div className="parents-row">
                  <div className="parent-block">
                    <small>السيد</small>
                    عبد الشكور<br />عبد الرحيم قشقري
                  </div>
                  <div className="parent-separator">و</div>
                  <div className="parent-block">
                    <small>الدكتور</small>
                    جهاد جمال أبو بكر
                  </div>
                </div>

                <p className="invite-copy">بدعوتكم لحضور حفل زفاف </p>

                <div className="names-row">
                  <div className="name-stack">
                    <h1>لمياء<span className="sub-last">قشقري</span></h1>
                  </div>
                  <div className="rings-wrap">
                    <div className="rings">◌◌</div>
                    <div className="ampersand">و</div>
                  </div>
                  <div className="name-stack">
                    <h1>أحمد<span className="sub-last">أبو بكر</span></h1>
                  </div>
                </div>

                <div className="date-line">وذلك بمشيئة الله تعالى يوم {formattedDate}</div>

                <div className="event-grid">
                  {eventInfo.map((item) => (
                    <div className="event-pill" key={item.label}>
                      <div className="event-icon">{item.icon}</div>
                      <div className="event-label">{item.label}</div>
                      <div className="event-value">{item.value}<span className="event-sub">{item.sub}</span></div>
                    </div>
                  ))}
                </div>

                <div className="personal-note">الدعوة شخصية</div>
              </div>
            </div>
          </section>

          <section id="countdown" className="fade-section section">
            <div className="section-heading">
              <p className="section-kicker">العد التنازلي</p>
              <h2>في انتظار هذه الليلة الجميلة</h2>
            </div>
            <div className="countdown">
              <div className="count-card">
                <span>{timeLeft.days}</span>
                <small>يوم</small>
              </div>
              <div className="count-card">
                <span>{timeLeft.hours}</span>
                <small>ساعة</small>
              </div>
              <div className="count-card">
                <span>{timeLeft.minutes}</span>
                <small>دقيقة</small>
              </div>
              <div className="count-card">
                <span>{timeLeft.seconds}</span>
                <small>ثانية</small>
              </div>
            </div>
          </section>

          <section id="location" className="fade-section section">
            <div className="section-heading">
              <p className="section-kicker">الموقع</p>
              <h2>موقع الحفل</h2>
            </div>
            <div className="location-wrap">
              <div className="map-shell">
                <iframe
                  title="موقع الحفل"
                  src="https://www.google.com/maps?q=Amman%20Jordan&z=12&output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="location-copy">
                <h3>قاعة وايت هول</h3>
                <p>تمت مشاركة موقع القاعة ويمكنكم الوصول إليه مباشرة من خلال الزر أدناه.</p>
                <p>يرجى استخدام رابط الموقع للاطلاع على الاتجاهات والوصول بسهولة يوم الحفل.</p>
                <a className="location-button" href="https://share.google/MCIkWDzA7sICC1F0B" target="_blank" rel="noreferrer">فتح الموقع</a>
              </div>
            </div>
          </section>

          <section id="travel" className="fade-section section">
            <div className="section-heading">
              <p className="section-kicker">السفر والإقامة</p>
              <h2>الشريك السياحي لحفل الزفاف</h2>
            </div>
            <div className="info-grid">
              <article className="contact-card">
                <span className="travel-label">الشريك السياحي</span>
                <h3>Trip Maker</h3>
                <p>Trip Maker هو الشريك السياحي الرسمي للزفاف، للمساعدة في حجوزات الطيران والإقامة وترتيبات الزيارة في عمّان.</p>
              </article>
              <article className="contact-card travel-contact-card">
                <span className="travel-label">معلومات التواصل</span>
                <h3>الأستاذ البطاينة</h3>
                <p>للمساعدة، يرجى التواصل على الرقم <a href="tel:+962798588946">+962 7 9858 8946</a>.</p>
              </article>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p className="footer-script">بكل الحب، أحمد أبو بكر ولمياء قشقري</p>
          <p className="footer-text">نسعد بمشاركتكم لنا هذا اليوم الجميل في يوليو 2026.</p>
        </footer>
      </div>
    </>
  );
}

function getTimeRemaining(targetDate) {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}
