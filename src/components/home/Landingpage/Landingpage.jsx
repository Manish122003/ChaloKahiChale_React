import React from "react";
import './Landingpage.css'
import Homepage from '../../assets/HomePage.png'
import Date from '../../assets/Date.png'
import Location from '../../assets/Location.png'


const Landingpage = () => {
  return (
    <div>
      <>
            <div className="landing-page">
                <div className="landing-header" >
                    <img loading="lazy" src={Homepage} className="landing-background" />
                    <div className="landing-overlay"></div>
                    <div className="landing-content">
                        <h1 className="landing-title">We Find The Best Tours For You</h1>
                        <div className="landing-description">
                            Embark on a Journey of Discovery: Navigate Through our Comprehensive
                            Travel Guide for Insider Tips, Must-See Destinations, and Unique
                            Experiences that Promise to Ignite Your Wanderlust and Leave You with
                            Lifelong Memories
                        </div>
                    </div>
                </div>
                <div className="landing-search">
                    <div className="search-location">
                        <div className="search-icon">
                            <img loading="lazy" src={Location} className="search-icon-img" />
                            <div className="search-location-text">Location</div>
                        </div>
                        <input type="text" className="search-input" placeholder="Search For A Destination" />
                    </div>
                    <div className="search-date">
                        <div className="date-picker">
                            <img loading="lazy" src={Date} className="calendar-icon" />
                            <div className="date-label">Date</div>
                        </div>

                        <input type="date" className="pick-date" placeholder="Pick Date" />

                    </div>
                    <button className="search-button">Search</button>
                </div>

            </div>
        </>
    </div>
  )
}

export default Landingpage
