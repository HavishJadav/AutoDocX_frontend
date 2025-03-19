import React from "react";
import { Link } from "react-router-dom";
import { FaCog } from "react-icons/fa"; // Settings icon
import "../styles.css";

const Header = () => {
  return (
    <header className="header">
      <h1>My Website</h1>
      <div className="header-buttons">
        <Link to="/login">Login</Link>
        <FaCog size={20} />
      </div>
    </header>
  );
};

export default Header;
