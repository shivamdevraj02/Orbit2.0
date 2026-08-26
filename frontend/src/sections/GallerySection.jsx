import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const CATEGORIES = ['ALL', 'EVENTS', 'WORKSHOPS', 'PROJECTS', 'TEAM', 'DESIGN'];

export default function GallerySection({ gallery }) {
  const [filter, setFilter] = useState('ALL');
  const [active, setActive] = useState(null);
  const items = gallery.filter((item) => filter === 'ALL' || item.category === filter);

  return (
    <section className="gallery-section section-cream">
      <SectionHeading eyebrow="04 / GALLERY" title="MOMENTS OF MAKING." />
      <div className="filters">
        {CATEGORIES.map((category) => (
          <button key={category} className={filter === category ? 'active' : ''} onClick={() => setFilter(category)}>{category}</button>
        ))}
      </div>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <button className={`gallery-item gi-${index % 4}`} key={item.id} onClick={() => setActive(item)}>
            {item.image ? <img src={item.image} alt={item.title} /> : <div className="gallery-placeholder"><span>{item.category}</span><strong>{item.title}</strong><ArrowUpRight /></div>}
            <div className="gallery-caption"><span>{item.category}</span><b>{item.title}</b></div>
          </button>
        ))}
      </div>
      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button aria-label="Close" onClick={() => setActive(null)}><X /></button>
          {active.image && <img src={active.image} alt={active.title} />}
          <div><small>{active.category}</small><h2>{active.title}</h2><p>{active.description}</p></div>
        </div>
      )}
    </section>
  );
}
