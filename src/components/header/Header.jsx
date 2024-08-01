// import React, { useContext, useEffect, useState } from "react";
// import "./Header.css";
// import { CartContext } from "../../contexts/CartContext";
// import { Link } from "react-router-dom";
// const Header = () => {

//   const {idArray}=useContext(CartContext);

//   return (
//     <>
//       <nav className="mainHeader" id="mainHeader">
//         <div className="mainHeader-brand" id="mainHeader-brand">
//           ChaloKahiChale
//         </div>
//         <div className="mainHeader-links" id="mainHeader-links">
//           <div className="mainHeader-menu" id="mainHeader-menu">
//             CartItems: {idArray.length}
//           </div>
          
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;
import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { idArray } = useContext(CartContext);

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(321deg, rgba(0, 0, 0, 0.4) 5.98%, rgba(0, 0, 0, 0.4) 66.28%), rgba(255, 255, 255, 0.12)",
        boxShadow: "-4.96px 2.48px 3.1px 0px rgba(0, 0, 0, 0.24)",
        backdropFilter: "blur(30px)",
        height: "55px",
        // padding: "0 0px",
        // paddingTop:"-2px",
        zIndex: 100,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          minHeight: "50px",
          padding: "0 16px",
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: '#fff',
            fontFamily: "'Nico Moji', sans-serif",
            fontSize: '26px',
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          ChaloKahiChale
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography
            variant="body1"
            sx={{ marginRight: 2, color: '#fff', fontFamily: "'Mulish', sans-serif" }}
          >
            CartItems: {idArray.length}
          </Typography>
          <IconButton component={Link} to="/cart" color="inherit">
            <Badge badgeContent={idArray.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
