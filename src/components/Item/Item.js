import React, { Component } from "react";
import { debounce } from "lodash";
import Input from "../Input/Input";

class Item extends Component {
  state = {
    searchValue: "",
    results: [],
    homeworld: [],
    planets: [],
    fullPerson: []
  };

  handleInput = debounce(searchValue => {
    this.setState({ searchValue });

    fetch(`https://swapi.co/api/people/?search=${searchValue}`)
      .then(response => response.json())
      .then(data => {
        const results = data.results;
        this.setState({ results });
        for (let i = 0; i < results.length; i++) {
          //console.log(results[i].homeworld);
          let homeworld = results[i].homeworld;
          this.setState({ homeworld });

          fetch(homeworld)
            .then(response => response.json())
            .then(data => {
              const { planets } = this.state;

              planets.push(data);

              this.setState({ planets });
              const transformedPlanets = planets.map(({ name, terrain }) => ({
                pName: name,
                terrain
              }));

              const together = results.concat(transformedPlanets);
              const mergeObject = Object.assign(...together);

              const { fullPerson } = this.state;
              fullPerson.push(mergeObject);
              this.setState({ fullPerson });
              if (searchValue === "") {
                this.setState({ fullPerson: [] });
              }
              console.log(fullPerson);
            });
        }
      });
    const { fullPerson } = this.state;
    fullPerson.splice(0, fullPerson.length);
  }, 500);

  render() {
    const { fullPerson, searchValue } = this.state;
    return (
      <>
        <Input
          onChange={e => this.handleInput(e.target.value)}
          placeholder="write something"
        />
        <h2>{searchValue}</h2>
        <ul>
          {fullPerson.map(({ name, pName, terrain }, i) => (
            <li key={i}>
              <p>Name: {name}</p>
              <p>Home: {pName}</p>
              <p>Terrain: {terrain}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Item;
