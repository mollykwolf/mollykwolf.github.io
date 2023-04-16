import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import ProjectDisplay from "./pages/ProjectDisplay"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  ) 
}


export default App