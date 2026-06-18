import React, { useEffect, useRef } from 'react';

const TYPED = [
  'Full Stack Java Developer',
  'React JS Developer',
  'REST API Developer',
  'Microservices Enthusiast',
];

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    let wordIdx = 0, charIdx = 0, deleting = false, timer;
    const tick = () => {
      const word = TYPED[wordIdx];
      if (!deleting) {
        charIdx++;
        if (typedRef.current) typedRef.current.textContent = word.slice(0, charIdx);
        if (charIdx === word.length) { deleting = true; timer = setTimeout(tick, 1800); return; }
      } else {
        charIdx--;
        if (typedRef.current) typedRef.current.textContent = word.slice(0, charIdx);
        if (charIdx === 0) { deleting = false; wordIdx = (wordIdx + 1) % TYPED.length; }
      }
      timer = setTimeout(tick, deleting ? 50 : 80);
    };
    timer = setTimeout(tick, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-blob" aria-hidden="true" />
      <div className="hero-blob-2" aria-hidden="true" />

      <div className="container hero-container">
        <div className="row align-items-center">

          {/* ── Left copy ── */}
          <div className="col-lg-6 hero-copy">
            <div className="hero-badge fade-up d1">
              <span className="badge-dot" />
              Actively Looking for Opportunities
            </div>

            <h1 className="hero-h1 fade-up d2">
              Hi, I'm<br />
              <span className="hero-name">Abhishek Khursange</span>
            </h1>

            <div className="hero-typed-row fade-up d3">
              <span className="typed-prefix">&gt;&nbsp;</span>
              <span ref={typedRef} className="typed-word" />
              <span className="cursor" />
            </div>

            <p className="hero-desc fade-up d4">
              A passionate Full Stack Developer skilled in Java, React, Node.js, and
              Microservices. I love building real-world applications that are clean,
              functional, and user-friendly.
            </p>

            <div className="hero-actions fade-up d5">
              <a href="#projects" className="btn-primary-custom">
                <i className="bi bi-grid-3x3-gap" /> View My Projects
              </a>
              <a href="/Abhi_Resume.pdf" download className="btn-ghost">
                <i className="bi bi-download" /> Download CV
              </a>
            </div>

            <div className="hero-socials fade-up d6">
              {[
                { icon: 'bi-github', href: 'https://github.com/AbhishekKhursange', label: 'GitHub' },
                { icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/abhishek-khursange', label: 'LinkedIn' },
                { icon: 'bi-envelope-fill', href: 'mailto:abhishekkhursange139@gmail.com', label: 'Email' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className="social-btn" title={s.label}>
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: code card ── */}
          <div className="col-lg-6 d-none d-lg-flex justify-content-center fade-up d3">
            <div className="hero-visual">
              <div className="code-card">
                <div className="code-card-bar">
                  <span className="cc-dot r" />
                  <span className="cc-dot a" />
                  <span className="cc-dot g" />
                  <span className="cc-filename">profile.js</span>
                </div>
                <pre className="code-block">{`const abhishek = {
  name:     "Abhishek Khursange",
  role:     "Full Stack Developer",
  stack:    ["Java", "Spring Boot",
             "React JS", "Node.js"],
  database: ["PostgreSQL", "Oracle", "MongoDB"],
  openToWork: true,
  location: "Hyderabad, India",
};

export default abhishek;`}</pre>
              </div>

              <div className="chip chip-1">
                <i className="bi bi-mortarboard-fill" />
                <div><strong>E&TC</strong><span>Graduate</span></div>
              </div>
              <div className="chip chip-2">
                <i className="bi bi-patch-check-fill" />
                <div><strong>4 Projects</strong><span>Completed</span></div>
              </div>
              <div className="chip chip-3">
                <i className="bi bi-geo-alt-fill" />
                <div><strong>Hyderabad</strong><span>India</span></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <a href="#about" className="scroll-down">
        <i className="bi bi-chevron-down" />
      </a>
    </section>
  );
}