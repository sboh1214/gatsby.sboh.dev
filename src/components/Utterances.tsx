import React, { createRef, useLayoutEffect } from 'react'

export default function Utterances() {
  const containerRef = createRef<HTMLDivElement>()

  useLayoutEffect(() => {
    const utterances = document.createElement('script')

    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'sboh1214/sboh1214.github.io',
      'issue-term': 'pathname',
      label: 'comment',
      theme: 'github-light',
      crossOrigin: 'anonymous',
      async: 'true'
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    containerRef!!.current!!.appendChild(utterances)
  }, [])

  return <div ref={containerRef} />
}
