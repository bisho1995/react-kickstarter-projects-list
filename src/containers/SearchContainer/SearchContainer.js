import React, { Component } from "react";
import SearchWrapper from "../../components/SearchWrapper";
import { connect } from "react-redux";
import { setData, setSearch } from "../../actions";
import "./Style.scss";

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
    setData: data => dispatch(setData(data)),
    setSearch: data => dispatch(setSearch(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchContainer);
