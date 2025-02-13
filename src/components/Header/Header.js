import axios from "axios";
import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  StyledNavbar,
  StyledNavBrand,
  StyledNav,
  StyledNavLink,
  StyledButton
} from "./HeaderStyles"; // Import styles from a separate file

const Header = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user")) || {};

  const handleLogout = async () => {
    try {
      await axios.post("https://blog-app-backend-3o3o.onrender.com/user/logout");
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Failed to logout. Please try again.");
    }
  };

  return (
    <StyledNavbar expand="lg">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Brand / Welcome Message */}
        <StyledNavBrand href="/" className="fw-bold">
          Welcome, {userData.username || "Guest"} 👋
        </StyledNavBrand>

        {/* Navbar Toggle for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Nav Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <StyledNav className="mx-auto gap-4">
            <StyledNavLink onClick={() => navigate("/homepage")}>🏠 Home</StyledNavLink>
            <StyledNavLink onClick={() => navigate("/createblog")}>✍️ Create</StyledNavLink>
            <StyledNavLink onClick={() => navigate("/myblogs")}>📜 My Blogs</StyledNavLink>
            <StyledNavLink onClick={() => navigate("/users")}>👥 Users</StyledNavLink>
          </StyledNav>

          {/* Logout Button */}
          <StyledButton variant="outline-danger" onClick={handleLogout} className="ms-3">
            🚪 Logout
          </StyledButton>
        </Navbar.Collapse>
      </div>
    </StyledNavbar>

  );
};

export default Header;
