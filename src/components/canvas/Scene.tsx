"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Stars, Sparkles } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function NeuralNetwork() {
  const group = useRef<THREE.Group>(null);
  const particlesCount = 100;

  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
      group.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#8a2be2" transparent opacity={0.8} sizeAttenuation />
      </points>
      <mesh>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial color="#4a00e0" wireframe transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 5, 20]} />

      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#8a2be2" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00e5ff" />

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <NeuralNetwork />
      </Float>

      <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={200} scale={15} size={2} speed={0.4} opacity={0.1} color="#ffffff" />

      <Environment preset="night" />
    </Canvas>
  );
}
