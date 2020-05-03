import React from 'react'

const SkillsSection = () => {
    return (
        <section className="skillsSection">
            <div className="inner">
                <h3 className="sectionHeader">
                    {"<skills>"}
                </h3>
                <div className="skillsList">
                    <div className="skillsCard neomorphism">
                        <h3>Learning</h3>
                        <p>Always eager learn new things</p>
                        <p></p>
                    </div>
                    <div className="skillsCard neomorphism">
                        <h3>JS ES6+</h3>
                        <p>Working with modern JS</p>
                        <p></p>
                    </div>
                    <div className="skillsCard neomorphism">
                        <h3>TS</h3>
                        <p>React / Vue</p>
                        <p></p>
                    </div>
                    <div className="skillsCard neomorphismInvert">
                        <h3>Learning</h3>
                        <p>Always eager learn new things</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
