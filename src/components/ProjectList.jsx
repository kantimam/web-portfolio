import React, { useState } from 'react';
import ProjectsItem from './ProjectsItem';
import ProjectImage from './ProjectImage'

import monkeyImg from '../images/monkey_main.png';
import movieImg from '../images/movie_main.png';
import ytImg from '../images/yt_main.png';


const initialProjects = [
    {
        id: 0,

        image: ytImg,
        title: "youtube coon",
        text: "Progressive web app that lets you search and download youtube videos. You can share your video straight from the mobile youtube app and convert it to mp3.",
        github: "github.com",
        website: "github.com",
        stack: ["react", "express", "mongoDB"],
    },
    {
        id: 1,
        image: monkeyImg,
        title: "monkey benchmark",
        text: "Collection of memory and reaction time games. Play and compare your score to others. Looking to expand it with more complex games.",
        github: "github.com",
        website: "github.com",
        stack: ["react", "express", "mongoDB"],
    },
    {
        id: 2,
        image: movieImg,
        title: "laravel image board",
        text: "Basic image board using only laravel since writting react all day gets old. Create interesting and funny posts and interact with others. Please dont summon the third reich again or spamm it with dead animals.",
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