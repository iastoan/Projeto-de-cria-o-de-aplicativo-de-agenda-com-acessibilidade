import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const temas = {
  claro: {
    background: '#ffffff',
    text: '#000000',
    button: '#0057B8',
  },

  protanopia: {
    background: '#f5f5f5',
    text: '#111111',
    button: '#FFB000',
  },

  deuteranopia: {
    background: '#eef2f3',
    text: '#111111',
    button: '#0088FF',
  },

  tritanopia: {
    background: '#f0f0ff',
    text: '#222222',
    button: '#7a5cff',
  },
};

export function ThemeProvider({ children }) {

  const [temaAtual, setTemaAtual] = useState('claro');

  const tema = temas[temaAtual];

  return (
    <ThemeContext.Provider value={{ tema, setTemaAtual }}>
      {children}
    </ThemeContext.Provider>
  );
}