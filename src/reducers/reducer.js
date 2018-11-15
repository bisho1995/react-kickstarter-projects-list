import { handleActions } from "redux-actions";
import { setData, setSearch } from "../actions";
const initialState = {
  data: [],
  search: ""
};

const reducer = handleActions(
  {
    [setSearch]: (state, { payload: search }) => {
      return { ...state, search };
    },
    [setData]: (state, { payload: data }) => {
      return { ...state, data };
    }
  },
  initialState
);

export default reducer;
