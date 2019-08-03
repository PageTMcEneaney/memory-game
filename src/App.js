import Tile from "./components/Tile";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Counter from "./components/Counter";
import _ from "lodash";

import tiles from "./tiles.json";
import React from 'react';
// import logo from './logo.svg';
import './index.css';

class App extends React.Component {
  state = {
    tiles
  }
  componentDidMount() {
    this.random();
    // this.handleClick = this.handleClick.bind(this);
  }

  

  random = () => {
    let randomFunc = () => {
      return Math.floor(Math.random() * 100)
    }
    let tilesTransformed = this.state.tiles;
    tilesTransformed.map(tile => {
      tile.sortNum = randomFunc();
      return tile;
    });
    let sortedTiles = _.sortBy(tilesTransformed, ['sortNum']);

    this.setState({ tiles: sortedTiles})
  }

  handleClick = () => {
    alert("clicked!")
    // let tilesClicked = this.state.tiles;
    // tilesClicked.map(tile => {
    //   tile.chosen = true;
    //   console.log(tile);
    //   return tile;
    // })
  }

  render() {
    return (
      <div>
      <Counter current={this.state.current} high={this.state.high} />
      <Jumbotron /> 
      <Wrapper>
        {this.state.tiles.map(tiles => (
            <Tile
            id={tiles.id}
            key={tiles.id}
            name={tiles.name}
            image={tiles.image}
            onClick={this.handleClick}
          />
        ))}
      </Wrapper>
      </div>

    )
  }
}

export default App;
