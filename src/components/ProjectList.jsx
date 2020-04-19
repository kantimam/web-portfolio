import React, { useState } from 'react';
import ProjectsItem from './ProjectsItem';
import ProjectImage from './ProjectImage'

import monkeyImg from '../images/monkey_main.png';
import movieImg from '../images/movie_main.png';
import ytImg from '../images/yt_main.png';
import aStar from '../images/aStarDone.png';
import threeMaze from '../images/threeMaze.png'


const initialProjects = [
    {
        id: 0,

        image: ytImg,
        title: "Youtube Coon",
        text: "Progressive web app that lets you search and download youtube videos. You can share your video straight from the mobile youtube app and convert it to mp3.",
        github: "github.com",
        website: "github.com",
        stack: ["JS","Node","web scraping","react", "express"],
    },
    {
        id: 1,
        image: monkeyImg,
        title: "Monkey Benchmark",
        text: "Collection of memory and reaction time games. Play and compare your score to others. Looking to expand it with more complex games.",
        github: "github.com",
        website: "github.com",
        stack: ["JS","Node","react", "express", "mongoDB"],
    },
    {
        id: 2,
        image: movieImg,
        title: "Laravel Image Board",
        text: "Basic image board using only laravel since writting react all day gets old. Create interesting and funny posts and interact with others. Please dont summon the third reich again or spamm it with dead animals.",
        github: "github.com",
        website: "github.com",
        stack: ["Laravel", "PHP"],

    },
    {
        id: 3,
        image: movieImg,
        title: "React WebGL Metaballs",
        text: "Bouncing Metaballs that you can use to make your react apps even more annoying. Not using any libraries only basic WebGL.",
        github: "https://github.com/kantimam/webgl-metaballs-publish",
        website: "https://kantimam.github.io/webgl-metaballs-publish/",
        npm: "https://www.npmjs.com/package/react-webgl-metaballs",
        stack: ["React", "WebGL", "JS"],

    },

    {
        id: 4,
        image: movieImg,
        title: "React Autosuggest",
        text: "React package that generates and displays a suggestion list for your searches. Handles mouse and keyboard events nicely",
        github: "https://github.com/kantimam/react-autosuggest-input",
        website: "https://kantimam.github.io/react-autosuggest-input/",
        npm: "https://www.npmjs.com/package/@kantimam/react-autosuggest",
        stack: ["JS","React"],

    },
    {
        id: 5,
        image: movieImg,
        title: "React Switch",
        text: "React package that lets you toggle a value. Got annoyed by all switch components beeing somewhat of a DIVsoup so created my own :)",
        github: "https://github.com/kantimam/react-dark-mode-switches",
        website: "https://kantimam.github.io/react-dark-mode-switches/",
        npm: "https://www.npmjs.com/package/react-dark-mode-switch",
        stack: ["JS","React"],

    },
    {
        id: 6,
        image: aStar,
        title: "React A*",
        text: "A* search visualization using React for rendering and setup.",
        github: "https://github.com/kantimam/react-a-star-search",
        website: "https://kantimam.github.io/react-a-star-search/",
        stack: ["JS","React"],

    },
    {
        id: 7,
        image: aStar,
        title: "Three.js Maze",
        text: "Djikstra's Pathfinder generating a 3d maze.",
        github: "https://github.com/kantimam/ThreeJsMaze",
        website: "https://kantimam.github.io/ThreeJsMaze/",
        stack: ["JS", "Three.js"],

    },
    {
        id: 8,
        image: movieImg,
        title: "CoronaAid",
        text: "React app that lets you search movies. Was a coding challenge for a company but i decided to extend it with my own autocomplete searchbar and dark mode toggle.",
        github: "github.com",
        website: "github.com",
        stack: ["React", "API", "JS"],

    },
    {
        id: 10,
        image: aStar,
        title: "Actix Server",
        text: "Back-End that hosts this portfolio. Writte in Rust using Actix as main library",
        github: "https://github.com/kantimam/rust-actix-server",
        stack: ["Rust", "Actix"],

    },
    {
        id: 10,
        image: aStar,
        title: "Three.js Rubik's Cube",
        text: "Playable Rubik's Cube using Three.js",
        github: "https://github.com/kantimam/Threejs_Rubix_Cube",
        website: "https://competent-minsky-42775c.netlify.app/",
        stack: ["JS", "Three.js"],

    }
    
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