import React from 'react'
import './Choose.css'
import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'
import c5 from '../images/c5.png'

const Choose = () => {
  return (
    <div className='choose'>
      
<p>Why Choose us</p>
<p>What make us better</p>

<div className='choose-wrapper'>

    <div className='choose-box'>
<img src={c1} alt=''/>

<div className='choose-heading'>
    Custom BigCommerce Development
</div>

<div className='choose-para'>
    Tailored solutions to match your brand and business goals.
</div>
    </div>

     <div className='choose-box'>
<img src={c2} alt=''/>

<div className='choose-heading'>
   Seamless Integrations
</div>

<div className='choose-para'>
Connect your store with payment gateways, CRMs, and marketing tools effortlessly</div>
    </div>

     <div className='choose-box'>
<img src={c3} alt=''/>

<div className='choose-heading'>
Mobile-Optimized Designs</div>

<div className='choose-para'>
    Ensure a flawless shopping experience on all devices.
</div>
    </div>

</div>

<div className='choose-wrapperr'>

    <div className='choose-box'>
<img src={c4} alt=''/>

<div className='choose-heading'>
    Scalable Solutions
</div>

<div className='choose-para'>
    Grow your store without worrying about performance bottlenecks.
</div>
    </div>

     <div className='choose-box'>
<img src={c5} alt=''/>

<div className='choose-heading'>
   Expert Support
</div>

<div className='choose-para'>
Ongoing maintenance and optimization to keep your store running smoothly.
</div>
    </div>


</div>

    </div>
  )
}

export default Choose
