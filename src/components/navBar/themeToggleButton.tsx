import * as React from 'react'
import { Button, IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'

type Props = {
  isLarge: boolean
}

export default function ThemeToggleButton({ isLarge }: Props): JSX.Element {
  const { t } = useTranslation()
  const { colorMode, toggleColorMode } = useColorMode()
  const icon = colorMode === 'dark' ? <SunIcon /> : <MoonIcon />
  const text = colorMode === 'dark' ? t('toolBar.light') : t('toolBar.dark')

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
