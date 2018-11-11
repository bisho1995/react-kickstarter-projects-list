import React from "react";
import "./Style.css";
import Search from "../Search";

function SearchWrapper() {
  return (
    <div className="search-wrapper">
      <div className="container">
        <h1>Search Wrapper</h1>
        <Search className="search" />
      </div>
    </div>
  );
}

export default SearchWrapper;
