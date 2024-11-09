import React from 'react';

const Heading = ({ title, subtitle }) => {
 
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-12">{ title}</h1>
    </div>
  );
};

export default Heading;