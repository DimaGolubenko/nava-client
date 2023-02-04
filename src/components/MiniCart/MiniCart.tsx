import PerfectScrollbar from "react-perfect-scrollbar";
import styles from "./MiniCart.module.scss";

import { CartProduct } from "@/types/Cart.types";
import Sidebar from "@/ui/Sidebar";
import MiniCartCard from "./MiniCartCard";
import Button from "@/ui/Button/Button";

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
  return (
    <Sidebar title={`Корзина (${count})`}>
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
