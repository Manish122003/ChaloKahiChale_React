import React, { createContext, useEffect, useMemo, useState } from "react";
import { Hotels } from "../hotelData.js";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [idArray, setIdArray] = useState([]);

  useEffect(() => {
    const totalIds = localStorage.getItem("hotel_ids");
    if (totalIds) {
      setIdArray(JSON.parse(totalIds));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("hotel_ids", JSON.stringify(idArray));
  }, [idArray]);

  const addHotel = (id) => {
    if (!idArray.includes(id)) {
      setIdArray([...idArray, id]);
    }
  };

  const deleteHotel = (id) => {
    const updatedIdArray = idArray.filter((hotelId) => hotelId !== id);
    setIdArray(updatedIdArray);
    localStorage.setItem("hotel_ids", JSON.stringify(updatedIdArray));
  };

  const filteredHotels = useMemo(() => {
    return Hotels.filter((hotel) => idArray.includes(hotel.id));
  }, [idArray, Hotels]);

  return (
    <CartContext.Provider
      value={{ idArray, filteredHotels, addHotel, deleteHotel }}
    >
      {children}
    </CartContext.Provider>
  );
};



// import { createContext, useEffect, useState } from "react";
// import { Hotels } from "../hotelData.js";

// export const CartContext = createContext();

// export const CartContextProvider = ({ children }) => {
//   const [idArray, setIdArray] = useState([]);

//   useEffect(() => {
//     const totalIds = localStorage.getItem("hotel_ids");
//     if (totalIds) {
//       setIdArray(JSON.parse(totalIds));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("hotel_ids", JSON.stringify(idArray));
//   }, [idArray]);

//   const addHotel = (id) => {
//     if (!idArray.includes(id)) {
//       setIdArray([...idArray, id]);
//     }
//   };

//   const filteredHotels = Hotels.filter((hotel) => idArray?.includes(hotel.id));

//   const deleteHotel = (id) => {
//     const updatedIdArray = idArray.filter((hotelId) => hotelId !== id);
//     setIdArray(updatedIdArray);
//     localStorage.setItem("hotel_ids", JSON.stringify(updatedIdArray));
//   };

//   return (
//     <CartContext.Provider
//       value={{ idArray, filteredHotels, addHotel, deleteHotel }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
