import React from 'react';
import { NavLink, useLoaderData, useLocation } from 'react-router-dom';
import Banner from '../Banner/Banner';
import BarChart from '../Components/BarChart';
import { Helmet } from 'react-helmet-async';










const Statistics = () => {

 
  const data = useLoaderData()
  // const barData=data
  
//   const chartData=data[0]
//   console.log(chartData)
  // const {price,product_title}=chartData
  




  const { pathname } = useLocation()
  



  return (
    <div>
       <Helmet>
    <title>
     Gadget Haven | Statistics
    </title>
  </Helmet>
   
      <div className='bg-purple-600 py-12 space-y-5'>
    <h1 className='text-center text-4xl font-bold text-white my-5'>Statistics</h1>
        <p className='text-center text-gray-200 my-5 w-3/4 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

      </div>
     
      <div className='  w-11/12 my-12'>
    <BarChart></BarChart>
      </div>
    </div>
  );
};

export default Statistics;