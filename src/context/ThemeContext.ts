import { createContext } from 'react';

interface Themes {
  theme_name: string;
  text: string;
  background: string;
  border: string;
  red_selected: string;
  muted: string;
  blue: string;
}

interface ThemeContextTypes {
  theme: Themes;
  setTheme: (Themes: Themes) => void;
}

export const ThemeContext = createContext<ThemeContextTypes | null>(null);
export const ThemeContextProvider = ThemeContext.Provider;
