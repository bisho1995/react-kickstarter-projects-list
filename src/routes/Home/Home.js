import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Filter from "../../containers/Filters";
import Result from "../../containers/Results";
import SearchContainer from "../../containers/SearchContainer";
import { SET_DATA } from "../../actions";
import SpinnerWrapper from "../../components/SpinnerWrapper";
import CardsContainer from "../../components/CardsContainer";
import "./Home.scss";

// const url = "http://starlord.hackerearth.com/kickstarter"

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
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <SearchContainer />
        <Filter />
        <Result />
        {this.props.data.length === 0 && this.props.search.length === 0 ? (
          <SpinnerWrapper />
        ) : (
          <CardsContainer data={this.props.data} />
        )}
      </div>
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
    setData: data => dispatch({ type: SET_DATA, payload: data })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
