import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "@emotion/styled";

const StyledFooter = styled(Navbar)`
 
  padding: 2rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #5f6368;
`;

const StyledNav = styled(Nav)`
  margin-left: auto;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const StyledListItem = styled.li`
  margin-bottom: 0.5rem;
`;
const StyledNavLink = styled(Nav.Link)`
  color: #5f6368;
  margin-right: 1.5rem;
  transition: color 0.3s;
  &:hover {
    color: #202124;
  }
`;

function Footer() {
    return (
        <StyledFooter expand="lg">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <StyledList>
                            <StyledListItem>
                                <StyledNavLink>Help</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>Help Center</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>Help Forum</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>Video Tutorials</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>Community</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>B-Log Buzz</StyledNavLink>
                            </StyledListItem>
                        </StyledList>
                    </div>
                    <div className="col-md-3">
                        <StyledList>
                            <StyledListItem>
                                <StyledNavLink>Developers</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>B-Log API</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>Developer Forum</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>Terms of Service</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>Privacy</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>Content Policy</StyledNavLink>
                            </StyledListItem>
                        </StyledList>
                    </div>
                    <div className="col-md-3">
                        <StyledList>
                            <StyledListItem>
                                <StyledNavLink>Developers</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>B-Log API</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>Developer Forum</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>Terms of Service</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>Privacy</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>Content Policy</StyledNavLink>
                            </StyledListItem>
                        </StyledList>
                    </div>
                    <div className="col-md-3">
                        <StyledList>
                            <StyledListItem>
                                <StyledNavLink>Developers</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>B-Log API</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>Developer Forum</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>Terms of Service</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>Privacy</StyledNavLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledNavLink>Content Policy</StyledNavLink>
                            </StyledListItem>
                        </StyledList>
                    </div>
                </div>
            </div>

        </StyledFooter>
    );
}

export default Footer;
