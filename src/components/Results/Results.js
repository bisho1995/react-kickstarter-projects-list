import React from "react";
import "./Results.css";

function Result(props) {
  return (
    <div className="container center-align">
      Showing results for <b>{props.search}</b>
    </div>
  );
}

export default Result;
