import React from 'react'
import '../Breadcrums/Breadcrum.css'

export const Breadcrums = (props) => {
    const{product} = props;
  return (
    <div className='breadcrums'>
      HOME<span className='bi bi-chevron-right'></span>{product.category}<span className='bi bi-chevron-right'></span> SHOP<span class='bi bi-chevron-right'>  {product.name}</span>
    </div>
  )
}
