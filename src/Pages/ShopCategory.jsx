import React , {useContext}from 'react'
import '../Pages/CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import { Item } from '../Components/Item/Item'


export const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner}></img>
      <div className='shopcategory-indexSort'>
       <p>
        <span>Showing 1-12</span> Out of 36 products
       </p>
       <div className='shopcategory-sort'>
         Sort By<span className='bi bi-arrow-down-circle'></span>
       </div>
       </div>
       <div className='shopcategory-products'>
           {all_product.map((item,i)=>{
            if(props.category === item.category){
              return <Item key={i} id={item.id}  name={item.name} category={item.category} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }

           })}
       </div>
       <div className='shop-category-loadmore'>
        Explore More
       </div>
       </div>
  )
}

