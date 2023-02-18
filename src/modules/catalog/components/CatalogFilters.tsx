import filtersIcon from "@/assets/images/icons/filters-icon.svg";
import Image from "next/image";

const CatalogFilters = () => {
  return (
    <div className="flex gap-5">
      <select className="pb-1 border-b-2 border-primary">
        <option value="rank">За рейтингом</option>
        <option value="cheap">Від дешевих до дорогих</option>
        <option value="expensive">Від дорогих до дешевих</option>
        <option value="novelty">Новинки</option>
      </select>
      <span className="w-0.5 bg-whisper"></span>
      <button className="flex items-center gap-2">
        <Image src={filtersIcon} alt="Фільтри" />
        <span>Фільтри</span>
      </button>
    </div>
  );
};

export default CatalogFilters;
