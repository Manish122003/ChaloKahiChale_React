import React from 'react';
import './Testimonial.css';
import Sebastian from '../../assets/Sebastian.png';
import Evangeline from '../../assets/Evangeline.png';
import Alexander from '../../assets/Alexander.png';


const Testimonial = () => {
  return (
    <div>
      <div id="testimonial-container">
      <div id="title-arrow-container">
        <h1 id="title">Testimonials</h1>
        <div id="arrow-container">
          <a href="#" id="left-arrow"><i className="fa-solid fa-angle-left" style={{ color: '#ffffff' }}></i></a>
          <a href="#" id="right-arrow"><i className="fa-solid fa-angle-right" style={{ color: '#ffffff' }}></i></a>
        </div>
      </div>
      <div id="testimonial-items">
        <div className="testimonial">
          <img className="testimonial-img" src={Sebastian} alt="Sebastian" />
          <div className="name-desc-container">
            <div className="name-rating">
              <div className="name-position">
                <p className="testimonial-name">Sebastian</p>
                <p className="testimonial-position">Graphic Design</p>
              </div>
              <div className="rating">
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
              </div>
            </div>
            <p className="testimonial-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          </div>
        </div>
        <div className="testimonial">
          <img className="testimonial-img" src={Evangeline} alt="Evangeline" />
          <div className="name-desc-container">
            <div className="name-rating">
              <div className="name-position">
                <p className="testimonial-name">Evangeline</p>
                <p className="testimonial-position">Model</p>
              </div>
              <div className="rating">
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
              </div>
            </div>
            <p className="testimonial-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          </div>
        </div>
        <div className="testimonial">
          <img className="testimonial-img" src={Alexander} alt="Alexander" />
          <div className="name-desc-container">
            <div className="name-rating">
              <div className="name-position">
                <p className="testimonial-name">Alexander</p>
                <p className="testimonial-position">Software Engineer</p>
              </div>
              <div className="rating">
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
              </div>
            </div>
            <p className="testimonial-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonial
