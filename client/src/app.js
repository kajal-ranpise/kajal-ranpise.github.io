import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Change here
// import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Change here
import Header from "./components/header";
import Footer from "./components/footer";
import Profile from "./components/profile";
import ProjectDetails from "./components/project-details";
import About from "./components/about";
import Resume from "./components/resume";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";

// Import JS for vendors
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import GLightbox from "glightbox";
import Swiper from "swiper";

function App() {
  useEffect(() => {
    AOS.init();
    GLightbox();
    new Swiper(".swiper", { loop: true }); // example init
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <main className="flex-grow-1">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
