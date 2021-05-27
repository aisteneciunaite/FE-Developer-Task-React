import React from 'react'
import PictureCard from '../PictureCard'
import './PicturesGrid.scss'
// TODO: delete this
import a from '../../../mockImages.json'

export default function PicturesGrid() {
  return (
    <div className="PicturesGrid">
      {/* TODO: add fetch pictures */}
      {a.map((i, index) => (
        <PictureCard {...i} key={index} />
      ))}
    </div>
  )
}
