import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../Components/Images/1.jpg";
import img2 from "../Components/Images/2.jpg";
import img3 from "../Components/Images/3.jpg";
import video1 from "../Components/Images/t1.mp4";
import video2 from "../Components/Images/t2.mp4";
import video3 from "../Components/Images/t3.mp4";
import './App.css';
const CarosalContainer=()=>{
    return(
        <Carousel className="hema" >
  <Carousel.Item >
  <video className='videoTag' autoPlay loop muted width="100%" height={600} >
    <source src={video1} type='video/mp4'/>
</video>
    <Carousel.Caption>
      <h3>Website Development and hosting</h3>
      <p>We create highly scalable and user friendly websites and also host websites</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
  <video className='videoTag' autoPlay loop muted width="100%" height={600} >
    <source src={video2} type='video/mp4'/>
</video>
    <Carousel.Caption>
      <h3>Software Development</h3>
      <p>Advanced software, advanced research for advanced people</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <video className='videoTag' autoPlay loop muted width="100%" height={600} >
    <source src={video3} type='video/mp4'/>
</video>
    <Carousel.Caption>
      <h3>Mobile App Development</h3>
      <p>Create better apps faster,Want to design an app for your company? Try us.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}
export default CarosalContainer;