import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;

  variant?: BadgeVariant;
}