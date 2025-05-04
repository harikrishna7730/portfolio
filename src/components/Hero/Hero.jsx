import React from 'react'
import "./Hero.css"
import pimg from "../../assets/pimg.jpeg"
import AutoType from '../AutoType/AutoType'
import Contacts from '../Contacts/Contacts'
const Hero = () => {
  return (
   <>
   <div className='Hero-container'>
    <div className='hero-content'>
     <h1>Hello </h1>
     <h1>I'm  <AutoType texts={["Hari Krishna", "a Web Developer", "MERN Stack developer"]}/></h1>
     <Contacts/>
    </div>
    <div className='hero-img'>
      <img src={pimg} alt='myProfile' loading='lazy' height={500} width={500}/>
    </div>
   </div>
   </>
  )
}

export default Hero
