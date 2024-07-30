// import React, { useState } from 'react';
// import {
//   Box,
//   Stack,
//   TextField,
//   Autocomplete,
//   Button,
//   IconButton,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   Grid,
//   Typography
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import SortIcon from '@mui/icons-material/Sort';
// import items from './data/items';
// import ItemCard from './components/ItemCard';

// const categories = Object.keys(items);

// // Aggregate all items and categories for autocomplete suggestions
// const allSuggestions = [...Object.keys(items), ...Object.values(items).flat().map(item => item.name)];

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState(categories[0]);
//   const [sortOrder, setSortOrder] = useState('asc');
//   const [filter, setFilter] = useState('price');

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const handleSortToggle = () => {
//     setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
//   };

//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//   };

//   const getFilteredItems = () => {
//     let filteredItems = [...items[selectedCategory]];

//     if (filter === 'popularity') {
//       filteredItems.sort((a, b) => (sortOrder === 'asc' ? a.popularity - b.popularity : b.popularity - a.popularity));
//     } else if (filter === 'price') {
//       filteredItems.sort((a, b) => (sortOrder === 'asc' ? parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)) : parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))));
//     } else if (filter === 'newest') {
//       filteredItems.sort((a, b) => (sortOrder === 'asc' ? new Date(a.arrival) - new Date(b.arrival) : new Date(b.arrival) - new Date(a.arrival)));
//     }

//     return filteredItems;
//   };

//   const filteredItems = getFilteredItems();

//   return (
//     <Box p={2}>
//       <Stack direction="row" spacing={2} alignItems="center">
//         <Autocomplete
//           freeSolo
//           options={allSuggestions.filter(option => option.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 10)}
//           inputValue={searchTerm}
//           onInputChange={(event, newInputValue) => {
//             setSearchTerm(newInputValue);
//           }}
//           renderInput={(params) => (
//             <TextField {...params} label="Search" variant="outlined" fullWidth sx={{ width: '500px' }} />
//           )}
//         />
//         <IconButton>
//           <SearchIcon />
//         </IconButton>
//       </Stack>
//       <Stack direction="row" mt={2} spacing={2}>
//         <Box>
//           <Typography variant="h6">Categories</Typography>
//           {categories.map((category, index) => (
//             <Button
//               key={index}
//               variant={category === selectedCategory ? 'contained' : 'outlined'}
//               onClick={() => handleCategoryChange(category)}
//               sx={{ display: 'block', mb: 1 }}
//             >
//               {category}
//             </Button>
//           ))}
//         </Box>
//         <Box flexGrow={1}>
//           <Stack direction="row" justifyContent="space-between" alignItems="center">
//             <Stack direction="row" spacing={1} alignItems="center">
//               <IconButton onClick={handleSortToggle}>
//                 <SortIcon />
//               </IconButton>
//               <Typography>{sortOrder === 'asc' ? 'Ascending' : 'Descending'}</Typography>
//             </Stack>
//             <FormControl variant="outlined" sx={{ minWidth: 200 }}>
//               <InputLabel>Filter</InputLabel>
//               <Select value={filter} onChange={handleFilterChange} label="Filter">
//                 <MenuItem value="popularity">Filter by Popularity</MenuItem>
//                 <MenuItem value="price">Filter by Price</MenuItem>
//                 <MenuItem value="newest">Filter by Newest Arrival</MenuItem>
//               </Select>
//             </FormControl>
//           </Stack>
//           <Grid container spacing={2} mt={2}>
//             {filteredItems.map((item, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <ItemCard item={item} />
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Stack>
//     </Box>
//   );
// };

// export default App;


// uper wala is correct

import React, { useState } from 'react';
import {
  Box,
  Stack,
  TextField,
  Autocomplete,
  Button,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import items from './data/item';
import ItemCard from './components/ItemCard';

const categories = Object.keys(items);

// Aggregate all items and categories for autocomplete suggestions
const allSuggestions = [...Object.keys(items), ...Object.values(items).flat().map(item => item.name)];

const Extra = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filter, setFilter] = useState('price');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortToggle = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const getFilteredItems = () => {
    let filteredItems = [...items[selectedCategory]];

    if (filter === 'popularity') {
      filteredItems.sort((a, b) => (sortOrder === 'asc' ? a.popularity - b.popularity : b.popularity - a.popularity));
    } else if (filter === 'price') {
      filteredItems.sort((a, b) => (sortOrder === 'asc' ? parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)) : parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))));
    } else if (filter === 'newest') {
      filteredItems.sort((a, b) => (sortOrder === 'asc' ? new Date(a.arrival) - new Date(b.arrival) : new Date(b.arrival) - new Date(a.arrival)));
    }

    return filteredItems;
  };

  const filteredItems = getFilteredItems();

  return (
    <Box p={2}>
      <Box display="flex" justifyContent="center" mb={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Autocomplete
            freeSolo
            options={allSuggestions.filter(option => option.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 10)}
            inputValue={searchTerm}
            onInputChange={(event, newInputValue) => {
              setSearchTerm(newInputValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Search" variant="outlined" fullWidth sx={{ width: '500px' }} />
            )}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Stack>
      </Box>
      <Stack direction="row" mt={2} spacing={2}>
       
        <Box flexGrow={1}>
        

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={1}>
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category === selectedCategory ? 'contained' : 'outlined'}
                onClick={() => handleCategoryChange(category)}
                sx={{ display: 'block', mb: 1 }}
              >
                {category}
              </Button>
            ))}
          </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton onClick={handleSortToggle}>
                <SortIcon />
              </IconButton>
              <Typography>{sortOrder === 'asc' ? 'Ascending' : 'Descending'}</Typography>
            </Stack>
            <FormControl variant="outlined" sx={{ minWidth: 200 }}>
              <InputLabel>Filter</InputLabel>
              <Select value={filter} onChange={handleFilterChange} label="Filter">
                <MenuItem value="popularity">Filter by Popularity</MenuItem>
                <MenuItem value="price">Filter by Price</MenuItem>
                <MenuItem value="newest">Filter by Newest Arrival</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Grid container spacing={2} mt={2}>
            {filteredItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ItemCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default Extra;
