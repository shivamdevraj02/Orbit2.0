import React from 'react';
import SectionHeading from '../components/SectionHeading';

export default function Intro({ data }) {
  return (
    <section className="intro section-cream">
      <SectionHeading eyebrow="01 / INTRO" title={data.intro.title} />
      <p className="intro-copy reveal">{data.intro.description}</p>
    </section>
  );
}
