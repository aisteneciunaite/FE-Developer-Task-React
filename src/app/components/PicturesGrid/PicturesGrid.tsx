import React from 'react'
import PictureCard from '../PictureCard'
import './PicturesGrid.scss'
import useContent from '../../hooks/useContent'

export default function PicturesGrid() {
  const { content } = useContent()
  return (
    <div className="PicturesGrid">
      {content.map((i, index) => {
        const { user } = i
        const author = `${user?.first_name || ''} ${user?.last_name || ''}`
        return (
          <PictureCard
            url={i?.urls?.small}
            author={author}
            alt_text={i.alt_description}
            name={i.description || i.alt_description}
            key={index}
          />
        )
      })}
    </div>
  )
}
