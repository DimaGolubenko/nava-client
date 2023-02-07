// Core
import Link from "next/link";
import styles from "./AppHeader.module.scss";

// Components
import AppNav from "./AppNav";
import AppButtons from "./AppButtons";

const AppHeader = () => {
  return (
    <header>
      <div className="container mx-auto h-20 flex justify-between items-center">
        <div>
          <Link className="uppercase text-2xl font-medium" href="/">
            nava
          </Link>
        </div>
        <AppNav />
        <AppButtons />
      </div>
    </header>
  );
};

export default AppHeader;
