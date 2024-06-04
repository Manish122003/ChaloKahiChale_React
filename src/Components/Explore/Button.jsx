import React from 'react'
import '../Explore/Button.css'

export default function Button() {
    const Cities = ['Ahmedabad', 'Bhuj', 'Champaner', 'Girnar', 'Junagadh', 'Kutch', 'Somnath', 'Vadodara'];

    

    return (
        <>
            {Cities.map((city, index) => (
                <button
                    key={index}
                    className="city-button special-city"
                >
                    {city}
                </button>
            ))}
        </>
    );
}
