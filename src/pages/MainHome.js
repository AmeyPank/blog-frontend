import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import "./MainHome.css";

// Styled Components
const StyledHeader = styled.div`
  background-color: #79a2cb;
  background-image: url("https://via.placeholder.com/1500x500"); // Replace with your image URL
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  animation: moveInLeft 1s ease-out;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin: 20px 0;
  animation: moveInLeft 1.2s ease-out;
`;

const SubHeading = styled.h5`
  font-size: 1.25rem;
  font-weight: 600;
  animation: moveInLeft 1.4s ease-out;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #45a049;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const handleSignIn = () => {
        navigate("/register");
    };

    const handleCreateBlog = () => {
        navigate("/login");
    };

    return (
        <div>
            <StyledHeader>
                <Logo>.BloggerSpot</Logo>
                <Heading>Publish your imaginations, your way</Heading>
                <SubHeading>Create a unique and beautiful blog easily.</SubHeading>
            </StyledHeader>

            <StyledButtonContainer>
                <StyledButton onClick={handleLogin} style={{ animation: "moveInLeft 1.5s ease-out" }}>
                    Login
                </StyledButton>
                <StyledButton onClick={handleSignIn} style={{ animation: "moveInLeft 1.7s ease-out" }}>
                    Sign Up
                </StyledButton>
                <StyledButton onClick={handleCreateBlog} style={{ animation: "moveInLeft 1.9s ease-out" }}>
                    Create a Blog
                </StyledButton>
            </StyledButtonContainer>
        </div>
    );
};

export default HomePage;