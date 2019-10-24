import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "firstName" : "Brian",
      "lastName" : "Katchmar"
    };
  }
  
  render() {
    return (
      <div className="App">
        <div>{this.state.firstName}</div>
        <div>{this.state.lastName}</div>
      </div>
    );
  }
}

export default App;