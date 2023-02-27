import { RootState } from "@/store/rootReducer";
import { ProductInterface, ProductListResponse } from "@/types/Product.types";
import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
  list: ProductInterface[];
  totalCount: number | null;
  page: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  list: [],
  totalCount: null,
  page: 1,
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fillProducts(state, action: PayloadAction<ProductListResponse>) {
      const { data, totalCount, page } = action.payload;
      state.list = data;
      state.totalCount = totalCount;
      state.page = page;
    },
  },
});

export const fetchProductsAsync = createAction("products/fetchProductsAsync");
export const { fillProducts } = productsSlice.actions;

export const selectProductList = (state: RootState) => state.products.list;
export const selectProductsCount = (state: RootState) =>
  state.products.totalCount;

export default productsSlice.reducer;
