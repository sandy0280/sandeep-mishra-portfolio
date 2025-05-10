import { NavLink } from "react-router-dom";
import {
  FaUser, // About
  FaBriefcase, // Portfolio
  FaCode, // Skills
  FaEnvelope, // Contact
  FaFileAlt // Resume
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list" style={{ display: "flex", gap: "1.5rem" }}>
        <li className="navbar-item">
          <NavLink
            to="/"
            className="navbar-link"
            data-nav-link
            style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
          >
            <FaUser className="navbar-icon" />
            <span className="navbar-text">About</span>
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/Portfolio"
            className="navbar-link"
            data-nav-link
            style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
          >
            <FaBriefcase className="navbar-icon" />
            <span className="navbar-text">Portfolio</span>
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/Skills"
            className="navbar-link"
            data-nav-link
            style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
          >
            <FaCode className="navbar-icon" />
            <span className="navbar-text">Skills</span>
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/Contact"
            className="navbar-link"
            data-nav-link
            style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
          >
            <FaEnvelope className="navbar-icon" />
            <span className="navbar-text">Contact</span>
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/Resume"
            className="navbar-link"
            data-nav-link
            style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
          >
            <FaFileAlt className="navbar-icon" />
            <span className="navbar-text">Resume</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
