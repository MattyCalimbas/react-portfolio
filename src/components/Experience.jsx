import { OrbitControls, Sky, Environment } from "@react-three/drei";
import  Avatar  from './Avatar';
import { useControls } from "leva";

export default function Experience () {

  const {animation} = useControls({
    animation: {
    value: 'Typing',
    options: ["Typing", "Falling", "Standing"]
    }
  })
  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset='sunset' />
      <group position-y={-1}>
        <Avatar animation={animation}/>
      </group>
    </>
  );
};


