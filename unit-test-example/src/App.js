import React, { Component } from "react";
import "./App.css";
import Data from "./data.json";
import Hello from "./Hello";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    this.setState({ people: Data });
  }

  render() {
    return (
      <div className="App">
        <div className="text first">{this.state.firstName}</div>
        <div className="text last">{this.state.lastName}</div>
        <Hello />
      </div>
    );
  }
}

export default App;
