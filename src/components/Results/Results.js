import React from "react";
import "./Results.scss";

function Result(props) {
  return (
    <article className="container center-align">
      Showing results for <b>{props.search}</b>
    </article>
  );
}

export default Result;
