import React from 'react'
import ProjectDescription from './ProjectDescription'
import ProjectImage from './ProjectImage'

const ProjectsItem = ({ project }) => {
    return (
        <div className="projectItem">
            <ProjectImage image={project.image} />
            <ProjectDescription {...project} />
        </div>
    )
}

export default ProjectsItem
