import { Routes, Route } from "react-router-dom";
// import "./App.css";

import Home from "./pages/Home";
import Partner from "./pages/Partner";
import AboutUs from "./pages/About";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
    </>
  );
};

export default App;
