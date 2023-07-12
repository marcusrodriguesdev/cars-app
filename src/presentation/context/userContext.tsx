import React, { createContext, useState, ReactNode } from 'react';
import { User } from '../types/signIn';

export type UserContextType = {
  user: User | null;
  updateUser: (userData: User) => void;
};

const UserContext = createContext<UserContextType>({
  user: null,
  updateUser: () => {},
});

type UserProviderProps = {
  children: ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const updateUser = (userData: User) => {
    setUser(userData);
  };

  const userContextValue: UserContextType = {
    user,
    updateUser,
  };

  return <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
