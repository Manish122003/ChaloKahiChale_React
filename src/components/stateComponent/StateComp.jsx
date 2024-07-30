import React from "react";
import image1 from "../../images/statesimage/gujarat.jpg";
import image2 from "../../images/statesimage/bihar.jpg";
import image3 from "../../images/statesimage/kerela.jpg";
import image4 from "../../images/statesimage/mp.jpg";
import image5 from "../../images/statesimage/punjab.jpg";
import image6 from "../../images/statesimage/rajasthan.jpg";
import image7 from "../../images/statesimage/tamil.jpg";
import image8 from "../../images/statesimage/up.jpg";
import image9 from "../../images/statesimage/utt.jpg";

const StateComp = () => {
  const States = [
    {
      id: 1,
      stateName: "Gujarat",
      category: "Family ● Art & Culture",
      image: image1,
      reviews: 236,
    },
    {
      id: 2,
      stateName: "Bihar",
      category: "Family ● Art & Culture",
      image: image2,
      reviews: 100,
    },
    {
      id: 3,
      stateName: "Kerala",
      category: "Food & Drink ● Art & Culture",
      image: image3,
      reviews: 325,
    },
    {
      id: 4,
      stateName: "Madhya Pradesh",
      category: "Family ● Art & Culture",
      image: image4,
      reviews: 500,
    },
    {
      id: 5,
      stateName: "Punjab",
      category: "Wildlife & nature ● Family",
      image: image5,
      reviews: 245,
    },
    {
      id: 6,
      stateName: "Rajasthan",
      category: "Art & Culture ● Family",
      image: image6,
      reviews: 940,
    },
    {
      id: 7,
      stateName: "Tamil Nadu",
      category: "Art & Culture ● Relax & Retreat",
      image: image7,
      reviews: 368,
    },
    {
      id: 8,
      stateName: "Uttar Pradesh",
      category: "Art & Culture ● Family",
      image: image8,
      reviews: 496,
    },
    {
      id: 9,
      stateName: "Uttarakhand",
      category: "Art & Culture ● Relax & Retreat",
      image: image9,
      reviews: 235,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {States.map((state) => (
        <div className="hotel" key={state.id} id={`hotel-${state.id}`}>
          <div className="left">
            <img src={state.image} id={`hotel-image-${state.id}`} />
          </div>
          <div className="right">
            <div className="leftside">
              <div className="upper">
                <button className="tag">STATE</button>
                <span className="star">
                  ⭐⭐⭐⭐⭐({state.reviews} reviews)
                </span>
              </div>
              <div className="middle">
                <h2>{state.stateName}</h2>
              </div>
              <div className="lower">
                <span>{state.category}</span>
                <span>Transport</span>
              </div>
            </div>
            <div className="rightside">
              <button>Explore Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StateComp;
