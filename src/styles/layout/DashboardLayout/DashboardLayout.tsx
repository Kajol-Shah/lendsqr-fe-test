import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

import "./DashboardLayout.scss";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">

      <Navbar />

      <div className="dashboard-layout__body">

        <Sidebar />

        <main className="dashboard-layout__content">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;
