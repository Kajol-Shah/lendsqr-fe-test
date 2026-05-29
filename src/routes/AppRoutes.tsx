import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../styles/pages/Login/Login";
import DashboardLayout from "../styles/layout/DashboardLayout/DashboardLayout";
import Users from "../styles/pages/Users/Users";
import UserDetails from "../styles/pages/UserDetails/UserDetails";
const AppRoutes = () => {
  return (
    <BrowserRouter>

     <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* DASHBOARD WRAPPER */}
        <Route path="/dashboard" element={<DashboardLayout />}>

          {/* default route */}
          <Route index element={<Navigate to="users" replace />} />

          {/* USERS */}
          <Route path="users" element={<Users />} />

          {/* USER DETAILS (FIXED) */}
          <Route path="users/:id" element={<UserDetails />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;