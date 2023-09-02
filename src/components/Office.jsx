/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 public/models/scene.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three';

export default function Office(props) {
  const { nodes, materials } = useGLTF('models/scene.gltf');
  const texture = useTexture('textures/big_baked.jpg')
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

    const textureMaterial = new THREE.MeshStandardMaterial({
        map:texture,
    });

  return (
    <group {...props} dispose={null}>
      <group name="RootNode" position={[1.763, 1.46, -0.804]} rotation={[-Math.PI, 1.57, -Math.PI]}>
        <mesh name="Shelf_Clutter_1" geometry={nodes.Shelf_Clutter_1.geometry} material={textureMaterial} />
        <mesh name="Shelf_Clutter_2" geometry={nodes.Shelf_Clutter_2.geometry} material={textureMaterial} />
        <mesh name="Shelf_Clutter_3" geometry={nodes.Shelf_Clutter_3.geometry} material={textureMaterial} />
        <mesh name="Shelf_Clutter_4" geometry={nodes.Shelf_Clutter_4.geometry} material={textureMaterial} />
        <mesh name="Shelf_Clutter_5" geometry={nodes.Shelf_Clutter_5.geometry} material={textureMaterial} />
        <mesh name="Shelf_Clutter_6" geometry={nodes.Shelf_Clutter_6.geometry} material={textureMaterial} />
        <mesh name="Shelf_Clutter_7" geometry={nodes.Shelf_Clutter_7.geometry} material={textureMaterial} />
        <mesh name="Shelf_Clutter_8" geometry={nodes.Shelf_Clutter_8.geometry} material={textureMaterial} />
        <mesh name="Shelf_Clutter_9" geometry={nodes.Shelf_Clutter_9.geometry} material={textureMaterial} />
        <mesh name="Shelf_Clutter_10" geometry={nodes.Shelf_Clutter_10.geometry} material={textureMaterial} />
        <mesh name="Shelf_Clutter_11" geometry={nodes.Shelf_Clutter_11.geometry} material={textureMaterial} />
        <mesh name="Shelf_Clutter_12" geometry={nodes.Shelf_Clutter_12.geometry} material={textureMaterial} />
        <mesh name="Shelf_Clutter_13" geometry={nodes.Shelf_Clutter_13.geometry} material={textureMaterial} />
        <mesh name="Shelf_Clutter_14" geometry={nodes.Shelf_Clutter_14.geometry} material={textureMaterial} />
        <mesh name="Shelf_Clutter_15" geometry={nodes.Shelf_Clutter_15.geometry} material={textureMaterial} />
      </group>
      <group name="RootNode001" position={[0.489, 0.409, 0]}>
        <mesh name="ExecutiveChair1" geometry={nodes.ExecutiveChair1.geometry} material={textureMaterial} position={[0.151, -0.09, -0.625]} rotation={[-Math.PI / 2, 0, 0.779]} />
      </group>
      <group name="RootNode002" position={[1.049, -0.77, 0.546]} rotation={[0, -1.034, 0]}>
        <group name="Cylinder398" position={[0.326, 0.78, -0.505]} rotation={[-1.419, 0.087, 2.088]}>
          <mesh name="Cylinder398_1" geometry={nodes.Cylinder398_1.geometry} material={textureMaterial} />
          <mesh name="Cylinder398_2" geometry={nodes.Cylinder398_2.geometry} material={textureMaterial} />
        </group>
        <group name="Cylinder400" position={[0.44, 2.164, -0.331]} rotation={[0, 0, Math.PI / 6]}>
          <mesh name="Cylinder400_1" geometry={nodes.Cylinder400_1.geometry} material={textureMaterial} />
          <mesh name="Cylinder400_2" geometry={nodes.Cylinder400_2.geometry} material={textureMaterial} />
          <mesh name="Cylinder400_3" geometry={nodes.Cylinder400_3.geometry} material={textureMaterial} />
        </group>
      </group>
      <group name="Cube007_Cube008" position={[1.462, 0.001, -0.469]} rotation={[Math.PI, -0.001, Math.PI]}>
        <mesh name="Cube007_Cube008_GrayPlastic001" geometry={nodes.Cube007_Cube008_GrayPlastic001.geometry} material={textureMaterial} />
        <mesh name="Cube007_Cube008_GrayPlastic001_1" geometry={nodes.Cube007_Cube008_GrayPlastic001_1.geometry} material={textureMaterial} />
        <mesh name="Cube007_Cube008_GrayPlastic001_2" geometry={nodes.Cube007_Cube008_GrayPlastic001_2.geometry} material={textureMaterial} />
        <mesh name="Cube007_Cube008_GrayPlastic001_3" geometry={nodes.Cube007_Cube008_GrayPlastic001_3.geometry} material={textureMaterial} />
        <mesh name="Cube007_Cube008_GrayPlastic001_4" geometry={nodes.Cube007_Cube008_GrayPlastic001_4.geometry} material={textureMaterial} />
      </group>
      <mesh name="Monitor" geometry={nodes.Monitor.geometry} material={textureMaterial} position={[1.583, 0.744, 0.064]} rotation={[0, -0.563, 0]} />
      <group name="group549538436" position={[1.545, 0.3, -0.863]} rotation={[0, 0.014, 0]}>
        <mesh name="mesh549538436" geometry={nodes.mesh549538436.geometry} material={textureMaterial} />
        <mesh name="mesh549538436_1" geometry={nodes.mesh549538436_1.geometry} material={textureMaterial} />
        <mesh name="mesh549538436_2" geometry={nodes.mesh549538436_2.geometry} material={textureMaterial} />
        <mesh name="mesh549538436_3" geometry={nodes.mesh549538436_3.geometry} material={textureMaterial} />
        <mesh name="mesh549538436_4" geometry={nodes.mesh549538436_4.geometry} material={textureMaterial} />
        <mesh name="mesh549538436_5" geometry={nodes.mesh549538436_5.geometry} material={textureMaterial} />
        <mesh name="mesh549538436_6" geometry={nodes.mesh549538436_6.geometry} material={textureMaterial} />
        <mesh name="mesh549538436_7" geometry={nodes.mesh549538436_7.geometry} material={textureMaterial} />
        <mesh name="mesh549538436_8" geometry={nodes.mesh549538436_8.geometry} material={textureMaterial} />
        <mesh name="mesh549538436_9" geometry={nodes.mesh549538436_9.geometry} material={textureMaterial} />
        <mesh name="mesh549538436_10" geometry={nodes.mesh549538436_10.geometry} material={textureMaterial} />
        <mesh name="mesh549538436_11" geometry={nodes.mesh549538436_11.geometry} material={textureMaterial} />
        <mesh name="mesh549538436_12" geometry={nodes.mesh549538436_12.geometry} material={textureMaterial} />
        <mesh name="mesh549538436_13" geometry={nodes.mesh549538436_13.geometry} material={textureMaterial} />
        <mesh name="mesh549538436_14" geometry={nodes.mesh549538436_14.geometry} material={textureMaterial} />
        <mesh name="mesh549538436_15" geometry={nodes.mesh549538436_15.geometry} material={textureMaterial} />
      </group>
      <mesh name="ComputerMouse_mesh" geometry={nodes.ComputerMouse_mesh.geometry} material={textureMaterial} position={[0.986, 0.742, 0.06]} rotation={[0, 0.899, 0]} />
      <mesh name="Keyboard1" geometry={nodes.Keyboard1.geometry} material={textureMaterial} position={[1.324, 0.744, -0.327]} rotation={[Math.PI, -1.341, Math.PI]} />
      <group name="group646054588" position={[1.499, 0.755, -0.697]} rotation={[-1.623, -0.045, 0.718]}>
        <mesh name="mesh646054588" geometry={nodes.mesh646054588.geometry} material={textureMaterial} />
        <mesh name="mesh646054588_1" geometry={nodes.mesh646054588_1.geometry} material={textureMaterial} />
        <mesh name="mesh646054588_2" geometry={nodes.mesh646054588_2.geometry} material={textureMaterial} />
        <mesh name="mesh646054588_3" geometry={nodes.mesh646054588_3.geometry} material={textureMaterial} />
        <mesh name="mesh646054588_4" geometry={nodes.mesh646054588_4.geometry} material={textureMaterial} />
        <mesh name="mesh646054588_5" geometry={nodes.mesh646054588_5.geometry} material={textureMaterial} />
      </group>
      <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={textureMaterial} position={[-0.734, 0, 0]} rotation={[0, -1.571, 0]} />
      <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={textureMaterial} />
      <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={textureMaterial} />
      <mesh name="Plane_3" geometry={nodes.Plane_3.geometry} material={textureMaterial} />
    </group>
  )
}

useGLTF.preload('models/scene.gltf')
