import clsx from "clsx";

import styles from "./Flex.module.scss";

import type { FlexProps } from "./Flex.types";

export const Flex = ({
  children,
  justify = "start",
  align = "stretch",
  className,
}: FlexProps) => {
  return (
    <div
      className={clsx(
        styles.flex,
        styles[`justify-${justify}`],
        styles[`align-${align}`],
        className
      )}
    >
      {children}
    </div>
  );
};