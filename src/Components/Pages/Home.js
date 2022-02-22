import React from "react";
import CarosalContainer from "../CarosalContainer";
import Home1 from "../Home1";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "../Navbar/Navbar";
const Home=()=>{
  return (
   <div className="c">
     <div class="homenav">
     <Navbar/>
     </div>
     <div className="c1">
     <CarosalContainer/>
     </div>
      <Home1/>
     
   </div>
  );
}
export default Home;