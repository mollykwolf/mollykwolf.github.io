import React from "react"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GitHub from "@material-ui/icons/GitHub"
import "../styles/Home.css"
import { Link, useLocation } from "react-router-dom"
import About from "./About"
import Projects from "./Projects"
// import ProjectDisplay from "./pages/ProjectDisplay"
import Contact from "./Contact"


const Home = () => {
  return(
    <>
    <div id="home">
      <div className="name">
        <h3> Molly Wolf</h3>     
        <h2> Web Developer</h2>
        <br></br>
        <div className="icons">
          <a href="https://www.linkedin.com/in/mollykwolf/" target="_blank" rel="noopener"><LinkedInIcon  /></a>
          <a href="https://github.com/mollykwolf" target="_blank" rel="noopener"><GitHub /></a>           
        </div>
      </div>
      <About />
      <Projects />
    </div>
    </>
  )
}

<Link to="/"> Home </Link>
export default Home