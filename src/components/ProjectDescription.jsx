import React from 'react'

const ProjectDescription = ({ title, text, stack, id }) => {
    
    return (
        <div className="projectDescription">
            <h1>{title}</h1>
            <p>{text}</p>
            <div className="techStackList">
                {stack.map(i => <div key={`item_${id}_${i}`}>{i}</div>)}
            </div>
        </div>
    )
}

export default ProjectDescription
