import { cn } from "@/utils/cn";

import styles from "./Flex.module.scss";

import type { FlexProps } from "./Flex.types";

export const Flex = ({
  children,
  justify = "start",
  align = "stretch",
  className,
  ...props
}: FlexProps) => {
  return (
    <div
      className={cn(
        styles.flex,
        styles[`justify-${justify}`],
        styles[`align-${align}`],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};