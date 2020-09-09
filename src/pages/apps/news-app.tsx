import React from 'react'
import Root from '../../layout/Root'

export default function NewsApp() {
  return (
    <Root>
      News App
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/sboh1214/News-App/workflows/Android/badge.svg">
          <img src="https://github.com/sboh1214/News-App/workflows/Android/badge.svg" alt="Android" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/sboh1214/News-App/workflows/iOS/badge.svg">
          <img src="https://github.com/sboh1214/News-App/workflows/iOS/badge.svg" alt="iOS" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/sboh1214/News-App/workflows/Test/badge.svg">
          <img src="https://github.com/sboh1214/News-App/workflows/Test/badge.svg" alt="Test" />
        </a>
        <a href="https://codecov.io/gh/sboh1214/News-App">
          <img src="https://codecov.io/gh/sboh1214/News-App/branch/master/graph/badge.svg" alt="Coverage" />
        </a>
      </div>
    </Root>
  )
}
