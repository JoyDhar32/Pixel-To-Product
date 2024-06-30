import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "../style.css";
import state from "../config/voltioHelper";
import Draggable from "react-draggable";

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
  const [productName, setProductName] = useState("Customized_Nike_Air_Force");
  const [productPrice, setProductPrice] = useState(199);
  const [canvasReady, setCanvasReady] = useState(false);
  const [grund, setgrund] = useState("#61000A");
  const [nike_logga, setnike_logga] = useState("#000080");
  const [baksida_logga, setbaksida_logga] = useState("#6D0C17");
  const [framsida, setframsida] = useState("#D2B48C");
  const [verdel, setverdel] = useState("#ADD8E6");
  const [framsida_vre, setframsida_vre] = useState("#654321");
  const [sko_sula_underdel, setsko_sula_underdel] = useState("#556B2F");
  const [sko_sula_sida, setsko_sula_sida] = useState("#FFD700");
  const [sko_sula_framifrn, setsko_sula_framifrn] = useState("#61000A");
  const [metall_svart, setmetall_svart] = useState("#000080");
  const [Material_006, setmaterial_006] = useState("#6D0C17");
  const [Material_004, setmaterial_004] = useState("#D2B48C");
  const [Material_001, setmaterial_001] = useState("#ADD8E6");
  const [main_Material, setmain_Material] = useState("#654321");
  const [material_003, setmaterial_003] = useState("#556B2F");
  const [sula_insida, setsula_insida] = useState("#FFD700");
  const [shoeSize, setShoeSize] = useState(40);
  const [shoeQty, setShoeQty] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState(state.background);
  const [directionalLightColor, setDirectionalLightColor] = useState("#ffffff");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const navigate = useNavigate();

  // useRef to get the value from the input field

  const grundRef = useRef();
  const nike_loggaRef = useRef();
  const baksida_loggaRef = useRef();
  const framsidaRef = useRef();
  const verdelRef = useRef();
  const framsida_vreRef = useRef();
  const sko_sula_underdelRef = useRef();
  const sko_sula_sidaRef = useRef();
  const sko_sula_framifrnRef = useRef();
  const metall_svartRef = useRef();
  const material_006Ref = useRef();
  const material_004Ref = useRef();
  const material_001Ref = useRef();
  const main_MaterialRef = useRef();
  const material_003Ref = useRef();
  const sula_insidaRef = useRef();
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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const downloadCanvas = (e) => {
    e.preventDefault();
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
    document.body.style.cursor = `auto`;
    const data = {
      grund: grund,
      nike_logga: nike_logga,
      baksida_logga: baksida_logga,
      framsida: framsida,
      verdel: verdel,
      framsida_vre: framsida_vre,
      sko_sula_underdel: sko_sula_underdel,
      sko_sula_sida: sko_sula_sida,
      sko_sula_framifrn: sko_sula_framifrn,
      metall_svart: metall_svart,
      Material_006: Material_006,
      Material_004: Material_004,
      Material_001: Material_001,
      main_Material: main_Material,
      material_003: material_003,
      sula_insida: sula_insida,
      shoeSize: shoeSize,
      shoeQty: shoeQty,
      productName: productName,
      productPrice: productPrice*shoeQty,
    };
    console.log(data);
    navigate("/shipping", { state: data });
  };

  return (
    <>
      <main
        className="app transition-all ease-in commoncanvas"
        style={{ backgroundColor: state.background }}
      >
        <Canvas  className="relative top-[-70px] w-full h-full"
          id="shoes_canvas"
          concurrent
          pixelRatio={[1, 1.5]}
          camera={{
            position: isMobile ? [0, 0, 2] : [0, 0.4, 0.5],
            ref: cameraRef,
          }}
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
            <AutoModel
              setgrund={setgrund}
              setnike_logga={setnike_logga}
              setbaksida_logga={setbaksida_logga}
              setframsida={setframsida}
              setverdel={setverdel}
              setframsida_vre={setframsida_vre}
              setsko_sula_underdel={setsko_sula_underdel}
              setsko_sula_sida={setsko_sula_sida}
              setsko_sula_framifrn={setsko_sula_framifrn}
              setmetall_svart={setmetall_svart}
              setmaterial_006={setmaterial_006}
              setmaterial_004={setmaterial_004}
              setmaterial_001={setmaterial_001}
              setmain_Material={setmain_Material}
              setmaterial_003={setmaterial_003}
              setsula_insida={setsula_insida}
            />
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
          <OrbitControls
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
                autoRotate={true}
              autoRotateSpeed={1}
              minDistance={0.5} maxDistance={1} 
            />
        </Canvas>
        <Picker />

        <form>   
          <Draggable>
        <div className="fixed top-2/3 left-5">
            <nav className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-purle-500 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border ">
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
                  <option value="" disabled>
                    Size
                  </option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="6.5">6.5</option>
                <option value="7">7</option>
                <option value="7.5">7.5</option>
                <option value="8">8</option>
                <option value="8.5">8.5</option>
                <option value="9">9</option>
                <option value="9.5">9.5</option>
                <option value="10">10</option>
                <option value="10.5">10.5</option>
                <option value="11">11</option>
                <option value="11.5">11.5</option>
                <option value="12">12</option>
                <option value="12.5">12.5</option>
                <option value="13">13</option>
                </select>
              </div>

              <hr className="dark:border-gray-700/60" />

              <div className="flex flex-col items-center min-h-12 w-16 ">
                <select
                  ref={shoeQtyRef}
                  name="size"
                  id="size"
                  value={shoeQty}
                  onChange={(e) => setShoeQty(e.target.value)}
                  className="block w-full py-2 px-1 rounded-xl shadow-sm focus:outline-none focus:border-indigo-900 focus:ring focus:ring-indigo-900  bg-white text-black"
                >
                  <option value="" selected disabled>
                    Pair
                  </option>
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

              <hr className="dark:border-gray-700/60" />

              <button
                onClick={downloadCanvas}
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

              {/* <hr className="dark:border-gray-700/60" />
              <button
                onClick={changeView}
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
              </button> */}

              <hr className="dark:border-gray-700/60" />
              <button
                type="submit"
                onClick={shoesData}
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
          </Draggable>
        </form>
      </main>
    </>
  );
};

export default FloatingShoe;
