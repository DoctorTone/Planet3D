import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Landing />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
