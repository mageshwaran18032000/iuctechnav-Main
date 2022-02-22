
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
import '../Pages/Testimonal.css';
import marketing from '../Images/features/marketing.jpg'
import consulting1 from '../Images/features/consulting1.jpg'
import bind from '../Images/features/bind.jpg'
import support from '../Images/features/support.jpg'
import mobile from '../Images/features/mobile.jpg'
import domain from '../Images/features/domain.jpg'
import ftp from '../Images/features/ftp.jpg'
import web from '../Images/features/web.jpg'
import mageshwaran from '../Images/review/mageshwaran.jpg';
import CarosalContact from "./CarosalContact";
const Testimonal=()=>{
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
       <div class="col-md-12" data-aos="fade-left" data-aos-offset="100"><span class="what1">Unique </span> <span class="what"> Features</span></div>
     </div>
     <br></br>
     <div class="row">
       <div class="row">
         <div class="col-md-3 ">

           <div class="card m1">
             <div class="card-head k"><img src={web} width="100%" height="50%"/></div>
             <div class="card-body">
               <h5 class="card-title nk"><b>Expert Web-Design</b></h5>
               <hr></hr>
               <div class="card-text"><p class="jk">Once the website layout and content plan is approved, we push the project to the next stage: graphic design. During this phase, our expert design team will create custom designs, buttons, images, videos and other graphics for your review.</p></div>
             </div>
           </div>
           
         </div>
         <div class="col-md-3 ">

         <div class="card m1">
             <div class="card-head k"><img src={ftp} width="100%" height="50%"/></div>
             <div class="card-body">
               <h5 class="card-title nk"><b>FTP Services</b></h5>
               <hr></hr>
               <div class="card-text"><p class="jk">We give FTP which is File Transfer Protocol. As the name suggests, FTP is used to transfer files between computers on a network. You can use FTP to exchange files between computer accounts. We provide FTP Services in IUCTech.</p></div>
             </div>
           </div>

         </div>
         <div class="col-md-3 ">

         <div class="card m1">
             <div class="card-head k"><img src={support} width="100%" height="50%"/></div>
             <div class="card-body">
               <h5 class="card-title nk"><b>Support-Service</b></h5>
               <hr></hr>
               <div class="card-text"><p class="jk">We give Support Services, more commonly referred to as PSS, is the Microsoft business unit with primary responsibility for responding to end-user and partner requests for assistance with the company's products and services We provide Client Support Service in IUCTech.</p></div>
             </div>
           </div>

         </div>
         <div class="col-md-3 ">

         <div class="card m1">
             <div class="card-head k"><img src={domain} width="100%" height="50%"/></div>
             <div class="card-body">
               <h5 class="card-title nk"><b>Multi-Domain</b></h5>
               <hr></hr>
               <div class="card-text"><p class="jk">IUCTECH provides a protein domain which is a conserved part of a given protein sequence and structure that can evolve, function, and exist independently of the rest of the protein chain. We provide Multiple Domain Service in IUCTech.</p></div>
             </div>
           </div>

         </div>
       </div>
       
       
     </div><br></br>


     <div class="row">
         <div class="col-md-3 ">

           <div class="card m1">
             <div class="card-head k"><img src={bind} width="100%" height="100px" class=""/></div>
             <div class="card-body">
               <h5 class="card-title nk"><b>Link-Building</b></h5>
               <hr></hr>
               <div class="card-text"><p class="jk">IUCTECH provides Link building,which is the process of getting other websites to link back to your website. Building links is one of the many tactics used in search engine optimization.</p></div>
             </div>
           </div>
           
         </div>
         <div class="col-md-3 ">

         <div class="card m1">
             <div class="card-head k"><img src={mobile} width="100%" height="100%"/></div>
             <div class="card-body">
               <h5 class="card-title nk"><b>Mobile-Optimization</b></h5>
               <hr></hr>
               <div class="card-text"><p class="jk">IUC TECH provides Mobile optimization which is the process of ensuring that visitors who access your site from mobile devices have an experience optimized for the device.</p></div>
             </div>
           </div>

         </div>
         <div class="col-md-3 ">

         <div class="card m1">
             <div class="card-head k"><img src={marketing} width="100%" height="100%"/></div>
             <div class="card-body">
               <h5 class="card-title nk"><b>Online-Marketing</b></h5>
               <hr></hr>
               <div class="card-text"><p class="jk">We also provide specialized services such as, online reputation management,and retargeting / remarketing, utilizing our core services in targeted campaigns. that meet your more particular goals.</p></div>
             </div>
           </div>

         </div>
         <div class="col-md-3 ">

         <div class="card m1">
             <div class="card-head k"><img src={consulting1} width="100%" height="50%"/></div>
             <div class="card-body">
               <h5 class="card-title nk"><b>Online-Consulting</b></h5>
               <hr></hr>
               <div class="card-text "><p class="jk">The advent of the internet has given a major boost to consulting businesses as consultants have gotten the opportunity to go global and provide their services online. We provide consulting in IUCTech.</p></div>
             </div>
           </div>

         </div>
       </div>
       <br></br><br></br>


       <div class="row">
       <div class="col-md-12" data-aos="fade-left" data-aos-offset="100"><span class="what1">What our</span> <span class="what">  Clients say ?</span></div>
        </div>
        <br></br><br></br>
        <div class="row">
        <div id="myCarousel" class="carousel slide test" data-ride="carousel">
	
	<ol class="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
	</ol>   
	
	<div class="carousel-inner">		
		<div class="carousel-item active">
			<div class="img-box"><img src={mageshwaran} alt=""/></div>
			<p class="testimonial">This is one of the best web developing center in Chennai. They have developed too many successful websites for my company and the way of approach towards clients is very friendly and the time management is awesome.I have ever seen like this company.So I recommend everyone to deal with this company for web development and hosting.</p>
			<p class="overview"><b>Mageshwaran</b>Senior Analyst at <a href="#">OsCorp Tech.</a></p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
				</ul>
			</div>
		</div>
		<div class="carousel-item">
			<div class="img-box"><img src="C:\Student\iuctechnav - Main\src\Components\Images\2.jpg" alt=""/></div>
			<p class="testimonial">I am running Leather company and used manually by my accounts but at present my company full of computerized under IUC Tech.  My sincere thanks to timeline which i gave.... once again thank you IUC Tech</p>
			<p class="overview"><b>Paula Wilson</b>Media Analyst at <a href="#">SkyNet Inc.</a></p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
		<div class="carousel-item">
			<div class="img-box"><img src={marketing} alt=""/></div>
			<p class="testimonial">Mr Senthil Kumar has developed my website for business. He is very talented and has designed my website in a very neat & good.  And my business all going good after launch my site. Thank You</p>
			<p class="overview"><b>Antonio Moreno</b>Web Developer at <a href="#">Circle Ltd.</a></p>
			<div class="star-rating">
				<ul class="list-inline">
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star"></i></li>
					<li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
				</ul>
			</div>
		</div>		
	</div>

	<a class="carousel-control-prev prev1" href="#myCarousel" data-slide="prev">
		<i class="fa fa-angle-left"></i>
	</a>
	<a class="carousel-control-next next1" href="#myCarousel" data-slide="next">
		<i class="fa fa-angle-right"></i>
	</a>
</div>
        </div>
     </div>
  </div>
  );
}
export default Testimonal;