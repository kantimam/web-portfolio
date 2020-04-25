import React, {useState} from 'react'
import ProjectDescription from './ProjectDescription'
import ProjectImage from './ProjectImage'
import ImageSlider from './ImageSlider';

const ProjectsItem = ({ project }) => {
    const [active, setActive]=useState(false);

    const { images=[] } = project;
    const imagePaths=images.map(image=>process.env.REACT_APP_API_STATIC+"/"+image)

    const makeActive=()=>setActive(true);
    const makeInactive=()=>setActive(false);

    return (
        <div 
            onTouchStart={makeActive}
            onTouchEnd={makeInactive}
            onFocus={makeActive}
            onBlur={makeInactive}
            onMouseEnter={makeActive}
            onMouseLeave={makeInactive}
            className="projectItem"
        >
            {/* <ProjectImage image={images[0]} /> */}
            {/* <ImageSlider images={images} duration={1400}/> */}
            <ImageSlider active={active} images={imagePaths} duration={2400}/>
            <ProjectDescription {...project} />
        </div>
    )
}

export default ProjectsItem
