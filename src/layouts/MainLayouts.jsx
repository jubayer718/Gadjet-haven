import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import Banner from "../Banner/Banner";


const MainLayouts = () => {
  return (
    <div >
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Banner */}
     
      {/* Dynamic part */}
      <Outlet></Outlet>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;