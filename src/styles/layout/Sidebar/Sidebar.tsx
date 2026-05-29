import "./Sidebar.scss";

import {
  FiHome,
  FiUsers,
  FiBriefcase,
  FiFileText,
  FiPieChart,
  FiSettings,
  FiSliders,
  FiLogOut
} from "react-icons/fi";

import {
  BsPerson,
  BsBank,
} from "react-icons/bs";

import {
  HiOutlineUserGroup,
} from "react-icons/hi";

const Sidebar = () => {
  return (
    <aside className="sidebar">

      {/* SWITCH ORGANIZATION */}
      <div className="sidebar__section">
        <div className="sidebar__item sidebar__dropdown">
          <BsBank />
          <span>Switch Organization</span>
        </div>
      </div>

      {/* DASHBOARD */}
      <div className="sidebar__section">
        <div className="sidebar__item">
          <FiHome />
          <span>Dashboard</span>
        </div>
      </div>

      {/* CUSTOMERS */}
      <div className="sidebar__section">
        <p className="sidebar__title">CUSTOMERS</p>

        <div className="sidebar__item active">
          <FiUsers />
          <span>Users</span>
        </div>

        <div className="sidebar__item">
          <HiOutlineUserGroup />
          <span>Guarantors</span>
        </div>

        <div className="sidebar__item">
          <FiFileText />
          <span>Loans</span>
        </div>

        <div className="sidebar__item">
          <FiSliders />
          <span>Decision Models</span>
        </div>

        <div className="sidebar__item">
          <FiPieChart />
          <span>Savings</span>
        </div>

        <div className="sidebar__item">
          <FiFileText />
          <span>Loan Requests</span>
        </div>

        <div className="sidebar__item">
          <BsPerson />
          <span>Whitelist</span>
        </div>

        <div className="sidebar__item">
          <FiSettings />
          <span>Karma</span>
        </div>
      </div>

      {/* BUSINESSES */}
      <div className="sidebar__section">
        <p className="sidebar__title">BUSINESSES</p>

        <div className="sidebar__item">
          <FiBriefcase />
          <span>Organization</span>
        </div>

        <div className="sidebar__item">
          <FiPieChart />
          <span>Loan Products</span>
        </div>

        <div className="sidebar__item">
          <FiPieChart />
          <span>Savings Products</span>
        </div>

        <div className="sidebar__item">
          <FiFileText />
          <span>Fees and Charges</span>
        </div>

        <div className="sidebar__item">
          <FiFileText />
          <span>Transactions</span>
        </div>
      </div>

      {/* SETTINGS */}
      <div className="sidebar__section">
        <p className="sidebar__title">SETTINGS</p>

        <div className="sidebar__item">
          <FiSettings />
          <span>Services</span>
        </div>

        <div className="sidebar__item">
          <FiSettings />
          <span>Service Account</span>
        </div>

        <div className="sidebar__item">
          <FiSettings />
          <span>Settlements</span>
        </div>

        <div className="sidebar__item">
          <FiSettings />
          <span>Reports</span>
        </div>

        <div className="sidebar__item">
          <FiSettings />
          <span>Preferences</span>
        </div>

        <div className="sidebar__item">
          <FiSettings />
          <span>Fees and Pricing</span>
        </div>

        <div className="sidebar__item">
          <FiSettings />
          <span>Audit Logs</span>
        </div>
      </div>
<div className="sidebar__bottom">

        <div className="sidebar__divider" />

        <div className="sidebar__item logout">
          <FiLogOut />
          <span>Logout</span>
        </div>

        <div className="sidebar__version">
          v1.2.0
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;