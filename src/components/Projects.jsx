// import React from 'react'
// import ProjectItem from './ProjectItem'
// import Image3 from '../assets/Image 3.png'
// import Image4 from '../assets/Image 4.png'
// import Image5 from '../assets/Image 5.png'
// import Image6 from '../assets/Image 6.jpeg'

// const Projects = () => {
//   return (
//     <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
//         <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
//         <p className='text-center py-8'>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas modi pariatur soluta laboriosam eaque tempora doloremque illum sunt corrupti quae distinctio placeat, dolores consequatur voluptatibus. Sint illo iure ipsum nisi.
//         </p>
//          <div className='grid sm:grid-cols-2 gap-12'>
//                  <ProjectItem img={Image3} title='Amazon'/>
//                  <ProjectItem img={Image4} title='Twitter'/>
//                  <ProjectItem img={Image5} title='ChatApp'/>
//                  <ProjectItem img={Image6} title='Mutual Find'/>
//          </div>
//     </div>
//   )
// }

// export default Projects

import React from 'react'
import ProjectItem from './ProjectItem'
import Image3 from '../assets/Image 3.png'
import Image4 from '../assets/Image 4.png'
import Image5 from '../assets/Image 5.png'
import Image6 from '../assets/Image 6.jpeg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
        Here are some of the projects I have worked on, showcasing my skills in web development using React and other modern web technologies.
        </p>
         <div className='grid sm:grid-cols-2 gap-12'>
                 <ProjectItem img={Image3} title='Amazon' link='https://clone-challenge-d6071.web.app/'/>
                 <ProjectItem img={Image4} title='Twitter' link='https://twitter-clone-frh1.onrender.com/login'/>
                 <ProjectItem img={Image5} title='ChatApp' link='https://chat-app-rkif.onrender.com/'/>
                 <ProjectItem img={Image6} title='Mutual Find' link='/'/>
         </div>
    </div>
  )
}

export default Projects