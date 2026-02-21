import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <div>
    <section class="cf-section">
  <div class="cf-container">


    <div class="cf-left">

      <div class="cf-call-box">
        <p class="cf-small-text">Call Us</p>
        <h2 class="cf-phone">+1-585-566-2070</h2>
        <span class="cf-country">UNITED STATES</span>
      </div>

      <div class="cf-review-box">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google"/>
      </div>

      <div class="cf-review-box">
        <img src="https://companieslogo.com/img/orig/CLCH-ff9a41c3.png?t=1633434181" alt="Clutch"/>
      </div>

      <div class="cf-review-box">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Trustpilot_logo_2022.svg" alt="Trustpilot"/>
      </div>

    </div>

  
    <div class="cf-right">
      <h1 class="cf-heading">
        Please fill in the form and let’s chat understand how we can help you better
      </h1>

      <form class="cf-form">

        <div class="cf-row">
          <input type="text" class="cf-input" placeholder="First name*" required/>
          <input type="text" class="cf-input" placeholder="Last name*" required/>
        </div>

        <div class="cf-row cf-phone-row">
          <select class="cf-select">
            <option>🇺🇸 +1</option>
            <option>🇮🇳 +91</option>
          </select>
          <input type="text" class="cf-input" placeholder="Phone number"/>
        </div>

        <input type="email" class="cf-input" placeholder="Email*" required/>

        <select class="cf-select">
          <option>Services*</option>
          <option>Web Development</option>
          <option>UI/UX Design</option>
          <option>SEO</option>
        </select>

        <textarea class="cf-textarea" placeholder="Message*" required></textarea>

        <button type="submit" class="cf-btn">let's connect →</button>

      </form>
    </div>

  </div>
</section>

    </div>
  )
}

export default Form
