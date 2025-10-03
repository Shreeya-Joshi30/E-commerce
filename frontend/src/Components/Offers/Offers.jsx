import React from 'react'
import './Offers.css'
import ex_new from '../Assets/ex_new.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
       <h1> Exclusive</h1>
       <h1>Offers for You</h1>
       <p> ONLY ON BEST SELLERS</p>
       <button> CHECK NOWW</button>
      </div>
      <div className="offers-right">
        <img src={ex_new} alt=''/>

      </div>
    </div>
  )
} 

export default Offers
