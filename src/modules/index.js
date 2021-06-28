import { combineReducers } from "redux";
import loadingReducer from "./loading";
import errorReducer from "./error";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
});

export function* rootSaga() {
  yield all([

  ]);
}

export default rootReducer;
