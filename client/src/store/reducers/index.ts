import { combineReducers } from "redux";
import landing from "./landing.reducer";
import blog from "./blog.reducer";

const reducers = combineReducers({
  landing,
  blog
});

export default reducers;
