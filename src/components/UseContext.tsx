import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { ThemeContext } from '../context/ThemeContext';
const UseContext: React.FC = () => {
  const { name, email } = useContext(UserContext);
  const context = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: `${context?.theme.background}`,
        color: `${context?.theme.text}`,
      }}
    >
      <h3>Exemplo com useContext</h3>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <span>Variáveis definidas dentro do contexto</span>
      </ul>
      <hr />
    </div>
  );
};

export default UseContext;
