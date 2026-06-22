import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type CardPadding =
  | "sm"
  | "md"
  | "lg";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  elevated?: boolean;
  bordered?: boolean;
  padding?: CardPadding;
}