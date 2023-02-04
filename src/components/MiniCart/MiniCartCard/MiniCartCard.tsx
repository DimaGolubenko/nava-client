import { CartProduct } from "@/types/Cart.types";
import Image from "next/image";
import { FC } from "react";
import MiniCardRemoveBtn from "./MiniCardRemoveBtn";

interface MiniCartCardProps {
  data: CartProduct;
}

const MiniCartCard: FC<MiniCartCardProps> = ({ data }) => {
  const { title, cover, price } = data;
  return (
    <div className="flex py-5 first:pt-0 border-t first:border-t-0 border-whisper">
      <div className="max-w-[138px]">
        <Image width="200" height="200" quality="90" src={cover} alt={title} />
      </div>
      <div className="relative ml-5 flex flex-col justify-between">
        <h3 className="pr-3">{title}</h3>
        <p className="text-xl">{price} грн</p>
        <MiniCardRemoveBtn />
      </div>
    </div>
  );
};

export default MiniCartCard;
