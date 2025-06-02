import React from 'react'
import "./Hero.css"
import pimg from "../../assets/pimg.jpg"
import AutoType from '../AutoType/AutoType'
import Contacts from '../Contacts/Contacts'
const Hero = () => {
  return (
   <>
   <div className='Hero-container' id='home'>
    <div className='hero-content'>
     <h1>Hello </h1>
     <h1>I'm  <AutoType texts={["HariKrishna", "a Web Developer", "a MERN Stack developer"]}/></h1>
      <Contacts/>
     <div className='Hero-section-Contacts'>
       
     </div>
    </div>
    <div className="hero-img">
  <div className="rotated-border">
    <img
      src={pimg}
      alt="myProfile"
      height={500}
      width={500}
      loading='eager'
      className="floating-img"
    />
  </div>
</div>

   </div>
   </>
  )
}

export default Hero
