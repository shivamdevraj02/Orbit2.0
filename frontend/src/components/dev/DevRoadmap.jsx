import React, { useState } from 'react';
import { CheckCircle2, Circle, GitBranch, Terminal, ExternalLink } from 'lucide-react';

const TRACKS = {
  frontend: {
    title: 'Frontend Mastery',
    duration: '10 Weeks',
    stages: [
      {
        title: 'Core DOM & Modern JS',
        desc: 'Async workflows, Event Loop, Closures, DOM manipulation & ESNext patterns.',
        status: 'completed'
      },
      {
        title: 'React 19 & Component Architecture',
        desc: 'Custom hooks, Server/Client components, State machines, and Suspense patterns.',
        status: 'in-progress'
      },
      {
        title: 'Creative Web & Motion Graphics',
        desc: 'GSAP ScrollTrigger, Lenis smooth scroll, Three.js / WebGL shader pipelines.',
        status: 'upcoming'
      },
      {
        title: 'Production Build & Optimization',
        desc: 'Bundle analysis, Code splitting, Web Vitals, and Lighthouse audit performance.',
        status: 'upcoming'
      }
    ]
  },
  fullstack: {
    title: 'Full-Stack & Cloud Architecture',
    duration: '12 Weeks',
    stages: [
      {
        title: 'REST & GraphQL Backend',
        desc: 'Express & Node runtime, authentication (JWT/OAuth), role-based security.',
        status: 'completed'
      },
      {
        title: 'Database Modeling & Query Tuning',
        desc: 'PostgreSQL relational design, MongoDB schemas, Redis caching layers.',
        status: 'in-progress'
      },
      {
        title: 'Docker & CI/CD Pipelines',
        desc: 'Containerizing multi-tier apps, GitHub Actions automation, cloud deployment.',
        status: 'upcoming'
      }
    ]
  }
};

export default function DevRoadmap() {
  const [activeTrack, setActiveTrack] = useState('frontend');
  const track = TRACKS[activeTrack];

  return (
    <div className="roadmap-container">
      <div className="roadmap-tabs">
        <button
          className={activeTrack === 'frontend' ? 'active' : ''}
          onClick={() => setActiveTrack('frontend')}
        >
          Frontend Track
        </button>
        <button
          className={activeTrack === 'fullstack' ? 'active' : ''}
          onClick={() => setActiveTrack('fullstack')}
        >
          Full-Stack Track
        </button>
      </div>

      <div className="roadmap-timeline">
        {track.stages.map((stage, i) => (
          <div key={stage.title} className={`timeline-item status-${stage.status}`}>
            <div className="timeline-marker">
              {stage.status === 'completed' ? (
                <CheckCircle2 size={18} className="icon-done" />
              ) : stage.status === 'in-progress' ? (
                <GitBranch size={18} className="icon-progress" />
              ) : (
                <Circle size={18} className="icon-upcoming" />
              )}
              {i < track.stages.length - 1 && <div className="timeline-line" />}
            </div>
            <div className="timeline-content">
              <div className="timeline-meta">
                <span className="stage-num">PHASE 0{i + 1}</span>
                <span className={`badge ${stage.status}`}>{stage.status.replace('-', ' ')}</span>
              </div>
              <h4>{stage.title}</h4>
              <p>{stage.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}