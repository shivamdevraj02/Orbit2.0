import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import DevTerminal from '../components/dev/DevTerminal';
import StackBento from '../components/dev/StackBento';
import DevRoadmap from '../components/dev/DevRoadmap';
import ProjectShowcase from '../components/dev/ProjectShowcase';
import useGsap from '../hooks/useGsap';

export default function RoboticsWing() {
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
            <span>WING 04 // ROBOTICS</span>
          </div>

          <h1>
            ENGINEERING <br />
            <span className="accent-text">INTELLIGENT MACHINES.</span>
          </h1>

          <p className="dev-lead">
            Design, build, and program autonomous machines by combining
            electronics, embedded systems, mechanical design, sensors,
            control systems, and artificial intelligence.
          </p>

          <div className="dev-hero-actions">
            <a href="#topics" className="magnetic-btn">
              EXPLORE ROBOTICS <ArrowUpRight size={16} />
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


    {/* 2. ROBOTICS ECOSYSTEM */}
    <section id="topics" className="stack-section section-black">

      <SectionHeading
        dark
        eyebrow="01 / ECOSYSTEM"
        title="HARDWARE, SOFTWARE & AUTONOMY."
      />

      <p className="section-subtext">
        Explore the technologies behind modern robots, from
        microcontrollers and sensors to robotic operating systems,
        computer vision, and autonomous navigation.
      </p>

      <StackBento />

    </section>


    {/* 3. ROBOTICS ROADMAP */}
    <section id="roadmap" className="roadmap-section section-cream">

      <SectionHeading
        eyebrow="02 / CURRICULUM"
        title="STRUCTURED ROBOTICS ROADMAP."
      />

      <p className="section-subtext-dark">
        Start with electronics and programming, then progress through
        embedded systems, sensors, control systems, robotics software,
        computer vision, and autonomous robots.
      </p>

      <DevRoadmap />

    </section>


    {/* 4. ROBOTICS PROJECTS */}
    <section id="projects" className="projects-section section-black">

      <SectionHeading
        dark
        eyebrow="03 / ROBOT BUILDS"
        title="BUILD. CONTROL. AUTOMATE."
      />

      <p className="section-subtext">
        Turn ideas into working robots through hands-on projects
        involving electronics, embedded programming, automation,
        perception, and autonomous decision-making.
      </p>

      <ProjectShowcase />

    </section>


    {/* 5. CALL TO ACTION */}
    <section className="dev-cta-section section-orange">

      <div className="dev-cta-content">

        <div className="eyebrow">
          BUILD THE FUTURE
        </div>

        <h2>
          READY TO BUILD SOMETHING THAT MOVES?
        </h2>

        <p>
          Learn robotics by building real machines, experimenting with
          sensors and controllers, and creating intelligent autonomous
          systems.
        </p>

        <Link to="/about" className="circle-link">
          JOIN THE BUILD <ArrowUpRight />
        </Link>

      </div>

    </section>

  </div>
);

}