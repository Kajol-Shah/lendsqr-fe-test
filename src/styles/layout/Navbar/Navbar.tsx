import "./Navbar.scss";

import { FiSearch, FiBell } from "react-icons/fi";
import logo from "../../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header className="navbar">

      {/* LOGO */}
      <div className="navbar__logo">
        <img
          src={logo}
          alt="logo"
          className="navbar__logo-img"
        />
      </div>

      {/* SEARCH */}
      <div className="navbar__search">
        <input type="text" placeholder="Search for anything" />

        <button>
          <FiSearch />
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar__right">

        <span className="navbar__docs">Docs</span>

        <FiBell className="navbar__icon" />

        <div className="navbar__profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />
          <span>Adedeji</span>
        </div>

      </div>

    </header>
  );
};

export default Navbar;