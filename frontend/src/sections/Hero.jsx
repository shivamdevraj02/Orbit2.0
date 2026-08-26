import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import ThreeHero from '../components/ThreeHero';

export default function Hero({ data }) {
  const scrollToWings = () => {
    document.querySelector('#home-wings')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-grid" />
      <ThreeHero />
      <div className="hero-copy">
        <p className="eyebrow">TECHNICAL / CREATIVE ORGANIZATION</p>
        <h1>{data.hero.title.split(' ').map((word, i) => <span key={i}>{word} </span>)}</h1>
        <p className="hero-desc">{data.hero.description}</p>
        <MagneticButton onClick={scrollToWings}>
          {data.hero.cta} <ArrowUpRight size={17} />
        </MagneticButton>
      </div>
      <div className="hero-meta"><span>SCROLL TO EXPLORE</span><ArrowDownRight /></div>
    </section>
  );
}
