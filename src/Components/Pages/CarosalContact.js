import React from "react";
import { Carousel } from "react-bootstrap";

import video1 from "../Images/t1.mp4";

import '../App.css';
const CarosalContact=()=>{
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
  
</Carousel>
    );
}
export default CarosalContact;