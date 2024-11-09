import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';


const ProductsCards = () => {
  const data = useLoaderData();
  const { pathname } = useLocation()
 
 
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  const page = "/";

  useEffect(() => { 

    if (category) {
      const productByCategory = [...data].filter((product) => product.category === category);
    
      setProducts(productByCategory);
    }
    
    else  {
      const sliceData = data.slice(0, 9);
      setProducts(sliceData);
  }
},[data,category])
  return (
    <div className={pathname=="/dashboard"?'grid grid-cols-1' :'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
      {
        products.map((product)=><ProductCard key={product.id} product={product}></ProductCard>)
      }
    </div>
  );
};

export default ProductsCards;