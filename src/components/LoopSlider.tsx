import React from 'react'

type Props = {
  imagePaths: string[]
}

const LoopSlider: React.FC<Props> = ({ imagePaths }) => {
  return (
    <div>
      {imagePaths.map(image => <img src={image} alt={image} />)}
    </div>
  )
}

export default LoopSlider