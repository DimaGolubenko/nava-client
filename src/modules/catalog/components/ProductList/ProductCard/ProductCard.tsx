import Image from "next/image";
import Link from "next/link";

import { ProductInterface } from "@/types/Product.types";
import likesImg from "@/assets/images/icons/heart-icon.svg";

interface ProductCardProps {
  product: ProductInterface;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const priceJSX = product.promoPrice ? (
    <div className="flex gap-2 font-bold">
      <h2 className="text-secondary line-through">{product.promoPrice} грн</h2>
      <h2 className="text-red-600">{product.price} грн</h2>
    </div>
  ) : (
    <h2 className="font-bold">{product.price} грн</h2>
  );

  return (
    <div className="md:basis-1/2 lg:basis-1/4 p-1 mb-5">
      <div className="w-full h-full flex items-end">
        <Link href={`/${product.code}`}>
          <Image
            src={product.primaryImage}
            alt={product.code}
            width={700}
            height={900}
            quality={90}
          />
        </Link>
      </div>
      <div className="flex justify-between items-center p-2">
        {priceJSX}
        <button>
          <Image src={likesImg} width={16} height={14} alt="likes" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
