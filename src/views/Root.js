import React from "react";
import GlobalStyle from "../theme/GlobalStyle";
import axios from "axios";
import { debounce } from "lodash";

class Root extends React.Component {
  state = {
    text: "",
    searchValue: "",
    results: []
  };

  handleInput = debounce(searchValue => {
    this.setState({ searchValue });

    axios
      .get(
        `https://images-api.nasa.gov/search?q=${
          this.state.searchValue
        }&media_type=image`
      )
      .then(response => {
        const results = response.data.collection.items;
        this.setState({ results });
        // this.setState.results = response.data.collection.items;

        console.log(results);
      })
      .catch(error => {
        console.log(error);
      });
  }, 500);

  render() {
    return (
      <>
        <GlobalStyle />
        <input onChange={e => this.handleInput(e.target.value)} />

        <h2>{this.state.searchValue}</h2>
        {/* <ul>
          {this.state.results.map(item => (
            <li>{item.data[0].description}</li>
          ))}
        </ul> */}
        <ul>
          {this.state.results.map(item => (
            <li>
              <img src={item.links[0].href} alt="" />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Root;
