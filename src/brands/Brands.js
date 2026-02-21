import React from 'react'
import  './Brand.css'
import img1 from '../images/br1.png'
import img2 from '../images/br2.png'
import img3 from '../images/br3.png'
import img4 from '../images/br4.png'
import img5 from '../images/br5.png'
import img6 from '../images/br6.png'
import img7 from '../images/br7.png'
import img8 from '../images/br8.png'
import img9 from '../images/br9.png'
import img10 from '../images/br10.png'

const Brands = () => {
  return (
    <div className='brand'>

    <p>Trusted by Leading E-Commerce Brands</p>

    {/* set1 */}
    <div className='set1'>
        <img src={img1} alt='' />
         <img src={img2} alt='' />
          <img src={img3} alt='' />
           <img src={img4} alt='' />
            <img src={img5} alt='' />
    </div>

    {/* set2 */}
      <div className='set1'>
        <img src={img6} alt='' />
         <img src={img7} alt='' />
          <img src={img8} alt='' />
           <img src={img9} alt='' />
            <img src={img10} alt='' />
    </div>
      
    </div>
  )
}

export default Brands
