import React from 'react';
// import { Bar, BarChart as BrChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Bar,
  Scatter,
  ResponsiveContainer
} from 'recharts';
const BarChart = () => {
 const barData=[
  { product_title: "iPhone14Pro", price: 999.99, rating: 4.9 },
  { product_title: "MacBookPro16", price: 2499.99, rating: 4.8 },
  { product_title: "AirPodsPro", price: 249.99, rating: 4.7 },
  { product_title: "WirelessCharger", price: 59.99, rating: 4.5 },
  { product_title: "PowerBank", price: 55.99, rating: 4.6 },
  { product_title: "Charging", price: 55.99, rating: 4.6 },
  { product_title: "USB-CAdapter", price: 52.99, rating: 4.3 },
  { product_title: "AppleWatch", price: 399.99, rating: 4.8 },
  { product_title: "USB-CCharger", price: 50.99, rating: 4.5 },
  { product_title: "SlimPowerBank", price: 53.99, rating: 4.4 },
  { product_title: "DellXPS13", price: 1299.99, rating: 4.7 },
  { product_title: "HPSpectreX360", price: 1599.99, rating: 4.8 },
  { product_title: "GalaxyS23Ultra", price: 1199.99, rating: 4.9 },
  { product_title: "GooglePixel", price: 899.99, rating: 4.7 },
  { product_title: "LenovoThinkPad", price: 1499.99, rating: 4.6 },
  { product_title: "OnePlus", price: 799.99, rating: 4.6 },
  { product_title: "XiaomiMi12Pro", price: 849.99, rating: 4.7 },
  { product_title: "iPhone13Mini", price: 699.99, rating: 4.8 },
  { product_title: "iPhone SE", price: 429.99, rating: 4.5 },
  { product_title: "SurfaceLaptop 4", price: 1299.99, rating: 4.7 },
  { product_title: "ASUSROGZephyrusG14", price: 1599.99, rating: 4.5 }
]


  return (
    <div>
     {/* <BrChart  width={1220} height={500} data={barData}>
    <XAxis dataKey="product_title" fontSize={12} stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#ccc' }} />
    <Legend width={70} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="price" fill="#8884d8" barSize={30} />
  </BrChart> */}
      

    <ResponsiveContainer width="105%" height={500}>
      <ComposedChart data={barData}>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="product_title"  fontSize={10} stroke="#8884d8"/>
        <YAxis />
        <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#ccc' }}/>
       
        {/* Area Chart for price */}
        <Area
          type="monotone"
          dataKey="price"
          fill="#8884d8"
          stroke="#8884d8"
          name="Price"
        />
        
        {/* Bar Chart for price */}
        <Bar
          dataKey="price"
          barSize={30}
          fill="#413ea0"
          name="Price"
        />
        
        {/* Scatter Plot for rating */}
        <Scatter
          name="Rating"
          dataKey="rating"
          fill="red"
          shape="cross"
        />
      </ComposedChart>
    </ResponsiveContainer>
  
    </div>
  );
};

export default BarChart;