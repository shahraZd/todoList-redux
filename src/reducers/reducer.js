import {
  ADD_LIST,
  REMOVE_LIST,
  EDIT_LIST,
  CHECK_LIST,
} from "../contants/actionType";

const initState = [];

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return state.concat({ todo: action.payload, checked: false });

    case REMOVE_LIST:
      return state.filter((el, i) => i !== action.payload);

    case EDIT_LIST:
      return state.map((el, i) => {
        if (i === action.index) {
          return { ...el, todo: action.payload };
        } else return el;
      });

    case CHECK_LIST:
      return state.map((el, i) => {
        if (i === action.index) {
          return { ...el, checked: !el.checked };
        } else return el;
      });
    default:
      return state;
  }
};
export default listReducer;
