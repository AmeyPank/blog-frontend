import axios from "axios";
import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import styled from "@emotion/styled";

const StyledNavbar = styled(Navbar)`
  background-color: #79a2cb;
  padding: 1rem 2rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

const StyledNavBrand = styled(Navbar.Brand)`
  font-size: 1.5rem;
`;

const StyledNav = styled(Nav)`
  margin-left: auto;
`;

const StyledNavLink = styled(Nav.Link)`
  color: #100c64; /* Set your desired color for the links */
  font-size: 16px; /* Set your desired font size*/
  margin-right: 1.5rem;
  &:hover {
    color: #4d4c55; /* Set your desired color for the hover effect */
  }
`;


const StyledButton = styled(Button)`
  margin-left: 1rem;
`;

function Header() {
    const apiUrl = process.env.REACT_APP_API_URL; // Update the variable name

    const userData = JSON.parse(localStorage.getItem("user"));
    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "/";
        axios
            .post(`https://blog-app-backend-3o3o.onrender.com/user/logout`)
            .then((res) => console.log(res.data))
            .catch((err) => alert(err));
    };

    const handleCreateBlog = () => {
        window.location.href = "/createblog";
    };

    const handleMyBlog = () => {
        window.location.href = "/myblogs";
    };

    const handleUsers = () => {
        window.location.href = "/users";
    };

    const handleHome = () => {
        window.location.href = "/homepage";
    };

    return (
        <StyledNavbar expand="lg">
            <StyledNavBrand href="/" className="m-5">
                Welcome {userData.username}
            </StyledNavBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <StyledNav className="mr-auto">
                    <StyledNavLink onClick={handleHome}>Home</StyledNavLink>
                    <StyledNavLink onClick={handleCreateBlog}>Create Blog</StyledNavLink>
                    <StyledNavLink onClick={handleMyBlog}>My Blogs</StyledNavLink>
                    <StyledNavLink onClick={handleUsers}>Users</StyledNavLink>
                </StyledNav>
                <StyledButton variant="outline-danger" onClick={handleLogout}>
                    Logout
                </StyledButton>
            </Navbar.Collapse>
        </StyledNavbar>
    );
}

export default Header;
