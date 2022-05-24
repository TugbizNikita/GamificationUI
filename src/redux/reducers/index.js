import { combineReducers } from "redux";
import Types from "../Types";

const appReducer = combineReducers({
  // Auth,
});

const rootReducer = (state, action) => {
  if (action.type == Types.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
