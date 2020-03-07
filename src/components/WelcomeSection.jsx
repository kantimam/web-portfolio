import React from 'react'

const WelcomeSection = ({ scrollToPortfolio }) => {
    return (
        <section className="flexCenterAll centerText" id="welcomeSection">
            <div className="welcomeWrapper flexCenterAll">
                <h1>Kantemir Imamov</h1>
                <h3>Full-Stack Developer</h3>
                <button onClick={scrollToPortfolio} className="callToAction hoverScale">VIEW PROJECTS</button>
            </div>
        </section>
    )
}

export default WelcomeSection
