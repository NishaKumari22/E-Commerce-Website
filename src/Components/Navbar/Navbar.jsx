import React, { useContext, useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../Assests/logo.png'
import carticon from '../Assests/carticon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


export const Navbar = () => {
    const[menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo}></img>
            <p>SHOPPER</p>

        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/shop'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link  style={{textDecoration:'none'}} to='/womens'>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link  style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
          <Link to='/login'><button>Login</button></Link>
         <Link to='/cart'> <img src={carticon}></img></Link>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
     
    </div>
  )
}
