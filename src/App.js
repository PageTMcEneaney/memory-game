import Tile from "./components/Tile";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Counter from "./components/Counter";
import _ from "lodash";

import tiles from "./tiles.json";
import React from 'react';
import './index.css';

class App extends React.Component {
  // set initial state values

  state = {
    current: 0,
    high: 0,
    tiles
  }

  // randomzie books on load and bind click event
  componentDidMount() {
    this.random();
    this.handleClick = this.handleClick.bind(this);
  }

  // randomize function that reorders the state.tiles 
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

  //reset state.tiles.chosen values to false when win/lose condition is met
  resetChosen = () => {
    let chosenTiles = this.state.tiles;
    chosenTiles.map(tile => {
      tile.chosen = false;
      return tile;
    });
    this.setState({ tiles: chosenTiles})
  }
  
  // onClick function whenever a book tile is clicked - controls both win and loss conditions
  handleClick = (objectid) => {
    let index = this.state.tiles.findIndex(x => x.id === objectid);

    // if the clicked tile has not been clicked yet
    if (!this.state.tiles[index].chosen) {
      this.state.tiles[index].chosen = true
      this.setState( {tiles} );

      //increasing current score (state variable)
      this.setState({ current: this.state.current + 1 })

      // if user doesn't choose any dupes they win!
      if (this.state.current >= 12) {
        alert("You win!!")
        this.setState({current: 0, high: 0})
        this.resetChosen();
      }
    } else {
      // if the clicked tile was already clicked
      alert("Oops! You already guessed that!")
      if (this.state.current >= this.state.high) {
              //logging the highest score, and resetting current to 0
              this.setState({current: 0, high: this.state.current })
      } else {
              this.setState({current: 0})
      }
      this.resetChosen();
    }
    //after user guesses, randomize tile array no matter what
    this.random();
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
