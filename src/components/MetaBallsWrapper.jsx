import React from 'react'
import MetaBalls from '../metaballs'

const metaConfig = new Array(18).fill(0);


const MetaBallsWrapper = () => {
    

    return (
        <div id="metaBallsWrapper">
            <MetaBalls
                innerContainer={<div style={{ marginTop: "3rem", width: "100%", maxWidth: "100%" }} />}
                shiftColor={{ min: 8, max: 40 }}
                deflectMovement={{ min: 0.4, max: 5 }}
                orbData={metaConfig}
            >
            </MetaBalls>
        </div>

    )
}

export default MetaBallsWrapper
