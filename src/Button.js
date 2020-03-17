import React from "react";

export const Button = props => {
  return (
    <button className="btn btn-success" onClick={props.onClick}>
      Next Quote!
    </button>
  );
};
