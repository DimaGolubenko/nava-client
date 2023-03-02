import fetch from "isomorphic-unfetch";

import { ProductListResponse } from "@/types/Product.types";
import { apiConfig } from "./config";

export const fetchProducts = async (
  params: string | null = null
): Promise<ProductListResponse> => {
  const url = `${apiConfig.API_URL}/products${params ? "?" + params : ""}`;
  const response = await fetch(url);
  return await response.json();
};
