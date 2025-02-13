import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const StyledCard = styled(Card)`
  margin: 2rem auto;
  padding: 1.5rem;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
`;

export const StyledCardTitle = styled(Card.Title)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #343a40;
  margin-bottom: 0.8rem;
`;

export const StyledCardText = styled(Card.Text)`
  font-size: 1rem;
  color: #5a5a5a;
  line-height: 1.5;
`;

export const StyledButton = styled(Button)`
  margin: 0.5rem;
  font-size: 0.9rem;
  padding: 0.6rem 1.2rem;
`;
