import React from 'react';
import { Helmet } from 'react-helmet-async';


const About = () => {
  return (
    <div>

      <Helmet>
        <title>
        Gadget Haven | About
        </title>
      </Helmet>
      <div className='bg-purple-600 py-12 space-y-5'>
    <h1 className='text-center text-5xl font-bold text-white my-5'>About</h1>
        <p className='text-center text-gray-200 my-5 w-3/4 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

      </div>


      <div className='my-12 space-y-2'>

              <div className="collapse collapse-arrow bg-base-200 ">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">1. What is the return policy for products?</div>
  <div className="collapse-content">
    <p>We offer a 30-day return policy on most products. If you're not satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Some exclusions may apply, so please check the product page for specific details.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">2. How can I track my order?</div>
  <div className="collapse-content">
    <p> Once your order is shipped, you'll receive a tracking number via email. You can use this tracking number on our website or the carrier's site to track the status of your delivery.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">3. Can I change my order after it’s placed?</div>
  <div className="collapse-content">
    <p>Unfortunately, we are unable to modify or cancel orders once they have been placed. However, you can initiate a return once the product arrives.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">4. Is my personal information safe?</div>
  <div className="collapse-content">
    <p>Yes, we take your privacy and security seriously. All transactions are encrypted, and we never share your personal information with third parties. Please refer to our Privacy Policy for more details.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">5. What if the product I want is out of stock?</div>
  <div className="collapse-content">
    <p>If an item is out of stock, you can sign up for notifications on the product page. We'll send you an email when it’s available again.</p>
  </div>
</div>
      </div>
    </div>
  );
};

export default About;