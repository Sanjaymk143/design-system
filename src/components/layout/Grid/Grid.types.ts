import type { ReactNode } from "react";

export interface GridProps {
  children?: ReactNode;

  columns?: number;

  className?: string;
}