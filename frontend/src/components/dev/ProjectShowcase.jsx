import React from 'react';
import { Github, Globe, GitPullRequest, Star, ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Orbit Community Portal',
    desc: 'Centralized engineering community hub with dynamic event indexing, resources, and real-time dashboard.',
    tags: ['React', 'GSAP', 'Vite', 'Three.js'],
    github: 'https://github.com',
    demo: '#',
    status: 'PRODUCTION'
  },
  {
    title: 'Reactive Resumé Builder',
    desc: 'Live ATS-compliant Markdown and JSON-based resumé generator with instant PDF compilation.',
    tags: ['Tailwind CSS', 'React 19', 'PDF Engine'],
    github: 'https://github.com',
    demo: '#',
    status: 'BETA'
  },
  {
    title: 'Campus Event Gatekeeper',
    desc: 'Secure QR ticketing and attendee check-in management system built for campus hackathons and fests.',
    tags: ['Node.js', 'PostgreSQL', 'Express'],
    github: 'https://github.com',
    demo: '#',
    status: 'ACTIVE SPRINT'
  }
];

export default function ProjectShowcase() {
  return (
    <div className="projects-grid">
      {PROJECTS.map((proj) => (
        <div className="dev-project-card" key={proj.title}>
          <div className="card-window-bar">
            <span className="status-pill">{proj.status}</span>
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="card-content">
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className="tag-list">
              {proj.tags.map((t) => (
                <span key={t} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
            <div className="card-links">
              <a href={proj.github} target="_blank" rel="noreferrer" className="link-btn">
                <Github size={14} /> Repository
              </a>
              <a href={proj.demo} className="link-btn primary">
                <Globe size={14} /> Live Demo <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}