import React from 'react'

const ProjectDescription = ({description}) => {
    return (
        <div>
            <h1>{description.title}</h1>
            <p>{description.text}</p>
            <div className="projectLinksWrapper">
                <a href="www.github.com" className="githubLink">GITHUB ICON</a>
                <a href="www.github.com" className="githubLink">{description.website}</a>
            </div>
        </div>
    )
}

export default ProjectDescription
