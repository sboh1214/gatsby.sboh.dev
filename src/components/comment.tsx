import React, { useRef, useEffect } from 'react'
import useSiteMetadata from '../utils/useSiteMetadata'
import { useColorMode } from '@chakra-ui/react'

const src = 'https://utteranc.es'
const utterancesSelector = 'iframe.utterances-frame'
const LIGHT_THEME = 'github-light'
const DARK_THEME = 'github-dark'

export default function Comment(): JSX.Element {
  const site = useSiteMetadata()
  const { repo } = site.siteMetadata.utterances
  const { colorMode } = useColorMode()
  const containerRef = useRef<HTMLDivElement>(null)
  const isUtterancesCreated = useRef(false)

  useEffect(() => {
    if (!repo) return

    let themeMode = colorMode === 'dark' ? DARK_THEME : LIGHT_THEME

    const createUtterancesEl = () => {
      const comment = document.createElement('script')
      const attributes = {
        src: `${src}/client.js`,
        repo,
        'issue-term': 'title',
        label: 'comment',
        theme: themeMode,
        crossOrigin: 'anonymous',
        async: 'true',
      }
      Object.entries(attributes).forEach(([key, value]) => {
        if (value !== null) {
          comment.setAttribute(key, value)
        }
      })
      containerRef.current?.appendChild(comment)
      isUtterancesCreated.current = true
    }

    const utterancesEl = containerRef.current?.querySelector(utterancesSelector)

    const postThemeMessage = (utterancesEl: any) => {
      if (!utterancesEl) return
      const message = {
        type: 'set-theme',
        theme: themeMode,
      }
      utterancesEl.contentWindow.postMessage(message, src)
    }

    isUtterancesCreated.current ? postThemeMessage(utterancesEl) : createUtterancesEl()
  }, [repo, colorMode])

  return <div ref={containerRef} />
}
