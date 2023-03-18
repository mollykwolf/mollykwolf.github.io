import React from "react"
import HtmlIcon from '@mui/icons-material/Html'
import JavascriptIcon from '@mui/icons-material/Javascript';
import "../styles/About.css"
import Pr from "../assets/pro3.png" 


const About = () => {
  return(
    <>
     <div className="about">
        <div className="title"> 
          <h1>About</h1>
        </div>
        <div className="para">
           <p> Becoming a software developer has been an incredible journey that has equipped me with valuable skills and opened up exciting opportunities. I have experience in multiple programming languages, including JavaScript, React, Ruby, Rails, and Postgres. I am driven to continue learning and improving my skills.  My goal is to develop sustainable and responsible technology solutions that benefit society and the environment.
          </p>
        </div>
      <div className="languages">
        <h3> Languages </h3>
        <ol className="list">
          <ol className="item">
            <h2> Front-End</h2>
            <div className="examples">
          HTML, CSS, JavaScprit, React 
            </div>
          </ol>
          <ol className="item">
            <h2>Back-End</h2>
            <div className="examples">
             Ruby, Rails, Postgres
            </div>
          </ol>
        </ol>
      </div>
    </div>
    </>
  )
}

export default About