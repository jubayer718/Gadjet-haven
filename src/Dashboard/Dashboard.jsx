import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { getProductCart, getWishProductCart, removeProduct, removeWishProduct } from '../utillitis';
import ProductCard from '../Components/ProductCard';
import Navbar from '../navbar/Navbar';
import { Helmet } from 'react-helmet-async';


const Dashboard = () => {
 

  const [products, setProduct] = useState([]);
 
  
  

  const handleSort = (sortBy) => {
    if (sortBy === 'price') {
      const sorted = [...products].sort((a, b) => b.price - a.price);
      setProduct(sorted);
  }
}

  
 

 
 

  useEffect(() => {
    const getAllProduct = getProductCart();
   
    setProduct(getAllProduct);
 
  }, [])
  
  const [totalPrice, setTotalPrice] = useState(0);

  const getAllProduct = getProductCart();
  useEffect(() => {
    // Calculate total price using reduce
    const total = getAllProduct.reduce((acc, product) => acc + product.price, 0);
    setTotalPrice(total); // Set the total price in state
  }, [getAllProduct]); // Dependency on products
  
  

  const handleRemove = id => {
    removeProduct(id);
    const productRm = getProductCart();
    setProduct(productRm);
     
  }



 
 
  const handleParses = () => {
    
    document.getElementById('my_modal_1').showModal()
    
     localStorage.removeItem('ProductCart');
    
    // useEffect(() => {
    //   setProduct([])
    // },[setProduct])
  }
  const {pathname}=useLocation()
  return (
    <div>
       <Helmet>
    <title>
      Gadget Haven | Dashboard
    </title>
  </Helmet>
 
      <div className='bg-purple-600 py-12 space-y-5'>
    <h1 className='text-center text-4xl font-bold text-white my-5'>Dashboard</h1>
        <p className='text-center text-gray-200 my-5 w-3/4 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      <div  className='flex gap-5 items-center justify-center'>
       <NavLink to="/dashboard" className={`${pathname==="/dashboard/wishProductCart"?'px-6 py-3 rounded-full border-white text-white border':'text-purple-700 font-bold bg-white px-6 py-3 rounded-full '}`} >Cart</NavLink>

          <NavLink to="wishProductCart" className={({ isActive }) => `${isActive ? 'text-purple-700 font-bold bg-white px-6 py-3 rounded-full ' : 'px-6 py-3 rounded-full border-white text-white border'}`}>Wishlist</NavLink>

      </div>

      </div>

{/* {updatePrice.length}   */}
       <div className={`${pathname==="/dashboard"?'flex items-center justify-between my-12 w-11/12 mx-auto':'hidden'}`}>
        <h3 className="text-2xl font-bold">Cart</h3>
        <div className="flex items-center gap-5">
          <p className="text-2xl font-bold ">Total Cost: { totalPrice.toFixed(2)}</p>         
       <button onClick={()=>handleSort('price')} className="hover:bg-purple-600 hover:text-white font-bold px-6 py-3 rounded-full border border-purple-600 text-purple-600 duration-300">  Sort By Price  </button>
          <button onClick={()=>handleParses()} className="hover:bg-purple-600 hover:text-white font-bold px-6 py-3 rounded-full border border-purple-600 text-purple-600 duration-300">  Parses  </button>
          
          {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
<dialog id="my_modal_1" className="modal">
            <div className="modal-box space-y-3">
             <div className='flex items-center justify-center'>  <img className='w-10 h-10' src="https://i.ibb.co.com/zxSLZ6W/Group.png" alt="" /></div>
              <h3 className="font-bold text-lg text-center">Payment Successfully</h3>
              <hr />
    <p className="text-center">Thanks for purchasing</p>
              <p className="text-center font-semibold">Total: { totalPrice.toFixed(2)}</p>
    <div className="">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
<Link to='/'>        <button className="btn w-full rounded-full">Close</button>
</Link>

                </form>
    </div>
  </div>
</dialog>
       
        </div>
      </div>

        <Outlet></Outlet>

      <div className={`${pathname==="/dashboard"?'block':'hidden'}`}>
         {
           products.map(product=><ProductCard handleRemove={handleRemove} key={product.product_id} product={product}></ProductCard>)
          }
     
      </div>
      



   </div>
    
  );
};

export default Dashboard;