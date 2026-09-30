import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Sparkles, Terminal, ArrowUpRight, Cpu, Layers, GitMerge, Linkedin, Github } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import DevTerminal from '../components/dev/DevTerminal';
import StackBento from '../components/dev/StackBento';
import DevRoadmap from '../components/dev/DevRoadmap';
import useGsap from '../hooks/useGsap';

export default function DevelopmentWing({ data }) {
  const [activeLayer, setActiveLayer] = useState('frontend');

  const teamMembers = [
    {
      name: 'Raushan Kumar Singh',
      role: 'Full Stack Developer',
      bio: 'CS undergrad and Coding Club Coordinator passionate about DSA, Java, and full-stack development, helping students learn, build, and grow together.',
      image: '/myphoto.jpeg',
      linkedin: 'https://www.linkedin.com/in/raushan-kumar-singh-24a04b33b',
      github: 'https://github.com/raushandeveloper?tab=repositories'
    },
    {
      name: 'Priyanshu',
      role: 'Backend Developer',
      bio: 'Works on APIs, authentication, and robust application architecture for scalable products.',
      image: '/pri.png',
      linkedin: 'https://www.linkedin.com/in/priyanshu-a95522328/',
      github: 'https://github.com/codegritpriyanshu'
    },
    {
      name: 'Dipanshu Singh',
      role: 'Full Stack Mentor',
      bio: 'Helps the community turn ideas into real projects through structured learning and code reviews.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
      linkedin: 'https://www.linkedin.com/in/dipanshu-singh-0924a023b',
      github: 'https://github.com/dipanshusingh'
    }
  ];

  const webLayers = [
    {
      id: 'frontend',
      title: 'Frontend',
      short: 'UI + User Experience',
      description: 'Build polished, responsive interfaces with React, modern CSS, accessibility, and smooth user interactions.',
      points: ['Component-driven architecture', 'Responsive layouts', 'Performance-driven UI decisions']
    },
    {
      id: 'backend',
      title: 'Backend',
      short: 'APIs + Logic',
      description: 'Design clean server logic, REST APIs, auth flows, and scalable services that support product features.',
      points: ['RESTful API design', 'Authentication and security', 'Business logic and data processing']
    },
    {
      id: 'database',
      title: 'Database',
      short: 'Storage + Data Flow',
      description: 'Structure data effectively, optimize queries, and keep information consistent across the whole application.',
      points: ['Schema design', 'Query optimization', 'Data consistency and relationships']
    }
  ];

  const webTracks = [
    {
      phase: 'PHASE 01',
      status: 'completed',
      title: 'Core DOM & Modern JS',
      desc: 'Async workflows, Event Loop, Closures, DOM manipulation & ESNext patterns.'
    },
    {
      phase: 'PHASE 02',
      status: 'in progress',
      title: 'React 19 & Component Architecture',
      desc: 'Custom hooks, Server/Client components, State machines, and Suspense patterns.'
    },
    {
      phase: 'PHASE 03',
      status: 'upcoming',
      title: 'Creative Web & Motion Graphics',
      desc: 'GSAP ScrollTrigger, Lenis smooth scroll, Three.js / WebGL shader pipelines.'
    },
    {
      phase: 'PHASE 04',
      status: 'upcoming',
      title: 'Production Build & Optimization',
      desc: 'Bundle analysis, Code splitting, Web Vitals, and Lighthouse audit performance.'
    }
  ];

  const appTracks = [
    {
      phase: 'PHASE 01',
      status: 'completed',
      title: 'App UI Foundations',
      desc: 'Responsive mobile layouts, design systems, and navigation patterns for app experiences.'
    },
    {
      phase: 'PHASE 02',
      status: 'in progress',
      title: 'App APIs & Authentication',
      desc: 'REST APIs, token-based auth, role handling, and secure data exchange between app and backend.'
    },
    {
      phase: 'PHASE 03',
      status: 'upcoming',
      title: 'React Native / Cross-Platform Builds',
      desc: 'Component reuse, state management, device APIs, and app-specific performance tuning.'
    },
    {
      phase: 'PHASE 04',
      status: 'upcoming',
      title: 'Launch, Analytics & Deployment',
      desc: 'App stores, CI/CD, crash monitoring, analytics, and performance tracking after release.'
    }
  ];

  const selectedLayer = webLayers.find((layer) => layer.id === activeLayer) || webLayers[0];

  const ref = useGsap((g, ST, root) => {
    g.from('.dev-hero-text > *', {
      y: 35,
      opacity: 0, 
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out'
    });

    g.from('.bento-card', {
      y: 50,
      opacity: 0,
      stagger: 0.12,
      scrollTrigger: {
        trigger: '.stack-section',
        start: 'top 75%'
      }
    });

    g.from('.dev-project-card', {
      y: 45,
      opacity: 0,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 75%'
      }
    });
  }, []);

  return (
    <div ref={ref} className="dev-wing-page">
      {/* 1. HERO SECTION */}
      <section className="dev-hero section-black">
        <div className="dev-hero-grid" />
        <div className="dev-hero-container">
          <div className="dev-hero-text">
            <div className="status-badge">
              <span className="pulsing-dot" />
              <span>WING 02 // DEV_CORE</span>
            </div>
            <h1>
              CRAFTING <br />
              <span className="accent-text">MODERN SYSTEMS.</span>
            </h1>
            <p className="dev-lead">
              We design, build, and deploy production-grade web platforms, scalable backend services, and interactive digital experiences.
            </p>
            <div className="dev-hero-actions">
              <a href="#projects" className="magnetic-btn">
                EXPLORE BUILDS <ArrowUpRight size={16} />
              </a>
              <a href="#roadmap" className="ghost-btn">
                LEARNING TRACKS
              </a>
            </div>
          </div>
          <div className="dev-hero-terminal">
            <DevTerminal />
          </div>
        </div>
      </section>

      {/* 2. ROADMAP & CURRICULUM */}

      {/* 4. TEAM MEMBERS */}
      <section className="team-section section-black" style={{ padding: '120px 7vw' }}>
        <SectionHeading compact dark eyebrow="04 / TEAM" title="MEET THE CORE CREW." />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '18px', marginTop: '30px' }}>
          {teamMembers.map((member) => (
            <div key={member.name} style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', overflow: 'hidden', color: '#f5f1eb', padding: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '8px' }}>
                <div style={{ width: '140px', height: '140px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(255,138,61,0.8)', boxShadow: '0 0 0 5px rgba(255,138,61,0.12)' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>

              <div style={{ padding: '16px 8px 8px' }}>
                <p style={{ font: '8px "DM Mono"', letterSpacing: '.08em', color: '#ff8a3d', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {member.role}
                </p>
                <h3 style={{ fontSize: '22px', letterSpacing: '-0.05em', margin: '0 0 10px' }}>{member.name}</h3>
                <p style={{ color: '#b0a69d', lineHeight: 1.45, marginBottom: '14px', fontSize: '12.5px' }}>{member.bio}</p>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      style={{
                        width: '38px',
                        height: '38px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        background: 'rgba(255,138,61,0.12)',
                        color: '#ff8a3d',
                        border: '1px solid rgba(255,138,61,0.35)'
                      }}
                    >
                      <Linkedin size={16} />
                    </a>
                  )}

                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} GitHub`}
                      style={{
                        width: '38px',
                        height: '38px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        background: 'rgba(255,138,61,0.12)',
                        color: '#ff8a3d',
                        border: '1px solid rgba(255,138,61,0.35)'
                      }}
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. TECH STACK BENTO */}
      <section className="stack-section section-black">
        <SectionHeading dark eyebrow="01 / ECOSYSTEM" title="PRODUCTION TECH STACK." />
        <p className="section-subtext">
          Modern frameworks and infrastructure we build with on a daily basis.
        </p>
        <StackBento />
      </section>

      {/* 5. ROADMAP & CURRICULUM */}
      <section id="roadmap" className="roadmap-section section-cream">
        <SectionHeading eyebrow="02 / CURRICULUM" title="STRUCTURED LEARNING TRACKS." />
        <p className="section-subtext-dark">
          From fundamental JavaScript and architecture to full-stack microservices and deployment.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '24px', marginTop: '40px' }}>
          <div style={{ background: '#ffffff', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.08)', padding: '28px' }}>
            <p style={{ font: '10px "DM Mono"', letterSpacing: '.08em', color: '#ff8a3d', textTransform: 'uppercase', marginBottom: '12px' }}>
              Web Development
            </p>
            <h3 style={{ fontSize: '34px', letterSpacing: '-0.06em', margin: '0 0 20px' }}>Frontend Track</h3>

            <div style={{ display: 'grid', gap: '14px' }}>
              {webTracks.map((track) => (
                <div key={track.title} style={{ background: '#f7f3ef', borderRadius: '18px', padding: '16px', border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ font: '10px "DM Mono"', letterSpacing: '.08em', color: '#111', textTransform: 'uppercase' }}>{track.phase}</span>
                    <span style={{ font: '10px "DM Mono"', letterSpacing: '.08em', color: '#ff8a3d', textTransform: 'uppercase' }}>{track.status}</span>
                  </div>
                  <h4 style={{ fontSize: '22px', letterSpacing: '-0.05em', margin: '0 0 8px' }}>{track.title}</h4>
                  <p style={{ margin: 0, color: '#5d564f', lineHeight: 1.5, fontSize: '14px' }}>{track.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#ffffff', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.08)', padding: '28px' }}>
            <p style={{ font: '10px "DM Mono"', letterSpacing: '.08em', color: '#ff8a3d', textTransform: 'uppercase', marginBottom: '12px' }}>
              App Development
            </p>
            <h3 style={{ fontSize: '34px', letterSpacing: '-0.06em', margin: '0 0 20px' }}>Full-Stack Track</h3>

            <div style={{ display: 'grid', gap: '14px' }}>
              {appTracks.map((track) => (
                <div key={track.title} style={{ background: '#f7f3ef', borderRadius: '18px', padding: '16px', border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ font: '10px "DM Mono"', letterSpacing: '.08em', color: '#111', textTransform: 'uppercase' }}>{track.phase}</span>
                    <span style={{ font: '10px "DM Mono"', letterSpacing: '.08em', color: '#ff8a3d', textTransform: 'uppercase' }}>{track.status}</span>
                  </div>
                  <h4 style={{ fontSize: '22px', letterSpacing: '-0.05em', margin: '0 0 8px' }}>{track.title}</h4>
                  <p style={{ margin: 0, color: '#5d564f', lineHeight: 1.5, fontSize: '14px' }}>{track.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. WEB DEV & APP DEV */}
      <section className="section-black" style={{ padding: '0 7vw 120px' }}>
        <SectionHeading dark eyebrow="05 / LEARN BY BUILDING" title="WEB DEV & APP DEVELOPMENT." />

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '24px', marginTop: '40px' }}>
          <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '28px', padding: '28px', color: '#f5f1eb' }}>
            <p style={{ font: '10px "DM Mono"', letterSpacing: '.08em', color: '#ff8a3d', textTransform: 'uppercase', marginBottom: '18px' }}>
              Web Development
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {webLayers.map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  style={{
                    border: activeLayer === layer.id ? '1px solid #ff8a3d' : '1px solid rgba(255,255,255,0.15)',
                    background: activeLayer === layer.id ? '#ff8a3d' : 'transparent',
                    color: activeLayer === layer.id ? '#111' : '#f5f1eb',
                    borderRadius: '999px',
                    padding: '10px 16px',
                    font: '10px "DM Mono"',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                  }}
                >
                  {layer.title}
                </button>
              ))}
            </div>

            <div style={{ background: '#161616', borderRadius: '22px', border: '1px solid rgba(255,255,255,0.08)', padding: '24px' }}>
              <p style={{ font: '10px "DM Mono"', letterSpacing: '.08em', color: '#ff8a3d', textTransform: 'uppercase', margin: '0 0 8px' }}>
                {selectedLayer.short}
              </p>
              <h3 style={{ fontSize: '32px', letterSpacing: '-0.05em', margin: '0 0 12px' }}>{selectedLayer.title}</h3>
              <p style={{ color: '#c7beb6', lineHeight: 1.7, marginBottom: '18px' }}>{selectedLayer.description}</p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                {selectedLayer.points.map((point) => (
                  <li key={point} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: '#f5f1eb', lineHeight: 1.6 }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff8a3d', marginTop: '9px', display: 'inline-block' }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '28px', padding: '28px', color: '#f5f1eb' }}>
            <p style={{ font: '10px "DM Mono"', letterSpacing: '.08em', color: '#ff8a3d', textTransform: 'uppercase', marginBottom: '18px' }}>
              App Development
            </p>

            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ background: '#1a1a1a', borderRadius: '18px', padding: '18px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: '22px', letterSpacing: '-0.04em' }}>Mobile-first UX</h4>
                <p style={{ margin: 0, color: '#c7beb6', lineHeight: 1.6 }}>Design for smaller screens, fast flows, and better user retention.</p>
              </div>

              <div style={{ background: '#1a1a1a', borderRadius: '18px', padding: '18px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: '22px', letterSpacing: '-0.04em' }}>API integrations</h4>
                <p style={{ margin: 0, color: '#c7beb6', lineHeight: 1.6 }}>Connect apps with auth, payments, cloud services, and live data layers.</p>
              </div>

              <div style={{ background: '#1a1a1a', borderRadius: '18px', padding: '18px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: '22px', letterSpacing: '-0.04em' }}>Deployment & scaling</h4>
                <p style={{ margin: 0, color: '#c7beb6', lineHeight: 1.6 }}>Ship faster with clean build pipelines, monitoring, and performance checks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FLAGSHIP BUILDS */}
      <section id="projects" className="projects-section section-black">
        <SectionHeading dark eyebrow="03 / BUILDS" title="SHIPPED PROJECTS & OPEN SOURCE." />
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="dev-cta-section section-orange">
        <div className="dev-cta-content">
          <div className="eyebrow">CONTRIBUTE & BUILD</div>
          <h2>HAVE AN IDEA OR WANT TO CODE WITH US?</h2>
          <p>Join weekly code sprints, collaborate on repositories, and ship real products.</p>
          <Link to="/about" className="circle-link">
            JOIN US <ArrowUpRight />
          </Link>
        </div>
      </section>
    </div>
  );
}