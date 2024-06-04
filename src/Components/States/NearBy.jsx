import React from 'react';
import '../States/NearBy.css'
import Card from '../States/NearByCard';
import ExploreAllButton from './ExploreAllButton';

const NearbyPlaces = ({ lists,title }) => (
  <div id="popular-container">
    <div id="title-btn">
      <h2>{title}</h2>
      <ExploreAllButton text="Explore All" />
    </div>
    <div id="popular-img-title-container">
      {lists.map((list, index) => (
        <Card 
          key={index}
          image={list.image}
          name={list.name}
          desc={list.desc}
          disc={list.disc}
        />
      ))}
    </div>
  </div>
);

export default NearbyPlaces;
