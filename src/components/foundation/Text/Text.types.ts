import type { ReactNode } from "react";

export type TextSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export interface TextProps {
  children: ReactNode;
  size?: TextSize;
  className?: string;
}