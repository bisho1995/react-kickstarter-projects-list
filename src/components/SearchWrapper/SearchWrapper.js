import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./Style.scss";
import Search from "../Search";

function SearchWrapper(props) {
  return (
    <div className="search-wrapper">
      <div className="container">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <h1>Kickstarter Projects</h1>
          <Search
            className="search"
            setData={props.setData}
            setSearch={props.setSearch}
          />
        </ReactCSSTransitionGroup>
      </div>
    </div>
  );
}

export default SearchWrapper;
