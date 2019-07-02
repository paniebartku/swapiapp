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

        results.forEach(item => {
          fetch(item.homeworld)
            .then(response => response.json())
            .then(data => {
              item.homeworld = "";
              const homeworld = data.name;
              item.homeworld = homeworld;

              const terrain = data.terrain;
              item.terrain = terrain;

              this.setState({ results, terrain });
            });
        });
        console.log(results);
      });
  }, 1000);

  render() {
    const { searchValue, results } = this.state;

    return (
      <>
        <Input
          onChange={e => this.handleInput(e.target.value)}
          placeholder="write something"
        />
        <h2>{searchValue}</h2>
        <ul>
          {results.map(({ name, homeworld, terrain }, i) => (
            <li key={i}>
              <p>Name: {name}</p>
              <p>Home: {homeworld}</p>
              <p>Home: {terrain}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Item;
