import React, { useState } from 'react'
import AttendaceRequestModal from './AttendaceRequestModal';




const AttedanceRequest = () => {

    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);
    return (
        <AttendaceRequestModal open={open} onClose={handleClose} />
    )
}


export default AttedanceRequest