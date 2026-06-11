import type { ReactNode } from "react";

export type HeadingLevel =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6;

export interface HeadingProps {
  children: ReactNode;
  level?: HeadingLevel;
  className?: string;
}