import React, {forwardRef} from 'react'
import ProjectList from './ProjectList'

const PortfolioSection = forwardRef((props, ref) => {
    return (
        <section ref={ref} /* className={fadeIn? 'fadeInColor': ''} */ id="portfolioSection">
            <div className="inner">
                <h1 className="centerText">{"<PROJECTS>"}</h1>
                <ProjectList/>
                <h1 className="centerText">{"</PROJECTS>"}</h1>
            </div>
        </section>
    )
})

export default PortfolioSection
