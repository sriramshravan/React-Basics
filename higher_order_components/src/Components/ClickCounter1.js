import React, { Component } from "react";

class ClickCounter1 extends Component {

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
        <button onClick={this.incrementCount}>
         Clickted {counter} Times
        </button>
      </div>
    );
  }
}

export default ClickCounter1;
