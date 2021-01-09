import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, IconButton, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TranslateIcon } from '../icon'

enum Language {
  KO = 'ko',
  EN = 'en',
}

type Props = {
  isLarge: boolean
}

export default function SelectTranslation({ isLarge }: Props): JSX.Element {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState<Language>(Language.KO)

  function handleChange(value: string) {
    i18n.changeLanguage(value)
    setLanguage(value as Language)
  }

  return (
    <Menu>
      {isLarge ? (
        <MenuButton as={Button} leftIcon={<TranslateIcon />} rightIcon={<ChevronDownIcon />}>
          {language}
        </MenuButton>
      ) : (
        <MenuButton as={IconButton} icon={<TranslateIcon />} />
      )}
      <MenuList>
        <MenuOptionGroup
          defaultValue={language}
          onChange={(value) => {
            handleChange(value as string)
          }}
          title="Languages"
          type="radio"
        >
          <MenuItemOption value={Language.KO}>한국어</MenuItemOption>
          <MenuItemOption value={Language.EN}>English</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}
