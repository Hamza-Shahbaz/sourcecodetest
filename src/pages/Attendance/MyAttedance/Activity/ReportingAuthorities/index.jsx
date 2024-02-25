import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import Profile from "../../../../../../public/profile.png"

const content = [
    {
        name: "Muhammad Zain",
        designation: "Senior Manager",
        img: Profile
    },
    {
        name: "Muhammad Zain",
        designation: "Senior Manager",
        img: Profile
    },
    {
        name: "Muhammad Zain",
        designation: "Senior Manager",
        img: Profile
    },
]

const ReportingAuthorities = () => {
    return (
        <Box component={Paper} sx={{
            width: "25rem",
            padding: 4,
            borderRadius: "1rem"
        }} >
            <Box marginBottom={2}>
                <Typography variant='h5'>Reporting Authorities</Typography>
            </Box>
            <Box display={"flex"} gap={1}>
                {content.map((data) => (
                    <>
                        <Box>
                            <Box sx={{ overflow: "hidden", borderRadius: "1rem", width: 100 }}>
                                <img src={Profile} />

                            </Box>
                            <Box display={"flex"} flexDirection={"column"} justifyItems={"center"} textAlign={"center"}>
                                <Typography >{data.designation}</Typography>
                                <Typography variant='subtitle1'>{data.name}</Typography>
                            </Box>

                        </Box>

                    </>
                ))}

            </Box>

        </Box>
    )
}

export default ReportingAuthorities