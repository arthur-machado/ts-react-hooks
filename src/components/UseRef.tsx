import React, { useState, useRef, useEffect } from 'react';

interface UserProps {
  name: string;
  login: string;
  avatar_url: string;
}

const UseRef: React.FC = () => {
  const [userData, setUserData] = useState<UserProps>();
  const [searchQuery, setSearchQuery] = useState('');
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
    <>
      <h3>Exemplo com useRef</h3>
      <div>
        <label>Usuário Github: </label>
        <input type="text" onChange={handleInputChange} ref={inputText} />
        <button onClick={() => loadData(searchQuery)}>Buscar</button>
      </div>

      <ul>
        {userData && (
          <>
            <li>
              <img src={userData?.avatar_url} alt="User avatar" />
            </li>
            <li>{userData?.name}</li>
            <li>{userData?.login}</li>
          </>
        )}
      </ul>
      <hr />
    </>
  );
};

export default UseRef;
