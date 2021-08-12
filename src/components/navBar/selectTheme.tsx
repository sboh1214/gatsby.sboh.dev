import { useEffect, useState } from 'react'
import { Button, createIcon, IconButton, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup, useColorMode } from '@chakra-ui/react'
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import useSystemTheme, { Theme } from '../../utils/useSystemTheme'

type Props = {
  isLarge: boolean
}

const DevicesIcon = createIcon({
  displayName: 'DevicesIcon',
  viewBox: '0 0 24 24',
  path: (
    <path
      fill="currentColor"
      d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"
    />
  ),
})

const ThemeIcon = createIcon({
  displayName: 'ThemeIcon',
  viewBox: '0 0 24 24',
  path: (
    <path
      fill="currentColor"
      d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"
    />
  ),
})

export default function SelectTheme({ isLarge }: Props): JSX.Element {
  const { t } = useTranslation()
  const { colorMode, toggleColorMode } = useColorMode()
  const systemTheme = useSystemTheme()
  const [theme, setTheme] = useState<Theme>(Theme.SYNC)

  useEffect(() => {
    if (theme === Theme.SYNC) {
      if (colorMode !== systemTheme) {
        toggleColorMode()
      }
    } else {
      if (colorMode !== theme) {
        toggleColorMode()
      }
    }
  }, [theme, systemTheme, colorMode, toggleColorMode])

  function handleChange(value: string) {
    setTheme(value as Theme)
  }

  return (
    <Menu>
      {isLarge ? (
        <MenuButton as={Button} leftIcon={<ThemeIcon />} rightIcon={<ChevronDownIcon />}>
          {t(`toolBar.${theme}`)}
        </MenuButton>
      ) : (
        <MenuButton as={IconButton} icon={<ThemeIcon />} />
      )}
      <MenuList>
        <MenuOptionGroup
          defaultValue={theme}
          onChange={(value) => {
            handleChange(value as string)
          }}
          title={t('toolBar.theme')}
          type="radio"
        >
          <MenuItemOption icon={<DevicesIcon />} value={Theme.SYNC}>
            {t('toolBar.sync')}
          </MenuItemOption>
          <MenuItemOption icon={<SunIcon />} value={Theme.LIGHT}>
            {t('toolBar.light')}
          </MenuItemOption>
          <MenuItemOption icon={<MoonIcon />} value={Theme.DARK}>
            {t('toolBar.dark')}
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}
