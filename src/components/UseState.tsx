import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface UserProps {
  name: string;
  login: string;
  avatar_url: string;
}

const UseState: React.FC = () => {
  const [userData, setUserData] = useState<UserProps>();
  const [searchQuery, setSearchQuery] = useState('');
  const context = useContext(ThemeContext);

  async function loadData(userQuery: string) {
    const response = await fetch(`https://api.github.com/users/${userQuery}`);
    const data = await response.json();

    setUserData(data);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    let query = e.target.value;
    setSearchQuery(query);
  }

  return (
    <div
      style={{
        backgroundColor: `${context?.theme.background}`,
        color: `${context?.theme.text}`,
      }}
    >
      <h3>Exemplo com useState</h3>
      <div>
        <label>Usuário Github: </label>
        <input type="text" onChange={handleInputChange} />
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
          </>
        )}
      </ul>
      <hr />
    </div>
  );
};

export default UseState;
