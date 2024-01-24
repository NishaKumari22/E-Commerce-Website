import React from 'react'
import '../NewCollections/NewCollections.css'
import  new_collection from '../Assests/new_collections'
import { Item } from '../Item/Item'

export const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className='collections'>
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name= {item.name} image={item.image}  new_price={item.new_price} old_price =<strike>{item.old_price}</strike>/>

        })}
      </div>
    </div>
  )
}
