import React from 'react';
import {NavLink, Outlet, useLoaderData } from 'react-router-dom';
import Category from '../Components/Category';
import Banner from '../Banner/Banner';
import Heading from '../Components/Heading';
import { Helmet } from 'react-helmet';

const Home = () => {
  const productsCategory = useLoaderData();

 
  return (
    <div className=''>

      <Helmet><title>
      Home
      </title></Helmet>
      {/* Banner */}
      <Banner title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} button={<NavLink to="/dashboard" ><button className='bg-white text-black px-8 py-4 rounded-full font-semibold'> Shop Now</button></NavLink> } className={'relative space-y-6 w-11/12 mx-auto px-5 rounded-b-xl bg-purple-600 text-white pt-12 pb-52'} img={"https://i.ibb.co.com/sP98Pzn/banner.jpg"}></Banner>
      {/* heading */}
      <Heading title={"Explore Cutting-Edge Gadgets"}></Heading>
      <div className=' flex flex-col lg:flex-row items-center gap-6 w-11/12 mx-auto'>
         <Category categories={productsCategory}></Category>
      <Outlet></Outlet>
     </div>
    
    
    </div>
  );
};

export default Home;

