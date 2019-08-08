import React, { Component } from "react";
import GlobalStyle from "../theme/GlobalStyle";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/mainTheme";
import Intro from "../components/Intro/Intro";
import Item from "../components/Item/Item";
import Menu from "../components/Menu/Menu";
import Button from "../components/Button/Button";
import Spinner from "../components/Spinner/Spinner";

const StyledWrapper = styled.div`
  /* width: 1200px; */
  margin: 0 auto;
  /*padding-top: 10rem; */
`;

class MainTemplate extends Component {
  state = {
    isMenuVisible: false,
    results: []
  };

  handleMenuToggle = () => {
    this.setState(prevState => ({
      isMenuVisible: !prevState.isMenuVisible
    }));
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await fetch(`https://swapi.co/api/people/`);
    const resData = await response.json();
    const results = resData.results;

    await new Promise(resolve => {
      for (let i = 0; i < results.length; i++) {
        fetch(results[i].homeworld)
          .then(res => res.json())
          .then(data => {
            results[i].homeworld = "";
            const homeworld = data.name;
            results[i].homeworld = homeworld;
            const terrain = data.terrain;
            results[i].terrain = terrain;

            this.setState({ results: resData.results });
            resolve();
          });
      }
    });
    console.log(resData.results);

    this.setState({ loading: false });
  }

  render() {
    const { isMenuVisible, loading, results } = this.state;
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <StyledWrapper>
              <Menu isVisible={isMenuVisible} />
              {/* <Intro /> */}
              <Item loading={loading} results={results} />
              <Button onClick={this.handleMenuToggle}>
                {isMenuVisible === false ? "Open" : "Close"}
              </Button>
            </StyledWrapper>
          </ThemeProvider>
        </>
      );
    }
  }
}

export default MainTemplate;
