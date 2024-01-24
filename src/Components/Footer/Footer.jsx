import React from 'react'
import '../Footer/Footer.css'
import footer_logo from '../Assests/footer_icon.jpeg'

export const Footer = () => {
  return (
    <div className='footer'>
     <div className='footer-logo'>
      <img src={footer_logo}></img>
      <p>SHOPPER</p>
     </div>
     <ul className='footer-link'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
     </ul>
     <div className='footer-social-icon'>
        <div className='footer-icons-container'>
          <span className='bi bi-instagram'></span>
        </div>
        <div className='footer-icons-container'>
          <span className='bi bi-facebook'></span>
        </div>
        <div className='footer-icons-container'>
          <span className='bi bi-whatsapp'></span>
        </div>
        <div className='footer-icons-container'>
          <span className='bi bi-twitter'></span>
        </div>
     </div>
     <div className='footer-copyright'>
        <hr/>
        <p>Copyright @ 2023-All Right Reserved</p>
     </div>
    </div>
  )
}

