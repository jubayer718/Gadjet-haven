
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart  } from "react-icons/ti";
import { useEffect, useState } from 'react';
import { getProductCart } from '../utillitis';

const Navbar = () => {
  const {pathname} = useLocation();
 
  const getAllProduct = getProductCart();
  
  const [update, setUpdate] = useState([]);
 
  useEffect(() => {
  setUpdate(getAllProduct)
},[])

  return (
   <div className={pathname==='/'?"  bg-purple-600 w-11/12 rounded-t-xl mt-5 mx-auto":"  w-11/12  mt-5 mx-auto"}>
      <div className='navbar px-5'>
         <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
     <NavLink className={({isActive})=>`${isActive||pathname=="/"?'font-bold text-black py-2 px-5 ':'text-black'}`} to="/">Home</NavLink>
 <NavLink className={({isActive})=>`${isActive?'font-bold text-black py-2 px-5 ':'text-black'}`} to="/statistic">Statistics</NavLink>
              <NavLink className={({ isActive }) => `${isActive ? 'font-bold text-black py-2 px-5 ' : 'text-black'}`} to="/dashboard">Dashboard</NavLink>
              <NavLink className={({isActive})=>`${isActive?'font-bold text-black py-2 px-5 ':'text-black'}`} to="/about">About</NavLink>
      </ul>
    </div>
    <Link to='/' className={pathname==="/"?'btn btn-ghost text-xl  text-white':'btn btn-ghost text-xl text-black'}>Gadget Heaven</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex items-center justify-center gap-3 text-white">
<NavLink className={({isActive})=>`${isActive||pathname=="/"?'font-bold text-white py-2 px-5 ':'text-black'}`} to="/">Home</NavLink>
 <NavLink className={({isActive})=>`${isActive?'font-bold text-black py-2 px-5 ':'text-black'}`} to="/statistic">Statistics</NavLink>
<NavLink className={({isActive})=>`${isActive?'font-bold text-black py-2 px-5 ':'text-black'}`} to="/dashboard">Dashboard</NavLink>
<NavLink className={({isActive})=>`${isActive?'font-bold text-black py-2 px-5 ':'text-black'}`} to="/about">About</NavLink>
 
    </ul>
  </div>
  <div className="navbar-end">
        <div className=' flex items-center gap-5'>
            <span className='bg-white rounded-full p-3 relative'> <TiShoppingCart />
        <span className='absolute -top-0 -right-0'>{ update.length}</span>
            </span>
          <span  className='bg-white rounded-full p-3'><FaRegHeart /></span>
   </div>
  </div>
 </div>
</div>
  );
};

export default Navbar;