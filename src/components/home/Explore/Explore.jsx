import React from 'react';
import Button from './Button';
import Card from '../Explore/Card';
import '../Explore/Explore.css';
import Hotels from '../../assets/Hotels.png';
import Nearby from '../../assets/Nearby.png';
import Restaurant from '../../assets/Restaurant.png';
import Vadodara from '../../assets/Vadodara.png';
import bihar from '../../assets/bihar.jpg';
import gujarat from '../../assets/gujarat.jpg';
import rajasthan from '../../assets/rajasthan.jpg';
import kerela from '../../assets/kerela.jpg';
import mp from '../../assets/mp.jpg';
import punjab from '../../assets/punjab.jpg';
import tamil from '../../assets/tamil.jpg';

export default function Explore() {
    let states = [
        {
            id: 1,
            StateName: 'Gujarat',
            StateImage: gujarat
        },
        {
            id: 2,
            StateName: 'Rajasthan',
            StateImage: rajasthan
        },
        {
            id: 3,
            StateName: 'Bihar',
            StateImage: bihar
        },
        {
            id: 4,
            StateName: 'Kerela',
            StateImage: kerela
        },
        {
            id: 5,
            StateName: 'Madhya Pradesh',
            StateImage: mp
        },
        {
            id: 6,
            StateName: 'Punjab',
            StateImage: punjab
        },
        {
            id: 7,
            StateName: 'Tamil Nadu',
            StateImage: tamil
        }
    ];

    return (
        <div className="explore-container">
            <div className="explore-title-cities">
                <h1>Explore Popular Cities of Gujarat</h1>
                <p>Discover the timeless beauty of Gujarat’s most iconic cities with our curated travel guide.</p>
            </div>

            <div className="cities">
            <Button />
            </div>
            
            <div className="city-details">
                <img className="city-img" src={Vadodara} alt="Vadodara" />
            </div>

            <div className="city-container">
                <div className="city-info">
                    <div className="city-description">
                        <div className="column">
                            <div className="city-name-div">
                                <h1 className="city-name-text">Vadodara</h1>
                                <p className="city-description-text">
                                    Welcome to Vadodara, a vibrant city in the heart of Gujarat, India.
                                    Explore its rich history, cultural heritage, and architectural
                                    marvels, set against a backdrop of modernity and charm.
                                </p>
                            </div>
                        </div>
                        <div className="column-2">
                            <div className="city-attractions-column">
                                <div className="nearby-attractions-div">
                                    <div className="nearby-attraction-icon-div">
                                        <img loading="lazy" src={Nearby} className="img" alt="Nearby Attractions" />
                                        <button className="nearby-name-text">Nearby Places to Visit</button>
                                    </div>
                                </div>
                                <div className="restaurants-attractions-div">
                                    <div className="restaurants-attraction-icon-div">
                                        <img loading="lazy" src={Restaurant} className="img-2" alt="Popular Restaurants" />
                                        <button className="restaurants-name-text">Popular Restaurants</button>
                                    </div>
                                </div>
                                <div className="hotels-attractions-div">
                                    <div className="hotels-attraction-icon-div">
                                        <img loading="lazy" src={Hotels} className="img-3" alt="Popular Hotels" />
                                        <button className="hotels-name-text">Popular Hotels</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore-states">
                <h1>Explore All States of India</h1>
                <div className="states-scroll-container">
                    <div className="states-div">
                        {states.map(({ id, StateImage, StateName }) => (
                            <Card
                                key={id}
                                StateImage={StateImage}
                                StateName={StateName}
                            />
                        ))}
                    </div>
                </div>
                <br></br>
            </div>
        </div>
    );
}
