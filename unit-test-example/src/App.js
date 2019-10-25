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
        <div className="text first">{this.state.firstName}</div>
        <div className="text last">{this.state.lastName}</div>
      </div>
    );
  }
}

export default App;