import React from 'react'
import './CardBody.scss'

interface Props {
  title: string
  subtitle: string
}

export default function CardBody({ title, subtitle }: Props) {
  return (
    <div className="CardBody">
      <h3>{title}</h3>
      <hr />
      <p>
        <i>{subtitle}</i>
      </p>
    </div>
  )
}
