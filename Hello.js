import React from "react";

export default props => {
  console.log(props);
  return (
    <h1>
      Hello {props.name} with id {props.id}!
    </h1>
  );
};
