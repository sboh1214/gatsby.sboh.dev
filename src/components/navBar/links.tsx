import { Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'

type LinksProps = {
  width?: string
}

export default function Links({ width }: LinksProps) {
  const { t } = useTranslation()

  return (
    <>
      <LinkButton name="about" width={width} />
      <LinkButton name="apps" width={width} />
      <LinkButton name="libs" width={width} />
      <a href="https://medium.com/@sboh1214">
        <Button variant="outline" leftIcon={<ExternalLinkIcon />} width={width}>
          {t(`nav.blog`)}
        </Button>
      </a>
    </>
  )
}

type LinkButtonProps = {
  name: string
  width?: string
  variant?: string
}

function LinkButton({ name, width }: LinkButtonProps) {
  const { t } = useTranslation()

  return (
    <Link to={`/${name}`}>
      <Button variant="ghost" flexDirection="column" alignItems="start" width={width}>
        {t(`nav.${name}`)}
      </Button>
    </Link>
  )
}
