import React, { memo } from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggleButton = memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="btn btn-secondary me-3 align-middle text-center">
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
});

export default ThemeToggleButton;
