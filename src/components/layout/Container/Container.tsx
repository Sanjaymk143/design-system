import clsx from "clsx";

import styles from "./Container.module.scss";

import type { ContainerProps } from "./Container.types";

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        styles.container,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};