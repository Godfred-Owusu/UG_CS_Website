import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../src/Pages/Nav/Nav";
import Home from "../src/Pages/Home/Home";
import Contact from "../src/Pages/Contact/Contact";
import About from "../src/Pages/About/About";
import Project from "../src/Pages/Project/Project";
import Msc from "../src/Pages/Msc/Msc";
import Requirement from "../src/Pages/Requirement/Requirement";
import Service from "../src/Pages/Service/Service";
import Alumni from "../src/Pages/Alumni/Alumni";
import UndergradCourse from "../src/Pages/UndergradCourse/UndergradCourse";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/msc" element={<Msc />} />
        <Route path="/requirement" element={<Requirement />} />
        <Route path="/service" element={<Service />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/undergradCourse" element={<UndergradCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
