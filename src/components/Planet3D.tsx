import { Planet } from "../models/Planet";
import { PlanetText } from "../models/PlanetText";

const Planet3D = (props: JSX.IntrinsicElements["group"]) => {
  return (
    <>
      <group {...props}>
        <Planet />
        <PlanetText />
      </group>
    </>
  );
};

export default Planet3D;
