import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  font-size: 2rem;
  line-height: 4rem;
  letter-spacing: 1px;

  &:focus {
    border-bottom: 1px solid red;
  }
`;
export default Input;
