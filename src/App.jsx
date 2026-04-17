import React, { useEffect, useState } from "react";

export default function WeddingWebsitePreview() {
  const weddingDate = new Date("2026-07-17T18:00:00");

  const scheduleItems = [
    { time: "5:30 PM", title: "Guest Arrival", desc: "Welcome drinks, soft music, and seating.", icon: "♡" },
    { time: "6:00 PM", title: "Ceremony Begins", desc: "The vows, the flowers, and the beginning of forever.", icon: "✿" },
    { time: "7:00 PM", title: "Golden Hour & Photos", desc: "A quiet moment for portraits and mingling.", icon: "☼" },
    { time: "8:00 PM", title: "Reception", desc: "Dinner service, speeches, and celebration.", icon: "❦" },
    { time: "10:00 PM", title: "Cake & Dancing", desc: "An evening of joy, music, and beautiful memories.", icon: "♫" },
  ];

  const topBanner = "";
  const ammanActivities = [];

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
      { threshold: 0.14 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const formattedDate = weddingDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <style>{`
        :root {
          --bg: #fcfaf6;
          --bg-soft: #f7f2eb;
          --lily: #fffdfa;
          --ivory: #f4efe7;
          --surface: rgba(255, 253, 248, 0.94);
          --surface-strong: rgba(255, 254, 250, 0.98);
          --text: #4b403d;
          --muted: #897d76;
          --blush: #ece4de;
          --blush-deep: #d9ccc4;
          --sage: #e7ebe5;
          --sage-deep: #b9c3b5;
          --gold: #cbb489;
          --shadow: 0 18px 54px rgba(112, 96, 87, 0.08);
          --shadow-soft: 0 10px 32px rgba(112, 96, 87, 0.05);
          --shadow-emboss: inset 0 1px 0 rgba(255,255,255,0.98), inset 0 -10px 24px rgba(224, 215, 203, 0.26);
          --radius-lg: 30px;
          --max-width: 1180px;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.98), transparent 25%),
            radial-gradient(circle at top right, rgba(247,242,235,0.92), transparent 28%),
            linear-gradient(180deg, #fffefb 0%, #fbf8f3 36%, #f5f0e8 100%);
          color: var(--text);
          font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        a { color: inherit; text-decoration: none; }
        button, input, select { font: inherit; }

        h1, h2, h3, .brand, .footer-script {
          font-family: "Cormorant Garamond", "Baskerville", "Times New Roman", serif;
          letter-spacing: 0.01em;
        }

        .site-shell {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        .site-shell::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 12% 12%, rgba(255,255,255,0.55), transparent 18%),
            radial-gradient(circle at 88% 10%, rgba(255,255,255,0.42), transparent 16%);
          z-index: 0;
        }

        .corner-ornament {
          position: fixed;
          width: 190px;
          height: 190px;
          z-index: 1;
          pointer-events: none;
          border-radius: 46px;
          opacity: 0.78;
          background:
            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), transparent 30%),
            linear-gradient(145deg, rgba(255,255,255,0.96), rgba(241,235,227,0.82));
          box-shadow: var(--shadow-emboss), 0 16px 34px rgba(130, 115, 104, 0.06);
          border: 1px solid rgba(255,255,255,0.85);
          overflow: hidden;
        }

        .corner-ornament::after {
          content: "❀";
          position: absolute;
          font-size: 7rem;
          color: rgba(210, 200, 188, 0.28);
          filter: blur(0.2px);
          text-shadow: 0 1px 0 rgba(255,255,255,0.95), 0 8px 16px rgba(210, 200, 188, 0.10);
        }

        .corner-top-left::after { left: -10px; bottom: -8px; }
        .corner-top-right::after { right: -10px; bottom: -8px; }

        .corner-ornament::before {
          content: "L&A";
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          font-family: "Cormorant Garamond", serif;
          font-size: 2.1rem;
          color: rgba(126, 115, 104, 0.34);
          text-shadow: 0 1px 0 rgba(255,255,255,0.96);
          letter-spacing: 0.08em;
          z-index: 1;
        }

        .corner-top-left { top: 34px; left: -42px; transform: rotate(-18deg); }
        .corner-top-right { top: 34px; right: -42px; transform: rotate(18deg); }

        .chandelier {
          position: absolute;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          width: min(240px, 42vw);
          height: 170px;
          pointer-events: none;
          z-index: 2;
          opacity: 0.72;
        }

        .chandelier::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          height: 48px;
          transform: translateX(-50%);
          background: linear-gradient(180deg, rgba(197,172,124,0.75), rgba(197,172,124,0.2));
        }

        .chandelier::after {
          content: "✦";
          position: absolute;
          top: 42px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 4rem;
          color: rgba(197,172,124,0.52);
          text-shadow: 0 2px 0 rgba(255,255,255,0.8), 0 10px 30px rgba(197,172,124,0.18);
        }

        .chandelier-arms {
          position: absolute;
          inset: 54px 18px 0;
          border-top: 2px solid rgba(197,172,124,0.45);
          border-radius: 999px 999px 0 0;
        }

        .chandelier-arms::before,
        .chandelier-arms::after {
          content: "✧";
          position: absolute;
          top: -18px;
          font-size: 1.5rem;
          color: rgba(197,172,124,0.5);
        }

        .chandelier-arms::before { left: 10px; }
        .chandelier-arms::after { right: 10px; }

        .bg-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(65px);
          z-index: 0;
          pointer-events: none;
          opacity: 0.42;
        }

        .orb-1 {
          width: 260px;
          height: 260px;
          top: 8%;
          left: -60px;
          background: rgba(232, 200, 204, 0.5);
          animation: floatSlow 10s ease-in-out infinite;
        }

        .orb-2 {
          width: 320px;
          height: 320px;
          right: -80px;
          top: 18%;
          background: rgba(184, 198, 181, 0.45);
          animation: floatSlow 14s ease-in-out infinite reverse;
        }

        .orb-3 {
          width: 220px;
          height: 220px;
          left: 45%;
          bottom: 6%;
          background: rgba(241, 228, 214, 0.55);
          animation: floatSlow 12s ease-in-out infinite;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 22px;
          backdrop-filter: blur(18px);
          background: rgba(255, 252, 247, 0.72);
          border-bottom: 1px solid rgba(255,255,255,0.7);
          box-shadow: inset 0 -1px 0 rgba(222, 212, 200, 0.45);
        }

        .brand {
          font-size: 1.45rem;
          letter-spacing: 0.12em;
        }

        .nav {
          display: none;
          gap: 22px;
        }

        .nav a {
          color: var(--muted);
          font-size: 0.95rem;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .nav a:hover {
          color: var(--text);
          transform: translateY(-1px);
        }

        .hero, .section, .footer {
          position: relative;
          z-index: 1;
        }

        .hero {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 84px 20px 60px;
          position: relative;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 24px;
          border-radius: 46px;
          background:
            radial-gradient(circle at 50% 0%, rgba(255,255,255,0.88), transparent 30%),
            linear-gradient(145deg, rgba(255,255,255,0.98), rgba(245,239,230,0.88)),
            radial-gradient(circle at 14% 14%, rgba(255,255,255,0.76), transparent 22%),
            radial-gradient(circle at 86% 14%, rgba(247,242,235,0.82), transparent 22%);
          border: 1px solid rgba(255,255,255,0.88);
          box-shadow: var(--shadow), var(--shadow-emboss);
          z-index: -1;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 24px;
          border-radius: 42px;
          pointer-events: none;
          background:
            radial-gradient(circle at 0% 0%, rgba(255,255,255,0.75), transparent 18%),
            radial-gradient(circle at 100% 0%, rgba(255,255,255,0.6), transparent 18%);
          mask: linear-gradient(#000, transparent 70%);
        }

        .hero-inner {
          max-width: 920px;
          text-align: center;
          padding: 98px 12px 42px;
          position: relative;
        }

        .hero-monogram {
          position: absolute;
          top: 180px;
          left: 50%;
          transform: translateX(-50%);
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: linear-gradient(145deg, rgba(255,255,255,0.62), rgba(240,233,224,0.36));
          border: 1px solid rgba(255,255,255,0.72);
          box-shadow: var(--shadow-emboss);
          opacity: 0.5;
          pointer-events: none;
        }

        .hero-monogram::before {
          content: "L&A";
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          font-family: "Cormorant Garamond", serif;
          font-size: 3.8rem;
          color: rgba(150, 138, 128, 0.24);
          text-shadow: 0 1px 0 rgba(255,255,255,0.9);
        }

        .hero-banner-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 18px;
        }

        .hero-banner {
          width: min(420px, 82vw);
          height: auto;
          display: block;
          opacity: 0.92;
          filter: drop-shadow(0 10px 24px rgba(170, 155, 142, 0.10));
        }

        .hero-drape {
          position: absolute;
          top: 8px;
          width: 190px;
          height: 170px;
          border-radius: 0 0 120px 120px;
          background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(240,233,224,0.54));
          box-shadow: var(--shadow-emboss);
          opacity: 0.78;
          filter: blur(0.15px);
        }

        .hero-drape-left { left: 12px; transform: rotate(-10deg); }
        .hero-drape-right { right: 12px; transform: rotate(10deg); }

        .eyebrow {
          margin: 0 0 12px;
          color: var(--muted);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-size: 0.74rem;
        }

        .hero-title {
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
          align-items: center;
          line-height: 0.94;
          font-weight: 600;
          font-size: clamp(3.6rem, 10vw, 7.8rem);
          text-shadow: 0 1px 0 rgba(255,255,255,0.9);
        }

        .ampersand {
          font-style: italic;
          color: var(--blush-deep);
          transform: translateY(-4px);
        }

        .hero-meta {
          margin: 20px auto 0;
          color: var(--muted);
          font-size: 1rem;
          max-width: 700px;
        }

        .dot {
          margin: 0 10px;
          color: var(--blush-deep);
        }

        .countdown {
          margin: 34px auto 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          max-width: 520px;
        }

        .count-card {
          background: linear-gradient(180deg, rgba(255,253,249,0.92), rgba(248,243,236,0.72));
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: var(--shadow-soft), var(--shadow-emboss);
          border-radius: 26px;
          padding: 18px 10px;
          backdrop-filter: blur(14px);
        }

        .count-card span {
          display: block;
          font-family: Georgia, serif;
          font-size: 2rem;
          line-height: 1;
          margin-bottom: 8px;
        }

        .count-card small {
          color: var(--muted);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 0.72rem;
        }

        .hero-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
        }

        .btn {
          border: 0;
          border-radius: 999px;
          padding: 14px 24px;
          min-width: 180px;
          text-align: center;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          cursor: pointer;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--blush), #f0d8db);
          color: #433838;
          box-shadow: 0 12px 24px rgba(214,174,180,0.28);
        }

        .btn-secondary {
          background: linear-gradient(180deg, rgba(255,255,255,0.94), rgba(245,239,232,0.78));
          color: var(--text);
          border: 1px solid rgba(255,255,255,0.85);
          box-shadow: var(--shadow-soft), var(--shadow-emboss);
        }

        .floral {
          position: absolute;
          font-size: clamp(4rem, 7vw, 6.5rem);
          opacity: 0.32;
          animation: floatSlow 9s ease-in-out infinite;
          user-select: none;
          filter: drop-shadow(0 6px 18px rgba(201, 186, 173, 0.28));
          text-shadow: 0 1px 0 rgba(255,255,255,0.9), 0 10px 24px rgba(172,154,140,.18);
        }

        .floral-left { left: 5%; top: 16%; color: var(--sage-deep); }
        .floral-right { right: 6%; bottom: 18%; color: var(--blush-deep); }

        .section {
          width: min(var(--max-width), calc(100% - 28px));
          margin: 22px auto;
          padding: 34px 18px;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 26px;
        }

        .section-kicker {
          margin: 0 0 10px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.72rem;
        }

        .section-heading h2 {
          margin: 0 auto;
          font-size: clamp(2.2rem, 5.2vw, 3.9rem);
          line-height: 1.04;
          font-weight: 600;
          max-width: 980px;
          text-wrap: balance;
        }

        .invite-grid,
        .stay-grid,
        .activities-grid {
          display: grid;
          gap: 18px;
        }

        .invite-card,
        .timeline-card,
        .stay-card,
        .location-wrap {
          background: linear-gradient(180deg, rgba(255,254,250,0.98), rgba(246,240,231,0.86));
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow: var(--shadow-soft), var(--shadow-emboss);
          border-radius: var(--radius-lg);
          backdrop-filter: blur(14px);
        }

        .invite-card {
          padding: 26px 22px;
          min-height: 100%;
        }

        .invite-card h3,
        .timeline-card h3,
        .stay-card h3,
        .location-copy h3 {
          margin: 0 0 12px;
          font-size: 2rem;
          font-weight: 600;
        }

        .invite-card p,
        .timeline-card p,
        .stay-card p,
        .location-copy p,
        .footer-text {
          margin: 0;
          color: var(--muted);
          line-height: 1.8;
          font-size: 0.98rem;
        }

        .invite-card p + p,
        .location-copy p + p {
          margin-top: 10px;
        }

        .invite-card-ar {
          text-align: right;
        }

        .timeline {
          position: relative;
          display: grid;
          gap: 18px;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 21px;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background: linear-gradient(180deg, rgba(214,174,180,0.45), rgba(141,161,138,0.3));
        }

        .timeline-item {
          position: relative;
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 16px;
          align-items: start;
        }

        .timeline-marker {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(145deg, rgba(255,255,255,0.98), rgba(237,229,220,0.86));
          box-shadow: var(--shadow-emboss), 0 8px 16px rgba(214,174,180,0.10);
          z-index: 1;
        }

        .timeline-card {
          padding: 22px 22px 20px;
        }

        .timeline-time {
          display: inline-block;
          margin-bottom: 8px;
          color: var(--sage-deep);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.72rem;
        }

        .location-wrap {
          padding: 18px;
          display: grid;
          gap: 18px;
        }

        .location-copy {
          padding: 8px 6px 4px;
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

        .stay-card {
          padding: 24px 22px;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .contact-card {
          padding: 30px 32px;
          height: 100%;
        }

        .travel-grid {
          display: grid;
          gap: 18px;
          max-width: 980px;
          margin: 0 auto;
        }

        .travel-partner-card h3,
        .travel-contact-card h3 {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 16px;
        }

        .travel-partner-card p,
        .travel-contact-card p {
          font-size: 1.05rem;
          line-height: 1.85;
          margin: 0;
        }

        .travel-contact-card a {
          color: var(--sage-deep);
          font-weight: 600;
          white-space: nowrap;
        }

        .travel-contact-card a:hover {
          text-decoration: underline;
        }

        .travel-label {
          display: inline-block;
          margin-bottom: 12px;
          color: var(--muted);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 0.72rem;
        }

        .activity-card {
          padding: 0;
          overflow: hidden;
        }

        .activity-image-wrap {
          height: 220px;
          overflow: hidden;
        }

        .activity-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .activity-card:hover .activity-image {
          transform: scale(1.04);
        }

        .activity-content {
          padding: 16px 16px 18px;
          text-align: center;
        }

        .activity-content h3 {
          margin: 0;
          font-size: 1.35rem;
        }

        .footer {
          text-align: center;
          padding: 52px 20px 72px;
        }

        .footer-script {
          margin: 0 0 10px;
          font-size: 2.4rem;
          font-weight: 600;
        }

        .footer-text {
          max-width: 640px;
          margin: 0 auto;
        }

        .fade-section {
          opacity: 0;
          transform: translateY(34px) scale(0.985);
          filter: blur(10px);
          transition: opacity 0.95s ease, transform 1s cubic-bezier(.22,1,.36,1), filter 0.95s ease;
          will-change: transform, opacity, filter;
        }

        .fade-section.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }

        @media (min-width: 700px) {
          .nav { display: flex; }
          .hero-actions { flex-direction: row; }
          .countdown { grid-template-columns: repeat(4, minmax(0,1fr)); }
          .invite-grid { grid-template-columns: 1fr 1fr; }
          .stay-grid { grid-template-columns: 1fr; max-width: 720px; margin: 0 auto; }
          .travel-grid { grid-template-columns: 1fr 1fr; }
          .activities-grid { grid-template-columns: repeat(5, 1fr); align-items: stretch; }
          .location-wrap { grid-template-columns: .95fr 1.25fr; align-items: stretch; padding: 22px; }
        }

        @media (max-width: 1100px) {
          .activities-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 699px) {
          .activities-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .contact-card { padding: 26px 24px; }
          .travel-partner-card h3,
          .travel-contact-card h3 { font-size: 2.2rem; }
          .travel-partner-card p,
          .travel-contact-card p { font-size: 1rem; line-height: 1.75; }
        }

        @media (max-width: 900px) {
          .hero-monogram { width: 160px; height: 160px; top: 210px; }
          .corner-ornament { width: 130px; height: 130px; opacity: 0.5; }
          .hero-drape { width: 110px; height: 110px; }
          .chandelier { width: 150px; height: 110px; top: 24px; }
        }

        @media (max-width: 480px) {
          .hero-monogram { display: none; }
          .btn { width: 100%; }
        }
      `}</style>

      <div className="site-shell">
        <div className="corner-ornament corner-top-left" />
        <div className="corner-ornament corner-top-right" />
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
        <div className="bg-orb orb-3" />

        <header className="topbar">
          <div className="brand">A & L</div>
          <nav className="nav">
            <a href="#invitation">Invitation</a>
            <a href="#schedule">Schedule</a>
            <a href="#location">Location</a>
          </nav>
        </header>

        <main>
          <section className="hero">
            <div className="chandelier">
              <div className="chandelier-arms" />
            </div>

            <div className="floral floral-left">✿</div>
            <div className="floral floral-right">❀</div>

            <div className="hero-inner">
              <div className="hero-monogram" />
              <div className="hero-drape hero-drape-left" />
              <div className="hero-drape hero-drape-right" />

              {topBanner && (
                <div className="hero-banner-wrap">
                  <img className="hero-banner" src={topBanner} alt="Arabic wedding blessing" />
                </div>
              )}

              <p className="eyebrow">Together with their families</p>

              <h1 className="hero-title">
                <span>Ahmad Abu Baker</span>
                <span className="ampersand">&</span>
                <span>Lamya Qashqari</span>
              </h1>

              <p className="hero-meta">
                {formattedDate} <span className="dot">•</span> Amman, Jordan
              </p>

              <div className="countdown">
                {Object.entries(timeLeft).map(([label, value]) => (
                  <div className="count-card" key={label}>
                    <span>{value}</span>
                    <small>{label}</small>
                  </div>
                ))}
              </div>

              <div className="hero-actions">
                <a href="#location" className="btn btn-secondary">View Location</a>
              </div>
            </div>
          </section>

          <section id="invitation" className="fade-section section invitation-section">
            <div className="section-heading">
              <p className="section-kicker">Invitation</p>
              <h2>A bilingual invitation, beautifully shared</h2>
            </div>

            <div className="invite-grid">
              <div className="invite-card">
                <h3>In English</h3>
                <p>
                  With love and gratitude, we invite you to celebrate the wedding of Ahmad Abu Baker & Lamya Qashqari on Friday, July 17, 2026, in Amman, Jordan.
                </p>
                <p>
                  Your presence would mean so much to us as we begin this new chapter surrounded by the people we cherish most.
                </p>
              </div>

              <div className="invite-card invite-card-ar" dir="rtl" lang="ar">
                <h3>بالعربية</h3>
                <p>
                  بكل الحب والامتنان، ندعوكم لمشاركتنا الاحتفال بزفاف أحمد أبو بكر ولمياء قشقري يوم الجمعة 17 يوليو 2026 في عمّان، الأردن.
                </p>
                <p>
                  حضوركم يسعدنا ويشرّفنا في هذه المناسبة الجميلة، ونحن نبدأ فصلًا جديدًا من حياتنا برفقة من نحب.
                </p>
              </div>
            </div>
          </section>

          <section id="schedule" className="fade-section section">
            <div className="section-heading">
              <p className="section-kicker">Wedding Schedule</p>
              <h2>A graceful evening timeline</h2>
            </div>

            <div className="timeline">
              {scheduleItems.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-marker">{item.icon}</div>
                  <div className="timeline-card">
                    <span className="timeline-time">{item.time}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="location" className="fade-section section">
            <div className="section-heading">
              <p className="section-kicker">Location</p>
              <h2>Join us in Amman, Jordan</h2>
            </div>

            <div className="location-wrap">
              <div className="location-copy">
                <h3>Venue Location</h3>
                <p>
                  We’ll be celebrating in Amman, Jordan. The venue location has been shared and can be opened directly using the button below.
                </p>
                <p>
                  Please use the location link for directions and route planning before the event.
                </p>
                <a
                  className="btn btn-secondary location-link"
                  href="https://share.google/MCIkWDzA7sICC1F0B"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Venue Location
                </a>
              </div>

              <div className="map-shell">
                <iframe
                  title="Wedding Location - Amman Jordan"
                  src="https://www.google.com/maps?q=Amman%20Jordan&z=12&output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>

          <section className="fade-section section">
            <div className="section-heading">
              <p className="section-kicker">Travel & Stay</p>
              <h2>Travel partner for the wedding</h2>
            </div>

            <div className="travel-grid">
              <article className="stay-card contact-card travel-partner-card">
                <span className="travel-label">Wedding Travel Partner</span>
                <h3>Trip Maker</h3>
                <p>
                  Trip Maker is the official wedding travel partner for guests visiting Amman, supporting flights, accommodation, and trip planning.
                </p>
              </article>

              <article className="stay-card contact-card travel-contact-card">
                <span className="travel-label">Contact Information</span>
                <h3>Mr. Batanieh</h3>
                <p>
                  For assistance, please contact <a href="tel:+962798588946">+962 7 9858 8946</a>.
                </p>
              </article>
            </div>
          </section>

          {ammanActivities.length > 0 && (
            <section className="fade-section section">
              <div className="section-heading">
                <p className="section-kicker">Explore Jordan</p>
                <h2>Fun things to do in Jordan</h2>
              </div>

              <div className="activities-grid">
                {ammanActivities.map((place) => (
                  <article className="stay-card activity-card" key={place.title}>
                    <div className="activity-image-wrap">
                      <img className="activity-image" src={place.image} alt={place.title} />
                    </div>
                    <div className="activity-content">
                      <h3>{place.title}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </main>

        <footer className="footer">
          <p className="footer-script">With love, Ahmad Abu Baker & Lamya Qashqari</p>
          <p className="footer-text">We cannot wait to celebrate this beautiful day with you in July 2026.</p>
        </footer>
      </div>
    </>
  );
}

function getTimeRemaining(targetDate) {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

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
