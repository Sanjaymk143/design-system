import { cn } from "@/utils/cn";

import styles from "./Container.module.scss";

import type { ContainerProps } from "./Container.types";

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn(styles.container, className)}
      {...props}
    >
      {children}
    </div>
  );
};