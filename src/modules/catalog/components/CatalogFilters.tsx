import filtersIcon from "@/assets/images/icons/filters-icon.svg";
import Image from "next/image";

const CatalogFilters = () => {
  return (
    <>
      <button className="flex items-center gap-2">
        <Image src={filtersIcon} alt="Фільтри" />
        <span>Фільтри</span>
      </button>
    </>
  );
};

export default CatalogFilters;
