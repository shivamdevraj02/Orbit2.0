import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function WingsShowcase({ wings }) {
  return (
    <section id="home-wings" className="home-wings section-black">
      <SectionHeading dark eyebrow="02 / WINGS" title="FIVE DIRECTIONS. ONE COMMUNITY." />
      <div className="mini-wings">
        {wings.map((wing) => (
          <Link className="mini-wing reveal" to={`/wings#${wing.id}`} key={wing.id}>
            <span>{wing.number}</span>
            <h3>{wing.name}</h3>
            <p>{wing.description}</p>
            <ArrowUpRight />
          </Link>
        ))}
      </div>
    </section>
  );
}
