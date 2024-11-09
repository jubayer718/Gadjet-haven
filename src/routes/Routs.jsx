import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Home/Home";
import Statistics from "../Statistics/Statistics";
import Dashboard from "../Dashboard/Dashboard";
import Category from "../Components/Category";
import ProductsCards from "../Components/ProductsCards";
import ProductsDetails from "../Components/ProductsDetails";
import WishProduct from "../Components/WishtProduct";
import ErrorPage from "../Components/ErrorPage";
import About from "../about/About";
// import ProductCart from "../Components/ProductCart";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../productsCategory.json'),
        children: [
          {
            path: "/",
            element: <ProductsCards></ProductsCards>,
            loader:()=>fetch('../products.json')
          },
          {
            path: "/category/:category",
            element: <ProductsCards></ProductsCards>,
            loader:()=>fetch('../products.json')
          }, {
        path:"/category/Tablet",
       element:<ErrorPage></ErrorPage>
      }], 
      },
      {
        path: '/category',
        element:<Category></Category>
      },

      ,{
        path: "/statistic",
        element: <Statistics></Statistics>,
        loader: () => fetch('../products.json'),
       
      },
      {
        path: "/about",
        element: <About></About>
      },

      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch('../products.json'),
         children: [

           {
            path: "wishProductCart",
            element:<WishProduct></WishProduct>
          }
        ],
        
      },{
        path: "/productsDetails",
        element: <ProductsDetails></ProductsDetails>,
       
       
      }, {
        path: "/productDetails/:product_id",
        element: <ProductsDetails></ProductsDetails>,
         loader: () => fetch('../products.json'),
        
      },
     
    ]
  },
]);
export default routes;



