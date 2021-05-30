import React from 'react'
import clsx from 'clsx'
import { Search } from 'react-feather'
import './SearchField.scss'

interface Props {
  value?: string
  onChange?: React.ChangeEventHandler
  className?: string
}

export default function SearchField({ value, onChange, className }: Props) {
  return (
    <div className="SearchField">
      <Search className="SearchField__icon" />
      <input
        className={clsx('SearchField__input', className)}
        type="search"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
