import React from 'react'
import ProjectDescription from './ProjectDescription'
import ProjectImage from './ProjectImage'

const ProjectsItem = ({ project }) => {
    return (
        <div className="projectItem">
            <ProjectImage image={project.image} />
            <ProjectDescription description={project.description} />
        </div>
    )
}

export default ProjectsItem
