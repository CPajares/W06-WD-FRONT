import { combineReducers } from "redux";
import robotReducer from "./robotReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  robots: robotReducer,
  user: userReducer,
});

export default rootReducer;
