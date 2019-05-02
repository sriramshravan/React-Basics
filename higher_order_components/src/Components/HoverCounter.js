import React, { Component } from "react";
import UpdatedComponent from "./withCounter";
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

export default UpdatedComponent(HoverCounter, 20);
