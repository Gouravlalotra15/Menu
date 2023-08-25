import React from 'react'

const Catagories = ({category,filterItems}) => {
  return (
    <div className='btn-container'>
        {category.map((item)=>{
          return <button type="button" className="btn" key={item} onClick={()=>filterItems(item)}>{item}</button>
        })}
        </div>
  )
}

export default Catagories