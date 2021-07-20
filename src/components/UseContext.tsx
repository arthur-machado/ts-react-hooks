import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UseContext: React.FC = () => {
  const { name, email } = useContext(UserContext);

  return (
    <>
      <h3>Exemplo com useContext</h3>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <span>Variáveis definidas dentro do contexto</span>
      </ul>
      <hr />
    </>
  );
};

export default UseContext;
