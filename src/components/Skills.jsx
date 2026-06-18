import React, { useState, useEffect, useRef } from 'react';

const CATEGORIES = [
  {
    icon: 'bi-window-stack',
    label: 'Frontend',
    color: '#4F46E5',
    skills: [
      { name: 'React JS',         pct: 80 },
      { name: 'HTML & CSS',       pct: 85 },
      { name: 'JavaScript (ES6+)',pct: 85 },
      { name: 'Bootstrap',        pct: 65 },
    ],
  },
  {
    icon: 'bi-server',
    label: 'Backend',
    color: '#0891b2',
    skills: [
      { name: 'Java',             pct: 78 },
      { name: 'Spring Boot',      pct: 70 },
      { name: 'Node.js / Express',pct: 65 },
      { name: 'REST API Design',  pct: 74 },
    ],
  },
  {
    icon: 'bi-database',
    label: 'Database & Tools',
    color: '#059669',
    skills: [
      { name: 'PostgreSQL / Oracle',       pct: 68 },
      { name: 'MongoDB',          pct: 65 },
      { name: 'Git & GitHub',     pct: 75 },
      { name: 'Microservices',    pct: 62 },
    ],
  },
];

const TOOLS = [
  'Java', 'Spring Boot', 'React JS', 'Node.js', 'Express JS',
  'PostgreSQL', 'Oracle', 'MongoDB', 'REST API', 'Microservices', 'Git',
  'GitHub', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'VS Code',
  'Postman', 'Maven',
];

function Bar({ name, pct, color, go }) {
  return (
    <div>
      <div className="skill-row-head">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill"
          style={{
            width: go ? `${pct}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [go, setGo] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setGo(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">

        <div className="row mb-5">
          <div className="col-lg-6">
            <div className="section-chip"><i className="bi bi-lightning-charge" /> Skills</div>
            <h2 className="section-title">My Technical Skills</h2>
            <p className="section-sub">
              Skills I've developed through my Full Stack Java course, personal projects,
              and self-learning. Always improving!
            </p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          {CATEGORIES.map((cat, ci) => (
            <div className="col-lg-4" key={cat.label}>
              <div className={`card-light skill-card fade-up d${ci + 1}`}>
                <div className="skill-card-head">
                  <span className="skill-cat-icon"
                    style={{ background: `${cat.color}18`, color: cat.color }}>
                    <i className={`bi ${cat.icon}`} />
                  </span>
                  <h4 className="skill-cat-label">{cat.label}</h4>
                </div>
                <div className="skill-bars">
                  {cat.skills.map(s => (
                    <Bar key={s.name} {...s} color={cat.color} go={go} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tools-cloud">
          <p className="tools-label">Technologies I've Worked With</p>
          <div className="tools-tags">
            {TOOLS.map(t => (
              <span key={t} className="tag tool-tag">{t}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}