import { Box } from '@mui/material'
import React from 'react'
import Activity from './Activity'
import HeroHome from './HeroHome'

const MyAttendance = () => {
  return (
    <Box>
      <Box>
        <HeroHome/>
        <Activity/>
      </Box>
    </Box>
  )
}

export default MyAttendance