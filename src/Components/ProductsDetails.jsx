import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { addToCart, addToWishCart} from '../utillitis';
import StarRatings from 'react-star-ratings';
import { Helmet } from 'react-helmet';




const ProductsDetails = () => {

  
  
   const [ratings, setRatings] = useState(4.5);

  const changeRating = (newRating) => {
    setRatings(newRating);
  };
 
  const data = useLoaderData();

  const { product_id } = useParams();

  const [product, setProducts] = useState([]);


  // console.log(product)
  

  const {rating, product_title, product_image, price,
    description,
    
    category,
    availability,
    Specification
  } = product
 
  //  const [disable,setDisable]=useState(false)
  

  useEffect(() => {
    const specificProduct = data.find((product) => product.product_id == product_id);
    setProducts(specificProduct);


  }, [data, product_id]);

  const handleAddToCart = (product) => {
    addToCart(product)
    
  }
  const handleAddWishProduct = (product) => {
    addToWishCart(product);
  }
  return (
    <div className=' relative mb-[500px] lg:mb-80  space-y-6 w-11/12 mx-auto px-5 rounded-b-xl bg-purple-600 text-white pt-12 pb-44'>
      <Helmet><title>
  Gadget Haven | Details 
  </title></Helmet>
  
      <h2 className="text-4xl  font-bold text-center md:w-[1040px] mx-auto lg:w-3/4">Product Details </h2>
        <p className=' w-3/4 mx-auto text-center text-white container'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
       
  
     
    <div className=' flex flex-col lg:flex-row items-center gap-5 border rounded-2xl p-6 absolute bg-white  lg:left-40 w-11/12 lg:top-50 lg:w-[750px] lg:h-[520px]'>
        
        <img className='   w-96 h-96 rounded-2xl' src={product_image} alt="" />

        <div className='space-y-2'>
          
        <h2 className='text-2xl font-bold text-black'>{product_title}</h2>
          <p className='font-semibold text-lg text-black'>Price: $ {price}</p>
          <div>
             {
            availability?<button className='bg-green-100 text-green-400 px-6 py-3 rounded-full'>In Stock</button>:<button className='bg-red-200 text-red-400 px-6 py-4 rounded-full'>Out Stock</button>
        }
          </div>
          <p className='text-gray-500'>{ description}</p>
          <div>
            <span className='font-bold text-lg mb-6 text-black'>Specification:</span>
            {
              Specification && Specification.map((i, idx) => (<p className='text-gray-400'><span className='text-gray-400 mr-3' key={idx}>{ idx+1}</span>{ i}</p>))
           }
          
          </div>  
          
          <p className='flex items-center gap-4'>
            <span className='text-black font-bold '>Rating:</span>
            {/* rating st */}
            {/* <div className="rating ">
  <input type="radio" name="rating-2" className="mask mask-star-2 w-5  bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2  w-5  bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2  w-5   bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2  w-5  bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2  w-5  bg-orange-400" />
</div> */}

            
            {/* React rating */}

            <StarRatings    rating={ratings}
        starRatedColor="gold"
        changeRating={changeRating}
        numberOfStars={5}
        starDimension="24px"
        starSpacing="4px"/>
              
      
          {/* rating En */}
            <span className='text-black bg-gray-200 rounded-full px-4 py-2'>{ ratings}</span>
          </p>
          <div className='flex items-center gap-5'>
            <button
            //  disabled={disable}
              onClick={() => handleAddToCart(product)} className='flex gap-3 items-center bg-purple-600 px-6 py-4 rounded-full'>Add To Card <FiShoppingCart /></button> 
            <button onClick={() => handleAddWishProduct(product)} className='bg-gray-100 p-5 rounded-full text-black'><FaRegHeart /></button>
        </div>
</div>

      </div>

      
      
        
    </div>
  );
};

export default ProductsDetails;



/* 
<div>
      <Banner title={'Product Details'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} className={'relative space-y-6 w-11/12 mx-auto px-5 rounded-b-xl bg-purple-600 text-white pt-12 pb-52'} img={product.product_image}></Banner>
    </div>
     */