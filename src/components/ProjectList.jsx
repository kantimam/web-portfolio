import React, { useState, useEffect, memo } from 'react';
import ProjectsItem from './ProjectsItem';
import ProjectImage from './ProjectImage'
import MoreProjects from './MoreProjects';




const initialProjects = [
    {
        id: 0,

        images: ["yt_1.png"],
        name: "Youtube Coon",
        description: "Progressive web app that lets you search and download youtube videos. You can share your video straight from the mobile youtube app and convert it to mp3.",
        repository: "github.com",
        homepage: "https://baizuo.online/",
        technologies: ["JS", "Node", "Web Scraping", "React", "Express"],
    },
    {
        id: 1,
        images: ["monkey_1.png"],
        name: "Monkey Benchmark",
        description: "Collection of memory and reaction time games. Play and compare your score to others. Looking to expand it with more complex games.",
        repository: "github.com",
        homepage: "github.com",
        technologies: ["JS", "Node", "react", "express", "mongoDB"],
    },
    {
        id: 2,
        images: ["image_1.png"],
        name: "Laravel Image Board",
        description: "Basic image board using only laravel since writting react all day gets old. Create interesting and funny posts and interact with others. Please dont summon the third reich again or spamm it with dead animals.",
        repository: "github.com",
        homepage: "github.com",
        technologies: ["Laravel", "PHP"],

    },
    

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
            ).catch(e => /* alert("looks like the projects server is down :(") */console.log(e));
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