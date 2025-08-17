"use client";

import React, { useEffect } from "react";
import { Button } from "../ui";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  toggleTheme,
  setTheme,
  readThemeFromStorage,
  persistThemeToStorage,
  Theme,
} from "@/store/slices/appSlice";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((s) => s.app.theme) as Theme;

  useEffect(() => {
    const saved = readThemeFromStorage();
    if (saved) {
      dispatch(setTheme(saved));
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        dispatch(setTheme("dark"));
      } else {
        dispatch(setTheme("light"));
      }
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (theme) {
      html.classList.toggle("dark", theme === "dark");
      persistThemeToStorage(theme);
    }
  }, [theme]);

  function onToggle() {
    dispatch(toggleTheme());
  }

  return (
    <Button
      variant="primary"
      size="sm"
      onClick={onToggle}
      aria-label="Toggle theme"
      
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </Button>
  );
}
