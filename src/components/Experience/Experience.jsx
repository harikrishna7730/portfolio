import React from 'react'
import "./Experience.css"
import Vigovia from "../../assets/vigovia_img.png"
const Experience = () => {
  return (
    <>
   <h1 className='Expo-heading' id='experience'>Experience</h1>
    <div className='expo-container' >
        <div>
          <img src={Vigovia} alt='company-img' loading='lazy'/>
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
