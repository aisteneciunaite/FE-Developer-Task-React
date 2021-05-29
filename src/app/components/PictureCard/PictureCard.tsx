import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
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
      <LazyLoadImage
        src={url}
        alt={alt_text || ''}
        effect="blur"
        wrapperProps={{ style: { display: 'unset' } }}
      />

      <div className="PictureCard__overlay">
        <CardBody title={name} subtitle={author} />
        <Button onClick={() => {}}>Favorite</Button>
      </div>
    </div>
  )
}
