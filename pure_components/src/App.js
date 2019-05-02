import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Temp = props => {
  console.log("render-Temp");
  return <div>{props.value}</div>;
};

class App extends React.PureComponent {
  state = {
    val: 1
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        val: this.state.val + 1
      });
    }, 2000);
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    console.log("next state", nextState);
    console.log("this.state", this.state);
    if (this.state.val === nextState.val) return false;
    else return true;
  }*/

  render() {
    console.log("render-App");
    return (
      <div className="App">
        <Temp value={this.state.val} />
      </div>
    );
  }
}

export default App;
