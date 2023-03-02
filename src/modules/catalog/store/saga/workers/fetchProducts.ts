import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";

import { productsApi } from "@/api";
import { ProductListResponse } from "@/types/Product.types";
import {
  fillProducts,
  productsSortingValues,
} from "@/modules/catalog/store/productsSlice";

export function* fetchProducts(action: PayloadAction<string | undefined>) {
  try {
    const params =
      action.payload ||
      productsSortingValues.find((item) => item.isPrimary)?.urlParam;
    const products: ProductListResponse = yield call(
      productsApi.fetchProducts,
      params
    );
    yield put(fillProducts(products));
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
