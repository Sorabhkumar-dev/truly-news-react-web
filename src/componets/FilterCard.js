import React from 'react'
import '../css/FilterCard.css'

export default function FilterCard({onClick,isSelected,filterItem}) {
  return (
    <div className='d-flex justify-content-center container'>
      <button className={`btn ${isSelected ? "btn-success" : "btn-primary"} filter_item`} onClick={e => {onClick(filterItem);}}>
        {filterItem}
       </button>
    </div>
  )
}
