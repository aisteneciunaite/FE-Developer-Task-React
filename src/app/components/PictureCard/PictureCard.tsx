import React from 'react'
import './PictureCard.scss'
import CardBody from '../CardBody'
import Button from '../Button'

interface Props {
  url: string
  author: string
  name?: string | null
  alt_text?: string | null
}

export default function PictureCard({ url, author, name, alt_text }: Props) {
  return (
    <div className="PictureCard">
      <img src={url} alt={alt_text || 'image'} />
      <div className="PictureCard__overlay">
        <CardBody title={name} subtitle={author} />
        <Button onClick={() => {}}>Favorite</Button>
      </div>
    </div>
  )
}
