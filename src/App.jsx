import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      
      {/* Sections wrapped with Element for smooth scrolling */}
      <Element name="home-section">
        <Home />
      </Element>

      <Element name="projects-section">
        <Projects />
      </Element>

      <Element name="skills-section">
        <Skills />
      </Element>

      <Element name="contact-section">
        <Contact />
      </Element>

      
      <Element name="About-section">
        <About />
      </Element>
    </>
  );
}

export default App;
