import * as React from 'react'
import { Button, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function ThemeToggleButton(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode()
  const LABEL_TEXT = colorMode === 'dark' ? 'Light theme' : 'Dark theme'

  return (
    <Button
      leftIcon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      variant="solid"
      zIndex={100}
      bottom={0}
      right={0}
      position="fixed"
      margin="12px"
      onClick={toggleColorMode}
    >
      {LABEL_TEXT}
    </Button>
  )
}
