import React from "react";
import "./PopularDestination.css";
import state5 from "../../images/Rajasthan_State5.png";
import Kumbhalgarh from "../../images/Kumbhalgarh.png";
import chittorgarh from "../../images/Chittorgarh.png";
import state1 from "../../images/Rajasthan_State1.png";
import state2 from "../../images/Rajasthan_State5.png";

const PopularDestination = () => {
  return (
    <div>
      <header id="main-header">
        <div id="headerImage">
          <div className="header" id="header-container">
            <h2 className="heading" id="header-heading">
              Popular Destination
            </h2>
            <h5 className="subHeading" id="header-subheading">
              Home &gt; Popular Destination
            </h5>
          </div>
        </div>
      </header>

      <div className="popular-container">
      <div className="title-btn" id="popular-destination-title">
  <h1 id="popular-destination-heading">Popular Destination</h1>
  <button className="btn" id="explore-all-button">Explore All</button>
</div>

        <div className="popular-img-title-container">
          <div
            className="popular-img-container city-img1"
            onmouseover="scaleCityCard(this)"
            onmouseout="resetCityScale(this)"
          >
            <img loading="lazy" src={Kumbhalgarh} className="popular-img" />
            <div className="popular-title-container">
              <p className="popular-name">Kumbhalgarh</p>
              <p className="popular-desc">Summer &amp; Adventure</p>
              <p className="popular-disc">81 Km * 2h 1m</p>
            </div>
          </div>
          <div
            className="popular-img-container city-img1"
            onmouseover="scaleCityCard(this)"
            onmouseout="resetCityScale(this)"
          >
            <img loading="lazy" src={chittorgarh} className="popular-img" />
            <div className="popular-title-container">
              <p className="popular-name">Chittorgarh</p>
              <p className="popular-desc">Art &amp; Culture Family</p>
              <p className="popular-disc">113 Km * 1h 49m</p>
            </div>
          </div>
          <div
            className="popular-img-container city-img1"
            onmouseover="scaleCityCard(this)"
            onmouseout="resetCityScale(this)"
          >
            <img loading="lazy" src={state1} className="popular-img" />
            <div className="popular-title-container">
              <p className="popular-name">Mount Abu</p>
              <p className="popular-desc">Nature &amp; Wildlife Relax</p>
              <p className="popular-disc">161 Km * 2h 59m</p>
            </div>
          </div>
          <div
            className="popular-img-container city-img1"
            onmouseover="scaleCityCard(this)"
            onmouseout="resetCityScale(this)"
          >
            <img loading="lazy" src={state2} className="popular-img" />
            <div className="popular-title-container">
              <p className="popular-name">Kumbhalgarh</p>
              <p className="popular-desc">Summer &amp; Adventure</p>
              <p className="popular-disc">81 Km * 2h 1m</p>
            </div>
          </div>
          <div
            className="popular-img-container city-img1"
            onmouseover="scaleCityCard(this)"
            onmouseout="resetCityScale(this)"
          >
            <img loading="lazy" src={chittorgarh} className="popular-img" />
            <div className="popular-title-container">
              <p className="popular-name">Chittorgarh</p>
              <p className="popular-desc">Art &amp; Culture Family</p>
              <p className="popular-disc">113 Km * 1h 49m</p>
            </div>
          </div>
          <div
            className="popular-img-container city-img1"
            onmouseover="scaleCityCard(this)"
            onmouseout="resetCityScale(this)"
          >
            <img loading="lazy" src={state5} className="popular-img" />
            <div className="popular-title-container">
              <p className="popular-name">Kumbhalgarh</p>
              <p className="popular-desc">Summer &amp; Adventure</p>
              <p className="popular-disc">81 Km * 2h 1m</p>
            </div>
          </div>
          <div
            className="popular-img-container city-img1"
            onmouseover="scaleCityCard(this)"
            onmouseout="resetCityScale(this)"
          >
            <img loading="lazy" src={Kumbhalgarh} className="popular-img" />
            <div className="popular-title-container">
              <p className="popular-name">Kumbhalgarh</p>
              <p className="popular-desc">Summer &amp; Adventure</p>
              <p className="popular-disc">81 Km * 2h 1m</p>
            </div>
          </div>
          <div
            className="popular-img-container city-img1"
            onmouseover="scaleCityCard(this)"
            onmouseout="resetCityScale(this)"
          >
            <img loading="lazy" src={state1} className="popular-img" />
            <div className="popular-title-container">
              <p className="popular-name">Mount Abu</p>
              <p className="popular-desc">Nature &amp; Wildlife Relax</p>
              <p className="popular-disc">161 Km * 2h 59m</p>
            </div>
          </div>
          <div
            className="popular-img-container city-img1"
            onmouseover="scaleCityCard(this)"
            onmouseout="resetCityScale(this)"
          >
            <img loading="lazy" src={Kumbhalgarh} className="popular-img" />
            <div className="popular-title-container">
              <p className="popular-name">Kumbhalgarh</p>
              <p className="popular-desc">Summer &amp; Adventure</p>
              <p className="popular-disc">81 Km * 2h 1m</p>
            </div>
          </div>
          <div
            className="popular-img-container city-img1"
            onmouseover="scaleCityCard(this)"
            onmouseout="resetCityScale(this)"
          >
            <img loading="lazy" src={Kumbhalgarh} className="popular-img" />
            <div className="popular-title-container">
              <p className="popular-name">Chittorgarh</p>
              <p className="popular-desc">Art &amp; Culture Family</p>
              <p className="popular-disc">113 Km * 1h 49m</p>
            </div>
          </div>
          <div
            className="popular-img-container city-img1"
            onmouseover="scaleCityCard(this)"
            onmouseout="resetCityScale(this)"
          >
            <img loading="lazy" src={state1} className="popular-img" />
            <div className="popular-title-container">
              <p className="popular-name">Mount Abu</p>
              <p className="popular-desc">Nature &amp; Wildlife Relax</p>
              <p className="popular-disc">161 Km * 2h 59m</p>
            </div>
          </div>
          <div
            className="popular-img-container city-img1"
            onmouseover="scaleCityCard(this)"
            onmouseout="resetCityScale(this)"
          >
            <img loading="lazy" src={state5} className="popular-img" />
            <div className="popular-title-container">
              <p className="popular-name">Kumbhalgarh</p>
              <p className="popular-desc">Summer &amp; Adventure</p>
              <p className="popular-disc">81 Km * 2h 1m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
