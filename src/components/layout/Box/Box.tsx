import { cn } from "@/utils/cn";

import styles from "./Box.module.scss";

import type { BoxProps } from "./Box.types";

export const Box = ({
  children,
  className,
  ...props
}: BoxProps) => {
  return (
    <div
      className={cn(styles.box, className)}
      {...props}
    >
      {children}
    </div>
  );
};