
import { type PropsWithChildren, createContext, useState } from "react"
import type { User } from "../data/user-mock.data";


// interface UserContextProps {
//   children: React.ReactNode;
// }


type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';


interface UserContextProps {
  // State
  authStatus: AuthStatus;
  user: User | null;

  // Methods
  login: (userId: number) => boolean;
  logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);


// HOC
export const UserContextProvider = ({ children }: PropsWithChildren) => {

  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
  const [user, setUser] = useState<User | null>(null)


  const handleLogin = (userId: number) => {
    console.log({ userId });
    return true;
  }

  const handleLogout = () => {
    console.log('Logout')
  }

  return (
    <UserContext value={{
      authStatus: 'checking',
      user: user,
      login: handleLogin,
      logout: handleLogout

    }}>
      {children}
    </UserContext>
  )
}
