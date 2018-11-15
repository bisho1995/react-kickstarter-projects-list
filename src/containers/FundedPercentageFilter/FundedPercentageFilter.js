import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
import { setData } from "../../actions";
import "./FundedPercentageFilter.scss";

class FundedPercentageFilter extends Component {
  sortProjectsInAscendingOrderFunded() {
    let sorted = [...this.props.data].sort((a, b) => {
      if (a["percentage.funded"] < b["percentage.funded"]) return -1;
      if (a["percentage.funded"] > b["percentage.funded"]) return 1;
      return 0;
    });
    this.props.setData(sorted);
  }
  sortProjectsInDescendingOrderFunded() {
    let sorted = [...this.props.data].sort((a, b) => {
      if (a["percentage.funded"] < b["percentage.funded"]) return 1;
      if (a["percentage.funded"] > b["percentage.funded"]) return -1;
      return 0;
    });
    this.props.setData(sorted);
  }
  render() {
    return (
      <span>
        Funded{" "}
        <Icon
          className="pointer-cursor"
          onClick={this.sortProjectsInAscendingOrderFunded.bind(this)}
        >
          arrow_upward
        </Icon>
        <Icon
          className="pointer-cursor"
          onClick={this.sortProjectsInDescendingOrderFunded.bind(this)}
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
    setData: data => dispatch(setData(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FundedPercentageFilter);
