import React from "react";
import { useState } from "react";
import { MenuList } from "./MenuList";
import './Navbar.css';
import { NavLink } from "react-router-dom";
const Navbar=()=>{
  const [clicked,setclicked]=useState(true);
  const[navbars,setnavbars]=useState(false);
  const menulist=MenuList.map(({url,title},index)=>{
      return <li key={index}><NavLink exact to={url} activeClassName="active">{title}</NavLink></li>
  });
  const check=()=>{
      setclicked(!clicked);
  }
const changes=()=>{
    console.log(window.scrollY);
}
 window.addEventListener('scroll',changes); 
  return (
     <nav id="kkk">
         <div className="logo">
             IUCTech
         </div>
         <div className="menu-icon">
         <i className={clicked?"fas fa fa-bars":"fa-times"} onClick={check}/>
         </div>
         <ul className={clicked?"menu-list":"menu-list close"} id="ggg">
             {menulist}
         </ul>
     </nav>
  );
}
export default Navbar;