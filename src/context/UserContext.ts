import { createContext } from 'react';

interface User {
  name: string;
  email: string;
}

const defaultUser = {
  name: 'user',
  email: 'user@user.com',
};

export const UserContext = createContext<User>(defaultUser);
