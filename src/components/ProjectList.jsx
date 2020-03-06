import React, {useState, useEffect} from 'react';
import ProjectsItem from './ProjectsItem';

const initialProjects=[

]

export default ()=>{
    const [projects, setProjects]=useState(initialProjects)
    return (
        <div>
            {projects.map(p=>{
                <ProjectsItem project={p}/>
            })}
        </div>
    )
}