import React, { useEffect, useState } from 'react';
import { getWishProductCart, removeWishProduct } from '../utillitis';
import { useLoaderData, useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';

const WishProduct = () => {
  const [products, setProduct] = useState([]);
  
  useEffect(() => {
    const getAllProduct = getWishProductCart();
   
    setProduct(getAllProduct);
 
  }, [])
   const handleWishCartRemove = id => {
    removeWishProduct(id);
    const productRemaining = getWishProductCart();
setProduct(productRemaining)
  }


  const {pathname}=useLocation()
  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='text-3xl font-bold my-8'>Wishlist</h2>
    <div className={`${pathname==="/dashboard/wishProductCart"?'block':'hidden'}`}>
         {
           products.map(product=><ProductCard handleWishCartRemove={handleWishCartRemove} key={product.product_id} product={product}></ProductCard>)
          }
     
      </div>
    </div>
  );
};

export default WishProduct;