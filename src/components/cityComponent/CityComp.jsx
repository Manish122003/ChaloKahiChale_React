import React from "react";

const CityComp = () => {
  const Cities = [
    {
      id: 1,
      cityImage:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Hawa_Mahal,_Jaipur,_India.jpg",
      reviews: 345,
      cityName: "Jaipur",
      category: "Family ● Art & Culture",
    },
    {
      id: 2,
      cityImage:
        "https://cdn.audleytravel.com/-/-/79/139167094238033145013027134233071026117168112122.jpg",
      reviews: 400,
      cityName: "Udaipur",
      category: "Family ● Art & Culture",
    },
    {
      id: 3,
      cityImage:
        "https://www.travelescape.in/wp-content/uploads/2017/07/Jodhpur-1-www_mouthshut_com.jpg",
      reviews: 200,
      cityName: "Jodhpur",
      category: "Food & Drink ● Art & Culture",
    },
    {
      id: 4,
      cityImage:
        "https://th.bing.com/th/id/R.4cb88e8c3d2c1ba5bd6261e0adc1408e?rik=vmNHCmwXuOgB0Q&riu=http%3a%2f%2fwww.journeytoexplore.com%2fwp-content%2fuploads%2f2019%2f06%2fJaisalmer-city-from-Jaisalmer-fort-through-arch.jpg&ehk=wc7yglXjden%2bH6xiZShzYqQ6DLjIXswrtG9xKL1L2jU%3d&risl=&pid=ImgRaw&r=0",
      reviews: 500,
      cityName: "Jaisalmer",
      category: "Family ● Art & Culture",
    },
    {
      id: 5,
      cityImage:
        "https://www.adotrip.com/public/images/city/master_images/5e4a7d1d25c3e-Mount_Abu_Attractions.jpg",
      reviews: 600,
      cityName: "Mount Abu",
      category: "Wildlife & nature • Family",
    },
    {
      id: 6,
      cityImage:
        "https://th.bing.com/th/id/OIP.gLC3ldv-O9HvaiJdppQ0ZgHaEK?rs=1&pid=ImgDetMain",
      reviews: 94,
      cityName: "Kota",
      category: "Art & Culture • Family",
    },
    {
      id: 7,
      cityImage:
        "https://img.veenaworld.com/wp-content/uploads/2021/03/Ajmer-Sharif-Dargah-An-Evening-at-Khwaja-Moinuddin-Chishtis-Dargah-scaled.jpg",
      reviews: 415,
      cityName: "Ajmer",
      category: "Art & Culture • Relax & Retreat",
    },
    {
      id: 8,
      cityImage:
        "https://adventuretraveltrek.com/wp-content/uploads/2018/09/Gajner-Palace-Bikaner.jpg",
      reviews: 200,
      cityName: "Bikaner",
      category: "Art & Culture • Family",
    },
    {
      id: 9,
      cityImage:
        "https://th.bing.com/th/id/OIP.RHk0tv9JdiNmo80Hq2LYZAHaFe?rs=1&pid=ImgDetMain",
      reviews: 96,
      cityName: "Alwar",
      category: "Art & Culture • Relax & Retreat",
    },
    {
      id: 10,
      cityImage: "https://yometro.com/images/places/nagpur.jpg",
      reviews: 200,
      cityName: "Nagpur",
      category: "Art & Culture • Food & Drink",
    },
  ];

  return (
    <>
      {Cities.map((city) => (
        <div className="hotel" key={city.id} id={`city-${city.id}`}>
          <div className="left" id={`city-image-container-${city.id}`}>
            <img
              src={city.cityImage}
              alt={city.cityName}
              id={`city-image-${city.id}`}
            />
          </div>
          <div className="right" id={`city-details-${city.id}`}>
            <div className="leftside" id={`city-leftside-${city.id}`}>
              <div className="upper" id={`city-upper-${city.id}`}>
                <button className="tag" id={`city-tag-${city.id}`}>
                  CITY
                </button>
                <span className="star" id={`city-star-${city.id}`}>
                  ⭐⭐⭐⭐⭐({city.reviews} reviews)
                </span>
              </div>
              <div className="middle" id={`city-middle-${city.id}`}>
                <h2 id={`city-name-${city.id}`}>{city.cityName}</h2>
              </div>
              <div className="lower" id={`city-lower-${city.id}`}>
                <span id={`city-category-${city.id}`}>{city.category}</span>
                <span id={`city-transport-${city.id}`}>Transport</span>
              </div>
            </div>
            <div className="rightside" id={`city-rightside-${city.id}`}>
              <button id={`city-explore-button-${city.id}`}>Explore Now</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CityComp;
