import React from 'react';

const Footer = () => {
  return (
    <footer className=" shadow-2xl bg-white p-10">
         <div className='space-y-3 flex flex-col items-center justify-center my-12'>
      <h3 className='text-2xl font-bold text-center'>Gadget Heaven</h3>
      <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>
<hr className='my-8'/>
      <div className='footer place-items-center'>
        <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover"> Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
        </nav>
       



  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>

    <a className="link link-hover">Careers</a>
        </nav>

  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of Service</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  </div>
</footer>
  );
};

export default Footer;