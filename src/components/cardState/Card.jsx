import React from "react";

const Card = (props) => {
  let value = props.place;

  const places = [
    {
      id: 1,
      imageUrl:
        "https://www.clubmahindra.com/blog/media/section_images/shuttersto-edcf9d450240f11.jpg",
      altText: "nearby Udaipur",
      title: "Kumbhalgarh",
      description: "Summer & Adventure",
      distance: "81 Km",
      travelTime: "2h 1m",
    },
    {
      id: 2,
      imageUrl:
        "https://th.bing.com/th?id=OSK.HERO1oGwnJuSV6vD-V6ymvPD0gxStFSR9wVSKUojm3d2xUw&w=472&h=280&c=1&rs=2&o=6&dpr=1.1&pid=SANGAM",
      altText: "nearby Udaipur",
      title: "Chittorgarh",
      description: "Art & Culture Family",
      distance: "113 Km",
      travelTime: "1h 49m",
    },
    {
      id: 3,
      imageUrl:
        "https://assets-news.housing.com/news/wp-content/uploads/2022/08/19183321/mount-abu-feature-compressed.jpg",
      altText: "nearby Udaipur",
      title: "Mount Abu",
      description: "Nature & Wildlife Relax",
      distance: "161 Km",
      travelTime: "2h 59m",
    },
  ];

  const outsidePlace = [
    {
      id: 1,
      imageUrl:
        "https://th.bing.com/th?id=OSK.HERO1oGwnJuSV6vD-V6ymvPD0gxStFSR9wVSKUojm3d2xUw&w=472&h=280&c=1&rs=2&o=6&dpr=1.1&pid=SANGAM",
      altText: "nearby Udaipur",
      title: "Chittorgarh",
      description: "Art & Culture Family",
      distance: "113 Km",
      travelTime: "1h 49m",
    },
    {
      id: 2,
      imageUrl:
        "https://assets-news.housing.com/news/wp-content/uploads/2022/08/19183321/mount-abu-feature-compressed.jpg",
      altText: "nearby Udaipur",
      title: "Mount Abu",
      description: "Nature & Wildlife Relax",
      distance: "161 Km",
      travelTime: "2h 59m",
    },
    {
      id: 3,
      imageUrl:
        "https://www.clubmahindra.com/blog/media/section_images/shuttersto-edcf9d450240f11.jpg",
      altText: "nearby Udaipur",
      title: "Kumbhalgarh",
      description: "Summer & Adventure",
      distance: "81 Km",
      travelTime: "2h 1m",
    },
  ];

  switch (value) {
    case (value = "nearby"):
      return places.map((place) => (
        <div className="card" key={place.id} id={`card-${place.id}`}>
          <img
            src={place.imageUrl}
            alt={place.altText}
            width="300px"
            height="200px"
            style={{ borderRadius: "20px 20px 0px 0px" }}
            id={`card-image-${place.id}`}
          />
          <div className="carddetails" id={`carddetails-${place.id}`}>
            <h2 id={`card-title-${place.id}`}>{place.title}</h2>
            <p id={`card-description-${place.id}`}>{place.description}</p>
            <p id={`card-distance-traveltime-${place.id}`}>
              {place.distance} * {place.travelTime}
            </p>
          </div>
        </div>
      ));
      break;

    case (value = "outside"):
      return outsidePlace.map((place) => (
        <div className="card" key={`place-${place.id}`}>
          <img
            src={place.imageUrl}
            alt={place.altText}
            width="300px"
            height="200px"
            style={{ borderRadius: "20px 20px 0px 0px" }}
          />
          <div className="carddetails" id={`place-details-${place.id}`}>
            <h2 id={`place-title-${place.id}`}>{place.title}</h2>
            <p id={`place-description-${place.id}`}>{place.description}</p>
            <p id={`place-distance-traveltime-${place.id}`}>
              {place.distance} * {place.travelTime}
            </p>
          </div>
        </div>
      ));
      break;

    default:
      break;
  }
};

export default Card;
