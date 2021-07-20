import React, { useState } from 'react';

interface UserProps {
    name: string;
    login: string;
    avatar_url: string;
}

const UseState: React.FC = () => {
    const [userData, setUserData] = useState<UserProps>();
    const [searchQuery, setSearchQuery] = useState('');

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
        <>
            <h3>Exemplo com useState</h3>
            <div>
                <label>Usuário Github: </label>
                <input type="text" onChange={handleInputChange} />
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

export default UseState;
