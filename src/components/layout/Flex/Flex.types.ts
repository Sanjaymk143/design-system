import type { HTMLAttributes, ReactNode } from "react";

export type Justify =
  | "start"
  | "center"
  | "end"
  | "between";

export type Align =
  | "start"
  | "center"
  | "end"
  | "stretch";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;

  justify?: Justify;

  align?: Align;

  // className?: string;
}