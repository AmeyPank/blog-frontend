import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "@emotion/styled";
import { FaQuestionCircle, FaCode, FaFileContract, FaShieldAlt } from "react-icons/fa";

const StyledFooter = styled(Navbar)`
  background-color: #f8f9fa;
  padding: 2rem 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #5f6368;
  border-top: 1px solid #e0e0e0;
`;

const StyledNavLink = styled(Nav.Link)`
  color: #5f6368;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  &:hover {
    color: #202124;
    transform: translateX(3px);
    text-decoration: none;
  }
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
  font-size: 1.2rem;
`;

const FooterHeading = styled.h5`
  font-size: 1.1rem;
  font-weight: 600;
  color: #202124;
  margin-bottom: 1rem;
`;

function Footer() {
    return (
        <StyledFooter expand="lg">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    {/* Help Section */}
                    <div className="col-md-3">
                        <FooterHeading>Help</FooterHeading>
                        <StyledNavLink><IconWrapper><FaQuestionCircle /></IconWrapper>Help Center</StyledNavLink>
                        <StyledNavLink><IconWrapper><FaQuestionCircle /></IconWrapper>Help Forum</StyledNavLink>
                        <StyledNavLink><IconWrapper><FaQuestionCircle /></IconWrapper>Video Tutorials</StyledNavLink>
                        <StyledNavLink><IconWrapper><FaQuestionCircle /></IconWrapper>Community</StyledNavLink>
                        <StyledNavLink><IconWrapper><FaQuestionCircle /></IconWrapper>B-Log Buzz</StyledNavLink>
                    </div>

                    {/* Developers Section */}
                    <div className="col-md-3">
                        <FooterHeading>Developers</FooterHeading>
                        <StyledNavLink><IconWrapper><FaCode /></IconWrapper>B-Log API</StyledNavLink>
                        <StyledNavLink><IconWrapper><FaCode /></IconWrapper>Developer Forum</StyledNavLink>
                    </div>

                    {/* Legal Section */}
                    <div className="col-md-3">
                        <FooterHeading>Legal</FooterHeading>
                        <StyledNavLink><IconWrapper><FaFileContract /></IconWrapper>Terms of Service</StyledNavLink>
                        <StyledNavLink><IconWrapper><FaShieldAlt /></IconWrapper>Privacy Policy</StyledNavLink>
                        <StyledNavLink><IconWrapper><FaShieldAlt /></IconWrapper>Content Policy</StyledNavLink>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-3">
                        <FooterHeading>Contact Us</FooterHeading>
                        <StyledNavLink><IconWrapper><FaQuestionCircle /></IconWrapper>Support</StyledNavLink>
                        <StyledNavLink><IconWrapper><FaQuestionCircle /></IconWrapper>Feedback</StyledNavLink>
                    </div>
                </div>
            </div>
        </StyledFooter>
    );
}

export default Footer;
