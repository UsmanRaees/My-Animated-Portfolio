import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id: 0,
        title:"Todo-List",
        desc: "A React & TypeScript based app for managing and organizing your tasks efficiently.",
        img: "/img11.png",
        tags: ["React", "Node", "CSS", "TypeScript"],
    },
    {
        id: 1,
        title:"Countdown Timer",
        desc: "A Next.js and TypeScript powered website to track time with an interactive countdown feature.",
        img: "/img12.png",
        tags: ["Next.js", "Node", "CSS", "TypeScript"],
    },
    {
        id: 2,
        title:"Weather Widget",
        desc: "A Next.js and TypeScript based tool for fetching and displaying real-time wheather data.",
        img: "/img13.png",
        tags: ["Next.js", "Node", "CSS", "TypeScript"],
    },
    {
        id: 3,
        title:"Currency Converter",
        desc: "A simple HTML and TypeScript powered tool for converting currencies with real-time rates.",
        img: "/img13.png",
        tags: ["HTML", "Node", "CSS", "TypeScript"],
    },
    {
        id: 4,
        title:"Static Resume",
        desc: "A TypeScript based interactive resume built with HTML and CSS,allowing users to showcase their skills dynamically.",
        img: "/img14.png",
        tags: ["HTML", "Node", "CSS", "TypeScript"],
    },
    {
        id: 5,
        title:"Simple Calculator",
        desc: "A basic HTML CSS and TypeScript calculator for performing essential arithemetic operations.",
        img: "/img15.png",
        tags: ["HTML", "Node", "CSS", "TypeScript"],
    },

]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title={'My Projects'} />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-3 lg:grids-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>
  )
}

export default Projects