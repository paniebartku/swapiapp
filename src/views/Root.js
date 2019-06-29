import React from "react";
import GlobalStyle from "../theme/GlobalStyle";
import { debounce } from "lodash";

class Root extends React.Component {
  state = {
    text: "",
    searchValue: "",
    results: []
  };

  handleInput = debounce(searchValue => {
    this.setState({ searchValue });

    fetch(` https://swapi.co/api/people/?search=${this.state.searchValue}`)
      .then(response => response.json())
      .then(data => {
        const results = data.results;
        this.setState({ results });
      });
  }, 500);

  render() {
    return (
      <>
        <GlobalStyle />
        <input onChange={e => this.handleInput(e.target.value)} />

        <h2>{this.state.searchValue}</h2>

        <ul>
          {this.state.results.map(item => (
            <li>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Root;
