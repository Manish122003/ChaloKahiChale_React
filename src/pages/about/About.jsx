import React from "react";
import "./About.css";
import Adventure from "../../images/adventureimage.png";
import ServiceImg from "../../images/Best Service.png";
import priceImg from "../../images/Price Guarantee.png";
import hotelImg from "../../images/Handpicked Hotels.png";
import clientImg from "../../images/SatisfiedClient.png";
import award from "../../images/award.png";
import destination from "../../images/Destination.png";
import traveller from "../../images/Traveller.png";

const About = () => {
  return (
    <div>
      <>
        <header id="about-header">
          <div id="headerImage">
            <div className="header">
              <h2 className="heading" id="about-heading">
                About Us
              </h2>
              <h5 className="subHeading" id="about-subHeading">
                Home &gt; About US
              </h5>
            </div>
          </div>
        </header>
        <section id="about-section">
          <div className="aboutUs" id="aboutUs">
            <div className="right" id="about-right">
              <h2 className="heading" id="aboutUs-heading">
                About Us
              </h2>
              <p className="description" id="aboutUs-description">
                Discover the magic of travel with ChaloKahiChale! We're not just
                your average tour planners; we're dream weavers, memory makers,
                and adventure architects all rolled into one. From hidden gems
                to iconic landmarks, we'll whisk you away on a journey of a
                lifetime. Let's turn your wanderlust into wander-musts together!
              </p>
            </div>
            <div className="left" id="about-left">
              <img id="about-image" src={Adventure} alt="Adventure" />
            </div>
          </div>
          <div className="whyChooseUs" id="whyChooseUs">
            <div className="header" id="whyChooseUs-header">
              <h2 className="heading" id="whyChooseUs-heading">
                Why choose Us?
              </h2>
              <h5 className="subHeading" id="whyChooseUs-subHeading">
                our services have been trusted by world travelers.
              </h5>
            </div>
            <div id="cards">
              <div className="card" id="card-bestService">
                <img
                  src={ServiceImg}
                  alt="Best Service"
                  className="cardIcon"
                  id="cardIcon-bestService"
                />
                <h1 className="cardHeading" id="cardHeading-bestService">
                  Best Service
                </h1>
                <p className="cardcontent" id="cardContent-bestService">
                  our service is reliable and convenient, our service is
                  quality.
                </p>
              </div>
              <div className="card" id="card-priceGuarantee">
                <img
                  src={priceImg}
                  alt="Price Guarantee"
                  className="cardIcon"
                  id="cardIcon-priceGuarantee"
                />
                <h1 className="cardHeading" id="cardHeading-priceGuarantee">
                  Price Guarantee
                </h1>
                <p className="cardcontent" id="cardContent-priceGuarantee">
                  our service is reliable and convenient, our service is
                  quality.
                </p>
              </div>
              <div className="card" id="card-handpickedHotels">
                <img
                  src={hotelImg}
                  alt="Handpicked Hotels"
                  className="cardIcon"
                  id="cardIcon-handpickedHotels"
                />
                <h1 className="cardHeading" id="cardHeading-handpickedHotels">
                  Handpicked Hotels
                </h1>
                <p className="cardcontent" id="cardContent-handpickedHotels">
                  our service is reliable and convenient, our service is
                  quality.
                </p>
              </div>
            </div>
          </div>
          <div className="achievement" id="achievement">
            <div className="header" id="achievement-header">
              <h2 className="heading" id="achievement-heading">
                Our Achievement
              </h2>
              <h5 className="subHeading" id="achievement-subHeading">
                These milestones inspire us to continue crafting exceptional
                travel experiences <br />
                for every adventurer who chooses to journey with us.
              </h5>
            </div>
            <div className="achievementicons" id="achievement-icons">
              <div className="icons" id="satisfiedClient">
                <div className="img" id="satisfiedClient-img">
                  <img src={clientImg} alt="Satisfied Client" />
                </div>
                <div className="text" id="satisfiedClient-text">
                  <h3>
                    1200 <sup>+</sup>
                  </h3>
                  <p className="des">Satisfied Client</p>
                </div>
              </div>
              <div className="icons" id="newTraveller">
                <div className="img" id="newTraveller-img">
                  <img src={traveller} alt="New Traveller" />
                </div>
                <div className="text" id="newTraveller-text">
                  <h3>
                    500<sup>+</sup>
                  </h3>
                  <p className="des">New Traveller</p>
                </div>
              </div>
              <div className="icons" id="destination">
                <div className="img" id="destination-img">
                  <img src={destination} alt="Destination" />
                </div>
                <div className="text" id="destination-text">
                  <h3>
                    200<sup>+</sup>
                  </h3>
                  <p className="des">Destination</p>
                </div>
              </div>
              <div className="icons" id="award">
                <div className="img" id="award-img">
                  <img src={award} alt="Award" />
                </div>
                <div className="text" id="award-text">
                  <h3>
                    50 <sup>+</sup>
                  </h3>
                  <p className="des">Award</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default About;
