import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import sourceCodeImage from "../../../assets/sourceCode.png";
import logo from "../../../assets/logo.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { setCredentials } from "../../../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginFormPanel = () => {
  const reduxDispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = 1; //from API for application
    reduxDispatch(setCredentials({ accessToken }));
    navigate("/my-attendance", { replace: true });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ marginTop: "2rem" }}>
        <img
          src={sourceCodeImage}
          alt="Source Code"
          style={{
            background: "linear-gradient(#4ea9aa, #0267a4)",
            padding: "0.2rem",
          }}
        />
      </Box>
      <Typography sx={{ marginTop: "3rem", marginBottom: "1rem" }}>
        Login to start your session
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: "25rem" }}>
        <FormControl
          sx={{ marginBottom: "2rem", height: "auto" }}
          fullWidth
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Employee Code
          </InputLabel>
          <OutlinedInput
            type="email"
            label="Employee Code"
            placeholder="Enter employee code"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            sx={{
              fontSize: "0.8rem",
              borderRadius: "0.5rem",
            }}
          />
        </FormControl>
        <FormControl
          fullWidth
          variant="outlined"
          sx={{ marginBottom: "2rem", height: "auto" }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            sx={{
              fontSize: "0.8rem",
              borderRadius: "0.5rem",
            }}
            fullWidth
            label="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          sx={{ marginBottom: "2rem" }}
          variant="contained"
          className="mx-2 my-3"
        >
          Log In
        </Button>
      </Box>
      <Box
        sx={{
          width: "15rem",
          overflow: "hidden",
          marginBottom:'2rem',
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
        />
      </Box>
      <Typography sx={{fontSize:'0.8rem', marginBottom:'2rem'}}>©2024 Mega HCM. All Rights Reserved</Typography>
    </Box>
  );
};

export default LoginFormPanel;
