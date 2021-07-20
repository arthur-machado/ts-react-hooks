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
  setTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ThemeContext = createContext<ThemeContextTypes | null>(null);
export const ThemeContextProvider = ThemeContext.Provider;
