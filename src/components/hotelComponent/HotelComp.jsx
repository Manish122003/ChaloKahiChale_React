
import React, { useContext } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import { CartContext } from '../../contexts/CartContext';

const HotelComp = ({ hotels = [] }) => {
  const { addHotel } = useContext(CartContext);

  const handleClick = (id) => {
    addHotel(id);
  };

  return (
    <Grid container spacing={2}>
      {hotels.length > 0 ? (
        hotels.map((hotel, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card variant="outlined">
              <CardMedia
                component="img"
                height="140"
                image={hotel.image_urls[0]} // Display the first image from the array
                alt={`${hotel.hotel_name} image`}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  noWrap
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {hotel.hotel_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ({hotel.hotel_review} reviews)
                </Typography>
                <Typography variant="body1" color="text.primary">
                  ₹ {hotel.hotel_price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {hotel.state}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleClick(index)}
                  fullWidth
                >
                  Read Later
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="h6" component="div" sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
          No hotels found.
        </Typography>
      )}
    </Grid>
  );
};

export default HotelComp;
