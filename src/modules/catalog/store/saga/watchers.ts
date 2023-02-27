import { all, call, takeEvery } from "redux-saga/effects";

import { fetchProductsAsync } from "../productsSlice";
import { fetchProducts } from "./workers/fetchProducts";

export function* watchFetchProducts() {
  yield takeEvery(fetchProductsAsync.type, fetchProducts);
}

export function* watchProducts() {
  yield all([call(watchFetchProducts)]);
}
