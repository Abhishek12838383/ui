import React from 'react'
import './Laptop.css'

const Laptop = () => {
  return (
    <div>
      <section class="tb-section">
  <div class="tb-container">

   
    <div class="tb-left">
      <img 
        src="https://pngimg.com/uploads/laptop/laptop_PNG101816.png" 
        alt="Laptop Mockup" 
        class="tb-laptop"
      />
    </div>

  
    <div class="tb-right">

      <h2 class="tb-title">Top Brass Tactical</h2>

      <div class="tb-tags">
        <span class="tb-tag">B2B</span>
        <span class="tb-tag">Military & tactical industry</span>
      </div>

      <button class="tb-view-btn">
        <span>View</span>
        <span class="tb-arrow">↗</span>
      </button>

      <div class="tb-stats">
        <div class="tb-stat">
          <span>INCREASED CONVERSIONS</span>
          <strong>+85%</strong>
        </div>

        <div class="tb-stat">
          <span>INCREASED REVENUE</span>
          <strong>+58%</strong>
        </div>

        <div class="tb-stat">
          <span>INCREASED AOV</span>
          <strong>+6%</strong>
        </div>
      </div>

    </div>

  </div>
</section>
    </div>
  )
}

export default Laptop
