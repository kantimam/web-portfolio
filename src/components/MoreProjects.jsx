import React from 'react'
import GithubCard from './GithubCard'
import space from '../images/space.jpg';

const MoreProjects = ({ allLoaded, onClick }) => {

    return (
        <>
            {!allLoaded &&
                <div onClick={onClick} className="projectItem moreProjects">
                    <div className="imgContainer fancyShadow">
                        <img src={space} alt="my project" />
                    </div>
                    <div className="projectDescription">
                        <h1>LOAD MORE!</h1>
                        <p className="descriptionText">
                            I did more stuff... just click if you want to see it :)
                        </p>
                    </div>
                </div>
            }
            <GithubCard />
        </>
    )
}

export default MoreProjects
