import React from 'react'

const ProjectDescription = ({description}) => {
    return (
        <div>
            <h1>{description.title}</h1>
            <p>{description.text}</p>
            <div className="projectLinksWrapper">
                <a className="githubLink">GITHUB ICON</a>
                <a className="githubLink">{description.website}</a>
            </div>
        </div>
    )
}

export default ProjectDescription
