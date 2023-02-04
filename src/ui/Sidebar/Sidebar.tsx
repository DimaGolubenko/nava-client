import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import cx from "classnames";
import Image from "next/image";
import { createPortal } from "react-dom";
import styles from "./Sidebar.module.scss";

import closeIcon from "@/assets/images/icons/close-icon.svg";

type SidebarLocations = "left" | "right";

interface SidebarProps extends PropsWithChildren {
  location?: SidebarLocations;
  title: string;
}

const Sidebar: FC<SidebarProps> = ({ children, location = "right", title }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  const sidebarClass = cx(styles.sidebar, {
    [styles.right]: location === "right",
    [styles.left]: location === "left",
  });

  return mounted && ref.current
    ? createPortal(
        <div className={sidebarClass}>
          <header className={styles.header}>
            <h3>{title}</h3>
            <button>
              <Image src={closeIcon} alt={title} />
            </button>
          </header>
          <main className={styles.body}>{children}</main>
        </div>,
        ref.current
      )
    : null;
};

export default Sidebar;
