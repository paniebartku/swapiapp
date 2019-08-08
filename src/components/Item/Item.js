import React, { Component } from "react";
import { debounce } from "lodash";
import Input from "../Input/Input";

const Item = ({ results, loading }) => {
  return (
    <>
      <ul>
        {results.map(({ name, homeworld, terrain }, i) => (
          <li key={i}>
            <p>Name: {name}</p>
            <p>Home: {homeworld}</p>
            <p>Terrain: {terrain}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Item;

// handleInput = debounce(searchValue => {
//   this.setState({ searchValue });

//   fetch(`https://swapi.co/api/people/?search=${searchValue}`)
//     .then(response => response.json())
//     .then(data => {
//       const results = data.results;

//       results.forEach(item => {
//         fetch(item.homeworld)
//           .then(response => response.json())
//           .then(data => {
//             item.homeworld = "";
//             const homeworld = data.name;
//             item.homeworld = homeworld;

//             const terrain = data.terrain;
//             item.terrain = terrain;

//             this.setState({ results });
//           });
//       });

//       console.log(results);
//     });
//   //this.setState({ loading: false });
// }, 500);
