import React,{ createContext, ReactNode, useContext } from "react";

type AuthProviderProps = {
  children: ReactNode;
}

type User = {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

type AuthContextData = {
  user: User;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({children}: AuthProviderProps) => {
  const user: User = {
    id: String(Math.random()),
    name: 'Gabriel',
    email: 'gabriel@email.com'
  }

  return (
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
}