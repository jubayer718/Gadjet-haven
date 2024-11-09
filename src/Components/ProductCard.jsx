import { Link, useLocation } from "react-router-dom";



const ProductCard = ({ product, handleRemove,handleWishCartRemove  }) => {
  

  const { product_title,
product_image,
    price,
   
    product_id,
description


  } = product;

 
  const { pathname } = useLocation()

  return (
    <div>
      {
        pathname==="/dashboard"?<div className=' relative  p-5'>
  <div className='hero-content bg-slate-200 rounded-xl flex-col justify-start lg:flex-row'>
    <img 
      src={product_image}
      className='w-52 h-52 rounded-lg shadow-2xl' />
    <div>
              <h1 className='text-xl font-bold'>{ product_title}</h1>
      <p className='py-6'>
       {description}
      </p>
              <p className='font-semibold'>Price: {price} $</p>
    </div>
          </div>
          
          <button  onClick={()=>handleRemove(product_id)} className='absolute top-10 right-24' ><img className= {`${pathname==="/dashboard"?'block w-10':'hidden'}`} src="https://img.icons8.com/?size=80&id=21067&format=png" alt="" /></button>
</div>

          
          : pathname==="/dashboard/wishProductCart" ?<div className=' relative  p-5'>
  <div className='hero-content bg-slate-200 rounded-xl flex-col justify-start lg:flex-row'>
    <img 
      src={product_image}
      className='w-52 h-52 rounded-lg shadow-2xl' />
    <div>
              <h1 className='text-xl font-bold'>{ product_title}</h1>
      <p className='py-6'>
       {description}
      </p>
              <p className='font-semibold'>Price: {price} $</p>
    </div>
          </div>
          
          <button  onClick={()=>handleRemove(product_id)} className='absolute top-10 right-24' ><img className= {`${pathname==="/dashboard"?'block w-10':'hidden'}`} src="https://img.icons8.com/?size=80&id=21067&format=png" alt="" /></button>
</div>
  :

          
<div className='card card-compact bg-base-100 border p-2 mt-2 h-[370px]'>
            <div className='flex flex-col'>
               <figure className=' w-full h-40 overflow-hidden'>
    <img className=' h-full'
      src={product_image}
      alt={product_title} />
            </figure>
            

  <div className='p-4 '>
       
           <h2 className='text-lg font-bold '>Name: { product_title}</h2>
        <p>price: {price} $</p>
    <div className='card-actions mt-5'>
          <Link to={`/productDetails/${product_id}`}>
            <button className='btn text-violet-500 border-violet-500'>View Details</button>
</Link>
          </div>
      
            </div>
 </div>
            

</div>
      }
    </div>
  );
};

export default ProductCard;