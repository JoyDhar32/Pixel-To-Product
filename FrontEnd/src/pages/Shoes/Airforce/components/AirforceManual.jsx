import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import * as THREE from "three";
import {
  useGLTF,
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import Download from "/images/download.png";
import Swap from "/images/swap.png";
import ColorIcon from "/images/swatch.png";
import { Link, useNavigate } from "react-router-dom";



export function Model(props) {
    const { nodes, materials } = useGLTF('/models/nike_tc_7900_sail.glb')
    return (
      <group {...props} dispose={null}>
        <group scale={0.108}>
            {/* working */}
          <mesh geometry={nodes.Object_17.geometry} material={materials.material_grund} material-color="red" /> 
          {/* working */}
          <mesh geometry={nodes.Object_18.geometry} material={materials.nike_logga} material-color="blue"/>
{/* working */}
          <mesh geometry={nodes.Object_19.geometry} material={materials.baksida_logga} material-color="green"/>
{/* working */}
          <mesh geometry={nodes.Object_20.geometry} material={materials.framsida} material-color="purple"  />
{/* working */}
          <mesh geometry={nodes.Object_21.geometry} material={materials.verdel}  material-color="yellow"/>

          <mesh geometry={nodes.Object_22.geometry} material={materials.framsida_vre} material-color="gray" />
        </group>
        <group scale={0.108}>
          <mesh geometry={nodes.Object_24.geometry} material={materials.sko_sula_underdel} material-color="red" />

          <mesh geometry={nodes.Object_25.geometry} material={materials.sko_sula_sida} material-color="red"/>

          <mesh geometry={nodes.Object_26.geometry} material={materials.sko_sula_framifrn} material-color="green"/>
        </group>
        <mesh geometry={nodes.Object_5.geometry} material={materials.metall_svart} material-color="black" position={[0.067, 0.044, -0.048]} rotation={[-3.008, -0.005, -2.218]} scale={[-0.01, 0.01, 0.01]} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Material.006']} scale={[0.11, 0.108, 0.108]} material-color="red"/>
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.004']} material-color="red"/>
        <mesh geometry={nodes.Object_11.geometry} material={materials['Material.001']} scale={0.108}material-color="red" />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Material} material-color="blue" scale={0.108} />
        <mesh geometry={nodes.Object_15.geometry} material={materials['Material.003']} position={[0.017, 0.116, -0.112]} rotation={[0.045, -0.145, 0.007]} scale={[0.108, 0.108, 0.103]} material-color="red"/>
        <mesh geometry={nodes.Object_28.geometry} material={materials.sula_insida} scale={[0.11, 0.108, 0.108]}material-color="red" />
      </group>
    )
  }






const AirforceManual = () => {



    const [canvasReady, setCanvasReady] = useState(false);

    const [directionalLightColor, setDirectionalLightColor] = useState("#ffffff");

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);


  return (

<>
<div className="app transition-all ease-in"
        // style={{ backgroundColor: backgroundColor }}
      >
        <Canvas className="relative top-[-70px] w-full h-full"
          concurrent
          pixelRatio={[1, 1.5]}
          camera={{
            position: isMobile ? [0, 0, 2] : [0, 0.4, 0.5],
            // ref: cameraRef,
          }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true; // Enable shadow maps
            gl.shadowMap.type = THREE.PCFSoftShadowMap; // Optional: use soft shadows
          }}
        //   ref={canvasRef}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <spotLight
              intensity={0.3}
              angle={0.1}
              penumbra={1}
              position={[5, 25, 20]}
            />
            <Environment files="/GLB/royal_esplanade_1k.hdr" />
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, , 0.2]}
              opacity={0.75}
              width={10}
              height={0}
              blur={1.5}
              far={20}
            />

            <directionalLight
              color={directionalLightColor} // White color for natural daylight
              intensity={1} // Moderate intensity for ample illumination
              position={[10, 10, 0]} // Direction pointing towards the center of the screen (assuming the camera is looking down the negative z-axis)
              castShadow // Enable shadow casting
            />
            <Model />
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
                autoRotate={true}
              autoRotateSpeed={1}
              minDistance={0.5} maxDistance={1} 
            />
          </Suspense>
        </Canvas>
        </div>
</>

  )
}

export default AirforceManual