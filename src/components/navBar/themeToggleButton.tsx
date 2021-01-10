import * as React from 'react'
import { Button, IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

type Props = {
  isLarge: boolean
}

export default function ThemeToggleButton({ isLarge }: Props): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode()
  const icon = colorMode === 'dark' ? <SunIcon /> : <MoonIcon />
  const text = colorMode === 'dark' ? 'Light theme' : 'Dark theme'

  if (isLarge) {
    return (
      <Button leftIcon={icon} variant="solid" onClick={toggleColorMode}>
        {text}
      </Button>
    )
  } else {
    return <IconButton aria-label="Toggle Theme" icon={icon} onClick={toggleColorMode} />
  }
}
