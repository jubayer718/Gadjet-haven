// get all product from local storage

import toast from "react-hot-toast"

const getProductCart = () => {
  const getAllCart = localStorage.getItem('ProductCart')
  if (getAllCart) {
    const parseCard = JSON.parse(getAllCart)
   
    return parseCard
  
  } else {
    
    return []
}
}



// add a product to local storage

const addToCart = (product) => {
 
  const productArr = getProductCart();
const isExist = productArr.find(item=>item.product_id==product.product_id)
if(isExist) return toast.error('this product already exist');


  productArr.push(product)
  

  localStorage.setItem('ProductCart',JSON.stringify(productArr))
   toast.success('Successfully added')
}


//  remove a product local storage
const removeProduct = id => {
  const getAllCart = getProductCart()
  const remainingCart = getAllCart.filter(item => item.product_id !== id);
  
  localStorage.setItem('ProductCart',JSON.stringify(remainingCart))
   toast.success('Successfully Removed')

}


export { removeProduct, addToCart, getProductCart }




// wishlist functionality start


const getWishProductCart = () => {
  const getAllCart = localStorage.getItem('WishCart')
  if (getAllCart) {
    const parseCard = JSON.parse(getAllCart)
   
    return parseCard
  
  } else {
    
    return []
}
}



// add a product to local storage

const addToWishCart = (product) => {
 
  const productArr = getWishProductCart();
const isExist = productArr.find(item=>item.product_id==product.product_id)
if(isExist) return toast.error('this product already exist');


  productArr.push(product)
  

  localStorage.setItem('WishCart',JSON.stringify(productArr))
   toast.success('Successfully added')
}


//  remove a product local storage
const removeWishProduct = id => {
  const getAllCart = getProductCart()
  const remainingCart = getAllCart.filter(item => item.product_id !== id);
  
  localStorage.setItem('WishCart',JSON.stringify(remainingCart))
   toast.success('Successfully Removed')

}


export  {removeWishProduct ,addToWishCart, getWishProductCart}
