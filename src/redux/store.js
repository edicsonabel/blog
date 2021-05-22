import { createStore, combineReducers } from "redux";
import pageActive from "./reducers/pageActive";

const reducers = combineReducers({
  pageActive,
});

const store = createStore(reducers);

export default store;
