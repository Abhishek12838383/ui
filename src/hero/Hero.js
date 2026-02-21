import React from 'react'
import './Hero.css'
import telephone from '../images/telephone 1.png'
import whatsapp from '../images/whatsapp 1.png'

const Hero = () => {
  return (
    <div className='hero'>
      
<div className='hero-text'>
    <div className='hero-first'>
Custom <span>BigCommerce</span> Development | Scalable, Secure & Conversion-Driven
</div>
<p>
From stunning store designs to seamless integrations, we help businesses like yours unlock the full potential of BigCommerce for faster growth and higher sales.
</p>
<div className='hero-btn'>
<button className='tele'>
  <img src={telephone} alt='' />  +1-585-566-2070
</button>
<button className='whtsp'>
  <img src={whatsapp} alt='' />     Whatsapp
</button>
</div>
</div>


{/* form */}


<div class="form-wrapper">
  <div class="form-card">

    <h2>Looking for <span>E-Commerce</span> Development Services?</h2>

    <form>
      <input type="text" placeholder="Full Name"/>

      <input type="email" placeholder="Email*"/>

      <div class="phone-row">
        <select>
          <option>USA (+1)</option>
          <option>India (+91)</option>
        </select>
        <input type="text" placeholder="Mobile Number"/>
      </div>

      <select>
        <option>Services</option>
        <option>Store Setup</option>
        <option>Custom Development</option>
      </select>

      <textarea placeholder="Brief description about your project"></textarea>

      <button type="submit">SUBMIT</button>
   </form>

  </div>
</div>


    </div>
  )
}

export default Hero
