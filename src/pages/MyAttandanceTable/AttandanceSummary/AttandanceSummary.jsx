import { Box, Button, Typography } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react'
import AttandanceSummaryChip from './AttandanceSummaryChip';

const AttandanceSummary = () => {

    let attandanceSummary = useSelector((state) => state.attandance)
    let keySummary = Object.keys(attandanceSummary)
    let attandanceElementArr = keySummary.map((key) => {
        return <AttandanceSummaryChip val={attandanceSummary[key].val} type={attandanceSummary[key].name}/>
    })

  return (
    <Box sx={{margin:'2rem'}}>
        <Box>
            <Box sx={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Typography>
                    <b>My Attendance Summary</b> (January-2024)
                </Typography>
                <Box sx={{marginRight:'2rem'}}>
                    <Button sx={{background:'#27988e', color:"white", fontSize:'0.7rem'}}>
                        View Attendance Report <AddOutlinedIcon sx={{marginLeft:"0.1rem", fontSize:'1rem', marginBottom:'0.1rem'}}/>
                    </Button>
                </Box>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row'}}>
                {attandanceElementArr}
            </Box>
        </Box>
        <Box></Box>
    </Box>
  )
}

export default AttandanceSummary