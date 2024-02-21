import { ThemeSettings } from "@entities/ThemeData";
import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(ThemeSettings.getTheme());

  useEffect(() => {
    const handleSetTheme = (newTheme: string) => {
      ThemeSettings.setTheme(newTheme);
      setTheme(newTheme);
    };
    handleSetTheme(theme);
  }, [theme]);
  return { theme, setTheme };
};
