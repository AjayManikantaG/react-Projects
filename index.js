import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["React", "Angular", "Vue"],
      isLogged: false
    };
  }

  render() {
    console.log(this.state.isLogged);
    if (this.state.isLogged) {
      return (
        <div>
          <Hello names={this.state.names} />
          <p>Start editing to see some magic in Guest Mode:)</p>
        </div>
      );
    } else {
      return (
        <div>
          <Hello names={this.state.names} />
          <p>Start editing to see some magic in Beast Mode :)</p>
        </div>
      );
    }
  }
}

render(<App />, document.getElementById("root"));
