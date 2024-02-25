import { Box } from '@mui/material'
import React, { useState } from 'react'
import Profile from './Profile'
import Notification from './Notiffication'
import Mail from './Mail'

const HeaderContent = () => {
  return (
    <>
      <Box sx={{ width: '100%', ml: 1 }} />
      <Box sx={{ display: "flex", alignItems: "center" , gap:1}}>

        <Mail />
        <Notification />
        <Profile />
      </Box>
    </>
  )
}

export default HeaderContent