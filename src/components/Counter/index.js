import React from "react";

class Counter extends React.Component {
  state = {
    current: 0
  };

  scoreIncrease = () => {
    this.setState({ current: this.state.current + 1})
  }

  render() {
    return(
        <nav className="navbar fixed-top navbar-light bg-light">
            <div className="container">
                <div className="float-left">
                </div>
                <div className="float-right">
                    <h3>Score: {this.current} | High Score: {this.high}</h3>
                </div>
            </div>
        </nav>
        )
    }
}

    //   <CardBody state={this.state} count={this.state.count} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} />


export default Counter;