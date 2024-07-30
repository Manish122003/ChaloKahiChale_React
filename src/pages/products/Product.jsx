import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Button, CircularProgress } from '@mui/material';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

const Product = ({ productProps }) => {
  const [loading, setLoading] = useState(true);
  const [dataList, setDataList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    company: "",
    minPrice: "",
    maxPrice: "",
    availability: "",
  });
  const [sortOption, setSortOption] = useState("price_asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchCategoriesAndCompanies = async () => {
      try {
        const categoriesResponse = await axios.get("https://json-server-c67opnddza-el.a.run.app/categories");
        const companiesResponse = await axios.get("https://json-server-c67opnddza-el.a.run.app/companies");
        setCategories(categoriesResponse.data);
        setCompanies(companiesResponse.data);
      } catch (error) {
        console.error("Error fetching categories and companies:", error);
      }
    };

    if (productProps.length > 0) {
      setLoading(false);
      setDataList(productProps);
      setFilteredData(productProps);
      fetchCategoriesAndCompanies();
    }
  }, [productProps]);

  const fetchProductsByFilter = async () => {
    let url = "";
    let filtered = productProps;

    const params = [];
    if (filters.minPrice) params.push(`minPrice=${filters.minPrice}`);
    if (filters.maxPrice) params.push(`maxPrice=${filters.maxPrice}`);
    if (filters.availability) params.push(`availability=${filters.availability}`);
    const paramString = params.length ? `?${params.join("&")}` : "";

    // Construct the URL based on filters
    if (filters.category && filters.company) {
      url = `https://json-server-c67opnddza-el.a.run.app/companies/${filters.company}/categories/${filters.category}/products${paramString}`;
    } else if (filters.category) {
      url = `https://json-server-c67opnddza-el.a.run.app/categories/${filters.category}/products${paramString}`;
    } else if (filters.company) {
      url = `https://json-server-c67opnddza-el.a.run.app/companies/${filters.company}/products${paramString}`;
    }

    if (url) {
      try {
        setLoading(true);
        const response = await axios.get(url);
        filtered = response.data;
      } catch (error) {
        console.error("Error fetching products by filter:", error);
      } finally {
        setLoading(false);
      }
    }
    
    setFilteredData(filtered);
  };

  const applyFiltersAndSorting = () => {
    let filteredProducts = [...dataList];

    // Apply filters
    if (filters.minPrice) {
      filteredProducts = filteredProducts.filter(product => product.price >= parseFloat(filters.minPrice));
    }
    if (filters.maxPrice) {
      filteredProducts = filteredProducts.filter(product => product.price <= parseFloat(filters.maxPrice));
    }
    if (filters.availability) {
      filteredProducts = filteredProducts.filter(product => (filters.availability === "yes" && product.availability === "yes") ||
        (filters.availability === "no" && product.availability === "no"));
    }

    // Apply sorting
    switch (sortOption) {
      case "price_asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "rating_asc":
        filteredProducts.sort((a, b) => a.rating - b.rating);
        break;
      case "rating_desc":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "company_asc":
        filteredProducts.sort((a, b) => a.company.localeCompare(b.company));
        break;
      case "company_desc":
        filteredProducts.sort((a, b) => b.company.localeCompare(a.company));
        break;
      default:
        filteredProducts.sort((a, b) => a.id - b.id);
    }

    setFilteredData(filteredProducts);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleSubmitFilters = () => {
    applyFiltersAndSorting();
    fetchProductsByFilter();
  };

  return (
    <Box sx={{ container: true, mx: "auto", mt: 6, width: "90%" }}>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 3 }}>
            All Products
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                <InputLabel id="sort-label">Sort By</InputLabel>
                <Select
                  labelId="sort-label"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <MenuItem value="price_asc">Price (Low to High)</MenuItem>
                  <MenuItem value="price_desc">Price (High to Low)</MenuItem>
                  <MenuItem value="rating_asc">Rating (Low to High)</MenuItem>
                  <MenuItem value="rating_desc">Rating (High to Low)</MenuItem>
                  <MenuItem value="company_asc">Company (A-Z)</MenuItem>
                  <MenuItem value="company_desc">Company (Z-A)</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  value={filters.category}
                  name="category"
                  onChange={handleInputChange}
                >
                  <MenuItem value="">All Categories</MenuItem>
                  {categories.map((category, index) => (
                    <MenuItem key={index} value={category.name}>{category.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                <InputLabel id="company-label">Company</InputLabel>
                <Select
                  labelId="company-label"
                  value={filters.company}
                  name="company"
                  onChange={handleInputChange}
                >
                  <MenuItem value="">All Companies</MenuItem>
                  {companies.map((company, index) => (
                    <MenuItem key={index} value={company.name}>{company.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <input
                className="border p-1"
                name="minPrice"
                onChange={handleInputChange}
                type="number"
                placeholder="Min Price"
                value={filters.minPrice}
              />
              <input
                className="border p-1"
                name="maxPrice"
                onChange={handleInputChange}
                type="number"
                placeholder="Max Price"
                value={filters.maxPrice}
              />
              <Button variant="contained" sx={{ minHeight: '70px' }} onClick={handleSubmitFilters}>
                Apply Filters & Sort
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 2 }}>
            {currentItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              active={currentPage}
              setActive={setCurrentPage}
              totalItems={filteredData.length}
              itemsPerPage={itemsPerPage}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Product;
