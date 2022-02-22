import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import seo from '../Images/seo.jpg'
import dig from '../Images/dig.jpg'
import google from '../Images/google.jpg'
import server from '../Images/server.jpg'
import consulting from '../Images/consulting.jpg'
import ecommerce from '../Images/ecommerce.jpg'
import CarosalContainer from "../CarosalContainer";
import Navbar from '../Navbar/Navbar';
import '../Pages/About.css';
import vision from '../Images/vision.png';
import mission from '../Images/mission.png';
import goals from '../Images/goals.png';
import microsoft from '../Images/about/logos/microsoft.png';
import apple from '../Images/about/logos/apple.jpeg';
import google1 from '../Images/about/logos/google1.png';
import intel from '../Images/about/logos/intel.png';

import oracle from '../Images/about/logos/honda.png';
import CarosalContact from '../Pages/CarosalContact';
const About=()=>{
  useEffect(()=>{
    Aos.init();
  },[])
  
  return (
  <div class="about">
    <div class="homenav">
    <Navbar/>
    </div>
    <div className="c1">
     <CarosalContact/>
     </div>
    <br></br>

    <div class="container">
     <div class="row">
       <div class="col-md-12" data-aos="fade-left" data-aos-offset="100"><span class="what1">About </span> <span class="what"> us</span></div>
     </div>
     <br></br>
     <div class="row">
       <div class="col-md-12">
         <div class="card" data-aos="fade-right" data-aos-offset="200">
           <div class="card-body " style={{lineHeight:"35px"}}>
       IUC TECH Established in the year 1997,We are pioneer in Web Development, Mobile Apps,Web designing,eCommerce, enterprise and Other services. We strive for the betterment of our Products. We know the real time requirments would be very different and challenging, we try our best to bridge the gap. We constantly upgrade ourselves, implement new ideas, revise curriculum and constantly work on the feedback. To make it easier for you at IUC Computers at Chennai is visualizing all the materials you want.
          </div>
       </div>
       </div>
     </div>
     <br></br><br></br>
     <div class="row">
       <div class="col-md-12">
         <div class="row">
           <div class="col-md-4 g11">
             <div class="row">
               <div class="col-md-4 offset-4 g11">
                <img src={vision}  class="vis"></img>
               </div>
             </div>
             <br></br>
             <div class="row">
               <div class="col-md-1 g11"></div>
               <div class="col-md-11 g11" data-aos="flip-left" data-aos-duration="1000" style={{lineHeight:"35px"}}>
               To make it easier for you at IUC Computers at Chennai is visualizing all the materials you want.Our goal is to provide both a superior customer experience and tremendous value for our customers.
                </div>
             </div>
           </div>


           <div class="col-md-4 g11">
             <div class="row">
               <div class="col-md-4 offset-4 g11">
               <img src={mission}  class="vis"></img>
               </div>
             </div>
             <br></br>
             <div class="row">
               <div class="col-md-1 g11"></div>
               <div class="col-md-11 g11" data-aos="flip-up" data-aos-duration="1000" style={{lineHeight:"35px"}}>
               We know the real time requirments would be very different and challenging, we try our best to bridge the gap. We constantly upgrade ourselves, implement new idea and constantly work on the feedback.
                </div>
             </div>
           </div>


           <div class="col-md-4 g11">
             <div class="row">
               <div class="col-md-4 offset-4 g11">
               <img src={goals} class="vis"></img>
               </div>
             </div>
             <br></br>
             <div class="row">
               <div class="col-md-1 g11"></div>
               <div class="col-md-11 g11" data-aos="flip-right" data-aos-duration="1000" style={{lineHeight:"35px"}}>
               IUC TECH Established in the year 1997,We are pioneer in Web Development, Mobile Apps,Web designing,eCommerce, enterprise and Other services. We strive for the betterment of our Products.
                </div>
             </div>
           </div>
           
           
         </div>
       </div>
     </div>
     <br></br>
     <div class="row">
       <div class="col-md-12" data-aos="fade-right" data-aos-offset="100"><span class="what1">Our </span> <span class="what"> Clients</span></div>
     </div>
     <br></br>
     <div class="row">
       <div class="col-md-3 col-sm-3">
       <img src={microsoft} width="50%" height="100%"></img>
       </div>
       <div class="col-md-3 col-sm-3">
       <img src={google1} width="50%" height="100%"></img>
       </div>
       <div class="col-md-3 col-sm-3 ">
       <img src={oracle} width="50%" height="100%" style={{marginTop:"5px"}}></img>
       </div>
       <div class="col-md-3 col-sm-3">
       <img src={intel} width="50%" height="100%"></img>
       </div>
     </div>
     <br></br><br></br>
     <div class="row">
       <div class="col-md-12" data-aos="fade-right" data-aos-offset="100"><span class="what1">Other </span> <span class="what"> Services</span></div>
     </div>
     <br></br>
     <div class="row" >

       <div class="col-md-6">
         <div class="row" data-aos="zoom-in" data-aos-duration="2000">
         <div class="col-md-4">
           <div class="row">
            <img src={server} class="mis g11"></img>
            </div>
         </div>
         <div class="col-md-8">
            <div class="row ">
              <p class="g11" style={{lineHeight:"35px"}}>A server configuration defines a specific database as the repository for its data. To prevent corruption, that database can be associated with only one server configuration.</p>
              </div>
         </div>
         </div>
       </div>

       <div class="col-md-6">
       <div class="row" data-aos="zoom-in" data-aos-duration="3000">
         <div class="col-md-4" >
           <div class="row">
            <img src={ecommerce} class="mis g11"></img>
            </div>
         </div>
         <div class="col-md-8">
            <div class="row ">
              <p class="g11" style={{lineHeight:"35px"}}>We IUCTech is having more than 25 years experience in this field. In IUCTech E-Commerce facility is also there. You can buy,sell any electronic or computer related items with us.</p>
              </div>
         </div>
         </div>
       </div>
     </div>
     <br></br><br></br>

     <div class="row">
       
       <div class="col-md-6" data-aos="zoom-in" data-aos-duration="2000">
         <div class="row">
         <div class="col-md-4">
           <div class="row">
            <img src={dig} class="mis g11"></img>
            </div>
         </div>
         <div class="col-md-8">
            <div class="row ">
              <p class="g11" style={{lineHeight:"35px"}}>Digital marketing is the future for every  business. With social media you can easily promote your business and it helps to bring the clients.</p>
              </div>
         </div>
         </div>
       </div>
        
       <div class="col-md-6">
       <div class="row" data-aos="zoom-in" data-aos-duration="3000">
         <div class="col-md-4">
           <div class="row">
            <img src={seo} class="mis g11"></img>
            </div>
         </div>
         <div class="col-md-8">
            <div class="row " >
              <p class="g11" style={{lineHeight:"35px"}}>Search Engine Optimization is the most important thing in website. even you build a excellent website still it need some promotion to rank first in google.</p>
              </div>
         </div>
         </div>
       </div>
     </div>

     <br></br><br></br>

     
     <div class="row" data-aos="zoom-in" data-aos-duration="2000">
       
       <div class="col-md-6">
         <div class="row">
         <div class="col-md-4">
           <div class="row">
            <img src={google} class="mis g11"></img>
            </div>
         </div>
         <div class="col-md-8">
            <div class="row ">
              <p class="g11" style={{lineHeight:"35px"}}> Google My Business offers everything you need for a potential customer to find and use your services, buy your products or visit your business. </p>
              </div>
         </div>
         </div>
       </div>

       <div class="col-md-6">
       <div class="row" data-aos="zoom-in" data-aos-duration="3000">
         <div class="col-md-4">
           <div class="row">
            <img src={consulting} class="mis g11"></img>
            </div>
         </div>
         <div class="col-md-8">
            <div class="row ">
              <p class="g11" style={{lineHeight:"35px"}}>The advent of the internet has given a major boost to consulting businesses as consultants have gotten the opportunity to go global and provide their services online.</p>
              </div>
         </div>
         </div>
       </div>
     </div>
     <br></br><br/>


     </div>
  </div>
  );
}
export default About;