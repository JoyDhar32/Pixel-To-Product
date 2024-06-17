import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "./components/Experience";
import { Overlay } from "./components/Overlay";

function index() {
  return (
    <>
    <div className="app transition-all ease-in">
      <Leva hidden />
      <Overlay />
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
      </div>
    </>
  );
}

export default index;
