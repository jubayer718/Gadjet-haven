import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Category = ({ categories }) => {


  const navigate = useNavigate()

const {pathname}=useLocation()

  return (
    <div className=' '>
      <div className=''>
        <div className='lg:w-[224px]  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-7 p-6 rounded-lg border bg-slate-50 '>
          <button onClick={()=>navigate('/')} className={` ${pathname==="/"?'bg-purple-600 text-white p-6 rounded-full font-semibold text-center':'bg-slate-200 p-6 rounded-full font-semibold text-center'}`}>All Product</button>
            {
          categories.map(category =>  (<NavLink to={`/category/${category.category}`} key={category.category}   className={({isActive})=>` ${isActive ?'bg-purple-600 text-white p-6 rounded-full font-semibold text-center':'bg-slate-200 p-6 rounded-full font-semibold text-center'}`}>{ category.category}</NavLink>))
        }
       </div>

      </div>
    </div>
  );
};

export default Category;