import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  dark = false,
  compact = false
}) {
  return (
    <div
      className={`section-heading ${
        dark ? 'on-dark' : ''
      } ${compact ? 'compact' : ''}`}
    >
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}