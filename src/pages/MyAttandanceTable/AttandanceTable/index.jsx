import React, { useEffect, useState } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import AttandanceGrid from "./AttandanceGrid";

const AttandanceTable = ({}) => {
  const [data, setData] = useState();

  const handleUserData = (test) => {
    setData(test);
  };

  return (
    <>
      <Box
        sx={{
          borderRadius: "1rem",
          display: "flex",
          flexDirection: "column",
          margin: "1rem, 2rem",
          backgroundColor:'white',
          boxShadow:'30'
        }}
      >
        <Box padding={3}>
          <input />
        </Box>
        <Box sx={{marginLeft:'2rem'}}>
            <AttandanceGrid />
        </Box>
      </Box>
    </>
  );
};

export default AttandanceTable;
