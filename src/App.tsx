import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import MainPage from "./Pages/MainPage";
import Frameworks from "./Pages/Frameworks";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Landing />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/frameworks" element={<Frameworks />} />
    </Routes>
  );
}

export default App;
