import React, { Component } from "react";
import withCounter from "./withCounter";
class HoverCounter extends Component {
  render() {
    const { counter, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hovered {counter} Times</h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 20);
