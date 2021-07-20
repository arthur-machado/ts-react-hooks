import React, { useState } from 'react';
import Layout from './components/LayoutComponent';
import { ThemeContextProvider } from './context/ThemeContext';
import { darkTheme, lightTheme } from './themes';

const App: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggle = () => {
    if (theme.theme_name === 'light') {
      setTheme(darkTheme);
    } else if (theme.theme_name === 'dark') {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeContextProvider value={{ theme: theme, setTheme: toggle }}>
      <Layout />
    </ThemeContextProvider>
  );
};

export default App;
