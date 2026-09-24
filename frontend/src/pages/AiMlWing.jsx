import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import DevTerminal from '../components/dev/DevTerminal';
import StackBento from '../components/dev/StackBento';
import DevRoadmap from '../components/dev/DevRoadmap';
import ProjectShowcase from '../components/dev/ProjectShowcase';
import useGsap from '../hooks/useGsap';

export default function AiMlWing() {
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
            <span>WING 01 // AI & ML</span>
          </div>

          <h1>
            BUILDING <br />
            <span className="accent-text">INTELLIGENT SYSTEMS.</span>
          </h1>

          <p className="dev-lead">
            Explore artificial intelligence and machine learning through
            data, predictive models, deep learning, and real-world
            intelligent applications.
          </p>

          <div className="dev-hero-actions">
            <a href="#topics" className="magnetic-btn">
              EXPLORE AI/ML <ArrowUpRight size={16} />
            </a>

            <a href="#roadmap" className="ghost-btn">
              LEARNING ROADMAP
            </a>
          </div>

        </div>

        <div className="dev-hero-terminal">
          <DevTerminal />
        </div>

      </div>
    </section>


    {/* 2. AI/ML ECOSYSTEM */}
    <section id="topics" className="stack-section section-black">

      <SectionHeading
        dark
        eyebrow="01 / ECOSYSTEM"
        title="AI, MACHINE LEARNING & DATA."
      />

      <p className="section-subtext">
        Learn the technologies and concepts behind intelligent systems,
        from data preprocessing and classical machine learning to
        deep learning and generative AI.
      </p>

      <StackBento />

    </section>


    {/* 3. AI/ML ROADMAP */}
    <section id="roadmap" className="roadmap-section section-cream">

      <SectionHeading
        eyebrow="02 / CURRICULUM"
        title="STRUCTURED AI/ML ROADMAP."
      />

      <p className="section-subtext-dark">
        Progress from mathematics and Python fundamentals to machine
        learning, deep learning, NLP, computer vision, and modern
        generative AI systems.
      </p>

      <DevRoadmap />

    </section>


    {/* 4. AI PROJECTS */}
    <section id="projects" className="projects-section section-black">

      <SectionHeading
        dark
        eyebrow="03 / AI BUILDS"
        title="INTELLIGENT PROJECTS & EXPERIMENTS."
      />

      <p className="section-subtext">
        Build practical AI systems that transform data into predictions,
        recommendations, automation, and intelligent user experiences.
      </p>

      <ProjectShowcase />

    </section>


    {/* 5. CALL TO ACTION */}
    <section className="dev-cta-section section-orange">

      <div className="dev-cta-content">

        <div className="eyebrow">
          LEARN & BUILD
        </div>

        <h2>
          READY TO BUILD INTELLIGENT SYSTEMS?
        </h2>

        <p>
          Learn the fundamentals, experiment with models, build AI
          applications, and turn ideas into intelligent products.
        </p>

        <Link to="/about" className="circle-link">
          START BUILDING <ArrowUpRight />
        </Link>

      </div>

    </section>

  </div>
);

}