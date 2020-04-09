import React, {useState, useEffect} from 'react';
import ProjectsItem from './ProjectsItem';

const initialProjects=[
    {
        id: 0,
        image: "https://w.wallhaven.cc/full/4d/wallhaven-4dq8gg.jpg",
        description: {
            text: "nice project",
            github: "github.com",
            website: "github.com",
            stack: ["react", "express", "mongoDB"]
        },
    },
    {
        id: 1,
        image: "https://w.wallhaven.cc/full/4d/wallhaven-4dq8gg.jpg",
        description: {
            text: "nice project",
            github: "github.com",
            website: "github.com",
            stack: ["react", "express", "mongoDB"]
        },
    },
    {
        id: 2,
        image: "https://w.wallhaven.cc/full/4d/wallhaven-4dq8gg.jpg",
        description: {
            text: "nice project",
            github: "github.com",
            website: "github.com",
            stack: ["react", "express", "mongoDB"]
        },
    },
]

export default ()=>{
    const [projects]=useState(initialProjects)
    return (
        <div className="projectList">
            {projects.map(p=>
                <ProjectsItem key={`project_${p.id}`} project={p}/>
            )}
        </div>
    )
}