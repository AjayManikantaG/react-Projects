import React from "react";

export default class Hello extends React.Component {
  constructor() {
    super()
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  }

  render() {
  return (
    <div>
     <input type="text" ref={this.inputRef}/>
     <button onClick={this.clickHandler}>Click me Plz</button>
    </div>
    );
  }
};
