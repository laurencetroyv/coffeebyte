import React, { useCallback, useMemo } from 'react';
import type { AuthProvider, User } from '../types';
import { createContext, ReactNode, useContext, useState } from 'react';

export const AuthContext = createContext<AuthProvider>({
  user: null,
  addUser: () => {},
  login: () => Promise.resolve(),
  logout: () => {},
});

export function useAuth() {
  if (!useContext(AuthContext)) {
    throw new Error('useAuth must be used within a <AuthProvider />');
  }

  return useContext(AuthContext);
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const tempUser = useMemo<User>(
    () => ({
      id: '1',
      email: 'admin@coffeebyte.co',
      session: 'U2FsdGVkX1+3',
      username: 'admin',
      lastName: 'Edorot',
      firstName: 'Aren Dale',
      phoneNumber: '+639758500506',
      dateOfBirth: new Date().toISOString(),
      avatar: 'https://robohash.org/50?set=set4',
    }),
    [],
  );

  const getUserFromStorage = async (): Promise<User | void> => {};

  const login = useCallback(
    async (email: string, password: string): Promise<any> => {
      if (email.length > 0 && password.length > 0) {
        try {
          return Promise.resolve(tempUser);
        } catch (error) {
          return Promise.reject(new Error('An unknown error occurred'));
        }
      }
    },
    [tempUser],
  );

  const addUser = (data: User) => setUser(data);

  const logout = useCallback(async () => {
    if (!user) {
      return;
    }

    setUser(null);
  }, [user]);

  getUserFromStorage();

  const contextValue = useMemo(
    () => ({ isAuthenticated: !!user, user, addUser, login, logout }),
    [user, login, logout],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
