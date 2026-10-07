import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function getInitialTheme() {
  return localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="text-[#9aa5a1] transition-colors hover:text-white"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
