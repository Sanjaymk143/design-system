import { cn } from "@/utils/cn";

import styles from "./Grid.module.scss";

import type { GridProps } from "./Grid.types";

export const Grid = ({
  children,
  columns = 2,
  className,
  ...props
}: GridProps) => {
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
      className={cn(styles.grid, className)}
      {...props}
    >
      {children}
    </div>
  );
};