import React from 'react'
import './Work.css'
import left from '../images/left.png'
import right from '../images/right.png'

const Work = () => {
  return (
    <div className='work'>

        <div className='work-left'>
<h1>Our BigCommerce Work</h1>
<p>Recent Websites We've Launched</p>
        </div>

        <div className='work-right'>
<img src={left} alt=''/>
<img src={right} alt=''/>
        </div>
      
    </div>
  )
}

export default Work
