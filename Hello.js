import React from "react";

export default props => {
  console.log(props.names);
  return props.names.map(name => <h1>Hello {name}!</h1>);
};
