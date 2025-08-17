import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Theme = "light" | "dark" | undefined;

type AppState = {
  theme: Theme;
};

const STORAGE_KEY = "site-theme";

const initialState: AppState = {
  theme: undefined,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { setTheme, toggleTheme } = appSlice.actions;

export function readThemeFromStorage(): Theme | null {
  try {
    const raw =
      typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;

    if (!raw) return null;
    if (raw === "dark" || raw === "light") return raw;
    return null;
  } catch {
    return null;
  }
}

export function persistThemeToStorage(theme: Theme) {
  try {
    if (theme) localStorage.setItem(STORAGE_KEY, theme);

    document.cookie = `site-theme=${theme}; path=/; max-age=${60 * 60 * 24 * 365}`;
  } catch {}
}

export default appSlice.reducer;
