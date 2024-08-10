import React from 'react'
import ProjectItem from './ProjectItem'
import Image3 from '../assets/Image 3.png'
import Image4 from '../assets/Image 4.png'
import Image5 from '../assets/Image 5.png'
import Image6 from '../assets/Image 6.jpeg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-8 dark:text-white'>Projects</h1>
        <p className='text-center mb-8 dark:text-white'>
          Here are some of the projects I have worked on, showcasing my skills in web development using ReactJS and other modern web technologies.
        </p>
        <div className='grid sm:grid-cols-2 gap-8'>
            <ProjectItem img={Image3} title='Amazon' link='https://clone-challenge-d6071.web.app/' />
            <ProjectItem img={Image4} title='Twitter' link='https://twitter-clone-frh1.onrender.com/login' />
            <ProjectItem img={Image5} title='ChatApp' link='https://chat-app-rkif.onrender.com/' />
            <ProjectItem img={Image6} title='Mutual Find' link='/' />
        </div>
    </div>
  )
}

export default Projects

