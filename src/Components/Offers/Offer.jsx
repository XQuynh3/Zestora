import React from 'react'
import './Offer.css'
import exclusive_offer from '../Assets/exclusive_image.png'


const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offer for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_offer} alt="offer" />
        </div>

      
    </div>
  )
}

export default Offer
