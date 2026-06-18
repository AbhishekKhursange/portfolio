import React from 'react';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Certifications', 'Contact'];

const SOCIALS = [
  { icon: 'bi-github',        href: 'https://github.com/AbhishekKhursange',       label: 'GitHub' },
  { icon: 'bi-linkedin',      href: 'https://www.linkedin.com/in/abhishek-khursange',  label: 'LinkedIn' },
  { icon: 'bi-envelope-fill', href: 'mailto:abhishekkhursange139@gmail.com',                label: 'Email' },
];

export default function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-logo">
            <i className="bi bi-terminal-fill" />
            Abhishek<span className="footer-dot">.</span>
          </div>
          <p className="footer-tag">Full Stack Developer · Open to Work</p>
        </div>

        <nav className="footer-nav">
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
          ))}
        </nav>

        <div className="footer-socials">
          {SOCIALS.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
               className="footer-social" title={s.label}>
              <i className={`bi ${s.icon}`} />
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {yr} Abhishek Khursange. All rights reserved.</span>
          <span>Built with <span className="heart">♥</span> in React &amp; Bootstrap</span>
        </div>
      </div>
    </footer>
  );
}