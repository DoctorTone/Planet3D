import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SCENE } from "../state/Config";
import Lights from "../components/Lights";
import Planet3D from "../components/Planet3D";
import Text from "../UI/Text";

const INTERACTIVE = false;

const Landing = () => {
  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition, fov: SCENE.FOV }}>
        <Lights />
        <Planet3D rotation-z={Math.PI / 16} />
        <OrbitControls
          makeDefault
          enablePan={INTERACTIVE}
          enableRotate={INTERACTIVE}
          enableZoom={INTERACTIVE}
        />
      </Canvas>
      <Text />
    </>
  );
};

export default Landing;
