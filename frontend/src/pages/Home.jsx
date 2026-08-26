import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

import useGsap from '../hooks/useGsap';
import SectionHeading from '../components/SectionHeading';
import MagneticButton from '../components/MagneticButton';
import ThreeHero from '../components/ThreeHero';

export default function Home({ data }) {
  const ref = useGsap((g, ST, root) => {
    // Hero text animation
    g.fromTo(
      root.querySelectorAll('.hero-copy>*'),
      {
        y: 40,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out'
      }
    );

    // Scroll reveal animations
    g.utils.toArray('.reveal').forEach((el) => {
      g.fromTo(
        el,
        {
          y: 70,
          opacity: 0,
          filter: 'blur(8px)'
        },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    // Hero background parallax
    g.to('.hero-grid', {
      yPercent: -18,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <div ref={ref}>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-grid" />

        <ThreeHero />

        <div className="hero-copy">
          <p className="eyebrow">
            TECHNICAL / CREATIVE ORGANIZATION
          </p>

          <h1>
            {data.hero.title.split(' ').map((word, index) => (
              <span key={index}>
                {word}{' '}
              </span>
            ))}
          </h1>

          <p className="hero-desc">
            {data.hero.description}
          </p>

          <MagneticButton
            onClick={() =>
              document
                .querySelector('#home-wings')
                ?.scrollIntoView({
                  behavior: 'smooth'
                })
            }
          >
            {data.hero.cta}
            <ArrowUpRight size={17} />
          </MagneticButton>
        </div>

        <div className="hero-meta">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDownRight />
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro section-cream">
        <SectionHeading
          eyebrow="01 / INTRO"
          title={data.intro.title}
        />

        <p className="intro-copy reveal">
          {data.intro.description}
        </p>
      </section>

      {/* WINGS SECTION */}
      <section
        id="home-wings"
        className="home-wings section-black"
      >
        <SectionHeading
          dark
          eyebrow="02 / WINGS"
          title="FIVE DIRECTIONS. ONE COMMUNITY."
        />

        <div className="mini-wings">
          {data.wings.map((wing) => (
            <Link
              className="mini-wing reveal"
              to={`/wings#${wing.id}`}
              key={wing.id}
            >
              <span>{wing.number}</span>

              <h3>{wing.name}</h3>

              <p>{wing.description}</p>

              <ArrowUpRight />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section section-orange">
        <div className="cta-big reveal">
          LEARN.
          <br />
          BUILD.
          <br />
          SHIP.
        </div>

        <Link
          className="circle-link"
          to="/about"
        >
          ABOUT US
          <ArrowUpRight />
        </Link>
      </section>
    </div>
  );
}