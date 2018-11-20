function getSearchedData(searchKey) {
    const data = localStorage.getItem("projects");
    let projects = JSON.parse(data);
    projects = projects.filter(project =>
      project.title.toLowerCase().includes(searchKey)
    );
    return projects;
  }

  export default null;
  export {getSearchedData}