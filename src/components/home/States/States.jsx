import { React, useState } from 'react'
import '../States/States.css'
import NearBy from './NearBy';
import Kumbhalgarh from '../../assets/Kumbhalgarh.png'
import Chittorgarh from '../../assets/Chittorgarh.png'
import MountAbu from '../../assets/MountAbu.png'
import TheLeelaPalace from '../../assets/TheLeelaPalace.png'
import TheOberoiUdaivilas from '../../assets/TheOberoiUdaivilas.png'
import Tribute from '../../assets/Tribute.png'
import AmbraiAmetHaveli from '../../assets/AmbraiAmetHaveli.png'
import Rajasthan_State1 from '../../assets/Rajasthan_State1.png'
import Rajasthan_State2 from '../../assets/Rajasthan_State2.png'
import Rajasthan_State3 from '../../assets/Rajasthan_State3.png'
import Rajasthan_State4 from '../../assets/Rajasthan_State4.png'
import Rajasthan_State5 from '../../assets/Rajasthan_State5.png'
import Rajasthan_State6 from '../../assets/Rajasthan_State6.png'
const States = () => {
  const [mainImage, setMainImage] = useState(Rajasthan_State1);
  const [imgArray, setImgArray] = useState([
    { image: Rajasthan_State2, index: 0 },
    { image: Rajasthan_State3, index: 1 },
    { image: Rajasthan_State4, index: 2 },
    { image: Rajasthan_State5, index: 3 },
    { image: Rajasthan_State6, index: 4 }
  ]);

  const places = [
    { image: Kumbhalgarh, name: 'Kumbhalgarh', desc: 'Summer & Adventure', disc: '81 Km * 2h 1m' },
    { image: Chittorgarh, name: 'Chittorgarh', desc: 'Art & Culture Family', disc: '113 Km * 1h 49m' },
    { image: MountAbu, name: 'Mount Abu', desc: 'Nature & Wildlife Relax', disc: '161 Km * 2h 59m' },
    { image: Kumbhalgarh, name: 'Kumbhalgarh', desc: 'Summer & Adventure', disc: '81 Km * 2h 1m' }
  ];

  const hotels = [
    { image: TheLeelaPalace, name: 'The Leela Palace', desc: 'Fully refundable', disc: 'Rs. 4100 per night' },
    { image: TheOberoiUdaivilas, name: 'The Oberoi Udaivilas', desc: 'Fully refundable', disc: 'Rs. 3500 per night' },
    { image: TheLeelaPalace, name: 'The Leela Palace', desc: 'Fully refundable', disc: 'Rs. 4100 per night' },
    { image: TheOberoiUdaivilas, name: 'The Oberoi Udaivilas', desc: 'Fully refundable', disc: 'Rs. 3500 per night' }
  ];

  const restaurants = [
    { image: Tribute, name: 'Tribute', desc: 'Location: Fateh Sagar', disc: 'Cuisine: North Indian, Gujarati' },
    { image: AmbraiAmetHaveli, name: 'Ambrai-Amet Haveli', desc: 'Location: Pichola', disc: 'Cuisine: North Indian, Chinese' },
    { image: Tribute, name: 'Tribute', desc: 'Location: Fateh Sagar', disc: 'Cuisine: North Indian, Gujarati' },
    { image: AmbraiAmetHaveli, name: 'Ambrai-Amet Haveli', desc: 'Location: Pichola', disc: 'Cuisine: North Indian, Chinese' }
  ];

  const changeCityImage = (index) => {
    const clickedImageSrc = imgArray[index].image;
    const newStatesimgArray = imgArray.map((stateimg, idx) => {
      if (idx === index) {
        return { image: mainImage, index: idx };
      }
      return stateimg;
    });
    setMainImage(clickedImageSrc);
    setImgArray(newStatesimgArray);
  };

  return (
    <>
      <div id="states-container">
        <div id="state-title">
          <h1 id='states-heading'>Rajasthan: Embrace the Regal Splendor</h1>
          <h3>India</h3>
        </div>
        <div id="states-big-img-container">
          <img src={mainImage} alt="Rajasthan" id="cities-img" onClick={changeCityImage} />
        </div>

        <div id="states-images-conatainer">
          {
            imgArray.map((stateimg) => (
              <img 
                key={stateimg.index} 
                src={stateimg.image} 
                alt="Rajasthan" 
                className="states-images" 
                onClick={() => changeCityImage(stateimg.index)}
               />
            ))
          }
        </div>
        <div id="states-content">
          <h2>Description</h2>
          <p>See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will
            enjoy great views of Westminster Abbey, the Houses of Parliament, and the London Eye, as you meander
            through the historic streets on board a vintage double decker bus.
          </p>
          <br />
          <p>
            Continue to see St. Paul’s Cathedral, Sir Christopher Wren’s architectural masterpiece, where Admirals
            Nelson and Wellington are buried, and Princess Diana and Prince Charles got married. Continue to the
            Tower of London, built nearly 1,000 years ago during the reign of William the Conqueror.</p>
          <br />
          <p>Home to the Crown Jewels, the Tower is protected by the famous Beefeaters, and the imposing palace has
            been used as a fortress and a prison throughout its history. Your guide will take you to Traitors Gate,
            where prisoners entered the Tower for the last time.</p>
          <br />
          <p>Next, take a short trip along the River Thames, passing Shakespeare’s Globe, Cleopatra’s Needle, and
            London Bridge, before arriving at Westminster Pier. Rejoin the bus and head for Buckingham Palace. Make
            your way to the perfect spot to watch the world famous Changing of the Guard ceremony as the soldiers,
            dressed in their fabulous tunics and busbies, march to military music.
          </p>
          <br />
        </div>
      </div>
      <NearBy lists={places} title='NearBy Places' />
      <NearBy lists={hotels} title='NearBy Hotels' />
      <NearBy lists={restaurants} title='NearBy Restaurants' />
    </>
  )

}

export default States;