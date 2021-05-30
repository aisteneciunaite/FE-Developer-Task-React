import React from 'react'
import { appName } from '../../../config'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="Footer">
      Photos from{' '}
      <a
        href={`https://unsplash.com/?utm_source=${appName}&utm_medium=referral`}
      >
        {' '}
        Unsplash
      </a>
    </footer>
  )
}
