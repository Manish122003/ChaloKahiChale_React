import React, { useState } from 'react';
import './NearByCard.css';

const NearByCard = ({ image, name, desc, disc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id='nearby-card'
      className={`card-container ${isHovered ? 'hovered' : ''}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <img src={image} className="card-img" alt={name} />
      <div id='nearby-title-container' className="card-title-container">
        <p className="card-name">{name}</p>
        <p className="card-desc">{desc}</p>
        <p className="card-disc">{disc}</p>
      </div>
    </div>
  );
};

export default NearByCard;
