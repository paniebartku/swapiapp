import React, { Component } from "react";
import styled from "styled-components";
import deathStar from "../../assets/images/deathStar.jpg";
import Button from "../Button/Button";

const StyledWrapper = styled.div`
  position: fixed;
  height: ${({ isActive }) => (isActive ? "0" : "100vh")};
  transition: height 0.25s ease-in-out;
  background-image: url(${deathStar});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
`;

const StyledButton = styled(Button)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20vh;
  margin-left: auto;
  margin-right: auto;
`;

class Intro extends Component {
  state = {
    isActive: false
  };

  handleClick = () => {
    this.setState({
      isActive: true
    });
  };

  render() {
    const { isActive } = this.state;
    return (
      <StyledWrapper isActive={isActive}>
        <StyledButton onClick={this.handleClick}>Come</StyledButton>
      </StyledWrapper>
    );
  }
}

export default Intro;
