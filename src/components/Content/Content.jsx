import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './Content.css'; // Import CSS file for styling
import bg from '../../assets/myimage.png';
const Content = () => {
  return (
    <div className="image-container">
      <img src={bg} alt="Your Image" className="image" />
      <div className="content">
        <FaQuoteLeft className="quote-icon" />
        <p>This is the content that will appear on top of the image. xytff6v dd5drrr chnioyth tohihhth thtm </p>
        <FaQuoteRight className="quote-icon" />
       
      </div>
      <p>ffbuffu</p>
    </div>
  );
}

export default Content;
