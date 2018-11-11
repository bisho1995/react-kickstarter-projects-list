import React, { Component } from "react";
import SearchWrapper from "../../components/SearchWrapper";
import { connect } from "react-redux";
import { SET_DATA, SET_SEARCH } from "../../actions";
import "./Style.css";

class SearchContainer extends Component {
  render() {
    return (
      <div>
        <SearchWrapper
          setData={this.props.setData}
          setSearch={this.props.setSearch}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setData: data => dispatch({ type: SET_DATA, payload: data }),
    setSearch: data => dispatch({ type: SET_SEARCH, payload: data })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchContainer);
