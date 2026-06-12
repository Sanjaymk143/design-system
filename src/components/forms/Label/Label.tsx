import { cn } from "@/utils/cn";

import styles from "./Label.module.scss";

import type { LabelProps } from "./Label.types";

export const Label = ({
  children,
  required = false,
  disabled = false,
  className,
  ...props
}: LabelProps) => {
  return (
    <label
      className={cn(
        styles.label,
        disabled && styles["label--disabled"],
        className
      )}
      {...props}
    >
      {children}

      {required && (
        <span
          className={styles.label__required}
          aria-hidden="true"
        >
          *
        </span>
      )}
    </label>
  );
};