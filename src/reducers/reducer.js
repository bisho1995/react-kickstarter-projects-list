import { SET_DATA, SET_SEARCH } from "../actions";
const initialState = {
  data: [],
  search: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default reducer;
