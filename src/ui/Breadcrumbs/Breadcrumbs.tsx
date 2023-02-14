import { Breadcrumb } from "@/types/Breadcrumb.types";
import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";

interface BreadcrumbsProps {
  data: Breadcrumb[];
}

const Breadcrumbs = ({ data: breadcrumbs }: BreadcrumbsProps) => {
  return (
    <div className="flex">
      {breadcrumbs.map(({ path, title }) =>
        path ? (
          <Link className={styles.item} href={path} key={title}>
            {title}
          </Link>
        ) : (
          <span className={styles.item} key={title}>
            {title}
          </span>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;
