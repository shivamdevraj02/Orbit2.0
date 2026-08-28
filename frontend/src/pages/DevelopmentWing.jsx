import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Sparkles, Terminal, ArrowUpRight, Cpu, Layers, GitMerge } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import DevTerminal from '../components/dev/DevTerminal';
import StackBento from '../components/dev/StackBento';
import DevRoadmap from '../components/dev/DevRoadmap';
import ProjectShowcase from '../components/dev/ProjectShowcase';
import useGsap from '../hooks/useGsap';

export default function DevelopmentWing({ data }) {
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

      {/* 2. TECH STACK BENTO */}
      <section className="stack-section section-black">
        <SectionHeading dark eyebrow="01 / ECOSYSTEM" title="PRODUCTION TECH STACK." />
        <p className="section-subtext">
          Modern frameworks and infrastructure we build with on a daily basis.
        </p>
        <StackBento />
      </section>

      {/* 3. ROADMAP & CURRICULUM */}
      <section id="roadmap" className="roadmap-section section-cream">
        <SectionHeading eyebrow="02 / CURRICULUM" title="STRUCTURED LEARNING TRACKS." />
        <p className="section-subtext-dark">
          From fundamental JavaScript and architecture to full-stack microservices and deployment.
        </p>
        <DevRoadmap />
      </section>

      {/* 4. FLAGSHIP BUILDS */}
      <section id="projects" className="projects-section section-black">
        <SectionHeading dark eyebrow="03 / BUILDS" title="SHIPPED PROJECTS & OPEN SOURCE." />
        <ProjectShowcase />
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