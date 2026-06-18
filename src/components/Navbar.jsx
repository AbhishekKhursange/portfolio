import React, { useState, useEffect } from 'react';

const NAV = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`navbar-wrap ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="logo-icon">
            <i className="bi bi-terminal-fill" />
          </span>
          <span className="logo-text">
            Abhishek<span className="logo-dot">.</span>
          </span>
        </a>

        <ul className="nav-links-desktop">
          {NAV.map(n => (
            <li key={n.href}>
              <a href={n.href}>{n.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary-custom nav-cta d-none d-lg-inline-flex">
          <i className="bi bi-send" /> Hire Me
        </a>

        <button className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)} aria-label="menu">
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        {NAV.map(n => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
        ))}
        <a href="#contact" className="btn-primary-custom mt-2" onClick={() => setOpen(false)}>
          <i className="bi bi-send" /> Hire Me
        </a>
      </div>
    </nav>
  );
}