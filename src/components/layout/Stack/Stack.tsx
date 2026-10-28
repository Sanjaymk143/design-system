import { cn } from "@/utils/cn";

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
      className={cn(styles.stack, styles[`gap-${gap}`], className)}
      {...props}
    >
      {children}
    </div>
  );
};