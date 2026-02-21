import React from 'react'
import './Banner.css'
import bann1 from './images/company1.png'
import bann2 from './images/company2.png'

const Banner = () => {
  return (
    <div className='banner'>
      
<p>
  Award-winning Agency Partner
</p>

<img src={bann1} alt='' />
<img src={bann2} alt='' />

    </div>
  )
}

export default Banner
