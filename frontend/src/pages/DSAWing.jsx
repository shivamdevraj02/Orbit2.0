import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Sparkles, Terminal, ArrowUpRight, Cpu, Layers, GitMerge } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import DevTerminal from '../components/dev/DevTerminal';
import StackBento from '../components/dev/StackBento';
import DevRoadmap from '../components/dev/DevRoadmap';
import ProjectShowcase from '../components/dev/ProjectShowcase';
import useGsap from '../hooks/useGsap';

export default function DsaWing({ data }) {
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
            <span>WING 03 // DSA</span>
          </div>

          <h1>
            MASTERING <br />
            <span className="accent-text">DATA STRUCTURES.</span>
          </h1>

          <p className="dev-lead">
            Build strong problem-solving skills through data structures,
            algorithms, complexity analysis, and consistent competitive
            programming practice.
          </p>

          <div className="dev-hero-actions">
            <a href="#topics" className="magnetic-btn">
              EXPLORE DSA <ArrowUpRight size={16} />
            </a>

            <a href="#roadmap" className="ghost-btn">
              DSA ROADMAP
            </a>
          </div>

        </div>

        <div className="dev-hero-terminal">
          <DevTerminal />
        </div>
      </div>
    </section>


    {/* 2. DSA CORE TOPICS */}
    <section id="topics" className="stack-section section-black">

      <SectionHeading
        dark
        eyebrow="01 / FUNDAMENTALS"
        title="DATA STRUCTURES & ALGORITHMS."
      />

      <p className="section-subtext">
        Learn the core concepts required to solve problems efficiently
        and build a strong foundation for technical interviews.
      </p>

      <StackBento />

    </section>


    {/* 3. DSA ROADMAP */}
    <section id="roadmap" className="roadmap-section section-cream">

      <SectionHeading
        eyebrow="02 / ROADMAP"
        title="STRUCTURED DSA LEARNING."
      />

      <p className="section-subtext-dark">
        Follow a structured path from programming fundamentals and
        complexity analysis to advanced algorithms and problem solving.
      </p>

      <DevRoadmap />

    </section>


    {/* 4. PROBLEM SOLVING / PRACTICE */}
    <section id="projects" className="projects-section section-black">

      <SectionHeading
        dark
        eyebrow="03 / PROBLEM SOLVING"
        title="SOLVE. ANALYZE. OPTIMIZE."
      />

      <p className="section-subtext">
        Practice real coding problems, identify patterns, analyze
        complexity, and continuously improve your solutions.
      </p>

      <ProjectShowcase />

    </section>


    {/* 5. CALL TO ACTION */}
    <section className="dev-cta-section section-orange">

      <div className="dev-cta-content">

        <div className="eyebrow">
          THINK & SOLVE
        </div>

        <h2>
          READY TO SOLVE HARDER PROBLEMS?
        </h2>

        <p>
          Practice consistently, master algorithmic patterns, and build
          the problem-solving skills needed for coding interviews.
        </p>

        <Link to="/about" className="circle-link">
          START LEARNING <ArrowUpRight />
        </Link>

      </div>

    </section>

  </div>
);

}