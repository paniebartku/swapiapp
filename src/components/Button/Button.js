import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  color: black;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 2.5rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  cursor: pointer;
`;

export default Button;
