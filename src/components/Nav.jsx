import React from 'react'
import GithubIcon from './GithubIcon'

const Nav = ({bgOpacity}) => {
    if(!bgOpacity) return null
    return (
        <nav>
            <div className="inner flexCenterAll">
                <GithubIcon/>
            </div>
        </nav>
    )
}

export default Nav
