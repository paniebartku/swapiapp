import styled from "styled-components";

const Input = styled.input`
  border: none;
  font-size: 2rem;
  line-height: 4rem;
  letter-spacing: 1px;
  border-bottom: 2px solid darkgrey;
  background-color: inherit;
  display: block;
  width: 100%;
  margin: none;
  transition: all 0.3s ease-in-out;
  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border-bottom: none;
  }
`;
export default Input;
