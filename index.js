import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      id: 1
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} id={this.state.id} />
        <p>Start editing to see some magic :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
