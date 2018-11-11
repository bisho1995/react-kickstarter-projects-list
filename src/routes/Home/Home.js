import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { SET_DATA } from "../../actions";
import Spinner from "../../components/Spinner";
import CardsContainer from "../../components/CardsContainer";
import SearchWrapper from "../../components/SearchWrapper";

class HomePage extends Component {
  componentDidMount() {
    axios
      .get("http://starlord.hackerearth.com/kickstarter")
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
        <SearchWrapper />
        {this.props.data.length === 0 ? (
          <Spinner />
        ) : (
          <CardsContainer data={this.props.data} />
        )}
      </div>
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
)(HomePage);
