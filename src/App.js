import Tile from "./components/Tile";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Counter from "./components/Counter";

import tiles from "./tiles.json";
import React from 'react';
// import logo from './logo.svg';
import './index.css';

class App extends React.Component {
  state = {
    tiles
  }

  removeTile = id => {
    const tile = this.state.tiles.filter(tile => tiles.id !== id);
    this.setState({ tile })
  }

  render() {
    return (
      <div>
      <Counter current={this.state.current} high={this.state.high} />
      <Jumbotron /> 
      <Wrapper>
        {this.state.tiles.map(tiles => (
            <Tile
            // removeTile={this.removeTile}
            id={tiles.id}
            key={tiles.id}
            name={tiles.name}
            image={tiles.image}
          />
        ))}
      </Wrapper>
      </div>

    )
  }
}

export default App;
