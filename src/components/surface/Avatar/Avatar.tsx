import clsx from "clsx";

import styles from "./Avatar.module.scss";

import type { AvatarProps } from "./Avatar.types";

export const Avatar = ({
  src,
  alt,
  name,
  size = "md",
  className,
  ...props
}: AvatarProps) => {
  const initials = name
    ?.split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={clsx(
        styles.avatar,
        styles[`avatar--${size}`],
        className
      )}
      data-size={size}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className={styles.image}
        />
      ) : (
        <span className={styles.fallback}>
          {initials}
        </span>
      )}
    </div>
  );
};