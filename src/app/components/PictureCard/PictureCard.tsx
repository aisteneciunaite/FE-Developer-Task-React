import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Heart } from 'react-feather'
import clsx from 'clsx'
import 'react-lazy-load-image-component/src/effects/blur.css'
import './PictureCard.scss'
import CardBody from '../CardBody'
import Button from '../Button'

interface Props {
  url: string
  author: string
  name?: string | null
  alt_text?: string | null
  favorite?: boolean
  toggleFavorite: React.MouseEventHandler
}

export default function PictureCard({
  url,
  author,
  name,
  alt_text,
  favorite,
  toggleFavorite,
}: Props) {
  const buttonText = favorite ? (
    <>
      <Heart size="14" /> Unfavorite
    </>
  ) : (
    <>
      <Heart size="14" fill="red" /> Favorite
    </>
  )

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
        <Button
          onClick={toggleFavorite}
          className={clsx('PictureCard__favorite-btn', {
            'PictureCard__favorite-btn--on': favorite,
            'PictureCard__favorite-btn--off': !favorite,
          })}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}
