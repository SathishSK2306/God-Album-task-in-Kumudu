import React from "react";
import { FrameProvider } from "./context/FrameContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./pages/Navbar";
import DimensionSection from "./pages/Dimension";
import FrameTypeSection from "./pages/Frame";
import GodsSection from "./pages/Gods";
import Finish from "./pages/Finish";
import Acess from "./Acess";

const App = () => {
  return (
    <FrameProvider>
      <Router>
        <Navbar />
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, background: "#f6f7fb", minHeight: "100vh" }}>
            <Routes>
              <Route path="/" element={<Navigate to="/dimensions" />} />
              <Route path="/dimensions" element={<DimensionSection />} />
              <Route path="/frame" element={<FrameTypeSection />} />
              <Route path="/gods" element={<GodsSection />} />
              <Route path="/finish" element={<Finish />} />
              <Route path="/access" element={<Acess />} />
            </Routes>
          </div>
        </div>
      </Router>
    </FrameProvider>
  );
};

export default App;
