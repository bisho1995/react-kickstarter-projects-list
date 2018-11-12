import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
import { SET_DATA } from "../../actions";
import "./EndDateFilter.scss";

class EndDateFilter extends Component {
  sortProjectsInDescendingOrderEndDate() {
    let sorted = [...this.props.data].sort((a, b) => {
      if (new Date(a["end.time"]) < new Date(b["end.time"])) return -1;
      if (new Date(a["end.time"]) > new Date(b["end.time"])) return 1;
      return 0;
    });
    this.props.setData(sorted);
  }
  sortProjectsInAscendingOrderEndDate() {
    let sorted = [...this.props.data].sort((a, b) => {
      if (new Date(a["end.time"]) < new Date(b["end.time"])) return 1;
      if (new Date(a["end.time"]) > new Date(b["end.time"])) return -1;
      return 0;
    });
    this.props.setData(sorted);
  }
  render() {
    return (
      <span>
        End Date{" "}
        <Icon
          className="pointer-cursor"
          onClick={this.sortProjectsInAscendingOrderEndDate.bind(this)}
        >
          arrow_upward
        </Icon>
        <Icon
          className="pointer-cursor"
          onClick={this.sortProjectsInDescendingOrderEndDate.bind(this)}
        >
          arrow_downward
        </Icon>
      </span>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setData: data => dispatch({ type: SET_DATA, payload: data })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EndDateFilter);
