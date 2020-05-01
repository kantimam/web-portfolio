import React, {forwardRef, memo} from 'react'
import ProjectList from './ProjectList'

const PortfolioSection = forwardRef((props, ref) => {
    return (
        <section ref={ref} /* className={fadeIn? 'fadeInColor': ''} */ id="portfolioSection">
            <div className="inner">
                <h3 className="sectionHeader">{"<projects>"}</h3>
                <ProjectList/>
                {/* <h1 className="centerText">{"</PROJECTS>"}</h1> */}
            </div>
        </section>
    )
})

export default memo(PortfolioSection)
