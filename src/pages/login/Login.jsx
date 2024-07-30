import React, { useState } from "react";
import { Box, Stack, TextField, Button, Typography, Link } from "@mui/material";
import apple from "../../components/assets/apple.png";
import Facebook from "../../components/assets/Facebook.png";
import google from "../../components/assets/google.png";
import lock from "../../components/assets/lock.png";
import sms from "../../components/assets/sms.png";
import v1 from "../../components/assets/v1.png";
import v2 from "../../components/assets/v2.png";
import v3 from "../../components/assets/v3.png";
import loginImage from "../../components/assets/login_image.png";
import {NavLink} from "react-router-dom/dist";

const Login = ({ signUpSet }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() === "") {
      alert("Please enter your email.");
    } else if (!isPasswordStrong(password)) {
      alert(
        "Please enter a strong password. It should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
    } else {
      console.log("Email:", email);
      console.log("Password:", password);
      // Handle login logic
    }
  };

  const isPasswordStrong = (password) => {
    const regex = /^.{8,}$/;
    return regex.test(password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(321deg, rgba(0, 0, 0, 0.2) 5.98%, rgba(0, 0, 0, 0.3) 66.28%), rgba(255, 255, 255, 0.35)",
      }}
    >
      <Box
        sx={{
          width: 950,
          height: 530,
          display: "flex",
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            width: "50%",
            background: `url(${loginImage}) no-repeat center center/cover`,
            borderRadius: "16px 0 0 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <Stack spacing={2} sx={{ textAlign: "center", marginBottom: "60%", width: "80%" }}>
            <Typography variant="h4">ChaloKahiChale</Typography>
            <Typography variant="body2">
              Travel is the only purchase that enriches you in ways beyond material wealth
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ width: "50%", padding: 2, position: "relative" }}>
          <img
            src={v1}
            alt=".."
            style={{ position: "absolute", top: 25, right: 0 }}
          />
          <Stack spacing={1} sx={{ marginTop: 7 }}>
            <Typography
              variant="h4"
              sx={{ "color": "#009ee2", "fontFamily": "Poppins", "fontSize": "36px", "textAlign": "center", "textShadow": "1px 2px 1px #000000" }}
            >
              Welcome Back!
            </Typography>
            <Typography variant="body1" sx={{ "marginTop": "10px;", textAlign: "center" }}>
              Login to Continue
            </Typography>
            <Stack
              spacing={2}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}>
              <TextField
                sx={{
                  width: '70%',
                  '& .MuiInputBase-root': {
                    'height': '45px',
                    'marginBottom': '5px'
                  }
                }}
                label="Email Id"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <img src={sms} alt="Email icon" style={{ marginRight: 8 }} />
                  ),
                }}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log("Email:", e.target.value);
                }}
              />
              <TextField
                sx={{
                  width: '70%',
                  '& .MuiInputBase-root': {
                    'height': '45px',
                    'marginBottom': '5px'
                  }
                }}
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <img src={lock} alt="Password icon" style={{ marginRight: 8 }} />
                  ),
                }}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log("Password:", e.target.value);
                }}
              />
              <Button
                variant="contained"
                sx={{ backgroundColor: "#009ee2" }}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Stack>
            <Typography variant="body2" sx={{ textAlign: "center", marginTop: 2 }}>
              OR
            </Typography>
            <Stack direction="row" justifyContent="center" spacing={2}>
              <img src={google} alt="Google" style={{ cursor: "pointer" }} />
              <img src={Facebook} alt="Facebook" style={{ cursor: "pointer" }} />
              <img src={apple} alt="Apple" style={{ cursor: "pointer" }} />
            </Stack>
            <Typography variant="body2" sx={{ textAlign: "center", marginTop: 2 }}>
            Don't have an account?{" "}
              
              <NavLink to='/signUp' style={{textDecoration: 'None'}}>Sign Up</NavLink>
            </Typography>
          </Stack>
          <img
            src={v2}
            alt=".."
            style={{ position: "absolute", bottom: 0, right: 0, borderRadius: 5 }}
          />
          <img
            src={v3}
            alt=".."
            style={{ position: "absolute", bottom: 0, left: -10, zIndex: 0 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
