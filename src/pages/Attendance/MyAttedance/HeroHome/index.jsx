import { Box, Typography } from "@mui/material";
import React from "react";

import heroBackground from "../../../../assets/heroBackground.png";

import profilePic from "../../../../assets/profilePic.png";
import { useSelector, useDispatch } from "react-redux";

const HeroHome = () => {
  const userState = useSelector((state) => state.user);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          marginLeft: "1rem",
        }}
      >
        <img
          src={heroBackground}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "cover",
            borderBottomLeftRadius: "2rem",
            borderBottomRightRadius: "2rem",
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          position: 'relative',
          height: "7.6rem",
          width: '80%',
          marginTop: "-5rem",
          display: "flex",
          flexDirection: "row",
          border: "white 0.1rem solid",
          borderRadius: "1rem",
          alignItems: "center",
        }}
      >
        <Box sx={{ margin: "1rem", height: "6rem" }}>
          <img
            src={profilePic}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "cover",
              borderRadius: "1rem",
            }}
          />
        </Box>
        <Box>
          <Typography>{userState.username}</Typography>
          <Typography sx={{ fontSize: "0.8rem", color: '#818fa2' }}>{userState.position}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroHome;
