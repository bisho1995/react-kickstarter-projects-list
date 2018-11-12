import React from "react";
import Spinner from "../Spinner";
import "./SpinnerWrapper.scss";
function SpinnerWrapper(props) {
  return (
    <div className="container spinner-wrapper">
      <Spinner className="spinner" />
    </div>
  );
}

export default SpinnerWrapper;
