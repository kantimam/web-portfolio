import React from 'react'
import GithubIcon from './GithubIcon'

const Nav = ({bgOpacity, scrollToPortfolio, scrollToContact, scrollTop}) => {
    if(!bgOpacity) return null
    return (
        <nav>
            <div className="inner flexCenterAll">
                <div onClick={scrollTop} className="mainIcon">KI</div>
                <ul>
                    <li onClick={scrollToPortfolio}>projects</li>
                    <li onClick={scrollToContact}>contact</li>
                </ul>
                <a className="githubLink" href="https://github.com/kantimam">
                    <GithubIcon/>
                </a>
            </div>
        </nav>
    )
}

export default Nav
