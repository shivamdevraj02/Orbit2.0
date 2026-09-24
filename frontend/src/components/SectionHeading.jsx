import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  dark = false,
  align = 'left'
}) {
  return (
    <div
      className={`section-heading ${
        dark ? 'on-dark' : 'on-light'} align-${align}`}>
    
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}