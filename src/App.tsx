import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { SCENE } from "./state/Config";
import Lights from "./components/Lights";
import { Planet } from "./models/Planet";
import { PlanetText } from "./models/PlanetText";

function App() {
  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition, fov: SCENE.FOV }}>
        <Lights />
        <Planet />
        <PlanetText />
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
}

export default App;
