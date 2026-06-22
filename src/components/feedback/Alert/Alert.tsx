import clsx from "clsx";

import styles from "./Alert.module.scss";

import type { AlertProps } from "./Alert.types";

export const Alert = ({
  title,
  children,
  variant = "info",
  className,
  ...props
}: AlertProps) => {
  return (
    <div
      role="alert"
      className={clsx(
        styles.alert,
        styles[variant],
        className
      )}
      {...props}
    >
      {title && (
        <div className={styles.title}>
          {title}
        </div>
      )}

      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};