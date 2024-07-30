import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const pages = [
    { name: "Home", value: "home", path: "/" },
    { name: "Popular Destination", value: "popDestination", path: "/popDestination" },
    { name: "Hotels", value: "hotel", path: "/hotel" },
    { name: "Profile", value: "profile", path: "/profile" },
    { name: "About Us", value: "about", path: "/about" },
    { name: "Cart-🛍️", value: "cart", path: "/cart" },
    { name: "Sign Up", value: "signup", path: "/signup" },
    { name: "Extra", value: "Extra" , path:"/extra"},
    { name: "Products", value: "UserList" ,path:"/products"},
  ];

  // const [currentPage, setCurrentPage] = useState("home");

  // const handlePageChange = (value) => {
  //   setCurrentPage(value);
  // };

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="navbar-links" id="navbar-links">
          <div className="navbar-menu" id="navbar-menu">
            {pages.map((page) => (
              <NavLink
                to={page.path}
                key={page.value}
                // className={`navbar-item ${
                //   currentPage === page.value ? "active" : ""
                // }`}
                 className={`navbar-item`}
                style={{ cursor: "pointer" }}
                // onClick={() => handlePageChange(page.value)}
                id={`navbar-item-${page.value}`}
              >
                {page.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

