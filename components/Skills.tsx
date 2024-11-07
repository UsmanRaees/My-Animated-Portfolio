import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-30 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>I work on the latest state of the art technologies.</h2>
                <p className='text-gray-300 font-serif font-semibold pt-4 text-lg'>I have accumulated a wealth of experience in web development, with a strong foundation in HTML, CSS, and JavaScript. I have honed my skills in web development by creating responsive and visually appealing web interfaces using HTML and CSS. My proficiency in JavaScript extends to developing interactive and dynamic web applications. Furthermore, I have demonstrated expertise in React and Next.js frameworks to build sophisticated, high-performance applications with seamless user experiences. Additionally, I have actively pursued further knowledge in complementary technologies to broaden my skill set, allowing me to make substantial and effective contributions to project.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 font-bold text-3xl sm:text-3xl pl-3 space-y-4' data-aos="zoom-in-up">
                   <div className='space-y-2 mt-4'>
                        <h2 data-aos="zoom-in-up" className='text-orange-400'>Html</h2>
                        <FaHtml5 data-aos="zoom-in-up"/>
                        <h2 data-aos="zoom-in-up" className='dark:text-sky-600'>Css</h2>
                        <IoLogoCss3 data-aos="zoom-in-up"/>
                        <h2 data-aos="zoom-in-up" className='text-yellow-600'>JavaScript</h2>
                        <RiJavascriptFill data-aos="zoom-in-up"/>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up" className='text-sky-600'>TypeScript</h2>
                        <BiLogoTypescript data-aos="zoom-in-up"/>
                        <h2 data-aos="zoom-in-up" className='text-sky-400'>React.js</h2>
                        <GrReactjs data-aos="zoom-in-up"/>
                        <h2 data-aos="zoom-in-up" className='text-white'>Next.js</h2>
                        <RiNextjsFill data-aos="zoom-in-up"/>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up" className='text-white'>Three.js</h2>
                        <TbBrandThreejs data-aos="zoom-in-up"/>
                        <h2 data-aos="zoom-in-up" className='text-sky-800'>Tailwind</h2>
                        <RiTailwindCssFill data-aos="zoom-in-up"/>
                        <h2 data-aos="zoom-in-up" className='text-green-600'>Node.js</h2>
                        <RiNodejsLine data-aos="zoom-in-up"/>
                        <h2 data-aos="zoom-in-up" className='text-green-600'>ShadcnUi</h2>
                        <SiShadcnui data-aos="zoom-in-up"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
