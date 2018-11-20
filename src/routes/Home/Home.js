import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {createBrowserHistory} from 'history'
import qs from 'query-string'
import {getSearchedData} from '../../utils/helper'
import Filter from "../../containers/Filters";
import Result from "../../containers/Results";
import SearchContainer from "../../containers/SearchContainer";
import { setData, setSearch } from "../../actions";
import SpinnerWrapper from "../../components/SpinnerWrapper";
import CardsContainer from "../../components/CardsContainer";
import "./Home.scss";

// const url = "http://starlord.hackerearth.com/kickstarter"
const history = createBrowserHistory()
const location = history.location

class HomePage extends Component {
  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/bisho1995/react-kickstarter-projects-list/master/kickstarter.json"
      )
      .then(data => data.data)
      .then(data => {
        this.props.setData(data);
        localStorage.setItem("projects", JSON.stringify(data));

        const queryString = qs.parse(location.search)
        if (queryString.search && queryString.search.length > 0) {
          console.log('here', queryString.search, getSearchedData(qs.queryString))
          this.props.setSearch(queryString.search)
          this.props.setData(getSearchedData(qs.queryString))
        }
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <article>
        <SearchContainer />
        <Filter />
        <Result />
        {this.props.data.length === 0 && this.props.search.length === 0 ? (
          <SpinnerWrapper />
        ) : (
          <CardsContainer data={this.props.data} />
        )}
      </article>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.data,
    search: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setData: data => dispatch(setData(data)),
    setSearch: data => dispatch(setSearch(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
