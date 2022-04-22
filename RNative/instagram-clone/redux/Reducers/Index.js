import { combineReducers } from "redux";
import { user } from "./User";

const Reducers = combineReducers({
  userState: user,
});
export default Reducers;
