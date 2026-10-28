import { cn } from "@/utils/cn";

import styles from "./Divider.module.scss";

import type { DividerProps } from "./Divider.types";

export const Divider = ({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) => {
  return (
    <hr
      className={cn(styles.divider, styles[`divider--${orientation}`], className)}
      {...props}
    />
  );
};