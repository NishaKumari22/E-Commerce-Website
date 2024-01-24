import React,{useContext} from 'react'
import '../CartItems/CartItems.css'
import { ShopContext } from '../../Context/ShopContext';


export const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
      <p>Products</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
      </div>
      <hr/>
      {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return<div>
            <div className='cartitems-format-main'>  
                   <img src={e.image} className='carticon-product-icon'/>
                   <p>{e.name}</p>
                   <p>${e.new_price}</p>
                   <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                   <p>{e.new_price*cartItems[e.id]}</p>
                   <span className='bi bi-x-circle' onClick={()=>{removeFromCart(e.id)}}></span>
            </div>
            <hr/>
          </div>
        }
        return null;
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
        <h1>Cart Totals</h1>
        <div className='cartitems-total-item'>
             <p>Subtotal</p>
             <p>${getTotalCartAmount()}</p>
        </div>
        <hr/>
     <div className='cartitems-total-item'>
      <p>Shipping Fee</p>
      <p>Free</p>
     </div>
     <hr/>
     <div className='cartitems-total-item'>
        <h3>Total</h3>
        <h3>${getTotalCartAmount()}</h3>
     </div>
     <button>PROCEED TO CHECKOUT</button>
        </div>

     
      <div className='cartitems-promocode'>
         <p>If You have a Coupon Code , Redeem Now</p>
         <div className='cartitems-promobox'>
           <input type="text" placeholder='Coupon Code'/><button>Submit</button> 
          
         </div>
         </div>
      </div>
    </div>
  )
}
