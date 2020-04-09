import React from 'react'

const ProjectImage = ({image}) => {
    return (
        <div className="imgContainer fancyShadow">
            <img src={image} alt="my project"/>
        </div>
    )
}

export default ProjectImage
