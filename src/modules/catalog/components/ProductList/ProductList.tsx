// import styles from "./ProductList.module.scss";

import { useSelector } from "react-redux";
import {
  selectProductList,
  selectProductsCount,
} from "../../store/productsSlice";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = useSelector(selectProductList);
  const count = useSelector(selectProductsCount);

  return (
    <div className="flex flex-wrap">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
