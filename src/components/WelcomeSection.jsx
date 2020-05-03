import React, { memo } from 'react'
import Logo from './Logo'

const WelcomeSection = ({ scrollToPortfolio }) => {

    return (
        <section className="flexCenterAll centerText" id="welcomeSection">
            <div className="welcomeWrapper flexCenterAll">
                <Logo />
                <h1>Lets Create</h1>
                <h2>Full-Stack Developer</h2>

                <h3>Kantemir Imamov</h3>

                <button onClick={scrollToPortfolio} className="gradientButton">VIEW PROJECTS</button>
            </div>
        </section>
    )
}

export default memo(WelcomeSection)
