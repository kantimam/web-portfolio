import React from 'react'
import ProjectDescription from './ProjectDescription'
import ProjectImage from './ProjectImage'

const ProjectsItem = ({project}) => {
    return (
        <div className="projectsItem">
            <ProjectDescription description={project.description}/>
            <ProjectImage image={project.image}/>
        </div>
    )
}

export default ProjectsItem
