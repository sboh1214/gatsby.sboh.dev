import { Select } from '@chakra-ui/react'
import React, { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

enum Language {
  KO = 'ko',
  EN = 'en',
}

export default function SelectTranslation(): JSX.Element {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState<Language>(Language.KO)

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    i18n.changeLanguage(event.target.value)
    setLanguage(event.target.value as Language)
  }
  return (
    <Select width="128px" value={language} onChange={handleChange} disableUnderline>
      <option value={Language.KO}>한국어</option>
      <option value={Language.EN}>English</option>
    </Select>
  )
}
