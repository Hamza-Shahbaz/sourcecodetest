import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const rows = [
    { id: 1, date:"01-01-2024 - Mon", checkInTime: '11:54:35', checkOutTime: '21:14:32', shiftDuration: "09:00:00", leave:'Non', attSource:'Machine Attendance', HoursWorked:'09:19:57', Status:'On Time' },
    { id: 2, date:"01-01-2024 - Mon", checkInTime: '11:54:35', checkOutTime: '21:14:32', shiftDuration: "09:00:00", leave:'Non', attSource:'Mobile Application', HoursWorked:'09:19:57', Status:'Late' },
    { id: 3, date:"01-01-2024 - Mon", checkInTime: '11:54:35', checkOutTime: '21:14:32', shiftDuration: "09:00:00", leave:'Non', attSource:'Machine Attendance', HoursWorked:'09:19:57', Status:'On Time' },
    { id: 4, date:"01-01-2024 - Mon", checkInTime: '11:54:35', checkOutTime: '21:14:32', shiftDuration: "09:00:00", leave:'Non', attSource:'Machine Attendance', HoursWorked:'09:19:57', Status:'On Time' },
];

const CustomCell = ({ value }) => {
    if (value.field == 'attSource') {
        return (
            <div style={{borderRadius:'1rem', backgroundColor:value.formattedValue === 'Machine Attendance' ? 'green' : 'blue'}}>
                {value.formattedValue}
            </div>
        )
    }
    if (value.field == 'Status') {
        return (
            <div style={{color:value.formattedValue === 'On Time' ? 'green' : 'yellow'}}>
                {value.formattedValue}
            </div>
        )
    }
    return (
    <div style={{ cursor: 'default' }}>
        {value.formattedValue}
    </div>
)};

const AttandanceGrid = () => {

    const navigate = useNavigate()

    const columns = [
        {
            field: 'date',
            headerName: 'Date',
            editable: true,
            renderCell: (params) => (
                <CustomCell value={params} />)
        },
        {
            field: 'checkInTime',
            headerName: 'Check In Time',
            editable: true,
            renderCell: (params) => (
                <CustomCell value={params} />)
        },
        {
            field: 'checkOutTime',
            headerName: 'Check Out Time',
            editable: true,
            renderCell: (params) => (
                <CustomCell value={params} />)
        },
        {
            field: 'shiftDuration',
            headerName: 'shift Duration',
            editable: true,
            renderCell: (params) => (
                <CustomCell value={params} />)
        },{
            field: 'leave',
            headerName: 'Leave/Deputation',
            editable: true,
            renderCell: (params) => (
                <CustomCell value={params} />)
        },{
            field: 'attSource',
            headerName: 'Att Source',
            editable: true,
            renderCell: (params) => (
                <CustomCell value={params} />)
        },{
            field: 'HoursWorked',
            headerName: 'Hours Worked',
            editable: true,
            renderCell: (params) => (
                <CustomCell value={params} />)
        },{
            field: 'Status',
            headerName: 'Status',
            editable: true,
            renderCell: (params) => (
                <CustomCell value={params} />)
        }
    ];
    return (
        <Box sx={{ height: "85vh", maxHeight: "65", minHeight: 440 }}>
            <DataGrid
                rows={rows}
                sx={{
                    '.MuiDataGrid-row' : {
                        fontSize:'1rem',
                        margin:'0.3rem 0rem',
                        borderRadius: "1rem", // Add border-radius for rounded corners
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                        ":hover": {
                        backgroundColor: "#F5F5F5",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        },
                    },
                    '.MuiDataGrid-columnHeadersInner' : {
                        backgroundColor:"#f4f4f4"
                    }
                  }}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                rowHeight={70}
                pageSizeOptions={[10, 20, 30]}
                checkboxSelection
                onCellClick={(params) => {
                    if (params.field === 'clientEmail') {
                        navigate("/dash", { replace: true });
                    }
                }}
                disableRowSelectionOnClick
            />
        </Box>
    )
}

export default AttandanceGrid