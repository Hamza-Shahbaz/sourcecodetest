import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { PieChart } from "@mui/x-charts";

const pieDataTwo = [
    {
        title: "",
        height: 300,
        width: 200,
        data: [
            { label: `Sick Leaves`, value: 45 },
            { label: `Annual Leave`, value: 24 },
            { label: `Casual Leave`, value: 9 },
        ],
    },
];

const Leaves = () => {
    return (
        <Box component={Paper} sx={{
            width: "25rem",
            padding: 4,
            borderRadius: "1rem"
        }} >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <Typography variant='h5'>Number of Leave Remains</Typography>
                    <Typography color={"GrayText"}>As of now August 28, 2023</Typography>
                </Box>
                <FilterAltIcon />
            </Box>
            {pieDataTwo.map((data, index) => (
                <Grid key={index} item xs={12} sm={4}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                width: "300px",
                            }}
                        >
                            <PieChart
                                series={[
                                    {
                                        data: data.data,
                                        cx: 150,
                                        innerRadius: 83,
                                        outerRadius: 120,
                                    },
                                ]}
                                height={data.height}
                                slotProps={{
                                    legend: {
                                        hidden: true
                                    },
                                }}
                            >
                                <text
                                    x={155}
                                    y={130}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fontSize="14"
                                    fontWeight={600}
                                    fill="#000"
                                >
                                    Total Leaves
                                </text>
                                <text
                                    x={150}
                                    y={165}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fontSize="14"
                                    fontWeight={600}
                                    fill="#000"
                                >
                                    10
                                </text>
                            </PieChart>
                            <Box>
                                <Box display={"flex"} justifyContent={"space-around"}>
                                    <Typography>{data.data[0].label}</Typography>
                                    <Typography>{data.data[0].value}</Typography>
                                </Box>
                                <Box display={"flex"} justifyContent={"space-around"}>
                                    <Typography>{data.data[1].label}</Typography>
                                    <Typography>{data.data[1].value}</Typography>
                                </Box>
                                <Box display={"flex"} justifyContent={"space-around"}>
                                    <Typography>{data.data[2].label}</Typography>
                                    <Typography>{data.data[2].value}</Typography>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Box>
    )
}

export default Leaves;
