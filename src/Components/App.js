import React from "react";
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Services from "./Pages/Services";
import Faq from "./Pages/Faq";
import Testimonal from "./Pages/Testimonal";
import Contact from "./Pages/Contact";
import Demo from "./Pages/Demo";
import Navbar from "./Navbar/Navbar";
import logo from '../Components/Images/1.jpg';
import Power from '../Components/Images/1.mp4';
import {BrowserRouter as Router,Switch,Route, Routes} from 'react-router-dom'; 
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import CarosalContainer from "./CarosalContainer";
import bootstrap from "bootstrap";
import Footer from "./Footer";
import './Navbar/Navbar.css';
function App() {
  return (
    <div className="container-fluid">
      
      <Router>
     
      
      
        <Routes>
       
        
        <Route path="/" element={<Home/>} className="mnmn"/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Faq" element={<Faq/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Testimonal" element={<Testimonal/>}/>
        </Routes>

       
       <Footer/>
      </Router>
      
      
     
    </div>
  );
}

export default App;
