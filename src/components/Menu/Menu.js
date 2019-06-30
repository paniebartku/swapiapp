import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMenuWrapper = styled.div`
  border: 1px solid black;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  min-width: 15vw;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? "0" : "100%")});
  transition: transform 0.25s ease-in-out;
`;

const Menu = ({ isVisible }) => (
  <StyledMenuWrapper isVisible={isVisible}>
    <h1>Logo</h1>
    <div>
      <h2>Link</h2>
      <h2>Link</h2>
      <h2>Link</h2>
    </div>
  </StyledMenuWrapper>
);

Menu.propTypes = {
  isVisible: PropTypes.bool
};

Menu.defaultProps = {
  isVisible: false
};

export default Menu;
