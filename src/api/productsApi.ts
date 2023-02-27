import fetch from "isomorphic-unfetch";

import { ProductListResponse } from "@/types/Product.types";

export const fetchPosts = async (): Promise<ProductListResponse> => {
  const response = await fetch("http://localhost:5000/products");
  return await response.json();
};
