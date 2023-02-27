import { productsApi } from "@/api";
import { ProductListResponse } from "@/types/Product.types";
import { call, put } from "redux-saga/effects";
import { fillProducts } from "../../productsSlice";

export function* fetchProducts() {
  try {
    const products: ProductListResponse = yield call(productsApi.fetchPosts);

    yield put(fillProducts(products));
  } catch (error) {
    console.log("error", error);
  }
}
