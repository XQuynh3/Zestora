import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections.js'
import Item from '../Items/Item.jsx'

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
        <div className="collections">
            {new_collections.map((product, i)=>{
                return <Item key={i} id={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections
