import React from "react"
import { useParams } from "react-router-dom"
import { ProjectList } from "../helpers/ProjectList"
import GitHubIcon from "@material-ui/icons/GitHub"
import "../styles/ProjectDisplay.css"

const ProjectDisplay = () => {
  const { id } = useParams ()
  const project = ProjectList[id]
  // const handleSubmit = () => {
  //   navigate("/#projects")
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills} 
      </p>
      <GitHubIcon />
      <a href="http://localhost:3000/#projects"><button>Back to Project Page</button></a>
    </div>
  
  )
}

export default ProjectDisplay