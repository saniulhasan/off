import React from 'react'
import'./Text.css';

import bg from '../assets/myimage.png';
function Text() {
  return (
    <div><div className="image-container">
    <img src={bg} alt="Your Image"/>
    <div className="text-overlay">
      Your Text Here
    </div>
  </div>
  </div>
  )
}

export default Text