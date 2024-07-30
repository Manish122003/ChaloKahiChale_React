import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
const Header = () => {

  const {idArray}=useContext(CartContext);

  return (
    <>
      <nav className="mainHeader" id="mainHeader">
        <div className="mainHeader-brand" id="mainHeader-brand">
          ChaloKahiChale
        </div>
        <div className="mainHeader-links" id="mainHeader-links">
          <div className="mainHeader-menu" id="mainHeader-menu">
            CartItems: {idArray.length}
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default Header;
