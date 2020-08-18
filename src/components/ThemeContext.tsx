import React, { useState } from 'react'
import { createMuiTheme, Theme, ThemeProvider } from '@material-ui/core'

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

export function getThemeByName(theme: string): Theme {
  return themeMap[theme]
}

const themeMap: { [key: string]: Theme } = {
  lightTheme,
  darkTheme
}

export const ThemeContext = React.createContext((_: string): void => {})

const ThemeContextProvider: React.FC = (props) => {
  const curThemeName = localStorage.getItem('appTheme') || 'lightTheme'
  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(curThemeName)

  // Retrieve the theme object by theme name
  const theme = getThemeByName(themeName)

  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName)
    _setThemeName(themeName)
  }

  return (
    <ThemeContext.Provider value={setThemeName}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
