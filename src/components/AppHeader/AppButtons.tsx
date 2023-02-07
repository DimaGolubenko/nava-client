// Core
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

// Icons
import searchIcon from "@/assets/images/icons/search-icon.svg";
import avatarIcon from "@/assets/images/icons/avatar-icon.svg";
import heartIcon from "@/assets/images/icons/heart-icon.svg";
import cartIcon from "@/assets/images/icons/cart-icon.svg";

// Store
import { toggleMiniCartVisibility } from "@/store/ui/uiSlice";

const AppButtons = () => {
  const dispatch = useDispatch();

  const onOpenMiniCart = () => {
    dispatch(toggleMiniCartVisibility());
  };

  return (
    <div className="flex gap-7">
      <button>
        <Image src={searchIcon} alt="Пошук" />
      </button>
      <button>
        <Image src={avatarIcon} alt="Авторизація" />
      </button>
      <button>
        <Link href="/favorites">
          <Image src={heartIcon} alt="Обрані" />
        </Link>
      </button>
      <button className="relative" onClick={onOpenMiniCart}>
        <Image src={cartIcon} alt="Корзина" />
        <span className="bg-brown w-5 h-5 rounded-full absolute bottom-1 left-2 flex items-center justify-center">
          <span className="text-xs text-white">3</span>
        </span>
      </button>
    </div>
  );
};

export default AppButtons;
