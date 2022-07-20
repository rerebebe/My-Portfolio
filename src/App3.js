import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./Pages/Home1";
import App2 from "./App2.js";
import ErrorPage from "./Pages/ErrorPage";
import Nav from "./components/Nav";
import App from "./App.js";
import ProjectsGallery from "./components/MyWork/ProjectsGallery";
import Home from "./components/Home";
import "./App.css";

function App3() {
  return (
    <div>
      <Router>
        <nav>{<Nav />}</nav>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/my-work" element={<ProjectsGallery />} />
          <Route path="/my-work/Quiz" element={<App />} />
          <Route path="/my-work/to-do" element={<App2 />} />
          <Route path="/my-work/shortner" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App3;
