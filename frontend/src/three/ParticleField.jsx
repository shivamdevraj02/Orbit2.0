import React, { useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';

export default function ParticleField({ count = 600, spread = [7, 5, 5], color = '#f5efe7', size = 0.018 }) {
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      values[i * 3] = (Math.random() - 0.5) * spread[0];
      values[i * 3 + 1] = (Math.random() - 0.5) * spread[1];
      values[i * 3 + 2] = (Math.random() - 0.5) * spread[2];
    }
    return values;
  }, [count, spread[0], spread[1], spread[2]]);

  return <Points positions={positions} stride={3} frustumCulled><PointMaterial transparent color={color} size={size} sizeAttenuation /></Points>;
}
