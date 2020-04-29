import React, {memo} from 'react'
import GithubIcon from './GithubIcon'
import Logo from './Logo'

const Nav = ({bgOpacity, scrollToPortfolio, scrollToContact, scrollTop}) => {
    if(!bgOpacity) return null
    return (
        <header>
            <nav className="inner flexCenterAll">
                <Logo onClick={scrollTop}/>
                <ul>
                    <li onClick={scrollToPortfolio}>projects</li>
                    <li onClick={scrollToContact}>contact</li>
                </ul>
                <a className="githubLink" href="https://github.com/kantimam" target="_blank" rel="noopener noreferrer">
                    <GithubIcon/>
                </a>
            </nav>
        </header>
    )
}

export default memo(Nav)
