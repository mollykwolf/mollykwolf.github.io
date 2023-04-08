import React from "react"
import ProjectItem from "../components/ProjectItem"
import "../styles/Projects.css" 
import { ProjectList } from "../helpers/ProjectList"

const Projects = () => {
  return(
    <>
    <div id="projects">
    <h2> Projects</h2> 
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return(
            <ProjectItem key={idx} id={idx} name={project.name} image={project.image} />
        )
        })}
      </div>
    </div>
    </>
  )
}

export default Projects