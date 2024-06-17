import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
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
import "../style.css";

import state from "../config/voltioHelper";
import { proxy, useSnapshot } from "valtio";
import OrderNow from "/images/orderNow.png";

const changeView = () => {
  state.isAuto = true;
};

const ShoesModel = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/GLB/shoe-draco.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.customColor.laces}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customColor.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={props.customColor.caps}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={props.customColor.inner}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customColor.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customColor.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={props.customColor.band}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={props.customColor.patch}
      />
    </group>
  );
};

const ManualShoe = () => {
  const canvasRefs = useRef(null);
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
  const [shoeQty, setShoeQty] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState(state.background);
  const [directionalLightColor, setDirectionalLightColor] = useState("#ffffff");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [productName, setProductName] = useState("Customized_Casual_Shoes");
  const [productPrice, setProductPrice] = useState(99);

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
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shoesData = (e) => {
    e.preventDefault();
    const shoesData = {
      mesh: meshRef.current.value,
      stripes: stripesRef.current.value,
      sole: soleRef.current.value,
      caps: capsRef.current.value,
      inner: innerRef.current.value,
      laces: lacesRef.current.value,
      band: bandRef.current.value,
      patch: patchRef.current.value,
      shoeSize: shoeSizeRef.current.value,
      shoeQty: shoeQtyRef.current.value,
      productName: productName,
      productPrice: productPrice*shoeQty,
    };
    navigate("/shipping", { state: shoesData });

    
  };

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

  const ClickMain = (e) => {
    e.preventDefault();
    if (meshRef.current) {
      meshRef.current.click();
    }
  };

  const ClickStripes = (e) => {
    e.preventDefault();
    if (stripesRef.current) {
      stripesRef.current.click();
    }
  };

  const ClickSole = (e) => {
    e.preventDefault();
    if (soleRef.current) {
      soleRef.current.click();
    }
  };

  const ClickCaps = (e) => {
    e.preventDefault();
    if (capsRef.current) {
      capsRef.current.click();
    }
  };

  const ClickInner = (e) => {
    e.preventDefault();
    if (innerRef.current) {
      innerRef.current.click();
    }
  };

  const ClickLaces = (e) => {
    e.preventDefault();
    if (lacesRef.current) {
      lacesRef.current.click();
    }
  };

  const ClickBand = (e) => {
    e.preventDefault();
    if (bandRef.current) {
      bandRef.current.click();
    }
  };

  const ClickPatch = (e) => {
    e.preventDefault();
    if (patchRef.current) {
      patchRef.current.click();
    }
  };

  const ClickBackgroundChange = (e) => {
    e.preventDefault();
    if (backgroundColorRef.current) {
      backgroundColorRef.current.click();
    }
  };

  return (
    <>
      <div
        className="app transition-all ease-in commoncanvas"
        style={{ backgroundColor: backgroundColor }}
      >
        <Canvas
          concurrent
          pixelRatio={[1, 1.5]}
          camera={{
            position: isMobile ? [0, 0, 2] : [0, 0, 1.5],
            ref: cameraRef,
          }}
          onCreated={() => setCanvasReady(true)}
          ref={canvasRef}
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
              position={[0, -1, 0]}
              opacity={0.75}
              width={10}
              height={10}
              blur={1.5}
              far={9}
            />

            <directionalLight
              color={directionalLightColor} // White color for natural daylight
              intensity={1} // Moderate intensity for ample illumination
              position={[10, 10, 0]} // Direction pointing towards the center of the screen (assuming the camera is looking down the negative z-axis)
              castShadow // Enable shadow casting
            />

            <ShoesModel
              customColor={{
                mesh: mesh,
                stripes: stripes,
                sole: sole,
                caps: caps,
                inner: inner,
                laces: laces,
                band: band,
                patch: patch,
              }}
            />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Left side bar */}

      {/* // Customization */}

      <form onSubmit={shoesData}>
        {isMobile ? (
          <div className="absolute top-16 overflow-y-auto max-h-[calc(100vh - 16rem)] ">
            <nav className="flex flex-wrap gap-1  min-w-[128px] border rounded-lg border-gray-200 bg-purple-500 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50">
              <button
                onClick={ClickMain}
                className="flex aspect-square min-h-12 w-12 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
              >
                <img
                  src={ColorIcon}
                  alt="Color Icon"
                  className="w-3/5 h-3/5 object-contain"
                />
                <small className="text-center text-xs font-medium">
                  {" "}
                  Main{" "}
                </small>
              </button>

              <input
                ref={meshRef}
                type="color"
                id="mesh"
                name="mesh"
                value={mesh}
                onChange={(e) => setMesh(e.target.value)}
                style={{ display: "none" }} // Hide the input field initially
              />

              {/* // Stripes */}

              <button
                onClick={ClickStripes}
                className="flex aspect-square min-h-12 w-12 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
              >
                <img
                  src={ColorIcon}
                  alt="Color Icon"
                  className="w-3/5 h-3/5 object-contain"
                />

                <small className="text-center text-xs font-medium">
                  {" "}
                  Stripes{" "}
                </small>
              </button>

              <input
                ref={stripesRef}
                type="color"
                id="stripes"
                name="stripes"
                value={stripes}
                onChange={(e) => setStripes(e.target.value)}
                style={{ display: "none" }} // Hide the input field initially
              />

              {/* // Sole */}

              <button
                onClick={ClickSole}
                className="flex aspect-square min-h-12 w-12 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
              >
                <img
                  src={ColorIcon}
                  alt="Color Icon"
                  className="w-3/5 h-3/5 object-contain"
                />

                <small className="text-center text-xs font-medium">
                  {" "}
                  Sole{" "}
                </small>
              </button>

              <input
                ref={soleRef}
                type="color"
                id="sole"
                name="sole"
                value={sole}
                onChange={(e) => setSole(e.target.value)}
                style={{ display: "none" }} // Hide the input field initially
              />

              {/* // Caps */}

              <button
                onClick={ClickCaps}
                className="flex aspect-square min-h-12 w-12 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
              >
                <img
                  src={ColorIcon}
                  alt="Color Icon"
                  className="w-3/5 h-3/5 object-contain"
                />

                <small className="text-center text-xs font-medium">
                  {" "}
                  Caps{" "}
                </small>
              </button>

              <input
                ref={capsRef}
                type="color"
                id="caps"
                name="caps"
                value={caps}
                onChange={(e) => setCaps(e.target.value)}
                style={{ display: "none" }} // Hide the input field initially
              />

              {/* // Inner */}

              <button
                onClick={ClickInner}
                className="flex aspect-square min-h-12 w-12 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
              >
                <img
                  src={ColorIcon}
                  alt="Color Icon"
                  className="w-3/5 h-3/5 object-contain"
                />

                <small className="text-center text-xs font-medium">
                  {" "}
                  Inner{" "}
                </small>
              </button>

              <input
                ref={innerRef}
                type="color"
                id="inner"
                name="inner"
                value={inner}
                onChange={(e) => setInner(e.target.value)}
                style={{ display: "none" }} // Hide the input field initially
              />

              {/* // Laces */}

              <button
                onClick={ClickLaces}
                className="flex aspect-square min-h-12 w-12 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
              >
                <img
                  src={ColorIcon}
                  alt="Color Icon"
                  className="w-3/5 h-3/5 object-contain"
                />

                <small className="text-center text-xs font-medium">
                  {" "}
                  Laces{" "}
                </small>
              </button>

              <input
                ref={lacesRef}
                type="color"
                id="laces"
                name="laces"
                value={inner}
                onChange={(e) => setLaces(e.target.value)}
                style={{ display: "none" }} // Hide the input field initially
              />

              {/* // Band */}

              <button
                onClick={ClickBand}
                className="flex aspect-square min-h-12 w-12 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
              >
                <img
                  src={ColorIcon}
                  alt="Color Icon"
                  className="w-3/5 h-3/5 object-contain"
                />

                <small className="text-center text-xs font-medium">
                  {" "}
                  Band{" "}
                </small>
              </button>

              <input
                ref={bandRef}
                type="color"
                id="band"
                name="band"
                value={band}
                onChange={(e) => setBand(e.target.value)}
                style={{ display: "none" }} // Hide the input field initially
              />

              {/* // Patch */}

              <button
                onClick={ClickPatch}
                className="flex aspect-square min-h-12 w-12 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
              >
                <img
                  src={ColorIcon}
                  alt="Color Icon"
                  className="w-3/5 h-3/5 object-contain"
                />

                <small className="text-center text-xs font-medium">
                  {" "}
                  Patch{" "}
                </small>
              </button>

              <input
                ref={patchRef}
                type="color"
                id="patch"
                name="patch"
                value={patch}
                onChange={(e) => setPatch(e.target.value)}
                style={{ display: "none" }} // Hide the input field initially
              />

              {/* // Background Color */}

              <button
                onClick={ClickBackgroundChange}
                className="flex aspect-square min-h-12 w-12 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
              >
                <img
                  src={ColorIcon}
                  alt="Color Icon"
                  className="w-3/5 h-3/5 object-contain"
                />

                <small className="text-center text-xs font-medium">BG</small>
              </button>

              <input
                ref={backgroundColorRef}
                type="color"
                id="backgroundColor"
                name="backgroundColor"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                style={{ display: "none" }} // Hide the input field initially
              />

              <button
                onClick={downloadCanvas}
                className="flex aspect-square min-h-12 w-12 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
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

              <div className="flex flex-col items-center min-h-12 w-20 ml-2">
                <select
                  ref={shoeSizeRef}
                  name="size"
                  id="size"
                  value={shoeSize}
                  onChange={(e) => setShoeSize(e.target.value)}
                  className="block w-full py-2 px-3 rounded-xl shadow-sm focus:outline-none focus:border-indigo-900 focus:ring focus:ring-indigo-900 bg-[#054fb9] text-white"
                >
                  <option value="" disabled>
                    SIZE
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

              <div className="flex flex-col items-center min-h-12 w-20 ml-2">
                <select
                  ref={shoeQtyRef}
                  name="size"
                  id="size"
                  value={shoeQty}
                  onChange={(e) => setShoeQty(e.target.value)}
                  className="block w-full py-2 px-3 rounded-xl shadow-sm focus:outline-none focus:border-indigo-900 focus:ring focus:ring-indigo-900 bg-[#054fb9] text-white "
                >
                  <option value="" disabled>
                    QTY
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

              <button
                onClick={changeView}
                className="flex aspect-square min-h-12 w-12 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800"
              >
                <img
                  src={Swap}
                  alt="Swap Mode"
                  className="w-full h-fit object-contain"
                />
              </button>

              <button
                type="submit"
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
        ) : (
          <Draggable>
            <div className="fixed top-40 left-5">
              <nav className="grid grid-cols-2 gap-4 p-1.5 min-w-[128px] border rounded-lg border-gray-200 bg-purple-500 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 overflow-y-auto max-h-[95vh]">
                <button
                  onClick={ClickMain}
                  className="flex aspect-square min-h-[16px] w-16 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
                >
                  <img
                    src={ColorIcon}
                    alt="Color Icon"
                    className="w-3/5 h-3/5 object-contain"
                  />
                  <small className="text-center text-xs font-medium">
                    {" "}
                    Main{" "}
                  </small>
                </button>

                <input
                  ref={meshRef}
                  type="color"
                  id="mesh"
                  name="mesh"
                  value={mesh}
                  onChange={(e) => setMesh(e.target.value)}
                  style={{ display: "none" }} // Hide the input field initially
                />

                {/* // Stripes */}

                <button
                  onClick={ClickStripes}
                  className="flex aspect-square min-h-[16px] w-16 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
                >
                  <img
                    src={ColorIcon}
                    alt="Color Icon"
                    className="w-3/5 h-3/5 object-contain"
                  />

                  <small className="text-center text-xs font-medium">
                    {" "}
                    Stripes{" "}
                  </small>
                </button>

                <input
                  ref={stripesRef}
                  type="color"
                  id="stripes"
                  name="stripes"
                  value={stripes}
                  onChange={(e) => setStripes(e.target.value)}
                  style={{ display: "none" }} // Hide the input field initially
                />

                {/* // Sole */}

                <button
                  onClick={ClickSole}
                  className="flex aspect-square min-h-[16px] w-16 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
                >
                  <img
                    src={ColorIcon}
                    alt="Color Icon"
                    className="w-3/5 h-3/5 object-contain"
                  />

                  <small className="text-center text-xs font-medium">
                    {" "}
                    Sole{" "}
                  </small>
                </button>

                <input
                  ref={soleRef}
                  type="color"
                  id="sole"
                  name="sole"
                  value={sole}
                  onChange={(e) => setSole(e.target.value)}
                  style={{ display: "none" }} // Hide the input field initially
                />

                {/* // Caps */}

                <button
                  onClick={ClickCaps}
                  className="flex aspect-square min-h-[16px] w-16 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
                >
                  <img
                    src={ColorIcon}
                    alt="Color Icon"
                    className="w-3/5 h-3/5 object-contain"
                  />

                  <small className="text-center text-xs font-medium">
                    {" "}
                    Caps{" "}
                  </small>
                </button>

                <input
                  ref={capsRef}
                  type="color"
                  id="caps"
                  name="caps"
                  value={caps}
                  onChange={(e) => setCaps(e.target.value)}
                  style={{ display: "none" }} // Hide the input field initially
                />

                {/* // Inner */}

                <button
                  onClick={ClickInner}
                  className="flex aspect-square min-h-[16px] w-16 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
                >
                  <img
                    src={ColorIcon}
                    alt="Color Icon"
                    className="w-3/5 h-3/5 object-contain"
                  />

                  <small className="text-center text-xs font-medium">
                    {" "}
                    Inner{" "}
                  </small>
                </button>

                <input
                  ref={innerRef}
                  type="color"
                  id="inner"
                  name="inner"
                  value={inner}
                  onChange={(e) => setInner(e.target.value)}
                  style={{ display: "none" }} // Hide the input field initially
                />

                {/* // Laces */}

                <button
                  onClick={ClickLaces}
                  className="flex aspect-square min-h-[16px] w-16 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
                >
                  <img
                    src={ColorIcon}
                    alt="Color Icon"
                    className="w-3/5 h-3/5 object-contain"
                  />

                  <small className="text-center text-xs font-medium">
                    {" "}
                    Laces{" "}
                  </small>
                </button>

                <input
                  ref={lacesRef}
                  type="color"
                  id="laces"
                  name="laces"
                  value={inner}
                  onChange={(e) => setLaces(e.target.value)}
                  style={{ display: "none" }} // Hide the input field initially
                />

                {/* // Band */}

                <button
                  onClick={ClickBand}
                  className="flex aspect-square min-h-[16px] w-16 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
                >
                  <img
                    src={ColorIcon}
                    alt="Color Icon"
                    className="w-3/5 h-3/5 object-contain"
                  />

                  <small className="text-center text-xs font-medium">
                    {" "}
                    Band{" "}
                  </small>
                </button>

                <input
                  ref={bandRef}
                  type="color"
                  id="band"
                  name="band"
                  value={band}
                  onChange={(e) => setBand(e.target.value)}
                  style={{ display: "none" }} // Hide the input field initially
                />

                {/* // Patch */}

                <button
                  onClick={ClickPatch}
                  className="flex aspect-square min-h-[16px] w-16 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
                >
                  <img
                    src={ColorIcon}
                    alt="Color Icon"
                    className="w-3/5 h-3/5 object-contain"
                  />

                  <small className="text-center text-xs font-medium">
                    {" "}
                    Patch{" "}
                  </small>
                </button>

                <input
                  ref={patchRef}
                  type="color"
                  id="patch"
                  name="patch"
                  value={patch}
                  onChange={(e) => setPatch(e.target.value)}
                  style={{ display: "none" }} // Hide the input field initially
                />

                {/* // Directional Light Color */}

                <button
                  onClick={ClickBackgroundChange}
                  className="flex aspect-square min-h-[16px] w-16 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
                >
                  <img
                    src={ColorIcon}
                    alt="Color Icon"
                    className="w-3/5 h-3/5 object-contain"
                  />

                  <small className="text-center text-xs font-medium">
                    {" "}
                    Background{" "}
                  </small>
                </button>

                <input
                  ref={backgroundColorRef}
                  type="color"
                  id="backgroundColor"
                  name="backgroundColor"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  style={{ display: "none" }} // Hide the input field initially
                />

                <button
                  onClick={downloadCanvas}
                  className="flex aspect-square min-h-[16px] w-16 flex-col items-center justify-center  rounded-md  bg-transparent text-indigo-600 dark:bg-transparent dark:text-sky-50"
                >
                  <img
                    src={Download}
                    alt="download_image"
                    className="w-3/5 h-3/5 object-contain"
                  />

                  <small className="text-center text-xs font-medium">
                    Downloads
                  </small>
                </button>

                <div className="flex flex-col items-center">
                  <select
                    ref={shoeSizeRef}
                    name="size"
                    id="size"
                    value={shoeSize}
                    onChange={(e) => setShoeSize(e.target.value)}
                    className="block w-full py-2 px-3 rounded-xl shadow-sm focus:outline-none focus:border-indigo-900 focus:ring focus:ring-indigo-900 bg-[#054fb9] text-white"
                  >
                    <option value="" disabled>
                      SIZE
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

                <div className="flex flex-col items-center">
                  <select
                    ref={shoeQtyRef}
                    name="size"
                    id="size"
                    value={shoeQty}
                    onChange={(e) => setShoeQty(e.target.value)}
                    className="block w-full py-2 px-3 rounded-xl shadow-sm focus:outline-none focus:border-indigo-900 focus:ring focus:ring-indigo-900 bg-[#054fb9] text-white "
                  >
                    <option value="" disabled>
                      QTY
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

                <button
                  onClick={changeView}
                  className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800"
                >
                  <img
                    src={Swap}
                    alt="Swap Mode"
                    className="w-full h-fit object-contain"
                  />
                </button>

                <button
                  type="submit"
                  className="flex aspect-square min-h-[32px] w-20 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800"
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
        )}
      </form>
    </>
  );
};

export default ManualShoe;
