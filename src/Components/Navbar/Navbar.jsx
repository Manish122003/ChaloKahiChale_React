import React from "react";
import '../Navbar/Navbar.css'
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <nav className="navbar">
                {/* <a href="javascript:void(0)" className="closebutton" onclick="toggleNavsidebar()" style="color: #f1f1f1; text-decoration: none; padding-top: 0.75%;">&#9776;</a> */}
                <div className="navbar-brand">ChaloKahiChale</div>
                <div className="navbar-links">
                    <div className="navbar-menu">
                        <Link to='/' className="navbar-item">Home</Link>

                        <Link to="/Populardestionation" className="navbar-item">Popular Destinations</Link>
                        <Link to="/Profile" className="navbar-item">profile</Link>
                        <Link to="/Aboutus" className="navbar-item">About Us</Link>
                    </div>
                    <Link to="/Signup" className="navbar-signin">Sign In</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;