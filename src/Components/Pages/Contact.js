import React from "react";
import CarosalContainer from "../CarosalContainer";
import Home1 from "../Home1";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "../Navbar/Navbar";
const Contact=()=>{
  const changes=()=>{
    var nav=document.getElementById("kkk");
    var men=document.getElementById("ggg");
    
    let k=window.scrollY;
    if(k>500)
    {
     nav.classList.add("hhh");
     men.classList.add("jjj");
     console.log("jai");
    }
    else
    {
     nav.classList.remove("hhh");
     men.classList.remove("jjj");
    }
}
 window.addEventListener('scroll',changes); 
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
export default Contact;