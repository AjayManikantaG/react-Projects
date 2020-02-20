import React from "react";

export default class Hello extends React.Component {
  constructor() {
    super()
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    this.inputRef.current.focus()
    console.log(this.inputRef);
  }

  render() {
  return (
    <div>
     <input type="text" ref={this.inputRef}/>
    </div>
    );
  }
};
