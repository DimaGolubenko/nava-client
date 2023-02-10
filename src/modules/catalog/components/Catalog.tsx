import styles from "./Catalog.module.scss";

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <div className="container mx-auto">
        <header className="max-h-6 flex items-center justify-between">
          <div>Breadcrumbs</div>
          <div>Filters</div>
        </header>
        <div>Каталог товарів</div>
      </div>
    </div>
  );
};

export default Catalog;
