import React from 'react'
import './CSS/LoginSignup.css'
export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-feilds'>
        <input type='text' placeholder='Your Name'/><br/>
        <input type='text' placeholder='Email Id'/><br/>
        <input type='text' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?<span>Login here</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox'/>  By Continuing I agree to the terms of use & privacy policy.
        </div>
      </div>
    </div>
  )
}
