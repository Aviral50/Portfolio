import React from 'react';
import css from '../Skills/css-3.png';
import html from '../Skills/html.png';
import js from '../Skills/js.png';
import structure from '../Skills/structure.png';
import './skills.css';
import { Element } from 'react-scroll';

function Skills() {
  return (
    <Element name="skills-section" className="skills">
      <div style={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#f9f9f9' , }}>
        <h1 style={{ marginBottom: '30px' }}>MY SKILLS</h1>
        
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            gap: '20px',
            maxWidth: '800px',
            margin: 'auto'
          }}
        >
          <img 
            src={css} 
            className="skill-icon" 
            alt="CSS Logo" 
            style={{ height: '120px', width: '120px' }} 
          />
          <img 
            src={html} 
            className="skill-icon" 
            alt="HTML Logo" 
            style={{ height: '120px', width: '120px' }} 
          />
          <img 
            src={js} 
            className="skill-icon" 
            alt="JavaScript Logo" 
            style={{ height: '120px', width: '120px' }} 
          />
          <img 
            src={structure} 
            className="skill-icon" 
            alt="Structure Icon" 
            style={{ height: '120px', width: '120px' }} 
          />
        </div>
      </div>
    </Element>
  );
}

export default Skills;
