import React from 'react'
import MetaBalls from '../metaballs'

const metaConfig = new Array(20).fill(0);

let hideTimeOut=null;

const MetaBallsWrapper = ({fadeOut, showBG}) => {
    if(fadeOut){
        hideTimeOut=setTimeout(()=>showBG(false), 3000);
    }else{
        clearTimeout(hideTimeOut);
    }

    return (
        <div className={fadeOut? 'fadeOutMetaBalls' : ''} id="metaBallsWrapper">
            <MetaBalls
                innerContainer={<div style={{ marginTop: "3rem", width: "100%", maxWidth: "100%" }} />}
                shiftColor={{ min: 10, max: 60 }}
                deflectMovement={{ min: 1, max: 7 }}
                orbData={metaConfig}
            >
            </MetaBalls>
        </div>

    )
}

export default MetaBallsWrapper
