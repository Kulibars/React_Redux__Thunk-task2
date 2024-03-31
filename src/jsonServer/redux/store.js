import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { tasksReducer, sortTaskReducer, searchTaskReducer } from "./reducers";
const reducer = combineReducers({
  tasksListState: tasksReducer,
  sortTaskState: sortTaskReducer,
  searchTaskState: searchTaskReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
