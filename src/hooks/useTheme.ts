import { useState, useCallback, useEffect } from 'react'
import { Theme } from '../constants/theme'

declare global {
  interface Window {
    __theme: any
    __setPreferredTheme: any
    __onThemeChange: any
  }
}

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>()

  const themeToggler = useCallback((): void => {
    const nextTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(nextTheme)
    window.__setPreferredTheme(nextTheme)
  }, [theme])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(window.__theme)
    }

    window.__onThemeChange = (newTheme: Theme) => {
      setTheme(newTheme)
    }
  }, [])

  return [theme, themeToggler]
}

export default useTheme
