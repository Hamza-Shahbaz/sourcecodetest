import { Box, Divider, FormControl, MenuItem, Modal, Select, Typography, IconButton, TextField, Button } from '@mui/material';
import MyAttendance from '../../MyAttedance';
import React from 'react'
import ImageIcon from "@mui/icons-material/Image";
import styled from '@emotion/styled';
const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    borderRadius: "0.75rem",
    boxShadow: 24,
    p: 2,
};
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const AttendaceRequestModal = ({ open, onClose }) => {
    return (
        <>
            <Modal open={open} onClose={onClose}>
                <Box sx={style}>
                    <Box>
                        <Typography variant='subtitle1'>
                            Apply For Attandance Request
                        </Typography>
                        <Typography color={"GrayText"}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </Typography>
                    </Box>
                    <Divider />
                    <FormControl fullWidth sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 4 }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"

                            }}
                        >
                            <FormControl sx={{ width: "30%" }} >
                                <Typography>Attedance Days</Typography>
                            </FormControl>

                            <FormControl sx={{ width: "70%" }} fullWidth>
                                <Select size='small' value={"Single"}>
                                    <MenuItem value="Single">Single</MenuItem>
                                    <MenuItem value="Multiple">Multiple</MenuItem>
                                </Select>
                            </FormControl>

                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"

                            }}
                        >
                            <FormControl sx={{ width: "30%" }} >
                                <Typography>Select Attendance Date</Typography>
                            </FormControl>

                            <FormControl sx={{ width: "70%" }} fullWidth>
                                <input style={{ border: "1px solid #858585", padding: 3, borderRadius: "0.rem" }} type='date' />
                            </FormControl>

                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"

                            }}
                        >
                            <FormControl sx={{ width: "30%" }} >
                                <Typography>Upload Image</Typography>
                            </FormControl>

                            <Box sx={{ display: "flex", flexDirection: "row", gap: 2, justifyContent: "center", alignItems: "center", height: "100%" }}>
                                <Box sx={{ border: "1px dotted #AFB9C2", borderRadius: "50%", width: 100, height: 100 }}>
                                    <IconButton sx={{ display: "flex", flexDirection: "column" }}>
                                        <ImageIcon sx={{ width: 50, height: 50 }} />
                                        <Typography sx={{ fontSize: "0.8rem" }}>Upload Photo</Typography>
                                        <VisuallyHiddenInput type="file" />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: "12px", color: "#AFB9C2", flexWrap: "nowrap", wordWrap: "normal" }}>Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3 Mb</Typography>
                                </Box>
                            </Box>

                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"

                            }}
                        >
                            <FormControl sx={{ width: "30%" }} >
                                <Typography>Mark My Attendace</Typography>
                            </FormControl>

                            <FormControl sx={{ width: "70%" }} fullWidth>
                                <Select size='small' value={"present"}>
                                    <MenuItem value="present">As Present</MenuItem>
                                    <MenuItem value="absent">As Absent</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"

                            }}
                        >
                            <FormControl sx={{ width: "30%" }} >
                                <Typography>Description</Typography>
                            </FormControl>

                            <FormControl sx={{ width: "70%", borderRadius: "1rem", }} fullWidth>
                                <TextField />
                            </FormControl>
                        </Box>
                        <Divider />
                        <Box display={"flex"} gap={1}>
                            <Button variant='outlined' fullWidth>Cancel</Button>
                            <Button variant='contained' fullWidth>Confirm</Button>
                        </Box>
                    </FormControl>
                </Box>
            </Modal>
            <MyAttendance />
        </>

    )
}

export default AttendaceRequestModal