import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import UseRef from './UseRef';
import UseContext from './UseContext';
import UseState from './UseState';
import UseCallback from './UseCallback';
import UseReducer from './UseReducer';

const Layout: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <section
      style={{
        backgroundColor: `${themeContext?.theme.background}`,
        color: `${themeContext?.theme.text}`,
        margin: '20px',
        padding: '10px',
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <UseState />
      <UseRef />
      <UseContext />
      <UseCallback />
      <UseReducer />
      <button
        onClick={themeContext?.setTheme}
        style={{
          backgroundColor: themeContext?.theme.blue,
          color: '#FFF',
          padding: '10px',
          borderRadius: '5px',
          outline: 'none',
          border: 'none',
          cursor: 'pointer',
          margin: '20px 40%',
          width: '120px',
        }}
      >
        Trocar tema
      </button>
    </section>
  );
};

export default Layout;
