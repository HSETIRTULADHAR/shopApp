import React from 'react'

const ShopCategory = ({filterItem, setItem, setProducts, menuItems, selectedCategory, data}) => {
  return (
    <>
    <div className='widget-header'>
       <h5 className='msp2'>All Categories</h5>
    </div>
    <div>
        <button  className={`m-2 ${selectedCategory ==="All" ? "bg-warning" : "" }`} onClick={() => setProducts(data)}>All</button>
        {menuItems.map((cat, i) => 
        <button 
            key={i} 
            className={`m-2 ${selectedCategory === cat ? "bg-warning" : "" }`}
            onClick={() => filterItem(cat)}
            >
            
            {cat}
        </button>
        
        )}
    </div>
    </>
  )
} 

export default ShopCategory  
