import React from "react"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GitHub from "@material-ui/icons/GitHub"
import "../styles/Home.css"

const Home = () => {
  return(
    <>
    <div className="home">
      <div className="name">
        <h3> Molly Wolf</h3>     
          <h2> Full Stack Web Developer</h2>
  <br></br>
      <div className="icons">
          <LinkedInIcon />
          <EmailIcon />
          <GitHub />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home