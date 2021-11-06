import { combineReducers } from "redux";
import robotReducer from "./robotReducer";

const rootReducer = combineReducers({
  robot: robotReducer,
});

export default rootReducer;
