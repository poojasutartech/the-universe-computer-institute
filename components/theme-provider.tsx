'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
} from 'next-themes'

// 💡 ComponentProps वापरल्यामुळे Type Mismatch चा आणि स्क्रिप्ट टॅगचा एरर येणार नाही
export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function useTheme() {
  const { theme, setTheme } = useNextTheme()
  
  return {
    theme,
    toggleTheme: () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }
}