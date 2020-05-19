import React from 'react'
import GithubIcon from './GithubIcon'
import NpmIcon from './NpmIcon'
/* import reactIcon from '../images/react.svg'
import nodeIcon from '../images/nodejs.svg'
import jsIcon from '../images/js.svg'

const icons={
    react: reactIcon,
    node: nodeIcon,
    js: jsIcon
} */

const ProjectDescription = ({ name = "", description = "", technologies = ["react", "node"], id, homepage = "", repository = "", packageLink = "" }) => {
    return (
        <div className="projectDescription">
            <div className="projectTitle">
                <a href={homepage} target="_blank" rel="noopener noreferrer">{name}</a>
                <a className="githubLink iconLink" href={repository} target="_blank" rel="noopener noreferrer">
                    <GithubIcon />
                </a>
            </div>
            <p className="descriptionText">{description}</p>
            <div className="techStackList">
                {technologies.map(i => <IconOrText name={i} key={`item_${id}_${i}`} />)}
                <NpmIcon packageLink={packageLink} />
            </div>
        </div>
    )
}

export default ProjectDescription


const IconOrText = ({ name }) => {
    return <div>{`<${name}/>`}</div>

}