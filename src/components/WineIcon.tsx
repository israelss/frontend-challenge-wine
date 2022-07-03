import React, { ComponentPropsWithoutRef } from 'react'

const WineIcon = ({ id, ...props }: ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg {...props}>
      <use href={`../icons.svg#${id}`} />
    </svg>
  )
}

export default WineIcon
