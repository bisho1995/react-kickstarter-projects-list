import React from "react";
import "./Style.scss";

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
      this.props.setSearch(this.state.search);
      this.props.setData(this.getSearchedData(this.state.search));
    }
  }

  getSearchedData(searchKey) {
    const data = localStorage.getItem("projects");
    let projects = JSON.parse(data);
    projects = projects.filter(project =>
      project.title.toLowerCase().includes(searchKey)
    );
    return projects;
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
