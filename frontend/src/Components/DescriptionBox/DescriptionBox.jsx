import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description </div>
            <div className="descriptionbox-nav-box-fade">Reviews (200)</div>
        </div>
      <div className="descriptionbox-description">
        <p> An e-commerce website is an online platform that facilitates buying and selling of products and services over the internet and serves as a marketplace where businesses and individual showcase their product , interact with customers and conduct Transactions without the need for physical presence . E-commerce websites have gained immense popularity due to their conventional accessibilty and the global reach they offer. </p>
        <p> E-commerce websites typically display products and services with detailed Descriptions , images , prices , and any available variable data ( eg. sizes , colours , material ).Each product usually has its own dedicated section with the relevant information . </p>
      </div>
    </div>
  )
}

export default DescriptionBox
