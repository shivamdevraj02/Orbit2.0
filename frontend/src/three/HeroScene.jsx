import React from 'react';
import { Canvas } from '@react-three/fiber';
import TechCore from './TechCore';

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 3, 4]} intensity={2} />
      <TechCore />
    </Canvas>
  );
}
