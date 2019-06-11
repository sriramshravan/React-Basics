import React from 'react';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'

class  App extends React.Component {
  constructor()
  {
    super();
    this.state ={
      name:"Yo Vamsi Krishna from parent"
    }
  }

  changeTitle(title)
  {
    this.setState({
      name:title
    })
  }
  render(){
  return (
    <div className="App">
      <Header  changeTitle={this.changeTitle.bind(this)} name = {this.state.name}>
      </Header>
      <Footer name={this.state.name}>
      </Footer>
    </div>
  );
}
}





export default App;
