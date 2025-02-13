import styled from "@emotion/styled";
import { Navbar, Nav, Button } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
  background-color: #79a2cb;
  padding: 1rem 2rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

export const StyledNavBrand = styled(Navbar.Brand)`
  font-size: 1.5rem;
`;

export const StyledNav = styled(Nav)`
  margin-left: auto;
`;

export const StyledNavLink = styled(Nav.Link)`
  color: #100c64;
  font-size: 16px;
  margin-right: 1.5rem;
  
  &:hover {
    color: #4d4c55;
  }
`;

export const StyledButton = styled(Button)`
  margin-left: 1rem;
`;
