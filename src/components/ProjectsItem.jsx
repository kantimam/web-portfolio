import React, { useState } from 'react'
import ProjectDescription from './ProjectDescription'
import ProjectImage from './ProjectImage'
import ImageSlider from './ImageSlider';




const ProjectsItem = ({ project }) => {
    const [active, setActive] = useState(false);

    const { images = [] } = project;
    const imagePaths = images.map(image => process.env.REACT_APP_API_STATIC + "/" + image)

    const makeActive = () => setActive(true);
    const makeInactive = () => setActive(false);

    return (
        <div
            onTouchStart={makeActive}
            onTouchEnd={makeInactive}
            onFocus={makeActive}
            onBlur={makeInactive}
            onMouseEnter={makeActive}
            onMouseLeave={makeInactive}
            className="projectItem neomorphism"
        >
            {/* <ProjectImage image={images[0]} /> */}
            {/* <ImageSlider images={images} duration={1400}/> */}
            <a className="imgSliderLink" href={project.homepage}  target="_blank" rel="noopener noreferrer">
                <ImageSlider active={active} images={imagePaths} duration={2400} />
            </a>
            <ProjectDescription {...project} />
        </div>
    )
}

export default ProjectsItem
