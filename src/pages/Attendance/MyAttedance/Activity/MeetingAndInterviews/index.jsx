import { Avatar, Box, MenuItem, Paper, Select, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'
const content = [
    {
        title: "Interview",
        time: "9:00am - 11:30am",
        day: "Mon",
        date: "10",
    },
    {
        title: "Interview",
        time: "9:00am - 11:30am",
        day: "Mon",
        date: "10",
    },
    {
        title: "Interview",
        time: "9:00am - 11:30am",
        day: "Mon",
        date: "10",
    },
    {
        title: "Interview",
        time: "9:00am - 11:30am",
        day: "Mon",
        date: "10",
    },
    {
        title: "Interview",
        time: "9:00am - 11:30am",
        day: "Mon",
        date: "10",
    },

]

const MeetingAndInterviews = () => {
    return (
        <Box component={Paper} sx={{ width: "30rem", p: 4, borderRadius: "1rem" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <Typography variant='h5'>Meeting And Interview</Typography>
                <Select size='small' value="Create New">
                    <MenuItem value="Create New" >Create New</MenuItem>
                    <MenuItem>Edit</MenuItem>
                </Select>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={1} marginTop={2}>

                {content.map((data) => (
                    <>
                        <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent:"space-between"}}>
                            <Box sx={{ display: "flex", gap: 2, alignItems: "center", }} >
                                <Box sx={{ bgcolor: "#F9F9F9", p: 1, borderRadius: "0.5rem", textAlign: "center" }}>
                                    <Typography color={"#ffa600"}>{data.day}</Typography>
                                    <Typography>{data.date}</Typography>
                                </Box>
                                <Box>
                                    <Typography >{data.title}</Typography>
                                    <Typography >{data.time}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ bgcolor: "#F9F9F9", p: 1, borderRadius: "0.5rem", textAlign: "center" }} >
                                <MoreVertIcon />
                            </Box>
                        </Box>

                    </>
                ))}


            </Box>
        </Box>
    )
}

export default MeetingAndInterviews