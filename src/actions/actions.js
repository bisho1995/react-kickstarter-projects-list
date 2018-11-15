import { createActions } from "redux-actions";
const { setData, setSearch } = createActions({
  SET_DATA: data => data,
  SET_SEARCH: search => search
});
const SET_DATA = "SET_DATA";
const SET_SEARCH = "SET_SEARCH";
export { SET_DATA, SET_SEARCH, setData, setSearch };
export default null;
