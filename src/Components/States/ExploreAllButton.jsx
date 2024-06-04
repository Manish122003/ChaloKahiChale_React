import React from 'react';
import './ExploreAllButton.css';

const ExploreAllButton = ({text }) => (
  <button className="btn">
    <a  style={{ textDecoration: 'none', color: 'black' }}>{text}</a>
  </button>
);

export default ExploreAllButton;
