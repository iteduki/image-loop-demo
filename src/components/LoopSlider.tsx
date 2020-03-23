import React from 'react'
import styled from 'styled-components'

type Props = {
  imagePaths: string[]
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const LoopSlider: React.FC<Props> = ({ imagePaths }) => {
  return (
    <>
      <Title>Title</Title>
      <div>
        {imagePaths.map(image => <img src={image} alt={image} />)}
      </div>
    </>

  )
}

export default LoopSlider