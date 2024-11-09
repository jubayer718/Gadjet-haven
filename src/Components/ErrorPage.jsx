import React from 'react';
import { useLocation } from 'react-router-dom';

const ErrorPage = () => {
  const {pathname}=useLocation()
  return (
    <div>
      <h1 className={`${pathname==="/category/Tablet "?'text-5xl font-bold text-purple-600':"text-5xl font-bold text-purple-600 my-12 text-center" }`}>No Data Found!!!</h1>
    </div>
  );
};

export default ErrorPage;