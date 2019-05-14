import React, { Component } from "react";

class HoverCounter1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          counter: 0
        };
      }
      incrementCount = () => {
        this.setState(prevState => {
          return { counter: prevState.counter + 1  };
        });
      };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <button onMouseOver={this.incrementCount}>
         Clickted {counter} Times
        </button>
      </div>
    );
  }
}

export default HoverCounter1;
