import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { RigidBody, RapierRigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useGameStore } from '@/store/gameStore';

export default function Player() {
  const playerRef = useRef<RapierRigidBody>(null);
  const { camera } = useThree();
  const velocity = useRef({ x: 0, z: 0 });
  const keys = useRef<Set<string>>(new Set());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.current.add(e.key.toLowerCase());
      
      if (e.key.toLowerCase() === 't') {
        useGameStore.getState().setShowPhone(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current.delete(e.key.toLowerCase());
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame(() => {
    if (!playerRef.current) return;

    const speed = 5;
    const direction = new Vector3();

    if (keys.current.has('w')) direction.z -= 1;
    if (keys.current.has('s')) direction.z += 1;
    if (keys.current.has('a')) direction.x -= 1;
    if (keys.current.has('d')) direction.x += 1;

    if (direction.length() > 0) {
      direction.normalize();
      direction.applyEuler(camera.rotation);
      direction.y = 0;
      direction.normalize();
    }

    velocity.current.x = direction.x * speed;
    velocity.current.z = direction.z * speed;

    const currentVel = playerRef.current.linvel();
    playerRef.current.setLinvel(
      { x: velocity.current.x, y: currentVel.y, z: velocity.current.z },
      true
    );

    const pos = playerRef.current.translation();
    camera.position.set(pos.x, pos.y + 1.6, pos.z);
  });

  return (
    <RigidBody
      ref={playerRef}
      colliders="ball"
      mass={1}
      type="dynamic"
      position={[0, 2, 5]}
      enabledRotations={[false, false, false]}
      linearDamping={0.5}
    >
      <mesh visible={false}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </RigidBody>
  );
}
