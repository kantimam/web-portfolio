import React, {memo} from 'react'
import Logo from './Logo'

const WelcomeSection = ({ scrollToPortfolio }) => {

    return (
        <section className="flexCenterAll centerText" id="welcomeSection">
            <div className="welcomeWrapper flexCenterAll">
                <Logo/>
                <h1>Kantemir Imamov</h1>
                <h3>Full-Stack Developer</h3>
                <button onClick={scrollToPortfolio} className="gradientButton">VIEW PROJECTS</button>
            </div>
        </section>
    )
}

export default memo(WelcomeSection)
