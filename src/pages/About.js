import React from "react"
// import HtmlIcon from '@mui/icons-material/Html'
// import JavascriptIcon from '@mui/icons-material/Javascript';
import "../styles/About.css"
import Hi from "../assets/hi.png"

{/* <div class="container">
  <div class="left-side">
    <p>This is a paragraph.</p>
  </div>
  <div class="right-side">
    <img src="path_to_your_image.jpg" alt="Image">
  </div>
</div> */}


const About = () => {
  return(
    <>
    <div id="about">
      <h1>About</h1>
      <div class="container">
        <div class="left-side">
          <p> Hey there! Thanks for dropping by and welcome to my portfolio! 🌟 I'm thrilled to share my journey as a software developer with you. Completing the LEARN Academy's intensive four-month bootcamp has been nothing short of amazing. It has equipped me with valuable skills and opened up a world of exciting opportunities.I am driven to continue learning and improving my skills.  My goal is to develop sustainable and responsible technology solutions that benefit society and the environment. 
          </p>
        </div>  
        <div class="right-side">
          <img src={Hi} alt="My Image" width="400" height="150" ></img> 
        </div>
        </div>  
      {/* <h3>Languages </h3> */}
      <div id="languages"> 
       <div>
        <h4>Front-End:</h4>
        <p>JavaScprit</p>
        <p>React</p>
        <p>Jest</p>
        <p>Slim</p>
        <p>jQuery</p>
      </div>
      <div>
        <h4>Back-End:</h4>
        <p>Ruby on Rails</p>
        <p>Rails</p>
        <p>Postgres/PostgresSQL</p>
        <p>RSpec</p>
      </div>
      <div>
        <h4>General:</h4>
        <p>Github/Git</p>
        <p>Trello</p> 
        <p>Figma</p>
        <p>Microsoft Excel</p>
      </div>
    </div>   
      {/* <img src={Hi} alt="My Image" width="600" height="450" ></img> */}
    </div>
    </>
  )
}

export default About
