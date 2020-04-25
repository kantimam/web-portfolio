import React from 'react'
import npm from '../images/npm-logo-red.svg'

const NpmIcon = ({ packageLink }) => {
    
    if (!packageLink) return null;
    return (
        <a className="npmIconLink" href={packageLink}>
            <img className="npmIcon" src={npm} alt="npm" />
        </a>
    )
}

export default NpmIcon
