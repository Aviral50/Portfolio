import React from "react";
import {Element} from 'react-scroll';
import './About.css';

function About(){
    return(
<Element name="About-section">
    <div className="main-container">
        <h1>About Me</h1>
        <h3>Education</h3>
        <p> <h6>Master of Computer Applications</h6>I completed my MCA from Feroze Gandhi Institute of Engineering and Technology, Raebareli, India.</p>
        <p><h6>Bachelor of Science</h6> I completed my BSC from Chhatrapati Shahu Ji Maharaj University, Kanpur,Uttar Pradesh, India</p>
        <h3>Skills</h3>  
        <p>Knowledge of Html Css Javascript Bootstrap and React JS</p>
        <h3>Interest</h3>  
        <p>Interest in making best user-freindly websites using my frontend development skills</p>
  </div>
    
</Element>    
)
}
export default About;