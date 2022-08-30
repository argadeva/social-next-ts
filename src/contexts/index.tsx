import React from 'react';
import ThemeContextProvider, { ThemeContext } from './theme';

export { ThemeContext };
export default function ContextProvider({ children } : { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  );
}