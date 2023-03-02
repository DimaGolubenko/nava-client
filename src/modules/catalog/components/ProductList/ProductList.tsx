import { useSelector } from "react-redux";

import { selectProductList } from "@/modules/catalog/store/productsSlice";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = useSelector(selectProductList);

  return (
    <div className="flex flex-wrap">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
