import React, { useRef } from 'react';
import { Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import ParticleField from './ParticleField';

export default function TechCore() {
  const group = useRef();
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.35, 0.03);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.2, 0.03);
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.6}>
        <mesh><icosahedronGeometry args={[1.65, 1]} /><meshStandardMaterial color="#f15a24" wireframe emissive="#c94416" emissiveIntensity={1.1} /></mesh>
      </Float>
      <ParticleField />
      <mesh rotation={[0, 0, Math.PI / 4]}><torusGeometry args={[2.2, 0.012, 16, 80]} /><meshBasicMaterial color="#f15a24" transparent opacity={0.55} /></mesh>
    </group>
  );
}
