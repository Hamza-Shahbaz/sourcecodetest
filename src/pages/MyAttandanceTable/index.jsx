import { Box } from "@mui/material";
import React from "react";
import AttandanceSummary from "./AttandanceSummary/AttandanceSummary";
import AttandanceTable from "./AttandanceTable";
import HeroHome from "../Attendance/MyAttedance/HeroHome";
const MyAttandanceTable = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f4f4f4",
          flexGrow: 1,
        }}
      >
        <Box>
          <HeroHome />
        </Box>
        <Box>
            <AttandanceSummary/>
        </Box>
        <Box sx={{maxWidth:'85rem', position:'relative', marginLeft:'2rem'}}>
            <AttandanceTable/>
        </Box>
      </Box>
    </Box>
  );
};

export default MyAttandanceTable;
