import { Canvas } from '@react-three/fiber';
import { PointerLockControls, Sky } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import { Suspense } from 'react';
import CityEnvironment from './game/CityEnvironment';
import Player from './game/Player';
import GameUI from './game/GameUI';
import { useGameStore } from '@/store/gameStore';

export default function Game3D() {
  const isPlaying = useGameStore((state) => state.isPlaying);

  if (!isPlaying) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      <Canvas
        shadows
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 1.6, 0] }}
      >
        <Suspense fallback={null}>
          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[50, 50, 25]}
            intensity={1}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          
          <Physics gravity={[0, -9.81, 0]}>
            <CityEnvironment />
            <Player />
          </Physics>

          <PointerLockControls />
        </Suspense>
      </Canvas>

      <GameUI />
    </div>
  );
}
