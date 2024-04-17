import React from 'react';
import './BackgroundVideo.css'; // Import your CSS file for styling
import background from '../../assets/background.mp4';
const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted playsInline>
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <h1>Your Text Here</h1>
        <p>Additional text can go here</p>
      </div>
    </div>
  );
};

export default BackgroundVideo;