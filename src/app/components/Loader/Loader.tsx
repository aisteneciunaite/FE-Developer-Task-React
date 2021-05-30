import React from 'react'
import { Loader as LoaderIcon } from 'react-feather'
import clsx from 'clsx'
import './Loader.scss'

interface Props {
  className?: string
}

export default function Loader({ className }: Props) {
  return (
    <LoaderIcon
      className={clsx('Loader', className)}
      size="30px"
      color="#061921"
    />
  )
}
