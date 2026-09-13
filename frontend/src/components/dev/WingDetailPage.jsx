import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import WingTerminal from './WingTerminal';
import WingBento from './WingBento';
import WingRoadmap from './WingRoadmap';
import WingShowcase from './WingShowcase';
import useGsap from '../../hooks/useGsap';

export default function WingDetailPage({ config }) {
  const {
    wingCode,       // "WING 03 // AI_CORE"
    heroTitle,      // ["EXPLORING", "INTELLIGENT SYSTEMS."]
    heroLead,
    terminalLines,  // array of strings for WingTerminal
    stackItems,     // array for WingBento
    roadmapSteps,   // array for WingRoadmap
    projects,       // array for WingShowcase
    ctaHeading,
    ctaText,
  } = config;

  const ref = useGsap((g) => {
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
              <span>{wingCode}</span>
            </div>
            <h1>
              {heroTitle[0]} <br />
              <span className="accent-text">{heroTitle[1]}</span>
            </h1>
            <p className="dev-lead">{heroLead}</p>
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
            <WingTerminal lines={terminalLines} />
          </div>
        </div>
      </section>

      {/* 2. TECH STACK BENTO */}
      <section className="stack-section section-black">
        <SectionHeading dark eyebrow="01 / ECOSYSTEM" title="PRODUCTION TECH STACK." />
        <p className="section-subtext">
          Modern frameworks and infrastructure we build with on a daily basis.
        </p>
        <WingBento items={stackItems} />
      </section>

      {/* 3. ROADMAP & CURRICULUM */}
      <section id="roadmap" className="roadmap-section section-cream">
        <SectionHeading eyebrow="02 / CURRICULUM" title="STRUCTURED LEARNING TRACKS." />
        <p className="section-subtext-dark">
          From fundamentals to advanced real-world application and deployment.
        </p>
        <WingRoadmap steps={roadmapSteps} />
      </section>

      {/* 4. FLAGSHIP BUILDS */}
      <section id="projects" className="projects-section section-black">
        <SectionHeading dark eyebrow="03 / BUILDS" title="SHIPPED PROJECTS & OPEN SOURCE." />
        <WingShowcase projects={projects} />
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="dev-cta-section section-orange">
        <div className="dev-cta-content">
          <div className="eyebrow">CONTRIBUTE & BUILD</div>
          <h2>{ctaHeading}</h2>
          <p>{ctaText}</p>
          <Link to="/about" className="circle-link">
            JOIN US <ArrowUpRight />
          </Link>
        </div>
      </section>
    </div>
  );
}