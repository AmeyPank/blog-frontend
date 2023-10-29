import React from "react";
import styled from "@emotion/styled";
import { Navigate, useNavigate } from 'react-router-dom';
import "./MainHome.css"
const StyledHeader = styled.div`
  background-color: #ccc;
  height: 50px;
  background-image: url('your_image_url');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-start;
//   justify-content: flex-end;
  padding: 20px;
`;

const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const StyledButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 100px 2px;
  cursor: pointer;
  border-radius: 5px;
`;

const HomePage = () => {
    const history = useNavigate();

    const handleLogin = () => {
        // Logic for handling login
        history("/login"); // Replace with your login component route
    };

    const handleSignIn = () => {
        // Logic for handling sign-in
        history("/register"); // Replace with your sign-in component route
    };

    const handleCreateBlog = () => {
        // Logic for creating a blog
        history("/login"); // Replace with your create blog component route
    };
    return (
        <div>
            <StyledHeader style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Logo style={{ animation: "moveInLeft 1s ease-out", alignSelf: "flex-start", marginLeft: "10px" }}>
                    .BloggerSpot
                </Logo>
                <div style={{ margin: "5px" }}>
                    <h1 style={{ animation: "moveInLeft 1s ease-out" }}>
                        Publish your imaginations, your way
                    </h1>
                </div>
                <div style={{ margin: "5px" }}>
                    <h5 style={{ animation: "moveInLeft 1.3s ease-out", fontWeight: 600 }}>
                        Create a unique and beautiful blog easily.
                    </h5>
                </div>
            </StyledHeader>



            <StyledButtonContainer>
                <StyledButton onClick={handleLogin} style={{ animation: "moveInLeft 1.5s ease-out" }}>
                    Login
                </StyledButton>
                <StyledButton onClick={handleSignIn} style={{ animation: "moveInLeft 1.7s ease-out" }}>
                    Sign In
                </StyledButton>
                <StyledButton onClick={handleCreateBlog} style={{ animation: "moveInLeft 1.9s ease-out" }}>
                    Create a Blog
                </StyledButton>
            </StyledButtonContainer>
        </div>

    );
};

export default HomePage;
