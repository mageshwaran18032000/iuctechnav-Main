import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Img from './Images/2.jpg';
import Card from "./Card";
import DataCard from "./DataCard";
import {Container} from 'react-bootstrap';
import Web from './Images/web.png';
import Website from './Images/website.png';
import Software from './Images/software.jpg';
import Application from './Images/application.jpg';
import Maintanance from './Images/maintanance.jpg';
import './Content.css';
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home1=()=>{
    useEffect(()=>{
      Aos.init();
    },[])
 return(
     <section className="py-4 py-lg-5 container mn">
         <div className="row">
           
          <div className="col-md-6 " data-aos="fade-left" data-aos-offset="100">
          <div className="card ">
            <img src={Web} className="v1"></img>
          </div> 
          </div>
          <div className="col-md-6 v2" data-aos="fade-right" data-aos-offset="100">
          <div className="row p-2" >
            <div className=" p-2">
            <h5 class="card-title">Web Development</h5>
             <p class="card-text v3">We provide one of the best websites which is highly flexible,responsible and highly scalable</p>
            </div>
          </div>
          <div className="row p-2">
            <div className="p-2">
            <h5 class="card-title ">Software Development</h5>
             <p class="card-text v3" >We provide one of the best websites which is highly flexible,responsible and highly scalable</p>
            </div>
          </div>
          <div className="row p-2">
            <div className=" p-2">
            <h5 class="card-title">Mobile App Development</h5>
             <p class="card-text v3">We provide one of the best websites which is highly flexible,responsible and highly scalable</p>
            </div>
          </div>
          
          </div>
           
         </div>
         <br/><br></br><br></br>
         <div className="row">
           <div className="col-md-4 offset-md-5 "><span class="what1">WHAT </span> <span class="what">WE DO?</span></div>
           
         </div>
         <br></br><br></br>
         
        <div className="row">
          <div className="col-md-3 "  data-aos="fade-up" data-aos-offset="100">
            <div id="g">
            <div className="row p-3">
              <p className="v3h">Strategy</p>
              <br></br>
              <p className="v3">Strengthen the execution infrastructure by investing in ‘safe bets’.Initiate a process to identify strategies with a high probability for success.The starting point was winning the commitment of key employees at all levels</p>
            </div>
            </div>
          </div>
          <div className="col-md-3 " data-aos="fade-down" data-aos-offset="100">
          <div id="g">
            <div className="row p-3">
              <p className="v3h">Teamwork</p>
              <br></br>
              <p className="v3">We teach and learn!!!As a team our work is always tremendous.Our teams are skilled enough to work in crossplatforms..Client satisfaction is our primary goal.We never compremise on our productQuality.</p>
            </div>
            </div>
          </div>
          
          <div className="col-md-3 " data-aos="fade-up" data-aos-offset="100">
          <div id="g">
            <div className="row p-3">
              <p className="v3h">Clean code</p>
              <br></br>
              <p className="v3">Professional quality will ensure that your business can easily get off the ground to a new level and ensure that you can deliver the maximum amount of engagement for your marketplace.We strive to give best Quality.</p>
            </div>
            </div>
          </div>
          <div className="col-md-3" data-aos="fade-down" data-aos-offset="100">
          <div id="g">
            <div className="row p-3">
              <p className="v3h">Flexibility</p>
              <br></br>
              <p className="v3">IUCTECH has been delivering results since we opened in . Our goal is to provide both a superior customer experience and tremendous value for our customers.We always work for customer satisfaction.</p>
            </div>
            </div>
          </div>
        </div>
        <br></br><br></br><br></br>
        <div class="row">
        
          <div class="col-md-4 col-sm-4 g1">
            <div class="cube cons ">
              <div class="surface surface1"><img src={Website} width="150px" height="150px" class="imgs"/></div>
              <div class="surface surface2"><img src={Software} width="150px" height="150px" class="imgs"/></div>
              <div class="surface surface3"><img src={Application} width="150px" height="150px" class="imgs"/></div>
              <div class="surface surface4"><img src={Maintanance} width="150px" height="150px" class="imgs"/></div>
            </div>
          </div>
          <div class="col-md-1 col-sm-2 g1"><br></br></div>
          <div class="col-sm-6 col-md-7 g1"> 
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"><span class="what1">WHAT </span> <span class="what">WE OFFER?</span></h5>
              <p class="card-text">We IUCTech offer several services like website development,software development,Application Development, maintaining
websites,eCommerce, enterprise and Other services. We strive for the betterment of our Products. We are having 25 years experience in this software field. We are developing software and mobile application
at industrial standards</p>
            </div>
          </div>
          </div>
          <div className="col-sm-4 "></div>
        </div>
        <br></br><br></br>
       
        <div class="row g1">
          <div class="col-md-4 g1">
             
          </div>
          <div class="col-md-4 g1">
            
          </div>
          <div class="col-md-4 g1">

          </div>
        </div>
        <div class="check">sadfsd</div>
     </section>
     
 )
}
export default Home1;