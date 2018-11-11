import React from "react";
import "./Style.css";
import Search from "../Search";

function SearchWrapper(props) {
  return (
    <div className="search-wrapper">
      <div className="container">
        <h1>Kickstarter Projects</h1>
        <Search
          className="search"
          setData={props.setData}
          setSearch={props.setSearch}
        />
      </div>
    </div>
  );
}

export default SearchWrapper;
