import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "../style.css";
import state from "../config/voltioHelper";

import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { HexColorPicker } from "react-colorful";
import { proxy, useSnapshot } from "valtio";
import { exp } from "maath/easing";
import Download from "/images/download.png";
import { Link, useNavigate } from "react-router-dom";
import AutoModel from "./AutoModel";
import OrderNow from "/images/orderNow.png";
import Swap from "/images/swap.png";


function Picker() {
    const snap = useSnapshot(state);

    return (
      <div style={{ display: snap.current ? "block" : "none" }}>
        <HexColorPicker
          className="picker"
          color={snap.items[snap.current]}
          onChange={(color) => (state.items[snap.current] = color)}
        />
        <h1>{snap.current}</h1>
      </div>
    );
  }

const changeView = () => {
  document.body.style.cursor = `auto`;
  state.isAuto = false;

    };
        
const FloatingShoe = () => {
 
  const canvasRefs = useRef(null);
  const [productName, setProductName] = useState("Customized Casual Shoes");
  const [productPrice, setProductPrice] = useState(99);
  const [canvasReady, setCanvasReady] = useState(false);
  const [mesh, setMesh] = useState("#ffffff ");
  const [stripes, setStripes] = useState("#000080");
  const [sole, setSole] = useState("#000000");
  const [caps, setCaps] = useState("#D2B48C");
  const [inner, setInner] = useState("#ADD8E6");
  const [laces, setLaces] = useState("#654321");
  const [band, setBand] = useState("#556B2F");
  const [patch, setPatch] = useState("#FFD700");
  const [shoeSize, setShoeSize] = useState("");
  const [shoeQty, setShoeQty] = useState(1)
  const [backgroundColor, setBackgroundColor] = useState(state.background);
  const [directionalLightColor, setDirectionalLightColor] = useState("#ffffff");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const navigate = useNavigate();

  // useRef to get the value from the input field

  const meshRef = useRef();
  const stripesRef = useRef();
  const soleRef = useRef();
  const capsRef = useRef();
  const innerRef = useRef();
  const lacesRef = useRef();
  const bandRef = useRef();
  const patchRef = useRef();
  const directionalLightColorRef = useRef();
  const shoeSizeRef = useRef();
  const shoeQtyRef = useRef();
  const backgroundColorRef = useRef();
  const canvasRef = useRef();
  const cameraRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


    const downloadCanvas = () => {
      if (!canvasReady) {
        console.error("Canvas is not ready yet");
        return;
      }
  
      const canvas = canvasRef.current;
      const dataURL = canvas.toDataURL();
      const link = document.createElement("a");
  
      link.href = dataURL;
      link.download = "canvas.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    const shoesData = (e) => {
      e.preventDefault();
      const data = {
        mesh: mesh,
        stripes: stripes,
        sole: sole,
        caps: caps,
        inner: inner,
        laces: laces,
        band: band,
        patch: patch,
        shoeSize: shoeSize,
        shoeQty: shoeQty,
        productName: productName,
        productPrice: productPrice,
      };
      navigate('/shipping', { state: data });
    };

    
    return (
      <>
        <main className="app transition-all ease-in commoncanvas" style={{backgroundColor:state.background}}>
          <Canvas id="shoes_canvas"
            concurrent
            pixelRatio={[1, 1.5]}
            camera={{ position: isMobile ? [0, 0, 2] : [0, 0, 1.5], ref: cameraRef }}
            onCreated={() => setCanvasReady(true)} 
            ref={canvasRef}
            gl={{ preserveDrawingBuffer: true }} 
          >
            <ambientLight intensity={0.8} />
            <spotLight
              intensity={0.3}
              angle={0.1}
              penumbra={1}
              position={[5, 25, 20]}
            />
            <Suspense fallback={null}>
              <AutoModel setMesh={setMesh} setStripes={setStripes} setSole={setSole}  setCaps={setCaps}  setInner ={setInner} setLaces ={setLaces}  setBand={setBand} setPatch ={setPatch}                  />
              <Environment files="/GLB/royal_esplanade_1k.hdr" />
              <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0, -1, 0]}
                opacity={0.75}
                width={10}
                height={10}
                blur={1.5}
                far={9}
              />
            </Suspense>
            {/* <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={true} /> */}
            <OrbitControls />
          </Canvas>
          <Picker />
  
  
  
          <form onSubmit={shoesData}>
  
          <div className="relative bg-red-500 dark:bg-red-900 w-screen h-screen pattern">
            <nav className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-purle-500 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
            <div className="flex flex-col items-center min-h-12 w-16 ">
    <select
      ref={shoeSizeRef}
      name="size"
      id="size"
      value={shoeSize}
      onChange={(e) => setShoeSize(e.target.value)}
      className="block w-full py-2 px-1 rounded-xl shadow-sm focus:outline-none focus:border-indigo-900 focus:ring focus:ring-indigo-900 bg-white text-black"
    required
    >
      <option value="" disabled>Size</option>
      <option value="40">40</option>
      <option value="41">41</option>
      <option value="42">42</option>
      <option value="43">43</option>
      <option value="44">44</option>
    </select>
  </div>
  
  
  
  <div className="flex flex-col items-center min-h-12 w-16 ">
    <select
      ref={shoeQtyRef}
      name="size"
      id="size"
      value={shoeQty}
      onChange={(e) => setShoeQty(e.target.value)}
      className="block w-full py-2 px-1 rounded-xl shadow-sm focus:outline-none focus:border-indigo-900 focus:ring focus:ring-indigo-900  bg-white text-black"
    >
      <option value="" selected disabled>Pair</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
  
      
    </select>
  </div>
  
  
              <button onClick={downloadCanvas}
                
                className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800"
              >
              <img
                  src={Download}
                  alt="download_image"
                  className="w-3/5 h-3/5 object-contain"
                />
  
                <small className="text-center text-xs font-medium">
                  Download
                </small>
              </button>
  
              <button onClick={changeView}
                
                className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800"
              >
              <img
                  src={Swap}
                  alt="Swap_image"
                  className="w-3/5 h-3/5 object-contain"
                />
  
                <small className="text-center text-xs font-medium">
                  Manual
                </small>
              </button>
              <Link 
                href="#settings"
                className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 shrink-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
  
                <small className="text-center text-xs font-medium">
                  {" "}
                  Settings{" "}
                </small>
              </Link>
  
              <hr className="dark:border-gray-700/60" />
              <button type="submit"
            className="flex aspect-square min-h-16 w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800"
          >
            <img
              src={OrderNow}
              alt="Order Now"
              className="w-full h-fit object-contain"
            />
  
          </button>
            </nav>   
          </div>
  
    </form>

    
        </main>
      </>
    );
}

export default FloatingShoe