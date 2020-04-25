import React from 'react'

const ProjectImage = ({image}) => {
    const imagePath=process.env.REACT_APP_API_STATIC+"/"+image;
    return (
        <div className="imgContainer fancyShadow">
            <img src={imagePath} alt="my project"/>
        </div>
    )
}

export default ProjectImage
