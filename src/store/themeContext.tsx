import React from 'react'
import { Theme } from '../constants/theme'

const ThemeContext = React.createContext<Theme>(Theme.LIGHT)

export default ThemeContext
