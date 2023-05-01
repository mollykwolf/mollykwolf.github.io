import React from "react"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import "../styles/Footer.css"


const Footer = () => {
  return( 
    <div className="footer">
      {/* <div className="socialMedia"> */}
        {/* <LinkedInIcon />
        <GitHubIcon /> */}
      {/* </div> */}
      <p> &copy; Molly Wolf | 2023 | <GitHubIcon /> |   <LinkedInIcon /> </p>
    </div>
  )
}

export default Footer 