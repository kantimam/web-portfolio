import React, { useState } from 'react';
import ProjectsItem from './ProjectsItem';
import ProjectImage from './ProjectImage'


const initialProjects = [
    {
        id: 0,

        image: "https://w.wallhaven.cc/full/4d/wallhaven-4dq8gg.jpg",
        title: "youtube coon",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est inventore excepturi iure assumenda necessitatibus laboriosam dolorum perferendis beatae laborum, omnis, dolore et. Magni itaque quos fuga, eligendi nesciunt harum molestias.",
        github: "github.com",
        website: "github.com",
        stack: ["react", "express", "mongoDB"],
    },
    {
        id: 1,
        image: "https://w.wallhaven.cc/full/4d/wallhaven-4dq8gg.jpg",
        title: "monkey benchmark",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est inventore excepturi iure assumenda necessitatibus laboriosam dolorum perferendis beatae laborum, omnis, dolore et. Magni itaque quos fuga, eligendi nesciunt harum molestias.",
        github: "github.com",
        website: "github.com",
        stack: ["react", "express", "mongoDB"],
    },
    {
        id: 2,
        image: "https://w.wallhaven.cc/full/4d/wallhaven-4dq8gg.jpg",
        title: "laravel image board",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est inventore excepturi iure assumenda necessitatibus laboriosam dolorum perferendis beatae laborum, omnis, dolore et. Magni itaque quos fuga, eligendi nesciunt harum molestias.",
        github: "github.com",
        website: "github.com",
        stack: ["react", "express", "mongoDB"],

    },
]



export default () => {
    const [projects] = useState(initialProjects)
    return (
        <div className="projectList">
            {projects.map(p =>
                <ProjectsItem key={`project_${p.id}`} project={p} />
            )}
            <div className="projectItem moreProjects">
                <ProjectImage image="https://w.wallhaven.cc/full/4d/wallhaven-4dq8gg.jpg" />
                <div className="projectDescription">
                    <h1>LOAD MORE!</h1>
                    <p>
                        I did more stuff... just click if you want to see it :)
                    </p>
                </div>
            </div>
        </div>

    )
}