import React, { Component } from "react";
import FundedPercentageFilter from "../FundedPercentageFilter";
import EndDateFilter from "../EndDateFilter";
import "./Filter.scss";
import { Icon } from "@material-ui/core";

class Filter extends Component {
  render() {
    return (
      <article className="container-fluid center-align filter-container">
        <b>
          <Icon>settings_input_composite</Icon>{" "}
        </b>
        &nbsp;&nbsp;
        {"  "}
        <FundedPercentageFilter />
        {"  "}
        <EndDateFilter />
      </article>
    );
  }
}

export default Filter;
