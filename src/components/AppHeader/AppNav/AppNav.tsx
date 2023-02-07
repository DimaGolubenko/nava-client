import Link from "next/link";
import cx from "classnames";
import styles from "./AppNav.module.scss";
import Image from "next/image";

import hotIcon from "@/assets/images/icons/hot-icon.svg";

const hotLinkClass = cx([styles.link], [styles.hot]);

const AppNav = () => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link className={styles.link} href="/catalog">
            Каталог
          </Link>
        </li>
        <li>
          <Link className={hotLinkClass} href="/promo">
            <Image src={hotIcon} alt="Гарячі пропозиції" />
            Гарячі пропозиції
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/community">
            Програма лояльності
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
