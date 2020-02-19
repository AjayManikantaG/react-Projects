import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ['React', 'Angular', 'Vue']
    };
  }

  render() {
    return (
      <div>
        <Hello names={this.state.names} />
        <p>Start editing to see some magic :)</p>
      </div>
    );
  } 
}

render(<App />, document.getElementById("root"));
