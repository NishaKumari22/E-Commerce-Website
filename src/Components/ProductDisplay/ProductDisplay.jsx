import React,{useContext} from 'react'
import '../ProductDisplay/ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';


export const ProductDisplay = (props) => {
    const{product} = props;
    const{addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
         <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
               <img src={product.image}></img>
               <img src={product.image}></img>
               <img src={product.image}></img>
               <img src={product.image}></img>
            </div>
            <div className='productdisplay-img'>
              <img className='productdisplay-main-img' src={product.image}></img>
            </div>

         </div>
         <div className='productdisplay-right'>
          <h1>{product.name}</h1>
          <div className='productdisplay-right-star'>
           <span className='bi bi-star-fill'></span>
           <span className='bi bi-star-fill'></span>
           <span className='bi bi-star-fill'></span>
           <span className='bi bi-star-half'></span>
           <span className='bi bi-star'></span>
           <p>(522)</p>
          </div>
          <div className='productdisplay-right-prices'>
            <span className='productdisplay-right-price-old'>${product.old_price}</span>
            <span className='productdisplay-right-price-new'>${product.new_price}</span>
          </div>
          <div className='productdisplay-right-description'>
          A timeless and comfortable choice for the everyday wardrobe. 
          This full sleeves shirt is made from recycled cotton blend, and features a striped print.
           Perfect to wear with trousers and a blazer for a complete suave look. Detail Type : Shirt Neck : Shirt Collar Sleeve : Long Sleeves (L/S) Cuffs : Buttoned cuffs Closing : Button fastening Extra details : Curved hem Wash/Finish : Treatment for a soft feel and comfortable wear Fit : Slim Fit This product is made with recycled cotton. Recycled cotton saves natural resources and reduces the amount of textile waste.
          </div>
          <div className='productdisplay-right-size'>
              <h1>Select Size</h1>
              <div className='productdisplay-right-size'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
                <div>XXL</div>     
              </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
          <p className='productdisplay-right-category'><span>Category:</span>Women , Tshirt , CropTop</p>
          <p className='productdisplay-right-category'><span>Tags:</span>Moderns, Latest</p>
         </div>
    </div>
  )
}
