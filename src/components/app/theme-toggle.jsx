import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

const THEME_OPTIONS = [
  { value: "light", label: "Terang", icon: Sun },
  { value: "dark", label: "Gelap", icon: Moon },
  { value: "system", label: "Sistem", icon: Monitor },
];

const STORAGE_KEY = "portfolio-theme";

function getStoredTheme() {
  return localStorage.getItem(STORAGE_KEY) ?? "system";
}

function applyTheme(theme) {
  const dark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);

    if (theme !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => document.documentElement.classList.toggle("dark", media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  const current = THEME_OPTIONS.find((option) => option.value === theme);
  const Icon = current.icon;

  function cycleTheme() {
    const index = THEME_OPTIONS.findIndex((option) => option.value === theme);
    setTheme(THEME_OPTIONS[(index + 1) % THEME_OPTIONS.length].value);
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      aria-label={`Tema ${current.label.toLowerCase()}, klik untuk mengganti`}
      title={`Tema: ${current.label}`}
    >
      <Icon />
    </Button>
  );
}
