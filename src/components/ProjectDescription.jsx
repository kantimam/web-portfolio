import React from 'react'
import GithubIcon from './GithubIcon'
import NpmIcon from './NpmIcon'

const ProjectDescription = ({ name="", description="", stack=[], id, website="", repository="", packageLink="" }) => {
    return (
        <div className="projectDescription">
            <div className="projectTitle">
                <a href={website}  target="_blank" rel="noopener noreferrer">{name}</a>
                <a className="githubLink iconLink" href={repository} target="_blank" rel="noopener noreferrer">
                    <GithubIcon/>
                </a>
            </div>
            <p>{description}</p>
            <div className="techStackList">
                {stack.map(i => <div key={`item_${id}_${i}`}>{i}</div>)}
                <NpmIcon packageLink={packageLink}/> 
            </div>
        </div>
    )
}

export default ProjectDescription
