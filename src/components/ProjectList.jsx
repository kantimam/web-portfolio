import React, { useState, useEffect, memo } from 'react';
import ProjectsItem from './ProjectsItem';
import ProjectImage from './ProjectImage'
import MoreProjects from './MoreProjects';

/* import monkeyImg from '../images/monkey_main.png';
import movieImg from '../images/movie_main.png';
import ytImg from '../images/yt_main.png';
import aStar from '../images/aStarDone.png';
import threeMaze from '../images/threeMaze.png'
 */


const initialProjects = [
    {
        id: 0,

        images: ["yt_1.png"],
        name: "Youtube Coon",
        description: "Progressive web app that lets you search and download youtube videos. You can share your video straight from the mobile youtube app and convert it to mp3.",
        repository: "github.com",
        website: "https://baizuo.online/",
        stack: ["JS", "Node", "web scraping", "react", "express"],
    },
    {
        id: 1,
        images: ["monkey_1.png"],
        name: "Monkey Benchmark",
        description: "Collection of memory and reaction time games. Play and compare your score to others. Looking to expand it with more complex games.",
        repository: "github.com",
        website: "github.com",
        stack: ["JS", "Node", "react", "express", "mongoDB"],
    },
    {
        id: 2,
        images: ["image_1.png"],
        name: "Laravel Image Board",
        description: "Basic image board using only laravel since writting react all day gets old. Create interesting and funny posts and interact with others. Please dont summon the third reich again or spamm it with dead animals.",
        repository: "github.com",
        website: "github.com",
        stack: ["Laravel", "PHP"],

    },
    /* {
        id: 3,
        image: movieImg,
        title: "React WebGL Metaballs",
        text: "Bouncing Metaballs that you can use to make your react apps even more annoying. Not using any libraries only basic WebGL.",
        repository: "https://github.com/kantimam/webgl-metaballs-publish",
        website: "https://kantimam.github.io/webgl-metaballs-publish/",
        npm: "https://www.npmjs.com/package/react-webgl-metaballs",
        stack: ["React", "WebGL", "JS"],

    },

    {
        id: 4,
        image: movieImg,
        title: "React Autosuggest",
        text: "React package that generates and displays a suggestion list for your searches. Handles mouse and keyboard events nicely",
        repository: "https://github.com/kantimam/react-autosuggest-input",
        website: "https://kantimam.github.io/react-autosuggest-input/",
        npm: "https://www.npmjs.com/package/@kantimam/react-autosuggest",
        stack: ["JS", "React"],

    },
    {
        id: 5,
        image: movieImg,
        title: "React Switch",
        text: "React package that lets you toggle a value. Got annoyed by all switch components beeing somewhat of a DIVsoup so created my own :)",
        repository: "https://github.com/kantimam/react-dark-mode-switches",
        website: "https://kantimam.github.io/react-dark-mode-switches/",
        npm: "https://www.npmjs.com/package/react-dark-mode-switch",
        stack: ["JS", "React"],

    },
    {
        id: 6,
        image: aStar,
        title: "React A*",
        text: "A* search visualization using React for rendering and setup.",
        repository: "https://github.com/kantimam/react-a-star-search",
        website: "https://kantimam.github.io/react-a-star-search/",
        stack: ["JS", "React"],

    },
    {
        id: 7,
        image: threeMaze,
        title: "Three.js Maze",
        text: "Djikstra's Pathfinder generating a 3d maze.",
        repository: "https://github.com/kantimam/ThreeJsMaze",
        website: "https://kantimam.github.io/ThreeJsMaze/",
        stack: ["JS", "Three.js"],

    },
    {
        id: 8,
        image: movieImg,
        title: "CoronaAid",
        text: "React app that lets you search movies. Was a coding challenge for a company but i decided to extend it with my own autocomplete searchbar and dark mode toggle.",
        repository: "github.com",
        website: "github.com",
        stack: ["React", "API", "JS"],

    },
    {
        id: 9,
        image: aStar,
        title: "Actix Server",
        text: "Back-End that hosts this portfolio. Writte in Rust using Actix as main library",
        repository: "https://github.com/kantimam/rust-actix-server",
        stack: ["Rust", "Actix"],

    },
    {
        id: 10,
        image: aStar,
        title: "Three.js Rubik's Cube",
        text: "Playable Rubik's Cube using Three.js",
        repository: "https://github.com/kantimam/Threejs_Rubix_Cube",
        website: "https://competent-minsky-42775c.netlify.app/",
        stack: ["JS", "Three.js"],

    } */

]

const controller=new AbortController();
const {signal}=controller;

export default memo(() => {
    const [projects, setProjects] = useState([...initialProjects].slice(0, 3));
    const [allLoaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_PROJECTS+"?limit=3", {signal})
            .then(data => data.json()
                .then(json => setProjects(json))
            ).catch(e => alert("looks like the projects server is down :("));
        return () => {
            controller.abort();
        }
    }, [])



    const loadAll=()=>{
        fetch(process.env.REACT_APP_API_PROJECTS+"?offset=3", {signal})
            .then(data => data.json()
                .then(json =>{
                    setProjects([...projects,...json]);
                    setLoaded(true);
                })
            ).catch(e => alert("looks like the projects server is down :("));
    }

    return (
        <div className="projectList">
            {projects.map(p =>
                <ProjectsItem key={`project_${p.id}`} project={p} />
            )}
            <MoreProjects onClick={loadAll} allLoaded={allLoaded} />
        </div>

    )
})