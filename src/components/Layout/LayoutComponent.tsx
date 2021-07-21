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
    <Container
      backgroundTheme={themeContext?.theme.background}
      textColor={themeContext?.theme.text}
      blue={themeContext?.theme.blue}
    >
      <UseState />
      <UseRef />
      <UseContext />
      <UseCallback />
      <UseReducer />
      <Button onClick={themeContext?.setTheme} blue={themeContext?.theme.blue}>
        Trocar tema
      </Button>
    </Container>
  );
};

export default Layout;
