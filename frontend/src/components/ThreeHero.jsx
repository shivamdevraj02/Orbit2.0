import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float,
  Points,
  PointMaterial
} from '@react-three/drei';
import * as THREE from 'three';

function Scene() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      state.pointer.x * 0.35,
      0.03
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -state.pointer.y * 0.2,
      0.03
    );
  });

  return (
    <group ref={group}>
      {/* Main 3D Object */}
      <Float
        speed={1.4}
        rotationIntensity={0.35}
        floatIntensity={0.6}
      >
        <mesh>
          <icosahedronGeometry args={[1.65, 1]} />

          <meshStandardMaterial
            color="#f15a24"
            wireframe
            emissive="#c94416"
            emissiveIntensity={1.1}
          />
        </mesh>
      </Float>

      {/* Particle Field */}
      <Points
        positions={Array.from(
          { length: 600 },
          () => [
            (Math.random() - 0.5) * 7,
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5
          ]
        ).flat()}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#f5efe7"
          size={0.018}
          sizeAttenuation
        />
      </Points>

      {/* Orange Ring */}
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry
          args={[2.2, 0.012, 16, 80]}
        />

        <meshBasicMaterial
          color="#f15a24"
          transparent
          opacity={0.55}
        />
      </mesh>
    </group>
  );
}

export default function ThreeHero() {
  return (
    <div
      className="three-hero"
      aria-hidden="true"
    >
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 42
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true
        }}
      >
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[3, 3, 4]}
          intensity={2}
        />

        <Scene />
      </Canvas>
    </div>
  );
}