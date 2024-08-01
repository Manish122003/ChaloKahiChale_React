// import React, { useState } from "react";
// import { Link,NavLink } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const pages = [
//     { name: "Home", value: "home", path: "/" },
//     { name: "Popular Destination", value: "popDestination", path: "/popDestination" },
//     { name: "Hotels", value: "hotel", path: "/hotel" },
//     { name: "Profile", value: "profile", path: "/profile" },
//     { name: "About Us", value: "about", path: "/about" },
//     { name: "Cart-🛍️", value: "cart", path: "/cart" },
//     { name: "Sign Up", value: "signup", path: "/signup" },
//     { name: "Extra", value: "Extra" , path:"/extra"},
//     { name: "Products", value: "UserList" ,path:"/products"},
//   ];

//   // const [currentPage, setCurrentPage] = useState("home");

//   // const handlePageChange = (value) => {
//   //   setCurrentPage(value);
//   // };

//   return (
//     <>
//       <nav className="navbar" id="navbar">
//         <div className="navbar-links" id="navbar-links">
//           <div className="navbar-menu" id="navbar-menu">
//             {pages.map((page) => (
//               <NavLink
//                 to={page.path}
//                 key={page.value}
//                 // className={`navbar-item ${
//                 //   currentPage === page.value ? "active" : ""
//                 // }`}
//                  className={`navbar-item`}
//                 style={{ cursor: "pointer" }}
//                 // onClick={() => handlePageChange(page.value)}
//                 id={`navbar-item-${page.value}`}
//               >
//                 {page.name}
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


import React from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { styled } from "@mui/system";

const pages = [
  { name: "Home", value: "home", path: "/" },
  { name: "Popular Destination", value: "popDestination", path: "/popDestination" },
  { name: "Hotels", value: "hotel", path: "/hotel" },
  { name: "Profile", value: "profile", path: "/profile" },
  { name: "About Us", value: "about", path: "/about" },
  { name: "Cart-🛍️", value: "cart", path: "/cart" },
  { name: "Sign Up", value: "signup", path: "/signup" },
  { name: "Extra", value: "extra", path: "/extra" },
  { name: "Products", value: "userList", path: "/products" },
];

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  margin: "0 8px",
  padding: "4px 8px", // Adjust the padding for smaller height
  borderRadius: "4px",
  fontFamily: "'Mulish', sans-serif",
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "147%",
  transition: "background-color 0.3s ease",
  "&.active": {
    backgroundColor: "#ffda32",
    color: "#000",
  },
  "&:hover": {
    backgroundColor: "#555",
  },
}));

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(0, 0, 0, 0.4)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(30px)",
        height: "45px", // Decreased height
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        marginTop: "55px",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "40px", // Decreased height
          padding: "0px 16px", // Adjusted padding
        }}
      >
        <Tabs
          value={currentPath}
          textColor="inherit"
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{ minHeight: "40px",display:"flex",alignItems:"center",justifyContent:"center" }} // Decreased height
        >
          {pages.map((page) => (
            <Tab
              key={page.value}
              label={page.name}
              value={page.path}
              component={StyledNavLink}
              to={page.path}
              sx={{
                textTransform: "none",
                minHeight: "30px", // Decreased height
                padding: "0px 10px", // No additional padding
              }}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;




// import React from "react";
// import { AppBar, Toolbar, Tabs, Tab, Box ,Typography} from "@mui/material";
// import { NavLink, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const pages = [
//     { name: "Home", value: "home", path: "/" },
//     { name: "Popular Destination", value: "popDestination", path: "/popDestination" },
//     { name: "Hotels", value: "hotel", path: "/hotel" },
//     { name: "Profile", value: "profile", path: "/profile" },
//     { name: "About Us", value: "about", path: "/about" },
//     { name: "Cart-🛍️", value: "cart", path: "/cart" },
//     { name: "Sign Up", value: "signup", path: "/signup" },
//     { name: "Extra", value: "extra", path: "/extra" },
//     { name: "Products", value: "userList", path: "/products" },
//   ];

//   const location = useLocation();
//   const currentPath = location.pathname;

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Box display="flex" justifyContent="space-between" width="100%">
//           <Typography variant="h6" component={NavLink} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//             ChaloKahiChale
//           </Typography>
//           <Tabs value={currentPath} textColor="inherit" indicatorColor="secondary">
//             {pages.map((page) => (
//               <Tab
//                 key={page.value}
//                 label={page.name}
//                 value={page.path}
//                 component={NavLink}
//                 to={page.path}
//                 sx={{ textTransform: 'none' }}
//               />
//             ))}
//           </Tabs>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
