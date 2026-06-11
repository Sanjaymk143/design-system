import clsx from "clsx";
import type { ElementType } from "react";

import styles from "./Heading.module.scss";

import type { HeadingProps } from "./Heading.types";

export const Heading = ({
  children,
  level = 1,
  className,
}: HeadingProps) => {
  const Tag = `h${level}` as ElementType;

  return (
    <Tag
      className={clsx(
        styles.heading,
        styles[`h${level}`],
        className
      )}
    >
      {children}
    </Tag>
  );
};