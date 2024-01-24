import React from 'react'
import '../NewsLetter/NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
     <h1>Get Exclusive Offers On your Email</h1>
     <p>Subscribe to our newletter and stay updated</p>
     <div>
        <input type="text" placeholder='Your Email id '></input>
         <button>Subscribe</button>
     </div>
    </div>
  )
}
