import React from "react";
import "./State.css";
import StateComp from "../../components/stateComponent/StateComp";
import Card from "../../components/cardState/Card";
import Blog from "../../components/blog/Blog";

const State = () => {
  return (
    <div id="state-page">
      <main className="content" id="main-content">
        <div className="title" id="title-section">
          <div className="left" id="title-left">
            <h2 id="title-heading">States of India</h2>
            <p className="subtext" id="title-subtext">
              Some States Found
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
          <div className="filters" id="filters-section">
            <div className="heading" id="filters-heading">
              <p>Filters</p>
            </div>
            <br />
            <br />
            <br />
          </div>
          <div className="hotels" id="hotels-section">
            <StateComp />
            <div className="loadmore" id="load-more">
              <span>Load More</span>
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
    </div>
  );
};

export default State;
