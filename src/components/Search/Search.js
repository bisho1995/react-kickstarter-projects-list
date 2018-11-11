import React from "react";
import "./Style.css";

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
  onKeyPress(e) {
    if (e.key === "Enter") {
      this.getSearchedData();
    }
  }

  getSearchedData(searchKey) {
    const data = localStorage.getItem("projects");
    let projects = JSON.parse(data);
    projects = projects.filter(project => project.includes(searchKey));
    console.log(projects);
  }
  render() {
    return (
      <input
        type="text"
        placeholder="Enter the movie name here"
        className="search"
        value={this.state.search}
        onChange={this.onChange.bind(this)}
        onKeyPress={this.onKeyPress.bind(this)}
      />
    );
  }
}

export default Search;
