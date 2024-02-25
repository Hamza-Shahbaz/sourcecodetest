import { Box, MenuItem, Paper, Select, Typography } from '@mui/material'
import React from 'react'

const Announcement = () => {
    return (
        <Box component={Paper} sx={{ width: "30rem" ,p:4, borderRadius:"1rem"}}>
            <Box sx={{ display: "flex", justifyContent:"space-between", width: "100%" }}>
                <Typography  variant='h5'>Announcement</Typography>
                <Select size='small' value="Create New">
                    <MenuItem value="Create New" >Create New</MenuItem>
                    <MenuItem>Edit</MenuItem>
                </Select>
            </Box>
            <Box>
                <Typography variant='subtitle1'>Quaid e Azam Day</Typography>
                <Typography marginTop={2} >Dear Team,</Typography>
                <Typography marginTop={2} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magnam soluta voluptas ipsam quisquam molestiae dolore sint laudantium cumque eum iusto ea aut obcaecati voluptatum consequuntur aspernatur, ipsa quo earum.</Typography>
                <Typography marginTop={2}>Best Regards</Typography>
            </Box>
        </Box>
    )
}

export default Announcement