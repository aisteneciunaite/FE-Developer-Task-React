import React from 'react'
import './Header.scss'
import SearchField from '../SearchField'
import useSearch from '../../hooks/useSearch'

export default function Header() {
  const { value, handleChange } = useSearch()
  return (
    <header className="Header">
      <SearchField value={value} onChange={handleChange} />
    </header>
  )
}
