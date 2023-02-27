import { Breadcrumb } from "@/types/Breadcrumb.types";
import Breadcrumbs from "@/ui/Breadcrumbs";
import styles from "./Catalog.module.scss";

import CatalogFilters from "./CatalogFilters";
import ProductList from "./ProductList";

const breadcrumbs: Breadcrumb[] = [
  {
    path: "/",
    title: "Головна",
  },
  {
    path: "/catalog",
    title: "Каталог",
  },
];

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <div className="container mx-auto">
        <header className="max-h-6 flex items-center justify-between">
          <Breadcrumbs data={breadcrumbs} />
          <CatalogFilters />
        </header>
        <div>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
