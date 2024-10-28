import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context properties interface
interface GlobalContextProps {
  user: { name: string; loggedIn: boolean } | null;
  theme: 'light' | 'dark';
  login: (name: string) => void;
  logout: () => void;
  toggleTheme: () => void;
}

// Create the context
const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

// Create the provider component
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ name: string; loggedIn: boolean } | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Login function
  const login = (name: string) => {
    setUser({ name, loggedIn: true });
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Provide the context value
  return (
    <GlobalContext.Provider value={{ user, theme, login, logout, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the GlobalContext
export const useGlobalContext = (): GlobalContextProps => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
