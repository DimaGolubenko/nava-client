import { FC, HTMLAttributes, PropsWithChildren } from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

type Color = "primary" | "secondary";
type Variant = "text" | "contained" | "outlined";

interface ButtonProps extends PropsWithChildren {
  color?: Color;
  variant?: Variant;
  link?: boolean;
  block?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  color = "primary",
  variant = "text",
  link,
  block = false,
  className,
}) => {
  const buttonClass = cx(styles.button, className, {
    [styles.link]: link,
    [styles.secondary]: color === "secondary",
    [styles.fullWidth]: block,
  });

  return <button className={buttonClass}>{children}</button>;
};

export default Button;
