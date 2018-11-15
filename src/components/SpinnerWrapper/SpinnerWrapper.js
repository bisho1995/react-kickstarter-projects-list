import React from "react";
import Spinner from "../Spinner";
import "./SpinnerWrapper.scss";
function SpinnerWrapper(props) {
  return (
    <article className="container spinner-wrapper">
      <Spinner className="spinner" />
    </article>
  );
}

export default SpinnerWrapper;
