import React, { useState } from 'react';

interface UserProps {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const [userData, setUserData] = useState<UserProps>();
  const [searchQuery, setSearchQuery] = useState("");

  async function loadData(userQuery: string) {
    const response = await fetch(`https://api.github.com/users/${userQuery}`)
    const data = await response.json();

    setUserData(data);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    let query = e.target.value;
    setSearchQuery(query);
  }

  return (
    <>
      <div>
        <label>Usuário Github: </label>
        <input type="text" onChange={handleInputChange} />
        <button onClick={() => loadData(searchQuery)}>Buscar</button>
      </div>
      <hr />
      <ul>
        {userData &&
          <>
            <li><img src={userData?.avatar_url} alt="User avatar" /></li>
            <li>{userData?.name}</li>
            <li>{userData?.login}</li>
          </>
        }
      </ul>
    </>
  );
}

export default App;
