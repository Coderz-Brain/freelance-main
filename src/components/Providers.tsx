"use client"

import { ReactNode } from 'react';
import { ThemeProvider } from '../components/context/ThemeContext';

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children}: ProviderProps) => {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}

export default Providers;