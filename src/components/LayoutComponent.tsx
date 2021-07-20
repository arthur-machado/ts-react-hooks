import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import UseRef from './UseRef';
import UseContext from './UseContext';
import UseState from './UseState';

const Layout: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <section
      style={{
        backgroundColor: `${themeContext?.theme.background}`,
        color: `${themeContext?.theme.text}`,
      }}
    >
      <UseState />
      <UseRef />
      <UseContext />
    </section>
  );
};

export default Layout;
