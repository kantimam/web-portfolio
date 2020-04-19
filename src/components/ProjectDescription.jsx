import React from 'react'
import GithubIcon from './GithubIcon'
import NpmIcon from './NpmIcon'

const ProjectDescription = ({ title, text, stack, id, website, repository }) => {
    
    return (
        <div className="projectDescription">
            <div className="projectTitle">
                <a href={website}  target="_blank" rel="noopener noreferrer">{title}</a>
                <a className="githubLink iconLink" href={repository} target="_blank" rel="noopener noreferrer">
                    <GithubIcon/>
                </a>
            </div>
            <p>{text}</p>
            <div className="techStackList">
                {stack.map(i => <div key={`item_${id}_${i}`}>{i}</div>)}
                <NpmIcon/>
            </div>
        </div>
    )
}

export default ProjectDescription
