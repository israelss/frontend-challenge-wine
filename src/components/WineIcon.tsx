import React, { ComponentPropsWithoutRef } from 'react'

const WineIcon = ({ id, ...props }: ComponentPropsWithoutRef<'svg'>): JSX.Element => {
  if (id?.length === 0) return <></>

  return (
    <svg {...props}>
      <use href={`../icons.svg#${id ?? ''}`} />
    </svg>
  )
}

export default WineIcon
