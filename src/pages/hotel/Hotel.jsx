import React, { useState, useEffect } from "react";
import axios from "axios";
import HotelComp from "../../components/hotelComponent/HotelComp";
import { Container, Grid, TextField, Select, MenuItem, Button, Typography, CircularProgress, FormControl, InputLabel, Box } from '@mui/material';

const HotelSearch = () => {
  const BASE_URL = 'http://localhost:4000/api/v1';
  const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [filters, setFilters] = useState({
    state: "",
    city: "",
    minPrice: "",
    maxPrice: "",
    minRating: "",
  });
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getstates`);
        setStates(response.data.states || []);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  useEffect(() => {
    if (filters.state) {
      const fetchCities = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/getcitiesbystate?state_name=${filters.state}`);
          setCities(response.data.cities || []);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };
      fetchCities();
    } else {
      setCities([]);
    }
  }, [filters.state]);

  const fetchHotels = async () => {
    let url = `${BASE_URL}/gethotels`;
    if (filters.state || filters.city || filters.minPrice || filters.maxPrice || filters.minRating) {
      url = `${BASE_URL}/gethotelsbystatecityratingandprice?state=${filters.state}&city=${filters.city}`;
      if (filters.minPrice) url += `&minPrice=${filters.minPrice}`;
      if (filters.maxPrice) url += `&maxPrice=${filters.maxPrice}`;
      if (filters.minRating) url += `&minRating=${filters.minRating}`;
    }

    try {
      setLoading(true);
      const response = await axios.get(url);
      setHotels(response.data.hotels || []);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmitFilters = () => {
    fetchHotels();
  };

  const handleSortChange = (e) => {
    const selectedSortOption = e.target.value;
    setSortOption(selectedSortOption);

    let sortedHotels = [...hotels];
    switch (selectedSortOption) {
      case "price_asc":
        sortedHotels.sort((a, b) => a.hotel_price - b.hotel_price);
        break;
      case "price_desc":
        sortedHotels.sort((a, b) => b.hotel_price - a.hotel_price);
        break;
      case "rating_asc":
        sortedHotels.sort((a, b) => a.hotel_review - b.hotel_review);
        break;
      case "rating_desc":
        sortedHotels.sort((a, b) => b.hotel_review - a.hotel_review);
        break;
      default:
        break;
    }
    setHotels(sortedHotels);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = hotels.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <Container>
      {/* <Typography variant="h4" mt={8} gutterBottom> </Typography> */}
      <Box mb={2} mt={15}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="state-label">State</InputLabel>
              <Select
                labelId="state-label"
                name="state"
                value={filters.state}
                onChange={handleInputChange}
                label="State"
              >
                <MenuItem value=""><em>Select State</em></MenuItem>
                {states.map((state) => (
                  <MenuItem key={state._id} value={state.state_name}>
                    {state.state_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth variant="outlined" disabled={!filters.state}>
              <InputLabel id="city-label">City</InputLabel>
              <Select
                labelId="city-label"
                name="city"
                value={filters.city}
                onChange={handleInputChange}
                label="City"
              >
                <MenuItem value=""><em>Select City</em></MenuItem>
                {cities.map((city) => (
                  <MenuItem key={city._id} value={city.city_name}>
                    {city.city_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Min Price"
              name="minPrice"
              type="number"
              value={filters.minPrice}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Max Price"
              name="maxPrice"
              type="number"
              value={filters.maxPrice}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Min Rating"
              name="minRating"
              type="number"
              value={filters.minRating}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}  >
            <Button variant="contained" color="primary" onClick={handleSubmitFilters}  sx={{ height: '56px' , width: '175px' }} >
              Apply Filters

            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box mb={2}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="sort-label">Sort By</InputLabel>
          <Select
            labelId="sort-label"
            name="sortOption"
            value={sortOption}
            onChange={handleSortChange}
            label="Sort By"
          >
            <MenuItem value=""><em>Select Option</em></MenuItem>
            <MenuItem value="price_asc">Price: Low to High</MenuItem>
            <MenuItem value="price_desc">Price: High to Low</MenuItem>
            <MenuItem value="rating_asc">Rating: Low to High</MenuItem>
            <MenuItem value="rating_desc">Rating: High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mb={2}>
        {loading ? (
          <CircularProgress />
        ) : (
          <HotelComp hotels={currentItems} />
        )}
      </Box>
      <Box mb={2} display="flex" justifyContent="center">
        {Array.from({ length: Math.ceil(hotels.length / itemsPerPage) }, (_, i) => (
          <Button
            key={i}
            variant="outlined"
            color="primary"
            onClick={() => setCurrentPage(i + 1)}
            sx={{ margin: 1 }}
          >
            {i + 1}
          </Button>
        ))}
      </Box>
    </Container>
  );
};

export default HotelSearch;
