import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import state from "../config/voltioHelper";
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";

const AutoModel = ({setgrund, setnike_logga, setbaksida_logga, setframsida, setverdel, setframsida_vre, setsko_sula_underdel, setsko_sula_sida,setsko_sula_framifrn,setmetall_svart,setmaterial_006,setmaterial_004,setmaterial_001,setmain_Material,setmaterial_003,setsula_insida}) => {
  const ref = useRef();
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/models/nike_tc_7900_sail.glb')
  useFrame((state) => {
    // const t = state.clock.getElapsedTime();
    // ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
    // ref.current.rotation.x = Math.cos(t / 4) / 8;
    // ref.current.rotation.y = Math.sin(t / 4) / 8;
    // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  // Cursor showing current color
  const [hovered, set] = useState(null);
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    setgrund(snap.items.material_grund);
    setnike_logga(snap.items.stripes); 
    setbaksida_logga(snap.items.nike_logga);
    setframsida(snap.items.baksida_logga);
    setverdel(snap.items.framsida);
    setframsida_vre(snap.items.framsida_vre);
    setsko_sula_underdel(snap.items.sko_sula_underdel);
    setsko_sula_sida(snap.items.sko_sula_sida);
    setsko_sula_framifrn(snap.items.sko_sula_framifrn);
    setmetall_svart(snap.items.metall_svart); 
    setmaterial_006(snap.items["Material.006"]);
    setmaterial_004(snap.items["Material.004"]);
    setmaterial_001(snap.items["Material.001"]);
    setmain_Material(snap.items.Material);
    setmaterial_003(snap.items["Material.003"]);
    setsula_insida(snap.items.sula_insida);
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
      hovered ? cursor : auto
    )}'), auto`;
  }, [hovered, snap.items]);

  // Using the GLTFJSX output here to wire in app-state and hook up events
  return (
    <group
      ref={ref}
      dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}
    >
             <group scale={0.108}>
            {/* working */}
          <mesh geometry={nodes.Object_17.geometry} material={materials.material_grund} material-color={snap.items.material_grund}/> 
          {/* working */}
          <mesh geometry={nodes.Object_18.geometry} material={materials.nike_logga} material-color={snap.items.nike_logga}/>
{/* working */}
          <mesh geometry={nodes.Object_19.geometry} material={materials.baksida_logga} material-color={snap.items.baksida_logga}/>
{/* working */}
          <mesh geometry={nodes.Object_20.geometry} material={materials.framsida} material-color={snap.items.framsida}  />
{/* working */}
          <mesh geometry={nodes.Object_21.geometry} material={materials.verdel}  material-color={snap.items.verdel}/>

          <mesh geometry={nodes.Object_22.geometry} material={materials.framsida_vre} material-color={snap.items.framsida_vre} />
        </group>
        <group scale={0.108}>
          <mesh geometry={nodes.Object_24.geometry} material={materials.sko_sula_underdel} material-color={snap.items.sko_sula_underdel} />

          <mesh geometry={nodes.Object_25.geometry} material={materials.sko_sula_sida} material-color={snap.items.sko_sula_sida}/>

          <mesh geometry={nodes.Object_26.geometry} material={materials.sko_sula_framifrn} material-color={snap.items.sko_sula_framifrn}/>
        </group>
        <mesh geometry={nodes.Object_5.geometry} material={materials.metall_svart} material-color={snap.items.metall_svart} position={[0.067, 0.044, -0.048]} rotation={[-3.008, -0.005, -2.218]} scale={[-0.01, 0.01, 0.01]} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Material.006']} scale={[0.11, 0.108, 0.108]} material-color={snap.items["Material.006"]}/>
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.004']} material-color={snap.items["Material.004"]}/>

        <mesh geometry={nodes.Object_11.geometry} material={materials['Material.001']} scale={0.108} material-color={snap.items["Material.001"]}/>
        <mesh geometry={nodes.Object_13.geometry} material={materials.Material} material-color={snap.items.Material} scale={0.108} />
        
        <mesh geometry={nodes.Object_15.geometry} material={materials['Material.003']} position={[0.017, 0.116, -0.112]} rotation={[0.045, -0.145, 0.007]} scale={[0.108, 0.108, 0.103]} material-color={snap.items["Material.003"]}/>

        <mesh geometry={nodes.Object_28.geometry} material={materials.sula_insida} scale={[0.11, 0.108, 0.108]} material-color={snap.items.sula_insida} />
     
    </group>
  );
};

export default AutoModel;
