import React from 'react'

const MenuItems = ({id,img,price,desc,title}) => {
  return (
    <article className='menu-items'>
        <img className='img' src={img} alt="so-pic"></img>
        <div className='item-info'>
            <header>
               <h5>{title}</h5> 
               <span className='item-price'>${price}</span>
            </header>
            <p className='item-text'>{desc}</p>
        </div>
    </article>
  )
}

export default MenuItems