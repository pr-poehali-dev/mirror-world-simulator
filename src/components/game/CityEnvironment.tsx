import { RigidBody } from '@react-three/rapier';
import { useGameStore } from '@/store/gameStore';

export default function CityEnvironment() {
  const buildings = useGameStore((state) => state.playerData.buildings);

  return (
    <group>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh receiveShadow position={[0, -0.5, 0]}>
          <boxGeometry args={[100, 1, 100]} />
          <meshStandardMaterial color="#2d3748" />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid" position={[-20, 5, -20]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[8, 10, 8]} />
          <meshStandardMaterial color="#4a5568" />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid" position={[20, 4, -20]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[6, 8, 6]} />
          <meshStandardMaterial color="#718096" />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid" position={[0, 3, -30]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[10, 6, 5]} />
          <meshStandardMaterial color="#8B5CF6" />
        </mesh>
        <mesh position={[0, 3.5, 2.6]}>
          <planeGeometry args={[4, 1]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid" position={[-15, 2.5, 10]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[7, 5, 7]} />
          <meshStandardMaterial color="#0EA5E9" />
        </mesh>
        <mesh position={[0, 3, 3.6]}>
          <planeGeometry args={[3, 0.8]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid" position={[15, 3.5, 15]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[5, 7, 5]} />
          <meshStandardMaterial color="#F97316" />
        </mesh>
      </RigidBody>

      {buildings.map((building) => (
        <RigidBody
          key={building.id}
          type="fixed"
          colliders="cuboid"
          position={building.position}
        >
          <mesh castShadow receiveShadow>
            <boxGeometry args={[4, 5, 4]} />
            <meshStandardMaterial color="#10B981" />
          </mesh>
        </RigidBody>
      ))}

      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100, 10, 10]} />
        <meshStandardMaterial color="#1a202c" wireframe opacity={0.2} transparent />
      </mesh>

      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={`tree-${i}`} position={[Math.random() * 40 - 20, 2, Math.random() * 40 - 20]}>
          <coneGeometry args={[1.5, 4, 8]} />
          <meshStandardMaterial color="#10B981" />
        </mesh>
      ))}
    </group>
  );
}
