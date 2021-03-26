import React from 'react';
import { client } from '../utils/api-client';

const AuthContext = React.createContext(null);

export function AuthProvider({children}) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    client.get('/auth/me')
      .then(res => setUser(res.data.user))
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used with an AuthProvider component.')
  }
  return context;
}
