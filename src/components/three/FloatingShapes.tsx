import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  shape: 'box' | 'sphere' | 'torus' | 'octahedron';
  speed?: number;
}

export function FloatingShape({ position, color, shape, speed = 1 }: FloatingShapeProps) {
  const meshRef = useRef<Mesh>(null);
  const startY = position[1];
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() * speed;
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.5;
      meshRef.current.position.y = startY + Math.sin(time) * 0.5;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere':
        return <sphereGeometry args={[0.6, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[0.5, 0.2, 16, 100]} />;
      case 'octahedron':
        return <octahedronGeometry args={[0.7]} />;
    }
  }, [shape]);

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial 
        color={color} 
        wireframe 
        transparent 
        opacity={0.6}
      />
    </mesh>
  );
}

export function FloatingShapes() {
  const shapes: Array<{ pos: [number, number, number]; color: string; shape: 'box' | 'sphere' | 'torus' | 'octahedron'; speed: number }> = [
    { pos: [-4, 2, -5], color: '#00B4D8', shape: 'box', speed: 0.8 },
    { pos: [4, -1, -4], color: '#E63946', shape: 'sphere', speed: 1.2 },
    { pos: [-3, -2, -6], color: '#3D2E7C', shape: 'torus', speed: 1.0 },
    { pos: [5, 3, -7], color: '#00B4D8', shape: 'octahedron', speed: 0.9 },
    { pos: [2, 0, -5], color: '#E63946', shape: 'box', speed: 1.1 },
    { pos: [-5, -1, -8], color: '#3D2E7C', shape: 'sphere', speed: 0.7 },
  ];

  return (
    <>
      {shapes.map((shape, i) => (
        <FloatingShape
          key={i}
          position={shape.pos}
          color={shape.color}
          shape={shape.shape}
          speed={shape.speed}
        />
      ))}
    </>
  );
}

export function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color="#00B4D8" 
        transparent 
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}
