import { useTheme } from "next-themes";

import DarkThemeIcon from "@/components/shared/icons/DarkThemeIcon";
import LightThemeIcon from "@/components/shared/icons/LightThemeIcon";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="border-none outline-none"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="hidden dark:block">
        <DarkThemeIcon />
      </div>

      <div className="block dark:hidden">
        <LightThemeIcon />
      </div>
    </button>
  );
};

export default ThemeToggler;
