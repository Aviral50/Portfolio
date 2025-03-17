import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">AVIRAL MISHRA</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link to="home-section" className="nav-link" smooth={true} duration={500}>HOME</Link></li>
            <li className="nav-item"><Link to="projects-section" className="nav-link" smooth={true} duration={500}>PROJECTS</Link></li>
            <li className="nav-item"><Link to="contact-section" className="nav-link" smooth={true} duration={500}>CONTACT</Link></li>
            <li className="nav-item"><Link to="skills-section" className="nav-link" smooth={true} duration={500}>SKILLS</Link></li>
            <li className="nav-item"><Link to="About-section" className="nav-link" smooth={true} duration={500}>ABOUT</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
