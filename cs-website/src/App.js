import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../src/Components/Nav/Nav";
import Home from "../src/Components/Home/Home";
import Contact from "../src/Components/Contact/Contact";
import About from "../src/Components/About/About";
import Project from "../src/Components/Project/Project";
import Msc from "../src/Components/Msc/Msc";
import Requirement from "../src/Components/Requirement/Requirement";
import Service from "../src/Components/Service/Service";
import Alumni from "../src/Components/Alumni/Alumni";
import UndergradCourse from "../src/Components/UndergradCourse/UndergradCourse";

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
