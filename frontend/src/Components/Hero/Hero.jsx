import React from 'react'
import './Hero.css'
import h_icon from '../Assets/h_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_i from '../Assets/hero_i.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2> Be the Best version of YOU</h2>
        <div> 
            <div className="hero-hand-icon">
                <p> Lets </p>
                <img src={h_icon} alt=''/>
            </div>
            <p> get</p>
            <p>  Dressed </p>
        </div>
        <div className="hero-latest-btn">
            <div> Latest Collection </div>
            <img src={arrow_icon} alt=''/>
        </div>
      </div>

      <div className="hero-right">
        <img src={ hero_i} alt=''/>
      </div>
    </div>
  )
}

export default Hero
