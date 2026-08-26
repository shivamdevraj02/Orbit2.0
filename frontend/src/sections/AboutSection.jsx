import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function AboutSection({ data }) {
  return (
    <>
      <section className="about-intro section-cream">
        <SectionHeading eyebrow="05 / ABOUT" title="A COMMUNITY FOR CURIOUS BUILDERS." />
        <div className="about-columns">
          <p className="about-lead">{data.about.text}</p>
          <div><h3>MISSION</h3><p>{data.about.mission}</p><h3>VISION</h3><p>{data.about.vision}</p></div>
        </div>
      </section>
      <section className="stats section-black"><div className="stats-grid">{data.about.stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></section>
      <section className="contact-section section-black">
        <SectionHeading dark eyebrow="06 / CONTACT" title="CONTACT DETAILS" />
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-block"><MapPin /><div><b>ADDRESS</b><p>{data.contact.address}</p></div></div>
            <div className="contact-block"><Phone /><div><b>PHONE</b><p>{data.contact.phone || 'Call details are configurable in Admin.'}</p>{data.contact.phone && <a href={`tel:${data.contact.phone}`}>CALL NOW <ArrowUpRight /></a>}</div></div>
            <div className="contact-block"><Mail /><div><b>EMAIL</b><p>{data.contact.email}</p><a href={`mailto:${data.contact.email}`}>EMAIL NOW <ArrowUpRight /></a></div></div>
          </div>
          <div className="map-box">
            {data.contact.mapUrl ? <iframe title="Organization location" src={data.contact.mapUrl} loading="lazy" /> : <div className="map-placeholder"><span>MAP / CONFIGURABLE</span><strong>Siwan, Bihar</strong><p>Add a Google Maps/embed URL from Admin.</p></div>}
            <a className="map-button" href={data.contact.mapUrl || '#'} target={data.contact.mapUrl ? '_blank' : undefined} rel="noreferrer">OPEN IN MAPS <ArrowUpRight /></a>
          </div>
        </div>
      </section>
    </>
  );
}
