import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { Hotels } from "../../hotelData";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {

  const { filteredHotels, deleteHotel } = useContext(CartContext);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1 className="headingMain" id="headingMain">Cart Comp</h1>
      <div className="hotelsAll" id="hotels-all">
        {filteredHotels.map((hotel) => (
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
                  <span id={`hotel-distance-${hotel.id}`}>
                    {hotel.distance}
                  </span>
                  <span id={`hotel-transport-${hotel.id}`}>Transport</span>
                  {/* <span> ₹ {hotel.price}</span> */}
                </div>
              </div>
              <div className="rightside" id={`hotel-rightside-${hotel.id}`}>
                <button
                  id={`hotel-delete-button-${hotel.id}`}
                  onClick={() => deleteHotel(hotel.id)}
                  style={{ width: "100px" }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br /><br />
      <span className="totalItems">Total Items : <span className="length">{filteredHotels.length}</span></span>
    </div>
  );
};

export default Cart;
