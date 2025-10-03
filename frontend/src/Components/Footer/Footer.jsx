import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt=''/>
            <p> fitS</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt=''/>
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt=''/>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=''/>
            </div>
        </div>
        <div className="footer-copywrite">
            <hr/>
            <p> Copyright @ 2025 - All Rights are Reserved.</p>
        </div>
        <div className='content'>
            <p>ONLINE SHOPPING MADE EASY AT fitS <br/>
If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. fitS is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at fitS from the comfort of your home and get your favourites delivered right to your doorstep.<br/>
SHOP ONLINE AT fitS WITH COMPLETE CONVENIENCE <br/>
Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 14-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.

Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.</p>
        </div>

      
    </div>
  )
}

export default Footer
