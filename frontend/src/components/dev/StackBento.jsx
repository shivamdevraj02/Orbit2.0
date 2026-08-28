import React, { useState } from 'react';
import { Layers, Database, Cloud, Terminal, Cpu, Globe, ArrowUpRight } from 'lucide-react';

const STACK_DATA = [
  {
    category: 'Frontend Engineering',
    icon: Globe,
    tools: ['React 19', 'Next.js', 'Tailwind CSS', 'Vite', 'Three.js / R3F', 'GSAP'],
    description: 'Component architecture, micro-interactions, canvas shaders, and sub-second web vitals.'
  },
  {
    category: 'Backend & APIs',
    icon: Cpu,
    tools: ['Node.js', 'Express', 'FastAPI', 'Go', 'GraphQL', 'REST Architecture'],
    description: 'Scalable service layers, asynchronous queues, worker pools, and API security.'
  },
  {
    category: 'Database & Storage',
    icon: Database,
    tools: ['PostgreSQL', 'MongoDB Atlas', 'Redis', 'Prisma ORM', 'Supabase'],
    description: 'Schema normalization, indexing, caching patterns, and transactional integrity.'
  },
  {
    category: 'DevOps & Tooling',
    icon: Cloud,
    tools: ['Docker', 'GitHub Actions CI/CD', 'Linux/Bash', 'Render', 'AWS', 'Vercel'],
    description: 'Containerized deployment pipelines, automated linting, tests, and preview environments.'
  }
];

export default function StackBento() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="dev-bento-grid">
      {STACK_DATA.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={item.category}
            className={`bento-card ${activeIdx === idx ? 'bento-active' : ''}`}
            onMouseEnter={() => setActiveIdx(idx)}
          >
            <div className="bento-top">
              <div className="bento-icon-wrap">
                <Icon size={20} />
              </div>
              <span className="bento-num">0{idx + 1}</span>
            </div>
            <h3>{item.category}</h3>
            <p>{item.description}</p>
            <div className="bento-tags">
              {item.tools.map((tool) => (
                <span key={tool} className="bento-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}