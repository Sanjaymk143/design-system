import clsx from "clsx";

import styles from "./Stack.module.scss";

import type { StackProps } from "./Stack.types";

export const Stack = ({
  children,
  gap = "md",
  className,
  ...props
}: StackProps) => {
  return (
    <div
      className={clsx(
        styles.stack,
        styles[`gap-${gap}`],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};