import React from 'react';

const FACTS = [
  { icon: 'bi-geo-alt-fill',   label: 'Location',    value: 'Hyderabad, India' },
  { icon: 'bi-envelope-fill',  label: 'Email',       value: 'abhishekkhursange139@gmail.com' },
  { icon: 'bi-mortarboard',    label: 'Degree',      value: 'B.E. — E&TC Engineering' },
  { icon: 'bi-building',       label: 'Training',    value: 'SathyaTech, Hyderabad' },
];

const HIGHLIGHTS = [
  { icon: 'bi-cpu',             title: 'Engineering Background',  desc: 'My E&TC degree gave me a strong foundation in logic, problem-solving, and analytical thinking — skills that directly translate to writing better software.' },
  { icon: 'bi-layers',          title: 'Full Stack Trained',      desc: 'Completed an intensive Full Stack Java course covering Spring Boot, React, REST APIs, Microservices, and modern databases.' },
  { icon: 'bi-rocket-takeoff',  title: 'Project-Driven Learning', desc: 'I learn by building. Every project in my portfolio was built from scratch to solve a real problem and explore new technologies.' },
  { icon: 'bi-lightbulb',       title: 'Always Growing',          desc: 'Certified through Coursera and Udemy, I continuously upskill to stay current with industry best practices and trends.' },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="row align-items-center g-5 mb-5">

          {/* Photo */}
          <div className="col-lg-5">
            <div className="about-photo-wrap">
              <div className="about-photo">
                <i className="bi bi-person-fill" />
                <span>Your Photo Here</span>
              </div>
              <div className="about-photo-bg" />
              <div className="about-open-badge">
                <span className="badge-title">Open</span>
                <span className="badge-sub">to Work</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="col-lg-7">
            <div className="section-chip"><i className="bi bi-person" /> About Me</div>
            <h2 className="section-title">
              From Electronics to<br />
              <span style={{ color: 'var(--accent)' }}>Full Stack Development</span>
            </h2>

            <p className="about-para">
              I'm <strong>Abhishek Khursange</strong>, a Full Stack Java Developer based in Hyderabad.
              I hold a degree in <strong>Electronics & Telecommunication Engineering (E&TC)</strong>,
              which gave me a strong problem-solving mindset before I transitioned into software development.
            </p>
            <p className="about-para">
              I completed a comprehensive <strong>Full Stack Java course from SathyaTech, Hyderabad</strong>,
              where I built hands-on expertise in Java, Spring Boot, React JS, REST APIs,
              Microservices, and databases like PostgreSQL and MongoDB.
            </p>
            <p className="about-para">
              I've since built 4 real-world projects — a Food Delivery System, a Product
              Management System, a Hotel Management System, and an AI-powered chat agent
              called <strong>TalkMe AI</strong> — each designed to solve genuine problems using
              modern technologies.
            </p>

            <div className="about-facts">
              {FACTS.map(f => (
                <div key={f.label} className="fact-item">
                  <i className={`bi ${f.icon}`} />
                  <div>
                    <span className="fact-label">{f.label}</span>
                    <span className="fact-value">{f.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex gap-3 flex-wrap">
              <a href="/Abhi_Resume.pdf" download className="btn-primary-custom">
                <i className="bi bi-download" /> Download CV
              </a>
              <a href="#contact" className="btn-ghost">
                <i className="bi bi-chat-dots" /> Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="row g-3">
          {HIGHLIGHTS.map((h, i) => (
            <div className="col-sm-6 col-lg-3" key={h.title}>
              <div className={`card-light h-card fade-up d${i + 1} h-100`}>
                <div className="h-icon"><i className={`bi ${h.icon}`} /></div>
                <h5 className="h-title">{h.title}</h5>
                <p className="h-desc">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}