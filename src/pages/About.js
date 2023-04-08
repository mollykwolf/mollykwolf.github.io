import React from "react"
// import HtmlIcon from '@mui/icons-material/Html'
// import JavascriptIcon from '@mui/icons-material/Javascript';
import "../styles/About.css"
// import Pr from "../assets/pro3.png" 
import Hi from "../assets/hi.png"


const About = () => {
  return(
    <>
     <div id="about">
        <h1>About</h1>
        <div id="me">
          <p> Becoming a software developer has been an incredible journey that has equipped me with valuable skills and opened up exciting opportunities. I have experience in multiple programming languages, including JavaScript, React, Ruby, Rails, and Postgres. I am driven to continue learning and improving my skills.  My goal is to develop sustainable and responsible technology solutions that benefit society and the environment. 
            <br></br>
            <br></br>
            Languages 
            <br></br>
            <br></br>
            Front-End:JavaScprit, React, Jest, Slim, JQuery 
            <br></br>
            Back-End: Ruby, Rails, Postgres, RSpec
            <br></br>
            General: Github, Microsoft Excel
          </p>
          <img src={Hi} alt="My Image" width="800" height="800" ></img>
        </div>
    </div>
    </>
  )
}

export default About