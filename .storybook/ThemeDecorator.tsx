import { useEffect } from "react";

interface Props {
  theme: string;
  children: React.ReactNode;
}

export const ThemeDecorator = ({
  theme,
  children,
}: Props) => {
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);

  return <>{children}</>;
};