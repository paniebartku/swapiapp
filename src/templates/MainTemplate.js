import React, { Component } from "react";
import GlobalStyle from "../theme/GlobalStyle";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/mainTheme";
import Intro from "../components/Intro/Intro";
import Item from "../components/Item/Item";
import Menu from "../components/Menu/Menu";
import Button from "../components/Button/Button";

const StyledWrapper = styled.div`
  /* width: 1200px; */
  margin: 0 auto;
  /*padding-top: 10rem; */
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
        <ThemeProvider theme={theme}>
          <StyledWrapper>
            <Menu isVisible={isMenuVisible} />
            {/* <Intro /> */}
            <Item />
            <Button onClick={this.handleMenuToggle}>
              {isMenuVisible === false ? "Open" : "Close"}
            </Button>
          </StyledWrapper>
        </ThemeProvider>
      </>
    );
  }
}

export default MainTemplate;
