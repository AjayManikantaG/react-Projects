import React from "react";

export default props => {
  return props.names.map(name => <h1>Hello {name}!</h1>);
};
