import type { ElementType } from "react";

import { cn } from "@/utils/cn";

import styles from "./Heading.module.scss";

import type { HeadingProps } from "./Heading.types";

export const Heading = ({
  children,
  level = 1,
  className,
  ...props
}: HeadingProps) => {
  const Tag = `h${level}` as ElementType;

  return (
    <Tag
      className={cn(styles.heading, styles[`h${level}`], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};