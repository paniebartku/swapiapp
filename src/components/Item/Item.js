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
        const asyncfn = async () => {
          for (let i = 0; i < results.length; i++) {
            await fetch(results[i].homeworld)
              .then(res => res.json())
              .then(data => {
                results[i].homeworld = "";
                const homeworld = data.name;
                results[i].homeworld = homeworld;
                const terrain = data.terrain;
                results[i].terrain = terrain;
                // this.setState({ results });
              });

            let films = results[i].films;
            const movies = [];

            for (let i = 0; i < films.length; i++) {
              fetch(films[i])
                .then(res => res.json())
                .then(data => {
                  const film = data.title;
                  movies.push(film);
                  this.setState({ results });
                });
            }
            results[i].films = movies;
            results.concat(movies);
          }
          this.setState({ results });
        };
        asyncfn();
        // results.forEach(item => {
        //   fetch(item.homeworld)
        //     .then(response => response.json())
        //     .then(data => {
        //       item.homeworld = "";
        //       const homeworld = data.name;
        //       item.homeworld = homeworld;

        //       const terrain = data.terrain;
        //       item.terrain = terrain;
        //       this.setState({ results });
        //     });

        // item.films.forEach(film => {
        //   proms.push(fetch(film).then(response => response.json()));
        //   Promise.all(proms).then(data => {
        //     movies.push(data.title);
        //     this.setState({ results });
        //   });
        // });
        // item.films = movies;

        // });

        console.log(results);
      });
  }, 500);

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
          {results.map(({ name, homeworld, terrain, films }, i) => (
            <li key={i}>
              <p>Name: {name}</p>
              <p>Home: {homeworld}</p>
              <p>Terrain: {terrain}</p>
              <p>Films: </p>
              <ul>
                {films.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Item;
