import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store/rootReducer";
import {
  changeSortingValue,
  fetchProductsAsync,
  ProductsSortingKey,
  productsSortingValues,
} from "@/modules/catalog/store/productsSlice";

const ProductsSorting = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const sortedBy = useSelector((state: RootState) => state.products.sortedBy);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitialized) {
      const param = productsSortingValues.find(
        (item) => item.key === sortedBy
      )?.urlParam;
      dispatch(fetchProductsAsync(param));
    }
  }, [sortedBy]);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setIsInitialized(true);
    dispatch(changeSortingValue(e.target.value as ProductsSortingKey));
  };

  return (
    <select className="pb-1 border-b-2 border-primary" onChange={handleSelect}>
      {productsSortingValues?.map((sortItem) => (
        <option value={sortItem.key} key={sortItem.key}>
          {sortItem.title}
        </option>
      ))}
    </select>
  );
};

export default ProductsSorting;
