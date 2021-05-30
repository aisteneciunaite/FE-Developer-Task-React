import React from 'react'
import clsx from 'clsx'
import './Button.scss'

interface Props {
  children: React.ReactChild
  onClick: React.MouseEventHandler
  className?: string
}

export default function Button({ children, onClick, className }: Props) {
  return (
    <button className={clsx('Button', className)} onClick={onClick}>
      {children}
    </button>
  )
}
