import React from "react";
import "./Style.scss";
import Search from "../Search";

function SearchWrapper(props) {
  return (
    <article className="search-wrapper">
      <div className="container">
        <h1>Kickstarter Projects</h1>
        <Search
          className="search"
          setData={props.setData}
          setSearch={props.setSearch}
        />
      </div>
    </article>
  );
}

export default SearchWrapper;
