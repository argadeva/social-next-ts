import React from 'react';
import ThemeContextProvider, { ThemeContext } from './theme';
import ModalContextProvider, { ModalContext } from './modal';

export { ThemeContext, ModalContext };
export default function ContextProvider({ children } : { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <ModalContextProvider>
        {children}
      </ModalContextProvider>
    </ThemeContextProvider>
  );
}