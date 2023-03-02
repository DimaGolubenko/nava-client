import { CategoryInterface } from "./Categoty.types";

export interface ProductInterface {
  id: number;
  code: string;
  price: number;
  promoPrice: number | null;
  primaryImage: string;
  images: string[];
  isActive: boolean;
  likes: number;
  stock: number | null;
  category: CategoryInterface;
}

export type ProductListResponse = ProductInterface[];
