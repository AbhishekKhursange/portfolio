import React, { useState } from 'react';

const FILTERS = ['All', 'Full Stack', 'Microservices', 'Frontend Web Application'];

const PROJECTS = [
  {
    title: 'Cravings – Food Ordering System',
    desc: 'A full-stack food ordering platform with JWT authentication, Redux cart management, and order placement. Built with a React frontend, Express REST API backend, and MongoDB for data storage.',
    category: 'Full Stack',
    status: 'Completed',
    color: '#f59e0b',
    icon: 'bi-bag-heart-fill',
    tech: ['React JS', 'Express JS', 'MongoDB', 'Node.js', 'REST API'],
    highlights: ['User auth & cart management', 'Coupon discounts & UPI QR payment', 'Order history & email notifications'],
    github: 'https://github.com/AbhishekKhursange/food-delivery-system',
    live: 'https://frontend-ten-eta-10.vercel.app',
  },
  {
    title: 'ShopEasy – Order Management System',
    desc: 'A production-ready e-commerce platform where users can browse products, manage cart, and place orders. Built with Spring Boot REST API, JWT security, and React.js frontend with an Admin Dashboard for complete store management.',
    category: 'Full Stack',
    status: 'Completed',
    color: '#4F46E5',
    icon: 'bi-box-seam-fill',
    tech: ['React JS', 'Spring Boot', 'PostgreSQL', 'JWT', 'REST API'],
    highlights: ['JWT auth & role-based access', 'Admin dashboard & Cloudinary images', 'UPI, Card & Net Banking payment UI'],
    github: 'https://github.com/AbhishekKhursange/order-management-system',
    live: 'https://order-management-frontend-sigma.vercel.app',
  },
  {
    title: 'LuxStay - Hotel Management System',
    desc: 'A microservices-based hotel management application handling room bookings, guest management, and billing. Built with a React frontend, PostgreSQL database, and independently deployable services.',
    category: 'Microservices',
    status: 'Completed',
    color: '#059669',
    icon: 'bi-building-fill',
    tech: ['Microservices', 'React JS', 'PostgreSQL', 'Spring Boot', 'REST API'],
    highlights: ['Microservices architecture', 'Room booking flow', 'PostgreSQL schema'],
    github: 'https://github.com/AbhishekKhursange/luxstay-frontend',
    live: 'https://luxstay-frontend.vercel.app',
  },
  {
    title: 'QuizCraft',
    desc: 'An interactive quiz application that allows users to test their knowledge through multiple-choice questions with instant score calculation and a responsive user interface. Built using HTML, CSS, JavaScript, and Bootstrap.',
    category: 'Frontend Web Application',
    status: 'Completed',
    color: '#7c3aed',
    icon: 'bi-robot',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    highlights: ['Multiple-choice quizzes with instant scoring', 'Responsive UI with Bootstrap components', 'Dynamic question navigation & result summary'],
    github: 'https://github.com/AbhishekKhursange/QuizCraft',
    live: 'https://quiz-craft-jet.vercel.app',
  },
];

const STATUS_STYLE = {
  'Completed': { bg: '#f0fdf4', color: '#166534', border: '#bbf7d0' },
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">

        <div className="row mb-4">
          <div className="col-lg-7">
            <div className="section-chip"><i className="bi bi-code-slash" /> Projects</div>
            <h2 className="section-title">Things I've Built</h2>
            <p className="section-sub">
              Real projects I designed and developed from scratch during my training
              and self-learning journey — each one taught me something new.
            </p>
          </div>
        </div>

        <div className="proj-filters mb-5">
          {FILTERS.map(f => (
            <button key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {visible.map((p, i) => {
            const st = STATUS_STYLE[p.status] || STATUS_STYLE['Completed'];
            return (
              <div className="col-md-6" key={p.title}>
                <div className={`card-light proj-card fade-up d${(i % 3) + 1}`}>
                  <div className="proj-header"
                    style={{ background: `${p.color}10`, borderBottom: `1px solid ${p.color}20` }}>
                    <div className="proj-icon-wrap"
                      style={{ background: `${p.color}18`, color: p.color }}>
                      <i className={`bi ${p.icon}`} />
                    </div>
                    <div className="proj-links">
                      <a href={p.github} target="_blank" rel="noreferrer" title="GitHub">
                        <i className="bi bi-github" />
                      </a>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer" title="Live">
                          <i className="bi bi-box-arrow-up-right" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="proj-body">
                    <div className="proj-top">
                      <h4 className="proj-title">{p.title}</h4>
                      <span className="proj-status"
                        style={{ background: st.bg, color: st.color, borderColor: st.border }}>
                        {p.status}
                      </span>
                    </div>

                    <p className="proj-desc">{p.desc}</p>

                    {/* Highlights */}
                    <div className="d-flex flex-column gap-1 mb-1">
                      {p.highlights.map(h => (
                        <span key={h} style={{ fontSize: '.8rem', color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 6 }}>
                          <i className="bi bi-check2-circle" style={{ color: p.color, fontSize: '.78rem' }} />
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="proj-tech">
                      {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-5">
          <a href="https://github.com/AbhishekKhursange" target="_blank" rel="noreferrer" className="btn-ghost">
            <i className="bi bi-github" /> View All on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}