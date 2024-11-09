import { SCENE } from "../state/Config";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight
        intensity={SCENE.pointLightIntensity}
        decay={SCENE.pointLightDecay}
        distance={SCENE.pointLightDistance}
        position={SCENE.pointLightPosition}
      />
    </>
  );
};

export default Lights;
