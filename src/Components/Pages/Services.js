
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
import  android from '../Images/services/android.jpeg';
import dynamic from '../Images/services/dynamic.jpeg';
import ios from '../Images/services/ios.jpeg';
import mobileapp from '../Images/services/mobileapp.jpg';
import responsive from '../Images/services/responsive.jpg';
import software from '../Images/services/software.jpeg';
import static1 from '../Images/services/st.jpeg';
import web from '../Images/services/web.jpg';
import webapp from '../Images/services/webapp.jpeg';
import webbased from '../Images/services/webbased.png';
import window from '../Images/services/window.jpeg';
import CarosalContact from "./CarosalContact";
import '../Pages/services.css';
const Services=()=>{
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
       <div class="col-md-12" data-aos="fade-left" data-aos-offset="100"><span class="what1">Website </span> <span class="what"> Development</span></div>
     </div>
     <br></br>
     <div class="row">
       <div class="col-md-3 g11"><img src={web} width="100%" height="100%"/></div>
       <div class="col-md-1"></div>
       <div class="col-md-8 g11">IUC TECH provides a service of Web development which is the work involved in developing a web site for the Internet (World Wide Web) or an intranet (a private network).IUC TECH provides the service that can range from developing a simple single static page of plain text to complex web-based internet applications. We provides a service of App Development which refers to the creation of computer applications for use on mobile devices such as tablets, smartphones and smart watches. Mobile device features such as cameras, motion and location awareness can be used to create unique and inventive mobile-only applications for things such as taxi and bike sharing.

</div>
     </div>
     <br></br><br></br>
     <div class="row">
       <div class="col-md-4" data-aos="fade-right" data-aos-offset="100">
         <div class="row g11" ><center><h4>Static Website</h4></center></div>
         <br></br>
         <div class="row g11" >
           <img src={static1} width="100%" height="100%"></img>
         </div>
         <div class="row g11 p-3">
           Static websites are single page website where all the content are placed in single page and we cannot able to change the content in websites. It is just for showing contents.
         </div>
       </div>


       <div class="col-md-4">
       <div class="row g11"><center><h4>Dynamic Website</h4></center></div>
       <br></br>
         <div class="row g11">
           <img src={dynamic} width="100%" height="100%"></img>
         </div>
         <div class="row g11 p-3">
           Dynaimic website are kind of website where we can change the data like adding items or submitting forms. Most of the websites are created as Dynamic Websites.
         </div>
       </div>


       <div class="col-md-4" data-aos="fade-left" data-aos-offset="100">
       <div class="row g11"><center><h4>Responsive Website</h4></center></div>
       <br></br>
         <div class="row g11">
           <img src={responsive} width="100%" height="100%"></img>
         </div>
         <div class="row g11 p-3">
         Responsive website is used to display in all kind of devices. If we check the website in mobile or tablet it will be aligned properly In recent days everyone prefer responsive site.
         </div>
       </div>
     </div>
     <br></br><br></br>





     <div class="row">
       <div class="col-md-12" data-aos="fade-left" data-aos-offset="100"><span class="what1">Software </span> <span class="what"> Development</span></div>
     </div>
     <br></br>
     <div class="row">
       <div class="col-md-4 g11" data-aos="flip-left" data-aos-offset="100">
       <img src={software} width="100%" height="100%"></img>
       </div>
       
       <div class="col-md-8 g11" style={{lineHeight:"200%"}} >IUC TECH provides a service of Software development which is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. We also provide research, new development, prototyping,etc. We provides a service of Software development which is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.  </div>
     </div>
     <br></br><br></br>
     <div class="row">
       <div class="col-md-4">
         <div class="row g11"><center><h5>Window Based</h5></center></div>
         <br></br>
         <div class="row g11" data-aos="zoom-in">
           <img src={window} width="100%" height="100%"></img>
         </div>
         <div class="row g11 p-4">
           Window based application is mostly used in enterprise company which is pay roll system, attendence managment system..etc.
         </div>
       </div>


       <div class="col-md-4">
       <div class="row g11"><center><h5>Web Based</h5></center></div>
       <br></br>
         <div class="row g11" data-aos="zoom-in">
           <img src={webapp} width="100%" height="100%"></img>
         </div>
         <div class="row g11 p-4">
           Webbased application is any application which can be accessed over network using HTTP. We developed several website for our clients .
         </div>
       </div>


       <div class="col-md-4">
       <div class="row g11"><center><h5>Web App</h5></center></div>
       <br></br>
         <div class="row g11" data-aos="zoom-in">
           <img src={responsive} width="100%" height="100%"></img>
         </div>
         <div class="row g11 p-4" >
         Web App is used to run the application in Web Server. It will be supported in both mobile and desktop devices. 
         </div>
       </div>
     </div>
     <br></br><br></br>








     
     <div class="row">
       <div class="col-md-12" data-aos="fade-left" data-aos-offset="100"><span class="what1">Mobile App </span> <span class="what"> Development</span></div>
     </div>
     <br></br>
     <div class="row">
       <div class="col-md-4 g11">
       <img src={mobileapp} width="100%" height="100%" style={{borderTopRightRadius:'52px '}}></img>
       </div>
       
       <div class="col-md-8 g11" style={{lineHeight:"40px"}}>IUC TECH provides a service of App Development which refers to the creation of computer applications for use on mobile devices such as tablets, smartphones and smart watches. Mobile device features such as cameras, motion and location awareness can be used to create unique and inventive mobile-only applications.</div>
     </div>
     <br></br><br></br>
     <div class="row">
       <div class="col-md-4" >
         <div class="row g11"><center><h5>Android Apps</h5></center></div>
         <br></br>
         <div class="row g11" data-aos="flip-up" data-aos-duration="2000">
           <img src={android} width="100%" height="100%" style={{borderTopRightRadius:'52px '}}></img>
         </div>
         
         <div class="row g11 p-5 bord" style={{lineHeight:"30px"}}>
         Android App is a software designed to run on an Android device . The term also refers to an APK file. 
         </div>
       </div>


       <div class="col-md-4">
       <div class="row g11"><center><h5>IOS Apps</h5></center></div>
       <br></br>
         <div class="row g11" data-aos="flip-down" data-aos-duration="2000">
           <img src={ios} width="100%" height="100%" style={{borderTopRightRadius:'52px '}}></img>
         </div>
         <div class="row g11 p-5 bord" style={{lineHeight:"30px"}}>
          It is the OS that powers many mobile devices, including the iPhone and Apple.
         </div>
       </div>


       <div class="col-md-4 ">
       <div class="row g11"><center><h5>Other Apps</h5></center></div>
       <br></br>
         <div class="row g11" data-aos="flip-up" data-aos-duration="2000">
           <img src={software} width="100%" height="100%" style={{borderTopRightRadius:'52px '}}></img>
         </div>
         <div class="row g11 p-5 bord" style={{lineHeight:"30px"}}>
         Web Apps,Window apps are other apps. It will be supported in both mobile and desktop . 
         </div>
       </div>
     </div>
     <br></br><br></br>




     <div class="row">
       <div class="col-md-12" data-aos="fade-left" data-aos-offset="100"><span class="what1">IUCTech </span> <span class="what"> Support</span></div>
     </div>
     <br></br>
     <div class="row">
     <div id="accordion">
    <div class="card1">
      <div class="cardheader">
        <a class=" cardlink cards" data-toggle="collapse" href="#collapseOne">
          We Provide Live Support in Websites
        </a>
      </div>
      <div id="collapseOne" class="collapse" data-parent="#accordion">
        <div class="cardbody">
        <br></br>
        Live Support helps make online messaging an easy task to be able to enable you to connect, convert, and maintain bonds with every customer that comes to you.Customers are researching ways to utilize messaging.Fastest way to help you, 24/7.IUC TECH produces 24/7 service and support, But a majority of organizations don’t provide it. By using Live Support, you receive 2 of the most significant messaging options you’ll require for keeping in touch with your customers.
        </div>
      </div>
    </div>  
  </div>
     </div>
     <hr></hr>
     <div class="row">
     <div id="accordion">
    <div class="card1">
      <div class="cardheader">
        <a class=" cardlink cards" data-toggle="collapse" href="#collapseTwo">
          We give Database Support
        </a>
      </div>
      <div id="collapseTwo" class="collapse" data-parent="#accordion">
        <div class="cardbody">
        <br></br>
        Since databases are such critical IT components of any business, it is crucial that the health and the performance of the databases are monitored round the clock and maintained so that they are functioning optimally (know what action to take and when to take it) and efficiently serve the business need.Database Support services that take care of all your database support requirements. Our team of experts will work with you to recommend and perform every database support task required( i.e monitoring, backup, patching, clearing logs, recovering, archiving etc.) and become part of your database ecosystem.
        </div>
      </div>
    </div>  
  </div>
     </div>
     <hr></hr>
    <div class="row">
      <div id="accordion">
         <div class="card1">
           <div class="cardheader">
              <a class=" cardlink cards" data-toggle="collapse" href="#collapseThree">
                We give E-Support
              </a>
           </div>
            <div id="collapseThree" class="collapse" data-parent="#accordion">
              <div class="cardbody">
               <br></br>
                Since databases are such critical IT components of any business, it is crucial that the health and the performance of the databases are monitored round the clock and maintained so that they are functioning optimally (know what action to take and when to take it) and efficiently serve the business need.Database Support services that take care of all your database support requirements. Our team of experts will work with you to recommend and perform every database support task required( i.e monitoring, backup, patching, clearing logs, recovering, archiving etc.) and become part of your database ecosystem.
              </div>
            </div>
          </div>  
       </div>
     </div>
     <hr></hr>
    <div class="row">
      <div id="accordion">
         <div class="card1">
           <div class="cardheader">
              <a class=" cardlink cards" data-toggle="collapse" href="#collapse4">
                Real time chat Support
              </a>
           </div>
            <div id="collapse4" class="collapse" data-parent="#accordion">
              <div class="cardbody">
               <br></br>
               Real-time charts support the following features: Multiple datasets with real time update for each of them Multiple data updated in each update, i.e., a single pull to the server can come back with any number of data values updated. Multiple updates and refresh intervals on the chart. Update interval fetches the new data, but it will not change the view of the chart. Refresh interval applies the updated data in chart view. Message logger Alert manager Annotations can be used to render custom objects JavaScript API can be used to set data, retrieve data, start/stop updates, clear chart. JavaScript events can be raised when the chart is initialized and rendered as well as when the data is updated. Clearing chart view
              </div>
            </div>
          </div>  
       </div>
     </div>

     <hr></hr>
    <div class="row">
      <div id="accordion">
         <div class="card1">
           <div class="cardheader">
              <a class=" cardlink cards" data-toggle="collapse" href="#collapse5">
                Google Map Embedded Support
              </a>
           </div>
            <div id="collapse5" class="collapse" data-parent="#accordion">
              <div class="cardbody">
               <br></br>
               Embedding a google map offers your visitors a lot of benefits. Just another day at Googleplex, Mountain View. It helps customers get directions. By adding a map on your site, it saves customers the steps of opening maps in another window and copying over the address.Local Search Engines could use these HTML snippets for all of the locations and allow users to plan their day by browsing and saving the relevant locations that appeared in the search result, on to the google maps app which could be used later while spending the day. I just searched one of the location on JustDial.com on my desktop and, went to a restaurant where address also consisted of Google Maps Icon. While accessing the location on google map, I was able to imagine the benefit if I would have been able to “Save” and later access this location from my mobile phone. No more hassles of noting the address and the searching it later on mobile device.
              </div>
            </div>
          </div>  
       </div>
     </div>

     <hr></hr>
    <div class="row">
      <div id="accordion">
         <div class="card1">
           <div class="cardheader">
              <a class=" cardlink cards" data-toggle="collapse" href="#collapse6">
                Google Business Page Support
              </a>
           </div>
            <div id="collapse6" class="collapse" data-parent="#accordion">
              <div class="cardbody">
               <br></br>
               With the nature of Google’s business being search and the fact that more than 90% of online journeys start with the use of a search engine, it should come as no surprise that the various search engines provide their own local business listings. Google refers to its local business listing platform as Google My Business. The resulting Google My Business listings include a business’ name, address, phone number and website. This business listing information is available through a variety of Google properties — including Google Maps. In fact, Google My Business offers everything you need for a potential customer to find and use your services, buy your products or visit your business. Once you’ve registered or claimed your local business listing via the Google My Business dashboard, you can respond to customer reviews and add images to help your business stand out.
              </div>
            </div>
          </div>  
       </div>
     </div>

     <hr></hr>
    <div class="row">
      <div id="accordion">
         <div class="card1">
           <div class="cardheader">
              <a class=" cardlink cards" data-toggle="collapse" href="#collapse7">
                Technical Support
              </a>
           </div>
            <div id="collapse7" class="collapse" data-parent="#accordion">
              <div class="cardbody">
               <br></br>
               IT technical support officers monitor and maintain the computer systems and networks of an organisation. You could be installing and configuring computer systems, diagnosing hardware and software faults and solve technical and applications problems, either over the phone or in person
              </div>
            </div>
          </div>  
       </div>
     </div>

     <hr></hr>
    <div class="row">
      <div id="accordion">
         <div class="card1">
           <div class="cardheader">
              <a class=" cardlink cards" data-toggle="collapse" href="#collapse8">
                Marketing Support
              </a>
           </div>
            <div id="collapse8" class="collapse" data-parent="#accordion">
              <div class="cardbody">
               <br></br>
               We create content that supports quality lead generation, and that is personalized to the right people, at the right time. This is achieved through strategic content creation, aligned to the buyer’s journey. i.e. Your website (and the content on your website) provides the answers your buyers’ questions as they move closer to a purchasing decision. With this strategy, all content is “mapped” according to: The person who is reading it – i.e. your buyer personas The buying cycle stage – i.e. if they are just learning more about your business or if they are ready to buy And as an added benefit, answering prospect questions through content on your website also directly impacts the success of your search engine optimization. For example, when someone searches for a question that you provide the answers to, your site gets bonus points with the search engine, making your content more findable.
              </div>
            </div>
          </div>  
       </div>
     </div>

    
     
     
     


     </div>
  </div>
  );
}
export default Services;