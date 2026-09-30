import React from 'react';

const pixels = Array.from({ length: 58 }, (_, index) => ({
  x: (index * 43 + 7) % 101,
  y: (index * 71 + 13) % 101,
  size: 2 + ((index * 5) % 5),
  delay: -((index * 9) % 24) / 3,
  duration: 3.2 + ((index * 7) % 26) / 10,
  color: ['#f15a24', '#b8ff70', '#9d8cff', '#f5efe7'][index % 4]
}));

const signals = Array.from({ length: 8 }, (_, index) => ({
  x: (index * 29 + 8) % 96,
  y: (index * 41 + 4) % 92,
  length: 38 + ((index * 31) % 84),
  delay: -index * 1.7,
  duration: 8 + (index % 4) * 2
}));

export default function CultureBackdrop() {
  return (
    <div className="culture-backdrop" aria-hidden="true">
      <div className="culture-backdrop-grid" />

      {signals.map((signal, index) => (
        <span
          className="culture-signal"
          key={`signal-${index}`}
          style={{
            '--signal-x': `${signal.x}%`,
            '--signal-y': `${signal.y}%`,
            '--signal-length': `${signal.length}px`,
            '--signal-delay': `${signal.delay}s`,
            '--signal-duration': `${signal.duration}s`
          }}
        />
      ))}

      {pixels.map((pixel, index) => (
        <span
          className="culture-pixel"
          key={`pixel-${index}`}
          style={{
            '--pixel-x': `${pixel.x}%`,
            '--pixel-y': `${pixel.y}%`,
            '--pixel-size': `${pixel.size}px`,
            '--pixel-delay': `${pixel.delay}s`,
            '--pixel-duration': `${pixel.duration}s`,
            '--pixel-color': pixel.color
          }}
        />
      ))}
    </div>
  );
}
