import clsx from "clsx";

import styles from "./Divider.module.scss";

import type { DividerProps } from "./Divider.types";

export const Divider = ({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) => {
  return (
    <hr
      className={clsx(
        styles.divider,
        styles[`divider--${orientation}`],
        className
      )}
      {...props}
    />
  );
};