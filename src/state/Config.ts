import { Vector3 } from "three";

const SCENE = {
  cameraPosition: new Vector3(0, 0, 12.5),
  FOV: 60,
  ambientIntensity: 0.5,
  pointLightIntensity: 10,
  pointLightDecay: 2,
  pointLightDistance: 0,
  pointLightPosition: new Vector3(0, 3, 7),
  ROTATION_SPEED: 0.25,
};

export { SCENE };
