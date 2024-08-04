// import React from 'react'
// import QualificationItem from './QualificationItem'

// const data = [
//     {
//         level : "PG Diploma",
//         stream : "Advanced Computing",
//         institute : "Sunbeam Infotech Private Ltd.",
//         board : "CDAC",
//         year : 2023,
//         percentage: 61.56 ,
//         division: II,
//  },
//  {
//         level : "BE",
//         stream : "Computer Science and Engineering",
//         institute : "Sanjeevan Engineering and Technology Institute,Panhala",
//         board : "Shivaji University",
//         year : 2017,
//         percentage: 70.56 ,
//         division: I,
//  },

//  {
//         level : "XII",
//         stream : "Science",
//         institute : "Rajarshi Chatrapati Shahu Maharaj Jr.College,Kolhapur",
//         board : "Maharashtra State Board",
//         year : 2011,
//         percentage: 53.17 ,
//         division: II,
//  },
//  {
//         level : "X",
//         stream : "General",
//         institute : "Shri Hanuman Highschool,Kerle",
//         board : "Maharashtra State Board",
//         year : 2009,
//         percentage: 63.23 ,
//         division: I,
//  }
// ]
// const Qualificaton = () => {
//   return (
//     <div id='qualification' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
//           <h1 className='text-4xl font-bold text-center text-[#001b5e] '>Qualification</h1>
//         <div className='overflow-x-auto mt-8'>
//              <table className='min-w-full bg-white border border-gray-300'>
//                  <thead>
//                       <tr>
//                           <th className='py-2 px-4 border-b'>Level</th>
//                           <th className='py-2 px-4 border-b'>Stream</th>
//                           <th className='py-2 px-4 border-b'>Institute</th>
//                           <th className='py-2 px-4 border-b'>Board</th>
//                           <th className='py-2 px-4 border-b'>Year</th>
//                           <th className='py-2 px-4 border-b'>Percentage</th>
//                           <th className='py-2 px-4 border-b'>Division</th>
//                       </tr>
//                  </thead>
//                  <tbody>
//                      {data.map((item,idx) => (
//                         <QualificationItem key={idx} level={item.level} stream={item.stream} institute={item.institute} board={item.board} year={item.year} percentage={item.percentage} division={item.division}/>
//                      ))}
//                  </tbody>
//              </table>
//         </div>
//     </div>
//   )
// }

// export default Qualificaton

import React from 'react';
import QualificationItem from './QualificationItem';

const data = [
    {
        level: "PG Diploma",
        stream: "Advanced Computing",
        institute: "Sunbeam Infotech Private Ltd.",
        board: "CDAC,GOI",
        year: 2023,
        percentage: 61.56,
        division: "II",
    },
    {
        level: "BE",
        stream: "Computer Science and Engineering",
        institute: "Sanjeevan Engineering and Technology Institute, Panhala",
        board: "Shivaji University",
        year: 2017,
        percentage: 70.56,
        division: "I",
    },
    {
        level: "XII",
        stream: "Science",
        institute: "Rajarshi Chatrapati Shahu Maharaj Jr. College, Kolhapur",
        board: "Maharashtra State Board",
        year: 2011,
        percentage: 53.17,
        division: "II",
    },
    {
        level: "X",
        stream: "General",
        institute: "Shri Hanuman Highschool, Kerle",
        board: "Maharashtra State Board",
        year: 2009,
        percentage: 63.23,
        division: "I",
    }
];

const Qualification = () => {
    return (
        <div id='qualification' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Qualifications</h1>
            <div className="overflow-x-auto mt-8 shadow-lg rounded-lg">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className='bg-gray-200 text-gray-600'>
                            <th className="py-2 px-4 border-b">Level</th>
                            <th className="py-2 px-4 border-b">Stream</th>
                            <th className="py-2 px-4 border-b">Institute</th>
                            <th className="py-2 px-4 border-b">Board</th>
                            <th className="py-2 px-4 border-b">Year</th>
                            <th className="py-2 px-4 border-b">Percentage</th>
                            <th className="py-2 px-4 border-b">Division</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, idx) => (
                            <QualificationItem
                                key={idx}
                                level={item.level}
                                stream={item.stream}
                                institute={item.institute}
                                board={item.board}
                                year={item.year}
                                percentage={item.percentage}
                                division={item.division}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Qualification;
