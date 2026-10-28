import { cn } from "@/utils/cn";

import styles from "./Card.module.scss";

import type { CardProps } from "./Card.types";

export const Card = ({
  children,
  elevated = false,
  bordered = true,
  padding = "md",
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        styles.card,
        bordered && styles["card--bordered"],
        elevated && styles["card--elevated"],
        styles[`padding-${padding}`],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};