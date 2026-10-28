import { cn } from "@/utils/cn";

import styles from "./Text.module.scss";

import type { TextProps } from "./Text.types";

export const Text = ({
  children,
  size = "md",
  className,
  ...props
}: TextProps) => {
  return (
    <p
      className={cn(styles.text, styles[size], className)}
      {...props}
    >
      {children}
    </p>
  );
};