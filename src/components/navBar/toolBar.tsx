import SelectTranslation from './selectTranslation'
import SelectTheme from './selectTheme'

type Props = {
  isLarge: boolean
}

export default function ToolBar({ isLarge }: Props): JSX.Element {
  return (
    <>
      <SelectTranslation isLarge={isLarge} />
      <SelectTheme isLarge={isLarge} />
    </>
  )
}
