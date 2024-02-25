import { Box, FormControl } from '@mui/material'
import React from 'react'
import Leaves from './Leaves'
import Announcement from './Announcement'
import RecentJobs from './RecentJobs'
import MeetingAndInterviews from './MeetingAndInterviews'
import ReportingAuthorities from './ReportingAuthorities'
import Certification from './Certification'

const Activity = () => {
    return (
        <FormControl fullWidth>
            <Box display="flex" gap={2}>
                <Box display="flex" flexDirection={"column"} gap={2}>
                    <Leaves />
                    <RecentJobs />
                </Box>
                <Box display="flex" flexDirection={"column"} gap={2}>
                    <Announcement />
                    <MeetingAndInterviews />
                </Box>
            </Box>

            <Box display="flex" gap={2} marginTop={2}>
                <Box display="flex" flexDirection={"column"} gap={2}>
                    <ReportingAuthorities />
                </Box>
                <Box display="flex" flexDirection={"column"} gap={2}>
                    <Certification/>
                </Box>
            </Box>

        </FormControl>
    )
}

export default Activity