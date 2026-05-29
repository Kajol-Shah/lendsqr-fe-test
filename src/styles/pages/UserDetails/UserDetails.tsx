import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UserDetails.scss";
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

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = await getUsers();
      const found = (data as User[]).find(
        (u) => u.id === Number(id)
      );
      setUser(found || null);
    };

    load();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="userDetails">

      {/* BACK */}
      <div
        className="userDetails__back"
        onClick={() =>
          navigate("/dashboard/users")
        }
      >
        ← Back to Users
      </div>

      {/* HEADER */}
      <div className="userDetails__header">
        <h2>User Details</h2>

        <div className="userDetails__actions">
          <button className="btn-red">
            BLACKLIST USER
          </button>
          <button className="btn-green">
            ACTIVATE USER
          </button>
        </div>
      </div>

      {/* MAIN PROFILE CARD */}
      <div className="profileCard">

        {/* USER INFO LEFT */}
        <div className="profileLeft">

          <div className="avatar">
            {user.username.charAt(0)}
          </div>

          <div>
            <h3>{user.username}</h3>
            <p className="user-id">
              {user.id}
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="divider" />

        {/* TIER */}
        <div className="profileTier">
          <p>User’s Tier</p>

          {/* GOLD STARS */}
          <div className="stars">
            <span>★</span>
            <span>★</span>
            <span className="inactive">★</span>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="divider" />

        {/* BALANCE */}
        <div className="profileBalance">
          <h2>₦200,000.00</h2>
          <p>9912345678 / Providus Bank</p>
        </div>

      </div>

      {/* TABS */}
      <div className="tabs">
        <span className="active">
          General Details
        </span>
        <span>Documents</span>
        <span>Bank Details</span>
        <span>Loans</span>
        <span>Savings</span>
        <span>App and System</span>
      </div>

      {/* SECTIONS */}
      <div className="cardSection">

        <h4>Personal Information</h4>

        <div className="grid">

          <div>
            <p>FULL NAME</p>
            <h5>{user.username}</h5>
          </div>

          <div>
            <p>PHONE NUMBER</p>
            <h5>{user.phone}</h5>
          </div>

          <div>
            <p>EMAIL ADDRESS</p>
            <h5>{user.email}</h5>
          </div>

          <div>
            <p>ORGANIZATION</p>
            <h5>{user.organization}</h5>
          </div>

          <div>
            <p>STATUS</p>
            <h5>{user.status}</h5>
          </div>

          <div>
            <p>DATE JOINED</p>
            <h5>{user.dateJoined}</h5>
          </div>

        </div>

      </div>

    </div>
  );
};

export default UserDetails;