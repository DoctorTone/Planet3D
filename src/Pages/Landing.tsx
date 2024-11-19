import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SCENE } from "../state/Config";
import Lights from "../components/Lights";
import Planet3D from "../components/Planet3D";
import Text from "../UI/Text";
import Logo from "../components/Logo";
import InfoModal from "../modals/InfoModal";

const INTERACTIVE = false;

const Landing = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
      <Logo onClick={handleOpenModal} />
      <InfoModal open={openModal} handleClose={handleCloseModal} />
    </>
  );
};

export default Landing;
