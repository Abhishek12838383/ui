import React from 'react'
import './Footer.css'
import logo from '../images/Kds logo 1.png'

const Footer = () => {
  return (
    <div className='footer'>

        {/* line1 */}
        <div className='line1'>

<img src={logo} alt='' />

<p>Phone: +1-585-566-2070</p>
<p>Email: info@kusheldigi.com</p>

        </div>

        {/* line2 */}
        <div className='line2'>
<ul>
    <li>Quick Links</li>
    <li>Home</li>
    <li>About</li>
    <li>Service</li>
    <li>Portfolio</li>
    <li>Contact Us</li>
</ul>
        </div>

        {/* line3 */}
        <div className='line3'>
<ul>
    <li>Our Services</li>
    <li>Store Development & Setup</li>
    <li>Custom Theme Developiment</li>
    <li>Custom Development & Integrations</li>
    <li>BigCommerce B2B Development</li>
    <li>BigCommerce Platform Migration</li>
    <li>Multi-Storefront & Internationalization</li>
</ul>
        </div>

        {/* line4 */}

        <div className='line4'>
            <ul>
                <li>Company</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            </ul>

        </div>
      
    </div>
  )
}

export default Footer
