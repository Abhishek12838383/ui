import React from 'react'
import logo from './images/Kds logo 1.png'
import './Nav.css'
import call from './images/call.png'
;
const Nav = () => {
  return (
    <div className='nav'>
      <img className='logo' src={logo} alt='logo'/>

<div className='btns'>
    <button className='call-now'>
<img src={call} alt=''/>  CALL NOW
</button>

<button className='book-now'>
    BOOK FREE CONSULTATION
</button>
</div>

    </div>
  )
}

export default Nav
