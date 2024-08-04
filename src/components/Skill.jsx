import React from 'react';
import { FaJava, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'Java SE/Java EE', icon: FaJava },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'MySQL/MongoDB', icon: FaDatabase },
  { name: 'HTML/CSS', icon: FaHtml5 },  // Using FaHtml5 for HTML/CSS, you can adjust if needed
  { name: 'JavaScript', icon: FaJs },
  { name: 'React JS', icon: FaReact }
];

const Skill = () => {
  return (
    <div id='skills' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Skills</h1>
      <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
        {skills.map((skill, index) => (
          <div key={index} className='flex items-center text-lg text-gray-700 border-2 rounded-lg p-3 border-gray-300'>
            <skill.icon className='text-green-500 mr-3' size={20} />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;



