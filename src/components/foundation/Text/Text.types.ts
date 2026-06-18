import type { HTMLAttributes, ReactNode } from "react";

export type TextSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: TextSize;
  className?: string;
}