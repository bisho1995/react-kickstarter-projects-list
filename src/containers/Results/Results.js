import React, { Component } from "react";
import { connect } from "react-redux";
import ThinResult from "../../components/Results";
import { setSearch } from "../../actions/";
import "./Results.scss";
class Result extends Component {
  render() {
    return (
      <article>
        {this.props.search.length > 0 ? (
          <ThinResult search={this.props.search} />
        ) : (
          <span />
        )}
      </article>
    );
  }
}

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setData: data => dispatch(setSearch(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
