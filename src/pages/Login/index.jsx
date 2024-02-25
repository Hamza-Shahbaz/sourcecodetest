import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import backgroundImage from "../../assets/backgroundImage.jpeg";
import leftPic from "../../assets/leftPic.png";
import LoginFormPanel from "./FormPanel";

const Login = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        height: "95vh", // Set height to fill the viewport
        backgroundSize: "cover", // Cover the entire container
        backgroundPosition: "center", // Center the image
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "2rem 0rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "15rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={leftPic} />
        <Box sx={{ display: "flex", flexDirection: "row", marginTop:'2rem' }}>
          <Typography sx={{ fontWeight: "600" }}>The Ultimate</Typography>
          <Typography
            sx={{ color: "rgba(41, 160, 149, 1)", fontWeight: "600" }}
          >
            HR Management Solution
          </Typography>
        </Box>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', width:'30rem', marginTop:'2rem'}}>
          <Typography sx={{textAlign:"center"}}>
            At SourceCode, we have a reliable, secure and adaptable HR management
            built from the ground up.We are determined to help our employees to
            give their best efforts every day to achieve the goals of their job.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          border: "transparent 0.2rem solid",
          marginRight: "5rem",
          borderRadius: "2rem",
          width: "30rem",
          background:
            "linear-gradient(white, white) padding-box, linear-gradient(135deg, #4ea9aa, #eaf0f7) border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <LoginFormPanel />
      </Box>
    </Box>
  );
};

export default Login;
