import { combineReducers } from "@reduxjs/toolkit";

import uiReducer from "@/store/ui/uiSlice";
import { productsReducer } from "@/modules/catalog";

export const rootReducer = combineReducers({
  ui: uiReducer,
  products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
