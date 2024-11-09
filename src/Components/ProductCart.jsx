// import React, { useEffect, useState } from 'react';
// import { Link, NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom';
// import { getProductCart, getWishProductCart, removeProduct, removeWishProduct } from '../utillitis';
// import ProductCard from '../Components/ProductCard';
// import Navbar from '../navbar/Navbar';


// const ProductCart = () => {
//   const [products, setProduct] = useState([]);
  
  
  

//   const handleSort = (sortBy) => {
//     if (sortBy === 'price') {
//       const sorted = [...products].sort((a, b) => b.price - a.price);
//       setProduct(sorted);
//   }
// }

  
 

 
 

//   useEffect(() => {
//     const getAllProduct = getProductCart();
   
//     setProduct(getAllProduct);
 
    
   
   
//   }, [])
  
//   const [totalPrice, setTotalPrice] = useState(0);

//   const getAllProduct = getProductCart();
//   useEffect(() => {
//     // Calculate total price using reduce
//     const total = getAllProduct.reduce((acc, product) => acc + product.price, 0);
//     setTotalPrice(total); // Set the total price in state
//   }, [getAllProduct]); // Dependency on products
  
  

//   const handleRemove = id => {
//     removeProduct(id);
//     const productRm = getProductCart();
//     setProduct(productRm);
     
//   }
//   const handleParses = () => {
    
//     document.getElementById('my_modal_1').showModal()
    
//      localStorage.removeItem('ProductCart');
    
//     // useEffect(() => {
//     //   setProduct([])
//     // },[setProduct])
//   }
//   return (
//     <div>
//        <div className='flex items-center justify-between my-12 w-11/12 mx-auto'>
//         <h3 className="text-2xl font-bold">Cart</h3>
//         <div className='flex items-center gap-5'>
//           <p className="text-2xl font-bold ">Total Cost: { totalPrice.toFixed(2)}</p>         
//        <button onClick={()=>handleSort('price')} className="hover:bg-purple-600 hover:text-white font-bold px-6 py-3 rounded-full border border-purple-600 text-purple-600 duration-300">  Sort By Price  </button>
//           <button onClick={()=>handleParses()} className="hover:bg-purple-600 hover:text-white font-bold px-6 py-3 rounded-full border border-purple-600 text-purple-600 duration-300">  Parses  </button>
          
//           {/* Open the modal using document.getElementById('ID').showModal() method */}
// {/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
// <dialog id="my_modal_1" className="modal">
//             <div className="modal-box space-y-3">
//              <div className='flex items-center justify-center'>  <img className='w-10 h-10' src="https://i.ibb.co.com/zxSLZ6W/Group.png" alt="" /></div>
//               <h3 className="font-bold text-lg text-center">Payment Successfully</h3>
//               <hr />
//     <p className="text-center">Thanks for purchasing</p>
//               <p className="text-center font-semibold">Total: { totalPrice.toFixed(2)}</p>
//     <div className="">
//       <form method="dialog">
//         {/* if there is a button in form, it will close the modal */}
// <Link to='/'>        <button className="btn w-full rounded-full">Close</button>
// </Link>

//                 </form>
//     </div>
//   </div>
// </dialog>
       
//         </div>
//       </div>
//  <div className=" w-full ">
//          {
//         products.map(product=><ProductCard handleRemove={handleRemove} key={product.product_id} product={product}></ProductCard>)
//         }
     
//       </div>
//     </div>
//   );
// };

// export default ProductCart;