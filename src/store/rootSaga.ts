// Core
import { all, call } from "redux-saga/effects";

// Watchers
import { watchProducts } from "@/modules/catalog";

export function* rootSaga() {
  yield all([call(watchProducts)]);
}
