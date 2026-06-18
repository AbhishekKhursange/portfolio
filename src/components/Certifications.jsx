import React from 'react';

const CERTS = [
  {
    issuer: 'Future Learn',
    name: 'ARTIFICIAL INTELLIGENCE',
    date: '2024',
    icon: 'bi-award-fill',
    iconBg: '#0056d2',
    verify: 'https://futurelearn.com/certificates/f7dedon',
  },
  {
    issuer: 'Greate Learning',
    name: 'Introduction to Machine Learing',
    date: '2024',
    icon: 'bi-patch-check-fill',
    iconBg: '#a435f0',
    verify: 'https://mygreatlearning.com/certificate/SHUNFOLV',
  },
  {
    issuer: 'Infosys Springboard',
    name: 'Introduction to Continuous Testing in DevOps',
    date: '2023',
    icon: 'bi-patch-check-fill',
    iconBg: '#a435f0',
    verify: 'https://verify.onwingspan.com',
  },
  {
    issuer: 'Coursera',
    name: 'Databases and SQL for Data Science with Python',
    date: '2023',
    icon: 'bi-award-fill',
    iconBg: '#0056d2',
    verify: 'https://coursera.org',
  },
  {
    issuer: 'Udemy',
    name: 'Microservices with Spring Boot and Spring Cloud',
    date: '2024',
    icon: 'bi-patch-check-fill',
    iconBg: '#a435f0',
    verify: 'https://udemy.com',
  },
  {
    issuer: 'GitHub',
    name: 'GitHub Foundations',
    date: '2024',
    icon: 'bi-github',
    iconBg: '#24292f',
    verify: 'https://github.com',
  },
];

const TRAINING_TECH = [
  'Core Java', 'Advanced Java', 'Spring Framework', 'Spring Boot',
  'Microservices', 'React JS', 'REST API', 'Oracle', 'MongoDB',
  'Hibernate', 'Maven', 'Git & GitHub', 'HTML/CSS', 'JavaScript',
];

export default function Certifications() {
  return (
    <section id="certifications" className="section certs-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-lg-6">
            <div className="section-chip"><i className="bi bi-shield-check" /> Certifications</div>
            <h2 className="section-title">Courses & Certifications</h2>
            <p className="section-sub">
              Continuous learning through structured courses and industry-recognized
              certifications alongside my formal training.
            </p>
          </div>
        </div>

        <div className="row g-4">

          {/* Cert cards */}
          <div className="col-lg-7">
            <div className="row g-3">
              {CERTS.map((c, i) => (
                <div className="col-12" key={c.name}>
                  <div className={`card-light cert-card fade-up d${(i % 4) + 1}`}>
                    <div className="cert-icon"
                      style={{ background: `${c.iconBg}18`, color: c.iconBg }}>
                      <i className={`bi ${c.icon}`} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="cert-issuer">{c.issuer}</div>
                      <div className="cert-name">{c.name}</div>
                      <div className="cert-meta">
                        <span className="cert-date">
                          <i className="bi bi-calendar3" /> {c.date}
                        </span>
                        <a href={c.verify} target="_blank" rel="noreferrer" className="cert-verify">
                          <i className="bi bi-box-arrow-up-right" /> Verify
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training highlight */}
          <div className="col-lg-5">
            <div className="training-card fade-up d2">
              <div className="training-badge">
                <i className="bi bi-building" /> Official Training
              </div>
              <h3 className="training-title">Full Stack Java Development</h3>
              <div className="training-org">
                <i className="bi bi-geo-alt" /> SathyaTech, Hyderabad
              </div>
              <p className="training-desc">
                An intensive, industry-focused Full Stack Java program covering modern
                web development from fundamentals to advanced microservices architecture.
                Hands-on training with real-world project development throughout the course.
              </p>
              <div className="training-tags">
                {TRAINING_TECH.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Education note */}
            <div className="card-light mt-3 p-3 d-flex align-items-start gap-3">
              <div className="cert-icon"
                style={{ background: '#4F46E518', color: '#4F46E5', flexShrink: 0 }}>
                <i className="bi bi-mortarboard-fill" />
              </div>
              <div>
                <div className="cert-issuer">Formal Education</div>
                <div className="cert-name">
                  B.E. in Electronics & Telecommunication Engineering (E&TC)
                </div>
                <div className="cert-date mt-1">
                  <i className="bi bi-calendar3" /> Graduated 2025
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}