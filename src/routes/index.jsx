import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import MainLayout from "../layout/MainLayout";

//Home
import Dashboard from "../pages/Home/Dashboard";
import MyAttendance from "../pages/Attendance/MyAttedance";
import AttedanceRequest from "../pages/Attendance/AttedanceRequest";
import MyAttandanceTable from "../pages/MyAttandanceTable";
import Login from "../pages/Login";

// import Logs from "../pages/System/Logs";


const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Login />} />
        <Route path="/" element={<MainLayout />}>

        
          <Route path="/my-attendance" element={<MyAttendance />} />
          <Route path="/attendance-request" element={<AttedanceRequest />} />
          <Route path="/attendance-table" element={<MyAttandanceTable />} />

        </Route>
      </Route>
    </Routes>
  );
};

export default Routing;
