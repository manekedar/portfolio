import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year:2023,
        title: 'Frontend Developer',
        duration:"1 year",
        details:"I am still working in Revolution It solution as a front-end developer."
    },
    {
        year:2023,
        title: 'Content creator',
        duration:"1 year",
        details:"I am still working in Revolution It solution as a front-end developer as well as Content Creator."
    },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} year = {item.year} title={item.title} duration={item.duration} details={item.details}/>
            ))}
    </div>
  )
}

export default Work