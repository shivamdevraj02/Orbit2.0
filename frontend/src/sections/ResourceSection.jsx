import React from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function ResourceSection({ resources }) {
  return (
    <section className="resource-section section-cream">
      <SectionHeading eyebrow="03 / RESOURCES" title="TOOLS FOR THE NEXT BUILD." />
      <div className="resource-grid">
        {resources.map((item) => (
          <article className="resource-card" key={item.id}>
            <div className="resource-icon"><FileText /></div>
            <small>{item.category} · {item.type}</small>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>{item.date}</span>
            <button>OPEN RESOURCE <ArrowUpRight /></button>
          </article>
        ))}
      </div>
    </section>
  );
}
