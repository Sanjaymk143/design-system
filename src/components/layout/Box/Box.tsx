import clsx from "clsx";

import styles from "./Box.module.scss";

import type { BoxProps } from "./Box.types";

export const Box = ({
  children,
  className,
  ...props
}: BoxProps) => {
  return (
    <div
      className={clsx(
        styles.box,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};