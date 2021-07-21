import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Container, Button } from './styles';

import UseRef from '../UseRef';
import UseContext from '../UseContext';
import UseState from '../UseState';
import UseCallback from '../UseCallback';
import UseReducer from '../UseReducer';

const Layout: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <Container theme={themeContext?.theme}>
      <UseState />
      <UseRef />
      <UseContext />
      <UseCallback />
      <UseReducer />
      <Button onClick={themeContext?.setTheme} theme={themeContext?.theme}>
        Trocar tema
      </Button>
    </Container>
  );
};

export default Layout;
