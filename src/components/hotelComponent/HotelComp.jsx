import React, { useContext, useEffect, useState } from "react";
import { Hotels } from "../../hotelData";
import { CartContext } from "../../contexts/CartContext";

const HotelComp = () => {

  const { addHotel } = useContext(CartContext);

  const handleClick = (id) => {
    addHotel(id);
  };

  return (
    <>
      {Hotels.map((hotel) => (
        <div className="hotel" key={hotel.id} id={`hotel-${hotel.id}`}>
          <div className="left" id={`hotel-image-container-${hotel.id}`}>
            <img
              src={hotel.hotelImg}
              alt="Hotel image"
              id={`hotel-image-${hotel.id}`}
            />
          </div>
          <div className="right" id={`hotel-details-${hotel.id}`}>
            <div className="leftside" id={`hotel-leftside-${hotel.id}`}>
              <div className="upper" id={`hotel-upper-${hotel.id}`}>
                <button className="tag" id={`hotel-tag-${hotel.id}`}>
                  HOTEL
                </button>
                <span
                  className="star"
                  style={{ fontSize: "10px" }}
                  id={`hotel-star-${hotel.id}`}
                >
                  ⭐⭐⭐⭐⭐({hotel.reviews} reviews)
                </span>
              </div>
              <div className="middle" id={`hotel-middle-${hotel.id}`}>
                <h2 id={`hotel-title-${hotel.id}`}>{hotel.title}</h2>
              </div>
              <div className="lower" id={`hotel-lower-${hotel.id}`}>
                <span id={`hotel-distance-${hotel.id}`}>{hotel.distance}</span>
                <span id={`hotel-transport-${hotel.id}`}>Transport</span>
                {/* <span> ₹ {hotel.price}</span> */}
              </div>
            </div>
            <div className="rightside" id={`hotel-rightside-${hotel.id}`}>
              <button
                id={`hotel-book-button-${hotel.id}`}
                onClick={() => handleClick(hotel.id)}
              >
                Read Later
              </button>
              {/* <br /><br />
              <button
                id={`hotel-book-button-${hotel.id}`}
                onClick={() => handleClick(hotel.id)}
              >
                Read Later
              </button> */}
            </div>
          </div>
        </div>
      ))}

      <br />
      <br />
    </>
  );
};

export default HotelComp;
