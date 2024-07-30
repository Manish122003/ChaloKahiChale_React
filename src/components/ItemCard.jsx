// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const ItemCard = ({ item }) => {
//   return (
//     <Box border={1} borderColor="grey.300" p={2}>
//       <Typography variant="h6">{item.name}</Typography>
//       <Typography variant="body2">{item.description}</Typography>
//       <Typography variant="body2">Price: {item.price}</Typography>
//       <Typography variant="body2">Reviews: {item.reviews}</Typography>
//       <Typography variant="body2">Category: {item.category}</Typography>
//       {/* Add more attributes here if needed */}
//     </Box>
//   );
// };

// export default ItemCard;


import React from 'react';
import { Box, Typography } from '@mui/material';

const ItemCard = ({ item }) => {
  return (
    <Box border={1} borderColor="grey.300" p={2}>
      <Typography variant="h6">{item.name}</Typography>
      <Typography variant="body2">{item.description}</Typography>
      <Typography variant="body2">Price: {item.price}</Typography>
      <Typography variant="body2">Reviews: {item.reviews}</Typography>
      <Typography variant="body2">Category: {item.category}</Typography>
    </Box>
  );
};

export default ItemCard;

