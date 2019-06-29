import React, { Component } from "react";
import { debounce } from "lodash";
import Input from "../Input/Input";

class Item extends Component {
  state = {
    searchValue: "",
    results: []
  };

  handleInput = debounce(searchValue => {
    this.setState({ searchValue });

    fetch(`https://swapi.co/api/people/?search=${searchValue}`)
      .then(response => response.json())
      .then(data => {
        const results = data.results;
        this.setState({ results });
      });
  }, 500);

  render() {
    const { results, searchValue } = this.state;
    return (
      <>
        <Input
          onChange={e => this.handleInput(e.target.value)}
          placeholder="write something"
        />
        <h2>{searchValue}</h2>
        <ul>
          {results.map(({ name, birth_year, height, eye_color }, i) => (
            <li key={i}>
              <p>Name: {name}</p>
              <p>Birth Day: {birth_year}</p>
              <p>Height: {height}</p>
              <p>Eye Color: {eye_color}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Item;
