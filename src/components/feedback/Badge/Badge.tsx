import clsx from "clsx";

import styles from "./Badge.module.scss";

import type { BadgeProps } from "./Badge.types";

export const Badge = ({
  children,
  variant = "default",
  className,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={clsx(
        styles.badge,
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};