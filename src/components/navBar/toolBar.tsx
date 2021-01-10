import React from 'react'
import SelectTranslation from './selectTranslation'
import ThemeToggleButton from './themeToggleButton'

type Props = {
  isLarge: boolean
}

export default function ToolBar({ isLarge }: Props): JSX.Element {
  return (
    <>
      <SelectTranslation isLarge={isLarge} />
      <ThemeToggleButton isLarge={isLarge} />
    </>
  )
}
