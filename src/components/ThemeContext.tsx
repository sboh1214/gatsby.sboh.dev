import React, { useState, useLayoutEffect } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { ThemeType } from './ThemeSwitch'

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#4167B2'
    }
  }
})

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#000'
    }
  }
})

export const ThemeContext = React.createContext((_: ThemeType): void => {})

const ThemeContextProvider: React.FC = (props) => {
  // State to hold the selected theme name
  const [themeType, _setThemeType] = useState<ThemeType>(ThemeType.SYSTEM)
  const [colorScheme, setColorScheme] = useState<ThemeType>(ThemeType.LIGHT)

  const setThemeType = (themeType: ThemeType): void => {
    if (window !== undefined) {
      window.localStorage.setItem(ThemeType.NAME.toString(), themeType)
    }
    _setThemeType(themeType)
  }

  useLayoutEffect(() => {
    if (window) {
      const curThemeName = window.localStorage.getItem(ThemeType.NAME.toString()) || ThemeType.SYSTEM
      _setThemeType(curThemeName as ThemeType)
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        setColorScheme(e.matches ? ThemeType.DARK : ThemeType.LIGHT)
      })
    }
  }, [])

  let theme
  if (themeType === ThemeType.LIGHT) {
    theme = lightTheme
  } else if (themeType === ThemeType.DARK) {
    theme = darkTheme
  } else if (colorScheme === ThemeType.LIGHT) {
    theme = lightTheme
  } else {
    theme = darkTheme
  }

  return (
    <ThemeContext.Provider value={setThemeType}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
