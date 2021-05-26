import React from 'react'
import './style.scss'

interface Props {
  children: React.ReactChild
  onClick: React.MouseEventHandler
}

export default function Button({ children, onClick }: Props) {
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  )
}
