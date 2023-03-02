import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@/store/rootReducer";
import { ProductInterface, ProductListResponse } from "@/types/Product.types";

export type ProductsSortingKey = "rating" | "cheap" | "expensive" | "novelty";

export interface ProductsSortingValue {
  key: ProductsSortingKey;
  title: string;
  urlParam: string;
  isPrimary?: boolean;
}

interface ProductsState {
  list: ProductInterface[];
  isLoading: boolean;
  error: string | null;
  sortedBy: ProductsSortingKey;
}

export const productsSortingValues: ProductsSortingValue[] = [
  {
    key: "rating",
    title: "За рейтингом",
    urlParam: "_sort=likes&_order=DESC",
    isPrimary: true,
  },
  {
    key: "cheap",
    title: "Від дешевих до дорогих",
    urlParam: "_sort=price&_order=ASC",
  },
  {
    key: "expensive",
    title: "Від дорогих до дешевих",
    urlParam: "_sort=price&_order=DESC",
  },
  {
    key: "novelty",
    title: "Новинки",
    urlParam: "",
  },
];

const initialState: ProductsState = {
  list: [],
  isLoading: false,
  error: null,
  sortedBy: "rating",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fillProducts(state, action: PayloadAction<ProductListResponse>) {
      state.list = action.payload;
    },
    changeSortingValue(state, action: PayloadAction<ProductsSortingKey>) {
      state.sortedBy = action.payload;
    },
  },
});

export const fetchProductsAsync = createAction<string | undefined>(
  "products/fetchProductsAsync"
);
export const { fillProducts, changeSortingValue } = productsSlice.actions;

export const selectProductList = (state: RootState) => state.products.list;

export default productsSlice.reducer;
