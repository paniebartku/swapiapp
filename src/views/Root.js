import React, { Component } from "react";
import GlobalStyle from "../theme/GlobalStyle";
import { debounce } from "lodash";
import Item from "../components/Item/Item";
class Root extends Component {
  state = {
    searchValue: "",
    results: []
  };

  handleInput = debounce(searchValue => {
    this.setState({ searchValue });

    fetch(` https://swapi.co/api/people/?search=${this.state.searchValue}`)
      .then(response => response.json())
      .then(data => {
        const results = data.results;
        console.log(results);
        this.setState({ results });
      });
  }, 500);

  render() {
    return (
      <>
        <GlobalStyle />
        <input onChange={e => this.handleInput(e.target.value)} />
        <h2>{this.state.searchValue}</h2>
        <Item>
          {this.state.results.map((item, i) => (
            <li key={i}>
              <p>Name: {item.name}</p>
              <p>Birth Day: {item.birth_year}</p>
              <p>Height: {item.height}</p>
              <p>Eye Color: {item.eye_color}</p>
            </li>
          ))}
        </Item>
      </>
    );
  }
}

export default Root;
