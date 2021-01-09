import * as React from 'react'
import { Button, IconButton, useColorMode } from '@chakra-ui/react'
import { Acrylic } from '../../utils/style'
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
      <Button
        leftIcon={icon}
        style={Acrylic}
        variant="solid"
        borderRadius="full"
        zIndex={100}
        bottom={isLarge ? 0 : undefined}
        right={isLarge ? 0 : undefined}
        position={isLarge ? 'fixed' : undefined}
        margin={isLarge ? '12px' : undefined}
        onClick={toggleColorMode}
      >
        {text}
      </Button>
    )
  } else {
    return <IconButton aria-label="Toggle Theme" icon={icon} onClick={toggleColorMode} />
  }
}
