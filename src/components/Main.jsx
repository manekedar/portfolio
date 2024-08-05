import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.pexels.com/photos/5077393/pexels-photo-5077393.jpeg" alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
          <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
              <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Kedar Mane</h1>
              <div className='flex flex-col items-center lg:flex-row lg:items-center'>
                {/* <img className='w-32 h-32 rounded-full absolute top-4 right-4 lg:top-8 lg:right-8' src="WhatsApp Image 2024-08-02 at 10.22.14 PM.jpeg" alt="Kedar Mane" /> */}
                <img className='w-32 h-32 rounded-full absolute top-10 right-50 lg:top-20 lg:right-100' src="WhatsApp Image 2024-08-02 at 10.22.14 PM.jpeg" alt="Kedar Mane" />
              <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                I'm a
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Coder',
        2000,
        'Tech Enthusiast',
        2000
      ]}
      wrapper="div"
      cursor={true}
      style={{ fontSize: '1em', paddingLeft:'5px' }}
      repeat={Infinity}
    />
              </h2>
            </div>
              <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                  <a href='https://x.com/kedarmane321' target='_blank' rel='noopener noreferrer'>
                          <FaTwitter className='cursor-pointer' size={20}/>
                  </a>

                  <a href='https://www.instagram.com/kedar_mane_321?utm_source=qr&igsh=MWpzanViYjc3YTV5bQ==' target='_blanl' rel='noopener noreferrer'>
                        <FaInstagram className='cursor-pointer' size={20}/>   
                  </a>

                  <a href='https://www.facebook.com/share/v3rL2FfHMNfD6572/?mibextid=qi2Omg' target='_blank' rel='noopener noreferrer'>
                  <FaFacebook className='cursor-pointer'  size={20} />
                  </a>
                
                 {/* <a href='https://www.linkedin.com/in/kedar%20mane' target='_blank' rel='noopener noreferrer '>
                         <FaLinkedin className='cursor-pointer' size={20}/>
                 </a> */}

                 <a href='https://www.linkedin.com/in/kedar-mane-20827b144' target='_blank' rel='noopener noreferrer '>
                         <FaLinkedin className='cursor-pointer' size={20}/>
                 </a>
                  
                 
              </div>
          </div>
        </div>
    </div>
  )
}

export default Main