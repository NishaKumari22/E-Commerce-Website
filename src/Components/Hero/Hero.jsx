import React from 'react'
import '../Hero/Hero.css'
import hand_icon from '../Assests/hand-icon.gif'
import hero_right from '../Assests/girlright.jpg'
export const Hero = () => {
  return (
    <div className='hero'>
    <div className='hero-left'>
     <h2>NEW ARRIVALS ONLY</h2>
     <div className='collection'>
        <div className='hero-hand-icon'>
         <p>new</p>
         <img src={hand_icon}></img>   
        </div>
        <p>collection</p>
        <p>for Everyone</p>
     </div>
     <div className='hero-latest-btn'>
         <div>Latest Collection<span className='bi bi-arrow-right'></span></div>
         
     </div>
    </div>
    <div className='hero-right'>
     <img src={hero_right}></img>
    </div>
    </div>
  )
}
