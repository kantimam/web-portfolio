import React from 'react'
import ProjectImage from './ProjectImage'
import GithubIcon from './GithubIcon'
import GithubCard from './GithubCard'


const MoreProjects = ({allLoaded, onClick}) => {
    
    if(allLoaded) return <GithubCard/>
    return (
        <div onClick={onClick} className="projectItem moreProjects">
            <ProjectImage image="https://w.wallhaven.cc/full/4d/wallhaven-4dq8gg.jpg" />
            <div className="projectDescription">
                <h1>LOAD MORE!</h1>
                <p>
                    I did more stuff... just click if you want to see it :)
                    </p>
            </div>
        </div>
    )
}

export default MoreProjects
