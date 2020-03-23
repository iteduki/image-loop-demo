import React from 'react'

type Props = {
  images: string[]
}

const RandomImages: React.FC<Props> = ({ images }) => {
  return <>
    {images.map(image => <img src={image} />)}
  </>
}

export default RandomImages