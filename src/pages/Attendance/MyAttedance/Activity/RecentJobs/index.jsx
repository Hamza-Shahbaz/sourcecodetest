import { Avatar, Box, Paper, Typography } from '@mui/material'
import React from 'react'


const content = [
    {
        jobTitle: "Jr. Frontend Engineer",
        address: "Spotify, Singapoor",
        time: "2 Days ago"
    },
    {
        jobTitle: "Jr. Frontend Engineer",
        address: "Spotify, Singapoor",
        time: "2 Days ago"
    },
    {
        jobTitle: "Jr. Frontend Engineer",
        address: "Spotify, Singapoor",
        time: "2 Days ago"
    },
    {
        jobTitle: "Jr. Frontend Engineer",
        address: "Spotify, Singapoor",
        time: "2 Days ago"
    },
]

const RecentJobs = () => {
    return (
        <Box component={Paper} sx={{
            width: "25rem",
            padding: 4,
            borderRadius: "1rem"
        }} >
            <Box marginBottom={2}>
                <Typography variant='h5'>Recent Added Jobs</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={1}>

                {content.map((data) => (
                    <>
                        <Box sx={{ display: "flex", gap: 2, alignItems: "center", bgcolor: "#F9F9F9", p:2, borderRadius:"1rem" }}>
                            <Box>
                                <Avatar />
                            </Box>
                            <Box>
                                <Typography >{data.jobTitle}</Typography>
                                <Typography >Recent Added Jobs</Typography>
                            </Box>

                        </Box>

                    </>
                ))}


            </Box>

        </Box>
    )
}

export default RecentJobs