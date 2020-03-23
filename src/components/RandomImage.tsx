import React from 'react'

type Props = {
  imagePaths: string[],
  max?: number
}

const RandomImages: React.FC<Props> = ({ imagePaths, max }) => {
  for (let i = imagePaths.length - 1; i >= 0; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));
    [imagePaths[i], imagePaths[randomNumber]] = [imagePaths[randomNumber], imagePaths[i]];
  }

  return <>
    {imagePaths.slice(0, max).map((image, index) => <img src={image} alt={index.toString()} />)}
  </>
}

RandomImages.defaultProps = { max: 6 }

export default RandomImages