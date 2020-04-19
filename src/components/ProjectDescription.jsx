import React from 'react'
import GithubIcon from './GithubIcon'

const ProjectDescription = ({ title, text, stack, id }) => {
    
    return (
        <div className="projectDescription">
            <div className="projectTitle">
                <h1>{title}</h1>
                <GithubIcon/>
            </div>
            <p>{text}</p>
            <div className="techStackList">
                {stack.map(i => <div key={`item_${id}_${i}`}>{i}</div>)}
            </div>
        </div>
    )
}

export default ProjectDescription
