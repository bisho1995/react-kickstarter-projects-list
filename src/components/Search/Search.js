import qs from 'query-string'
import {createBrowserHistory} from 'history'
import React from "react";
import {getSearchedData} from '../../utils/helper'
import "./Style.scss";

const history = createBrowserHistory();
const location = history.location;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  onChange(e) {
    this.setState({ search: e.target.value });
  }
  componentDidMount() {
  }
  onKeyPress(e) {
    if (e.key === "Enter") {
      this.props.setSearch(this.state.search);
      this.props.setData(getSearchedData(this.state.search));
      this.addSearchQueryParam(this.state.search)
    }
  }

  addSearchQueryParam(search) {
    history.push({pathname: location.pathname,
    search: `?${qs.stringify({search})}`})
  }
  render() {
    return (
      <article>
        <input
          type="text"
          placeholder="Enter the project name here"
          className="search"
          value={this.state.search}
          onChange={this.onChange.bind(this)}
          onKeyPress={this.onKeyPress.bind(this)}
        />
      </article>
    );
  }
}

export default Search;
