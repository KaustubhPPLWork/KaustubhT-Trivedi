import { combineReducers } from "redux";
import timer from "./timerReducer";
import lapReducer from "./lapsReducer";
const rootReducer = combineReducers({
  time: timer,
  laps: lapReducer,
});

export default rootReducer;
