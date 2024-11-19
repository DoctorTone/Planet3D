import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import MainPage from "./Pages/MainPage";
import Frameworks from "./Pages/Frameworks";
import Engines from "./Pages/Engines";
import Modellers from "./Pages/Modellers";
import Resources from "./Pages/Resources";
import Models from "./Pages/Models";
import Textures from "./Pages/Textures";
import NoCode from "./Pages/NoCode";
import ComingSoon from "./Pages/ComingSoon";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Landing />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/frameworks" element={<Frameworks />} />
      <Route path="/engines" element={<Engines />} />
      <Route path="/modellers" element={<Modellers />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/models" element={<Models />} />
      <Route path="/textures" element={<Textures />} />
      <Route path="/nocode" element={<NoCode />} />
      <Route path="/soon" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;
