import clsx from "clsx";

import styles from "./Spinner.module.scss";

import type { SpinnerProps } from "./Spinner.types";

export const Spinner = ({
  size = "md",
  className,
  ...props
}: SpinnerProps) => {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={clsx(
        styles.spinner,
        styles[size],
        className
      )}
      {...props}
    />
  );
};