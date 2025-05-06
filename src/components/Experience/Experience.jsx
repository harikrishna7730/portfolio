import React from 'react'
import "./Experience.css"
import Vigovia from "../../assets/vigovia_img.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Experience = () => {
      useEffect(() => {
          AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // animate only once
            easing: 'ease-in-out',
          });
        }, []);
  return (
    <>
   <h1 className='Expo-heading' id='experience' data-aos="fade-down">Experience</h1>
    <div className='expo-container' >
        <div >
          <img src={Vigovia} data-aos="flip-left" alt='company-img' loading='lazy' width={500} height={300}/>
        </div>
        <div className='expo-content'>
            <ul>
                <li><span>CompanyName:</span> Vigovia </li>
                <li><span>Duration:</span> 6 Months</li>
                <li><span>Project:</span> Vigovia Travel booking website</li>
                <li><span>Description:</span> it is a travel booking website used to book a international trips,hotels and flights to other countries</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Experience
