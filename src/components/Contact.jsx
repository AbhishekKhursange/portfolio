import React, { useState } from 'react';

const INFO = [
  { icon: 'bi-envelope-at-fill', label: 'Email',    value: 'abhishekkhursange139@gmail.com',              href: 'mailto:abhishekkhursange139@gmail.com' },
  { icon: 'bi-linkedin',         label: 'LinkedIn',  value: 'linkedin.com/in/abhishek-khursange',  href: 'https://www.linkedin.com/in/abhishek-khursange' },
  { icon: 'bi-github',           label: 'GitHub',   value: 'github.com/AbhishekKhursange',       href: 'https://github.com/AbhishekKhursange' },
  { icon: 'bi-geo-alt-fill',     label: 'Location', value: 'Hyderabad, India',                   href: null },
];

export default function Contact() {
  const [form, setForm]       = useState({ name:'', email:'', subject:'', message:'' });
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name:'', email:'', subject:'', message:'' });
    }, 1400);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-lg-6">
            <div className="section-chip"><i className="bi bi-send" /> Contact</div>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-sub">
              I'm actively looking for my first developer role. Feel free to reach out
              for job opportunities, internships, or just to say hi!
            </p>
          </div>
        </div>

        <div className="row g-5">

          {/* Info */}
          <div className="col-lg-4">
            <div className="contact-info">
              {INFO.map(c => (
                <a key={c.label}
                  href={c.href || undefined}
                  target={c.href && !c.href.startsWith('mailto') ? '_blank' : undefined}
                  rel="noreferrer"
                  className={`card-light info-card ${!c.href ? 'no-link' : ''}`}>
                  <div className="info-icon">
                    <i className={`bi ${c.icon}`} />
                  </div>
                  <div>
                    <span className="info-label">{c.label}</span>
                    <span className="info-val">{c.value}</span>
                  </div>
                  {c.href && <i className="bi bi-arrow-up-right info-arrow" />}
                </a>
              ))}
            </div>

            <div className="avail-box">
              <div className="avail-row">
                <span className="badge-dot" style={{ width: 8, height: 8 }} />
                <strong>Open to Opportunities</strong>
              </div>
              <p>
                Looking for full-time developer roles or internships.
                Available immediately in Hyderabad or remote.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-8">
            <div className="card-light contact-card">
              {sent ? (
                <div className="form-success">
                  <div className="success-circle">
                    <i className="bi bi-check-lg" />
                  </div>
                  <h4>Message Sent!</h4>
                  <p>Thanks for reaching out — I'll reply as soon as possible!</p>
                  <button className="btn-ghost" onClick={() => setSent(false)}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="contact-form">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="fg">
                        <label>Your Name</label>
                        <input name="name" value={form.name} onChange={set}
                          placeholder="Jane Smith" required />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="fg">
                        <label>Email Address</label>
                        <input type="email" name="email" value={form.email} onChange={set}
                          placeholder="jane@company.com" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="fg">
                        <label>Subject</label>
                        <input name="subject" value={form.subject} onChange={set}
                          placeholder="Job opportunity, Internship, Collaboration..." required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="fg">
                        <label>Message</label>
                        <textarea name="message" value={form.message} onChange={set}
                          placeholder="Tell me about the role or opportunity..."
                          rows={5} required />
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-primary-custom w-100" disabled={loading}>
                        {loading
                          ? <><span className="spin-ring" /> Sending...</>
                          : <><i className="bi bi-send" /> Send Message</>}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}