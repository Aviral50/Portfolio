import React from 'react';
import './Project.css';
function Project() {
  return (
    <div className='main' style={{backgroundColor:'blanchedalmond'}}>
    <div className='container'>
        <h1>MY PROJECTS</h1>
<div class="card text-center">
  <div class="card-header">
    Featured Website
  </div>
  <div class="card-body">
    <h5 class="card-title">Portfolio Website</h5>
    <p class="card-text">I make this portfolio website using Html, Css, Bootstrap and React Js </p>
    <a href="" class="btn btn-primary">click to see website</a>
  </div>
  <div class="card-footer text-body-secondary">
    
  </div>
</div>

<div class="card text-center">
  <div class="card-header">
    Featured Website
  </div>
  <div class="card-body">
    <h5 class="card-title">YOG CENTRE WEBSITE</h5>
    <p class="card-text">I created  this website using Html, Css, Bootstrap and Sheetdb forms</p>
    <a href="http://yogcentrewebsite.netlify.app/" class="btn btn-primary">click to see website</a>
  </div>
  <div class="card-footer text-body-secondary">
    
  </div>
</div>
    </div>
    </div>
  )
}

export default Project