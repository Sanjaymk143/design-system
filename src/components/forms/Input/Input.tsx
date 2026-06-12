import { forwardRef } from "react";

import { cn } from "@/utils/cn";

import styles from "./Input.module.scss";

import type { InputProps } from "./Input.types";

export const Input = forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    {
      error = false,
      fullWidth = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={cn(
          styles.input,
          error && styles["input--error"],
          fullWidth &&
            styles["input--full-width"],
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";