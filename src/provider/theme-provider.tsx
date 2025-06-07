import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  actualTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

const getSystemTheme = (): "light" | "dark" => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
};

const getStoredTheme = (): Theme => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme") as Theme;
    if (stored && ["light", "dark", "system"].includes(stored)) {
      return stored;
    }
  }
  return "system";
};

const resolveTheme = (theme: Theme): "light" | "dark" => {
  return theme === "system" ? getSystemTheme() : theme;
};

const applyTheme = (resolvedTheme: "light" | "dark") => {
  document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("system");
  const [actualTheme, setActualTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = getStoredTheme();
    const resolved = resolveTheme(storedTheme);

    setTheme(storedTheme);
    setActualTheme(resolved);
    applyTheme(resolved);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        const newResolvedTheme = e.matches ? "dark" : "light";
        setActualTheme(newResolvedTheme);
        applyTheme(newResolvedTheme);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  const toggleTheme = () => {
    const themeOrder: Theme[] = ["system", "light", "dark"];
    const currentIndex = themeOrder.indexOf(theme);
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];

    const resolved = resolveTheme(nextTheme);

    setTheme(nextTheme);
    setActualTheme(resolved);
    localStorage.setItem("theme", nextTheme);
    applyTheme(resolved);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, actualTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
