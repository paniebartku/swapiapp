import React, { Component } from "react";
import GlobalStyle from "../theme/GlobalStyle";
import styled from "styled-components";
import Item from "../components/Item/Item";
import Menu from "../components/Menu/Menu";
import Button from "../components/Button/Button";

const StyledWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 10rem;
`;

class MainTemplate extends Component {
  state = {
    isMenuVisible: false
  };

  handleMenuToggle = () => {
    this.setState(prevState => ({
      isMenuVisible: !prevState.isMenuVisible
    }));
  };

  render() {
    const { isMenuVisible } = this.state;

    return (
      <>
        <GlobalStyle />
        <StyledWrapper>
          <Menu isVisible={isMenuVisible} />
          <Item />
          <Button onClick={this.handleMenuToggle}>
            {isMenuVisible === false ? "Open" : "Close"}
          </Button>
        </StyledWrapper>
      </>
    );
  }
}

export default MainTemplate;
