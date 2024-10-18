import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-30 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>I worked on the latest state of the art technologies.</h2>
                <p className='text-gray-500 pt-4 text-lg'>I have accumulated a wealth of experience in web development, with a strong foundation in HTML, CSS, and JavaScript. I have honed my skills in web development by creating responsive and visually appealing web interfaces using HTML and CSS. My proficiency in JavaScript extends to developing interactive and dynamic web applications. Furthermore, I have demonstrated expertise in React and Next.js frameworks to build sophisticated, high-performance applications with seamless user experiences. Additionally, I have actively pursued further knowledge in complementary technologies to broaden my skill set, allowing me to make substantial and effective contributions to project initiatives.</p>
            </div>
            <div>
                <div className='grid grid-cols-3 text-accent text-3xl sm:text-4xl pl-5' data-aos="zoom-in-up">
                   <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">HTML</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">JavaScript</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">TypeScript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Three.js</h2>
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills