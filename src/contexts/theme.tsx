import React, { createContext, useState, useEffect } from 'react';

export type GlobalContent = {
  darkMode: Boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<Boolean>>,
}

export const ThemeContext = createContext<GlobalContent>({
  darkMode: false,
  setDarkMode: () => {}
});

export default function ThemeContextProvider({ children } : { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState<Boolean>(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    return () => {
      document.body.className = "light";
    }
  }, [darkMode]);
  
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
}