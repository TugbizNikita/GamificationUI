import { combineReducers } from "redux";
import Types from "../Types";
import Auth from "./Auth";

const appReducer = combineReducers({
  Auth,
});

const rootReducer = (state, action) => {
  if (action.type == Types.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
