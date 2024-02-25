import { Box, Typography } from '@mui/material'
import React from 'react'

const AttandanceSummaryChip = ({val, type}) => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', backgroundColor:'#2aa58d', margin:"1rem", borderRadius:'1rem', padding:'0.5rem', color:'white', width:'10rem', justifyContent:'center', paddingLeft:'1rem'}}>
        <Typography sx={{fontSize:'0.7rem'}}>
            {type}
        </Typography>
        <Typography>
            <b>
                {val}
            </b>
        </Typography>
    </Box>
  )
}

export default AttandanceSummaryChip