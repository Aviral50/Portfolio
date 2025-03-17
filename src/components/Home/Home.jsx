import React from 'react'
import photo from '../Home/photo.jpg'
import '../Home/Home.css'
import {ReactTyped} from 'react-typed'
import resume from '../Home/Resume.pdf'

function Home() {
  return (
    <div className='home'>
      <div className="home-img">
        <img src={photo} style={{ height:'400px',width:'20vw', marginTop:'20px'}}/>
        </div>
        <div className="type-text">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="typed-text"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
               
              />
            </div>
            <a href={resume}> <div className="download-btn">
                My resume 
              </div>
              </a> 
       
        <div className="home-text">
          <p style={{height:'100px'}}>Hello i am Aviral Mishra  i am a frontend web developer . I make user freindly websites
            and enhance their presence in internet 
          
          </p>
      
        </div>
     
    </div>
  )
}

export default Home



