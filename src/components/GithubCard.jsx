import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import gitPic from '../images/jetpacktocat.png'

const GithubCard = () => {
    return (
        <div className="gitHubCard">
            <div className="allLoadedGraphic">
                <img src={gitPic} alt="git pic" />
                <section>
                    <h3>even more projects on</h3>
                    <h1>Github</h1>
                </section>
            </div>
            <GitHubCalendar blockSize={16} username="kantimam" />
        </div>
    )
}

export default GithubCard
