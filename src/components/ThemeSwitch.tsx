import React, { useState, useContext, useLayoutEffect } from 'react'
import { ThemeContext } from './ThemeContext'
import { Menu, MenuItem, ListItemIcon, ListItemText, Button } from '@material-ui/core'
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4'

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
  NAME = 'themeType'
}

export const ThemeSwitch = () => {
  const [type, setType] = useState<ThemeType>(ThemeType.SYSTEM)
  const setThemeType = useContext(ThemeContext)

  useLayoutEffect(() => {
    if (window) {
      const curThemeName = window.localStorage.getItem(ThemeType.NAME.toString()) || ThemeType.SYSTEM
      setType(curThemeName as ThemeType)
    }
  }, [])

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelect = (newType: ThemeType) => {
    setType(newType)
    setThemeType(newType)
    handleClose()
  }

  return (
    <div className="switch-container">
      <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary" onClick={handleClick}>
        Theme
      </Button>
      <Menu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem
          selected={type === ThemeType.LIGHT}
          button
          onClick={() => {
            handleSelect(ThemeType.LIGHT)
          }}
        >
          <ListItemIcon>
            <Brightness7Icon />
          </ListItemIcon>
          <ListItemText primary="Light" />
        </MenuItem>
        <MenuItem
          selected={type === ThemeType.DARK}
          button
          onClick={() => {
            handleSelect(ThemeType.DARK)
          }}
        >
          <ListItemIcon>
            <Brightness4Icon />
          </ListItemIcon>
          <ListItemText primary="Dark" />
        </MenuItem>
        <MenuItem
          selected={type === ThemeType.SYSTEM}
          button
          onClick={() => {
            handleSelect(ThemeType.SYSTEM)
          }}
        >
          <ListItemIcon>
            <BrightnessAutoIcon />
          </ListItemIcon>
          <ListItemText primary="System" />
        </MenuItem>
      </Menu>
    </div>
  )
}
