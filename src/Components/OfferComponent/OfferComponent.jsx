import React from 'react'
import '../OfferComponent/OfferComponent.css'
import Special from '../../assets/Special.png'
function OfferComponent() {
  return (
    <div id="get-offer-container">
      <img id='offer-img' src={Special}/>
      <div id="title-input-container">
          <h1 id="offer-title">Get special offers,and more from travelworld</h1>
          <div id="input-sharebtn-container">
              <input type="email"  id="offer-input" placeholder="Enter Your Email"/><button id="offer-sharebtn">Share</button>
          </div>
      </div>
  </div>
  )
}

export default OfferComponent;