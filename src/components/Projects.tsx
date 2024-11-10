import { title } from 'process'
import React from 'react'
import Heading from './Heading';
import Card from './Card';

 const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "A Next.js & Typescript based app for managing and organizing your task efficiently.",
        img: "/todo.JPG",
        tags: ["Next.js" , "Node" , "CSS" , "Typescript"],
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: "A Next.js & Typescript powered website to track time with an interactive cowndown feature.",
        img: "/countdown.JPG",
        tags: ["Next.js" , "Node" , "CSS" , "Typescript"],
    },
    {
        id: 2,
        title: "Meme Generator",
        desc: "A Typescript powered meme generator using HTML and CSS ,designed for easy, personalzed meme creation n just a few clics.",
        img: "/meme.JPG",
        tags: ["HTML" , "Node" , "CSS" , "Typescript"],
    },
    {
        id: 3,
        title: "Analog Clock",
        desc: "A sleek analog clock crafted with HTML,CSS and Typescript, displayed real time hours,minutes, and seconds.",
        img: "/cardd.JPG",
        tags: ["HTML" , "Node" , "CSS" , "Typescript"],
    },
    {
        id: 4,
        title: "Card",
        desc: "A realistic debit card crafted with HTML and CSS, showcasing clean visuals and modern styling.",
        img: "/card.JPG",
        tags: ["HTML" , "CSS"],
    },
 ];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grig gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
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
