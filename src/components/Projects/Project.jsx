import React from 'react';
import './Project.css';
function Project() {
  return (
    <div className='main' style={{backgroundColor:'blanchedalmond'}}>
    <div className='container'>
        <h1>MY PROJECTS</h1>
<div className="card text-center">
  <div className="card-header">
    Featured Website
  </div>
  <div className="card-body">
    <h5 className="card-title">Portfolio Website</h5>
    <p className="card-text">I make this portfolio website using Html, Css, Bootstrap and React Js </p>
    <a href="https://aviralportfolioo.netlify.app/" className="btn btn-primary"  target="_blank" 
   rel="noopener noreferrer"> click to see website</a>
  </div>
  <div className="card-footer text-body-secondary">
    
  </div>
</div>

<div className="card text-center">
  <div className="card-header">
    Featured Website
  </div>
  <div className="card-body">
    <h5 className="card-title">YOG CENTRE WEBSITE</h5>
    <p className="card-text">I created  this website using Html, Css, Bootstrap and Sheetdb forms</p>
    <a href="https://yogcentre.netlify.app/" className="btn btn-primary" target="_blank"  rel="noopener noreferrer" >click to see website</a>
  </div>
  <div className="card-footer text-body-secondary">
    
  </div>
</div>
    </div>
    </div>
  )
}

export default Project