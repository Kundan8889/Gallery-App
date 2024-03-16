import { FC, createContext, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

// Create context
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false
});

// Create provider
interface AuthProviderProps {
  children: React.ReactElement;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  // Use array destructuring with useState
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Initially set loading to true

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false); // Set loading to false once auth state is determined
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  // Context value
  const value = {
    user,
    isLoading,
  };

  // Provide the context value to children components
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
