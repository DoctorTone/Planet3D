import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Box />
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
}

export default App;
