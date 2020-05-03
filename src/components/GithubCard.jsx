import React, { useRef, useEffect, useState } from 'react'
import GitHubCalendar from 'react-github-calendar';
import gitPic from '../images/jetpacktocat.png'

const GithubCard = () => {
    const scrollRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);

        }
    }, [])

    const handleScroll = () => {
        const divPos = scrollRef.current.offsetTop;
        const scrollProgress = window.scrollY + window.innerHeight+80;
        if (scrollProgress > divPos) {
            window.removeEventListener('scroll', handleScroll);
            setAnimate(true);
        }
    }

    return (
        <div className="gitHubCard">
            <div className={`allLoadedGraphic ${animate ? "animationActive" : ""}`}>
                <img src={gitPic} alt="git pic" />
                <a href="https://github.com/kantimam" target="_blank" rel="noopener noreferrer">
                    <h3>even more projects on</h3>
                    <h1>{"<Github/>"}</h1>
                </a>
            </div>
            <div ref={scrollRef} className="calenderContainer" /* className="flexCenterAll" */>
                <GitHubCalendar blockSize={18} username="kantimam" />
            </div>
        </div>
    )
}

export default GithubCard
