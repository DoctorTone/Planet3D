import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import MainPage from "./Pages/MainPage";
import Frameworks from "./Pages/Frameworks";
import Engines from "./Pages/Engines";
import Modellers from "./Pages/Modellers";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Landing />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/frameworks" element={<Frameworks />} />
      <Route path="/engines" element={<Engines />} />
      <Route path="/modellers" element={<Modellers />} />
    </Routes>
  );
}

export default App;
