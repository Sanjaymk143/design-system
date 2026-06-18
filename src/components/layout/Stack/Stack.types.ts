import type { HTMLAttributes, ReactNode } from "react";

export type StackGap =
  | "sm"
  | "md"
  | "lg";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  gap?: StackGap;
  // className?: string;
}