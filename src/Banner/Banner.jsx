import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({title,subtitle,text,className,csName,button,img}) => {
  return (
    <div className=' relative mb-52'>
    <div className={className}>
      <h2 className="text-4xl  font-bold text-center md:w-[1040px] mx-auto lg:w-3/4">{title} </h2>
        <p className=' w-3/4 mx-auto text-center text-white container'>{ subtitle}</p>
        <div className='flex items-center justify-center'><Link>{ button}</Link> </div>
      </div>
     
    <div className="border rounded-2xl p-6 absolute  bg-white bg-opacity-35  lg:left-1/4 -bottom-32 w-11/12 lg:top-80 lg:w-[650px] lg:h-[320px] mx-auto">
        
        <img className='w-full h-full rounded-2xl' src={img} alt="" />
      </div>

      
      
        
    </div>
  );
};

export default Banner;