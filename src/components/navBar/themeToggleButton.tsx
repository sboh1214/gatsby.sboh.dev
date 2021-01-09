import * as React from 'react'
import { Button, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Acrylic } from '../../utils/style'

type Props = {
  fixedPostion?: boolean
}

export default function ThemeToggleButton({ fixedPostion = false }: Props): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode()
  const LABEL_TEXT = colorMode === 'dark' ? 'Light theme' : 'Dark theme'

  return (
    <Button
      leftIcon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      style={Acrylic}
      variant="solid"
      borderRadius="full"
      zIndex={100}
      bottom={fixedPostion ? 0 : undefined}
      right={fixedPostion ? 0 : undefined}
      position={fixedPostion ? 'fixed' : undefined}
      margin={fixedPostion ? '12px' : undefined}
      onClick={toggleColorMode}
    >
      {LABEL_TEXT}
    </Button>
  )
}
