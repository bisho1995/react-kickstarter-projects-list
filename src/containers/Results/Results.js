import React, { Component } from "react";
import { connect } from "react-redux";
import ThinResult from "../../components/Results";
import { SET_SEARCH } from "../../actions/";

class Result extends Component {
  render() {
    return (
      <div>
        {this.props.search.length > 0 ? (
          <ThinResult search={this.props.search} />
        ) : (
          <span />
        )}
      </div>
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
    setData: data => dispatch({ type: SET_SEARCH, payload: data })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
