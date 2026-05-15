"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, SpotLight, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function ElegantGeometry() {
  const group = useRef<THREE.Group>(null);
  const mesh1 = useRef<THREE.Mesh>(null);
  const mesh2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
      group.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
    if (mesh1.current && mesh2.current) {
      mesh1.current.rotation.x = state.clock.elapsedTime * 0.1;
      mesh2.current.rotation.y = -state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <group ref={group}>
      {/* Outer elegant ring/torus */}
      <mesh ref={mesh1}>
        <torusGeometry args={[3, 0.05, 32, 100]} />
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive="#222222"
        />
      </mesh>

      {/* Inner distorting glass sphere */}
      <mesh ref={mesh2}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshDistortMaterial
          color="#1a1a1a"
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.8}
          roughness={0.2}
          distort={0.4}
          speed={1.5}
        />
      </mesh>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 35 }} gl={{ antialias: true, alpha: true }}>
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 8, 25]} />

      {/* Cinematic Lighting */}
      <ambientLight intensity={0.1} />

      <SpotLight
        position={[5, 5, 5]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        color="#ffffff"
        castShadow
      />

      <SpotLight
        position={[-5, -5, -5]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#3b82f6" // Subtle electric blue accent
        castShadow
      />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <ElegantGeometry />
      </Float>

      {/* Subtle, elegant stars instead of dense sparkles */}
      <Stars radius={50} depth={50} count={1000} factor={2} saturation={0} fade speed={0.5} />

      <Environment preset="studio" />
    </Canvas>
  );
}
