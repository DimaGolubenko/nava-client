import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MiniCart.module.scss";

import { CartProduct } from "@/types/Cart.types";
import MiniCartCard from "./MiniCartCard";
import Sidebar from "@/ui/Sidebar";
import Button from "@/ui/Button/Button";
import { RootState } from "@/store/rootReducer";
import { toggleMiniCartVisibility } from "@/store/ui/uiSlice";

// Temporary data
const products: CartProduct[] = [
  {
    id: 1,
    title: "Біла блузка з пишними рукавами",
    cover: "/images/blouse-1-1.jpeg",
    price: 1350,
  },
  {
    id: 2,
    title: "Широкі брюки бежево-коричневі",
    cover: "/images/bryuki-1-1.jpeg",
    price: 1900,
  },
  {
    id: 3,
    title: "Чорна тепла спідниця зі складками",
    cover: "/images/skirt-1-1.jpeg",
    price: 1700,
  },
];
const count = products.length;

// Temporary helper func
const subtotal = products.reduce((total, current) => {
  return total + current.price;
}, 0);

const MiniCart = () => {
  const isOpened = useSelector((state: RootState) => state.ui.isMiniCartOpened);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleMiniCartVisibility());
  };

  if (!isOpened) {
    return null;
  }

  return (
    <Sidebar title={`Корзина (${count})`} onClose={handleClose}>
      <div className={styles.miniCart}>
        <PerfectScrollbar className={styles.productList}>
          {products?.map((product) => (
            <MiniCartCard key={product.id} data={product} />
          ))}
        </PerfectScrollbar>
        <div className="pt-4 border-t border-t-whisper">
          <div className="flex justify-between mb-5 font-medium">
            <span className="uppercase">Загальна вартість</span>
            <span>{subtotal} грн</span>
          </div>
          <Button className="mb-5" color="secondary" block>
            Переглянути корзину
          </Button>
          <Button block>Оформити замовлення</Button>
        </div>
      </div>
    </Sidebar>
  );
};

export default MiniCart;
