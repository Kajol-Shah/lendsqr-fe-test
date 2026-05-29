import {
  useEffect,
  useRef,
  useState,
  
} from "react";
import {  useNavigate } from "react-router-dom";
import "./Users.scss";

import {
  FiUsers,
  FiUserCheck,
  FiDollarSign,
  FiCreditCard,
  FiMoreVertical,
  FiChevronLeft,
  FiChevronRight,
  FiEye,
  FiUserX,
} from "react-icons/fi";

import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

import { getUsers } from "../../../services/userService";

interface User {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
}

const Users = () => {
    const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  const [currentPage, setCurrentPage] =
    useState(1);

  const [showFilter, setShowFilter] =
    useState(false);

  const [openMenuId, setOpenMenuId] =
    useState<number | null>(null);

  const filterRef =
    useRef<HTMLDivElement>(null);

  const usersPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();

      setUsers(data as User[]);
    };

    fetchUsers();
  }, []);

  /* CLOSE FILTER DROPDOWN */
  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(
          event.target as Node
        )
      ) {
        setShowFilter(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* PAGINATION */
  const indexOfLastUser =
    currentPage * usersPerPage;

  const indexOfFirstUser =
    indexOfLastUser - usersPerPage;

  const currentUsers = users.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const totalPages = Math.ceil(
    users.length / usersPerPage
  );

  return (
    <div className="users">

      {/* TITLE */}
      <h1 className="users__title">
        Users
      </h1>

      {/* CARDS */}
      <div className="users__cards">

        <div className="users__card">
          <div className="users__icon users__icon--users">
            <FiUsers />
          </div>

          <p>USERS</p>

          <h2>2,453</h2>
        </div>

        <div className="users__card">
          <div className="users__icon users__icon--active">
            <FiUserCheck />
          </div>

          <p>ACTIVE USERS</p>

          <h2>2,453</h2>
        </div>

        <div className="users__card">
          <div className="users__icon users__icon--loans">
            <FiDollarSign />
          </div>

          <p>USERS WITH LOANS</p>

          <h2>12,453</h2>
        </div>

        <div className="users__card">
          <div className="users__icon users__icon--savings">
            <FiCreditCard />
          </div>

          <p>USERS WITH SAVINGS</p>

          <h2>102,453</h2>
        </div>

      </div>

      {/* TABLE */}
      <div className="users__table">

        {/* HEADER */}
        <div className="users__table-header">

          {/* FILTER */}
          <div
            className="th filter-wrapper"
            ref={filterRef}
          >

            <div
              className="filter-trigger"
              onClick={() =>
                setShowFilter(!showFilter)
              }
            >
              ORGANIZATION

              <HiOutlineAdjustmentsHorizontal />
            </div>

            {showFilter && (
              <div className="filter-dropdown">

                <label>
                  Organization
                </label>

                <input placeholder="Select" />

                <label>
                  Username
                </label>

                <input placeholder="User" />

                <label>Email</label>

                <input placeholder="Email" />

                <label>Date</label>

                <input placeholder="Date" />

                <label>Status</label>

                <select>
                  <option>Select</option>

                  <option>Active</option>

                  <option>Inactive</option>

                  <option>Pending</option>

                  <option>
                    Blacklisted
                  </option>
                </select>

                <div className="filter-buttons">

                  <button className="reset-btn">
                    Reset
                  </button>

                  <button className="filter-btn">
                    Filter
                  </button>

                </div>

              </div>
            )}

          </div>

          <div className="th">
            USERNAME
            <HiOutlineAdjustmentsHorizontal />
          </div>

          <div className="th">
            EMAIL
            <HiOutlineAdjustmentsHorizontal />
          </div>

          <div className="th">
            PHONE NUMBER
            <HiOutlineAdjustmentsHorizontal />
          </div>

          <div className="th">
            DATE JOINED
            <HiOutlineAdjustmentsHorizontal />
          </div>

          <div className="th">
            STATUS
            <HiOutlineAdjustmentsHorizontal />
          </div>

          <div className="th"></div>

        </div>

        {/* ROWS */}
        {currentUsers.map((user) => (
          <div
            className="users__table-row"
            key={user.id}
          >

            <div>
              {user.organization}
            </div>

            <div>
              {user.username}
            </div>

            <div>{user.email}</div>

            <div>{user.phone}</div>

            <div>
              {new Date(
                user.dateJoined
              ).toLocaleDateString()}
            </div>

            <div>
              <span
                className={`status ${user.status.toLowerCase()}`}
              >
                {user.status}
              </span>
            </div>

            {/* 3 DOT MENU */}
            <div className="users__menu">

              <FiMoreVertical
                onClick={() =>
                  setOpenMenuId(
                    openMenuId === user.id
                      ? null
                      : user.id
                  )
                }
              />

              {openMenuId === user.id && (
                <div className="users__menu-dropdown">

                  <div className="users__menu-item" onClick={() =>
                    navigate(`/dashboard/users/${user.id}`)
                    }>
                    <FiEye />
                    <span>
                      View Details
                    </span>
                  </div>

                  <div className="users__menu-item">
                    <FiUserX />
                    <span>
                      Blacklist User
                    </span>
                  </div>

                  <div className="users__menu-item">
                    <FiUserCheck />
                    <span>
                      Activate User
                    </span>
                  </div>

                </div>
              )}

            </div>

          </div>
        ))}

      </div>

      {/* PAGINATION */}
      <div className="users__pagination">

        {/* LEFT */}
        <div className="users__pagination-left">

          Showing

          <select>
            <option>10</option>
          </select>

          out of {users.length}

        </div>

        {/* RIGHT */}
        <div className="users__pagination-right">

          <button
            className="pagination-arrow"
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((prev) => prev - 1)
            }
          >
            <FiChevronLeft />
          </button>

          <button className="active">
            1
          </button>

          <button>2</button>

          <button>3</button>

          <span className="dots">
            ...
          </span>

          <button>{totalPages}</button>

          <button
            className="pagination-arrow"
            disabled={
              currentPage === totalPages
            }
            onClick={() =>
              setCurrentPage((prev) => prev + 1)
            }
          >
            <FiChevronRight />
          </button>

        </div>

      </div>

    </div>
  );
};

export default Users;