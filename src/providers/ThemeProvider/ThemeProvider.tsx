import {
  useEffect,
  useState,
} from "react";

import { ThemeContext } from "./ThemeContext";

import type { Theme } from "../../types/theme.types";

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({
  children,
}: Props) => {
  const [theme, setTheme] =
    useState<Theme>("dark");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};