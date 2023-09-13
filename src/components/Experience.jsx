
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import Office from "./Office";
import Projects from "./Projects"
import * as THREE from "three";
import Background from "./Background";

export default function Experience(props) {
  const { menuOpened } = props;
  const { viewport } = useThree();
  console.log(viewport.width, viewport.height)

  const data = useScroll();

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();
  const [characterAnimation, setCharacterAnimtion] = useState("Typing");

  useEffect(() => {
    setCharacterAnimtion("Falling");
    setTimeout(() => {
      setCharacterAnimtion(section === 0 ? "Typing" : "Standing")
    }, 600)
  }, [section])

  useFrame((state) => {
    let currentSection = Math.floor(data.scroll.current * data.pages);

    if (currentSection > 3) {
      currentSection = 3;
    }

    if (currentSection !== section) {
      setSection(currentSection)
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
    // const position = new THREE.Vector3()
    // characterContainerAboutRef.current.getWorldPosition(position)
    // console.log([position.x, position.y, position.z])

    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ")
    // console.log([euler.x, euler.y, euler.z])
  });

  return (
    <>
    <Background />
      <motion.group position={[1.9072935059634513, 0.216, 2.681801948466054]}
        rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 0.95,
            scaleY: 0.95,
            scaleZ: 0.95,
          },
          1: {
            y: -viewport.height + 0.5,
            x: 0,
            z: 7,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
          2: {
            x: -2,
            y: -viewport.height * 2 + 0.5,
            z: 0,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
          },
          3: {
            y: -viewport.height * 3 + 1,
            x: 0.3,
            z: 8.5,
            rotateX: 0,
            rotateY: -Math.PI / 4,
            rotateZ: 0,
          },
        }}
      >
        <Avatar animation={characterAnimation} wireframe={section === 1}/>
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Office section={section} />
        <group name="CharacterSpot" position={[0.07, 0.24, -0.57]} rotation={[-Math.PI, 0.42, -Math.PI]} ref={characterContainerAboutRef} >



        </group>
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="purple"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
      </motion.group>
      <Projects />
    </>
  );
};