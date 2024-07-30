import React from "react";
import Blog from "../../components/blog/Blog";
import Card from "../../components/cardState/Card";
import HotelComp from "../../components/hotelComponent/HotelComp";

const Hotel = () => {
  return (
    <>
      <main className="content" id="main-content">
        <h3>Filter</h3>
        <h3>States:select City:select Filter:by price, by rating sort:(high to low,low to high)</h3>
        <div className="title" id="title-section">
          <div className="left" id="title-left">
            <h2 id="title-heading">Hotels near Chittorgarh</h2>
            <p className="subtext" id="title-subtext">
              7 Hotels Found
            </p>
          </div>
          <div className="right" id="title-right">
            <span className="sortby" id="sortby-label">
              Sort By
            </span>
            <select name="popularity" className="select" id="sortby-select">
              <option className="option" value="Popularity">
                Popularity
              </option>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>
        </div>
        <div className="details" id="details-section">
          {/* <div className="filters" id="filters-section">
            <div className="heading" id="filters-heading">
              <p>Filters</p>
            </div>
            <br />
            <div className="filter-by-price" id="filter-by-price">
              <p id="price-label">Price</p>
              <hr />
              <div className="price" id="price-1k-2k">
                <input
                  type="checkbox"
                  id="price-1k-2k-checkbox"
                  name="price"
                  value="1k-2k"
                />
                <label htmlFor="price-1k-2k-checkbox">1k - 2k</label>
                <br />
              </div>
              <div className="price" id="price-2k-5k">
                <input
                  type="checkbox"
                  id="price-2k-5k-checkbox"
                  name="price"
                  value="2k-5k"
                />
                <label htmlFor="price-2k-5k-checkbox">2k - 5k</label>
                <br />
              </div>
              <div className="price" id="price-5k-10k">
                <input
                  type="checkbox"
                  id="price-5k-10k-checkbox"
                  name="price"
                  value="5k-10k"
                />
                <label htmlFor="price-5k-10k-checkbox">5k - 10k</label>
                <br />
              </div>
              <div className="price" id="price-10k-20k">
                <input
                  type="checkbox"
                  id="price-10k-20k-checkbox"
                  name="price"
                  value="10k-20k"
                />
                <label htmlFor="price-10k-20k-checkbox">10k - 20k</label>
                <br />
              </div>
              <div className="price" id="price-20k-40k">
                <input
                  type="checkbox"
                  id="price-20k-40k-checkbox"
                  name="price"
                  value="20k-40k"
                />
                <label htmlFor="price-20k-40k-checkbox">20k - 40k</label>
                <br />
              </div>
            </div>
            <br />
            <div className="filter-by-rating" id="filter-by-rating">
              <p id="rating-label">Rating</p>
              <hr />
              <div className="rating" id="rating-5">
                <input
                  type="checkbox"
                  id="rating-5-checkbox"
                  name="rating"
                  value="5"
                />
                <label htmlFor="rating-5-checkbox">5 ⭐</label>
                <br />
              </div>
              <div className="rating" id="rating-4">
                <input
                  type="checkbox"
                  id="rating-4-checkbox"
                  name="rating"
                  value="4"
                />
                <label htmlFor="rating-4-checkbox">4 ⭐ &amp; above</label>
                <br />
              </div>
              <div className="rating" id="rating-3">
                <input
                  type="checkbox"
                  id="rating-3-checkbox"
                  name="rating"
                  value="3"
                />
                <label htmlFor="rating-3-checkbox">3 ⭐ &amp; above</label>
                <br />
              </div>
              <div className="rating" id="rating-below-2">
                <input
                  type="checkbox"
                  id="rating-below-2-checkbox"
                  name="rating"
                  value="below-2"
                />
                <label htmlFor="rating-below-2-checkbox">below 2 ⭐ </label>
                <br />
              </div>
              <div className="rating" id="price-range">
                <input
                  type="checkbox"
                  id="price-range-checkbox"
                  name="price-range"
                  value="20k-40k"
                />
                <label htmlFor="price-range-checkbox">20k - 40k</label>
                <br />
              </div>
            </div>
            <br />
            <div className="filter-by-range" id="filter-by-range">
              <p id="range-label">Destination Range</p>
              <hr />
              <div className="range" id="range-input">
                <input type="range" name="range" id="range-slider" />
                <br />
                <label htmlFor="range-slider">1km to 10km</label>
              </div>
            </div>
          </div> */}
          <div className="hotels" id="hotels-section">
            <HotelComp />
            <div className="loadmore" id="load-more">
              <span id="load-more-text">Load More</span>
            </div>
          </div>
        </div>
        <div className="nearby" id="nearby-places-section">
          <div className="title" id="nearby-title">
            <h1 id="nearby-heading">Nearby Places</h1>
            <div id="nearby-buttons">
              <button className="leftb" id="nearby-left-button">
                &lt;
              </button>
              <button className="rightb" id="nearby-right-button">
                &gt;
              </button>
            </div>
          </div>
          <div className="cards" id="nearby-cards">
            <Card place="nearby" />
          </div>
        </div>
        <div className="nearby" id="outside-places-section">
          <div className="title" id="outside-title">
            <h1 id="outside-heading">Outside the City Specials</h1>
            <div id="outside-buttons">
              <button className="leftb" id="outside-left-button">
                &lt;
              </button>
              <button className="rightb" id="outside-right-button">
                &gt;
              </button>
            </div>
          </div>
          <div className="cards" id="outside-cards">
            <Card place="outside" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="blogsection" id="blog-section">
          <div className="bloghead" id="blog-heading">
            <div className="left" id="blog-left">
              <h1 id="blog-main-heading">Latest Stories From The City</h1>
              <p id="blog-description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit
              </p>
            </div>
            <div className="right" id="blog-right">
              <button id="view-all-posts-button">View All Posts</button>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="blogs" id="blogs-section">
            <Blog />
          </div>
        </div>
        <br />
        <br />
      </main>
    </>
  );
};

export default Hotel;
