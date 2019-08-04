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
    current: 0,
    high: 0,
    tiles
  }
  componentDidMount() {
    this.random();
    this.handleClick = this.handleClick.bind(this);
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

  resetChosen = () => {
    let chosenTiles = this.state.tiles;
    chosenTiles.map(tile => {
      tile.chosen = false;
      return tile;
    });

    this.setState({ tiles: chosenTiles})

  }
  

  handleClick = (objectid) => {
    let index = this.state.tiles.findIndex(x => x.id === objectid);
    if (!this.state.tiles[index].chosen) {
      this.state.tiles[index].chosen = true
      this.setState( {tiles} );
      this.setState({ current: this.state.current + 1 })

      // if user doesn't choose any dupes they win!
      if (this.state.current >= 12) {
        alert("You win!!")
        this.setState({current: 0, high: 0})
        this.resetChosen();
      }
      this.random();
    } else {
      alert("already guessed!")
      this.setState({current: 0, high: this.state.current })
      this.resetChosen();
      this.random();
      

    }

    // this.state.tiles[index].chosen = true;
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
            chosen={tiles.chosen}
            onClick={ () => this.handleClick(tiles.id) }
          />
        ))}
      </Wrapper>
      </div>

    )
  }
}

export default App;
