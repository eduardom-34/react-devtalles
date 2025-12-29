
import { type PropsWithChildren, createContext, useState } from "react"
import { users, type User } from "../data/user-mock.data";


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

    const user = users.find((user) => user.id === userId);

    if (!user) {
      console.log(`user not found ${userId}`);
      setUser(null);
      setAuthStatus('not-authenticated');
      return false;
    }
    setUser(user);
    setAuthStatus('authenticated');
    return true;
  }

  const handleLogout = () => {
    console.log('Logout')
    setAuthStatus('not-authenticated');
    setUser(null);
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
