import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { SCENE } from "./state/Config";
import Lights from "./components/Lights";

function App() {
  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition, fov: SCENE.FOV }}>
        <Lights />
        <Box>
          <meshStandardMaterial color="hotpink" />
        </Box>
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
}

export default App;
