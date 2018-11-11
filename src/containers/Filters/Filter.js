import React, { Component } from "react";
import FundedPercentageFilter from "../FundedPercentageFilter";
import EndDateFilter from "../EndDateFilter";
import "./Filter.css";
import { Icon } from "@material-ui/core";

class Filter extends Component {
  render() {
    return (
      <div className="container-fluid center-align filter-container">
        <b>
          <Icon>settings_input_composite</Icon>{" "}
        </b>
        &nbsp;&nbsp;
        {"  "}
        <FundedPercentageFilter />
        {"  "}
        <EndDateFilter />
      </div>
    );
  }
}

export default Filter;
