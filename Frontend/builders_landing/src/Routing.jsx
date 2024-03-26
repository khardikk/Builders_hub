import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Projects from "./Projects";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default Routing;