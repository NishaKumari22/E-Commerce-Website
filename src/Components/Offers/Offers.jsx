import React from 'react'
import '../Offers/Offers.css'
import exclusive_image from '../Assests/ex.jpg'

export const Offer = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
       <h1>Exclusive</h1>
       <h1>Offers For You</h1>
       <p>ONLY ON BEST SELLERS PRODUCTS</p>
       <button>Check Now</button>
      </div>
      <div className='offers-right'>
         <img src={exclusive_image}></img>
      </div>

    </div>
  )
}
