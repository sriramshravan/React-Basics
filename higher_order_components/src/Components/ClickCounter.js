import React, { Component } from "react";
import withCounter from "./withCounter";
class ClickCounter extends Component {
  render() {
    const { counter, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {" "}
          {this.props.name}Clickted {counter} Times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 5);
