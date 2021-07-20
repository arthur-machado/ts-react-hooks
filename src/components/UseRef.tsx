import React, { useState, useRef, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
interface UserProps {
  name: string;
  login: string;
  avatar_url: string;
  followers: number;
  public_repos: number;
}

const UseRef: React.FC = () => {
  const [userData, setUserData] = useState<UserProps>();
  const [searchQuery, setSearchQuery] = useState('');
  const context = useContext(ThemeContext);
  // Cria a referência ao elemento Input
  const inputText = useRef<HTMLInputElement>(null);

  async function loadData(userQuery: string) {
    const response = await fetch(`https://api.github.com/users/${userQuery}`);
    const data = await response.json();

    setUserData(data);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    let query = e.target.value;
    setSearchQuery(query);
  }

  useEffect(() => {
    //Seta o focus ao Input quando o componente renderizar
    inputText.current?.focus();
  });

  return (
    <div
      style={{
        backgroundColor: `${context?.theme.background}`,
        color: `${context?.theme.text}`,
      }}
    >
      <h3>Exemplo com useRef</h3>
      <div>
        <label>Usuário Github: </label>
        <input type="text" onChange={handleInputChange} ref={inputText} />
        <button onClick={() => loadData(searchQuery)}>Buscar</button>
      </div>

      <ul>
        {userData && (
          <>
            <li style={{ listStyle: 'none' }}>
              <img
                src={userData?.avatar_url}
                alt="User avatar"
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              />
            </li>
            <li>{userData?.name}</li>
            <li>{userData?.login}</li>
            <li>Seguidores: {userData?.followers}</li>
            <li>Repositórios públicos: {userData?.public_repos}</li>
          </>
        )}
      </ul>
      <hr />
    </div>
  );
};

export default UseRef;
