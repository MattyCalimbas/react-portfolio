import { OrbitControls, Sky, Environment, ContactShadows } from "@react-three/drei";
import Avatar from './Avatar';
import { useControls } from "leva";

export default function Experience() {

  const { animation } = useControls({
    animation: {
      value: 'Typing',
      options: ["Typing", "Falling", "Standing"]
    }
  })

  let box;
  if (animation === "Typing") {
    box = (
      <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
    )
  }

  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset='sunset' />
      <group position-y={-1}>
      <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" />
        <Avatar animation={animation} />
        {box}
        <mesh receiveShadow scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color='white' />
        </mesh>
      </group>
    </>
  );
};


