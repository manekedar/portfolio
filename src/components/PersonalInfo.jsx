import React from 'react';
import { FaBirthdayCake, FaFlag, FaLanguage, FaMale, FaPassport, FaBook, FaEnvelope, FaMobileAlt } from 'react-icons/fa';

const personalInfo = [
  { label: 'Date of Birth', value: '28/07/1993', icon: FaBirthdayCake },
  { label: 'Nationality', value: 'Indian', icon: FaFlag },
  { label: 'Languages Known', value: 'English, Hindi, Marathi', icon: FaLanguage },
  { label: 'Gender', value: 'Male', icon: FaMale },
  { label: 'Passport', value: 'Available', icon: FaPassport },
  { label: 'Mobile No.', value: '+918329265691', icon: FaMobileAlt },
  { label: 'Primary Mail', value: 'kedarmane321@gmail.com', icon: FaEnvelope },
  { label: 'Alternate Mail', value: 'kedarmane5691@gmail.com', icon: FaEnvelope },
  { label: 'Hobbies', value: 'Reading books and newspapers', icon: FaBook },

];

const PersonalInfo = () => {
  return (
    <div id='personal-info' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Personal Information</h1>
      <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
        {personalInfo.map((info, index) => (
          <div key={index} className='flex items-center text-lg text-gray-700 border-2 rounded-lg p-3 border-gray-300'>
            <info.icon className='text-orange-500 mr-3' size={24} />
            <span className='font-semibold'>{info.label}: </span>
            <span className='ml-2'>{info.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalInfo;
