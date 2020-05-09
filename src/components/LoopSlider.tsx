import React from 'react'
import styled, { keyframes } from 'styled-components'

const LoopWrap = styled.div`
  display: flex;
  overflow: hidden;
  width: auto;
`
const LoopAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`

const LoopWrapChildFirst = styled.div`
  display: flex;
  width: auto;
  animation: ${LoopAnimation} 50s -25s linear infinite;
`

const LoopWrapImg = styled.img`
  height: 100%;
`

const LoopAnimation2 = keyframes`
  0% {
    transform: translateX(0);
  }
  to {
    transform: translateX(-200%);
  }
`

const LoopWrapChildSecond = styled.div`
  display: flex;
  width: auto;
  animation: ${LoopAnimation2} 50s linear infinite;
`

type Props = {
  imagePaths: string[]
}

const LoopSlider: React.FC<Props> = ({ imagePaths }) => {
  return (
    <>
      <LoopWrap>
        <LoopWrapChildFirst>
          {imagePaths.map(image => <LoopWrapImg src={image} alt={image} key={image} />)}
        </LoopWrapChildFirst>
        <LoopWrapChildSecond>
          {imagePaths.map(image => <LoopWrapImg src={image} alt={image} key={image} />)}
        </LoopWrapChildSecond>
      </LoopWrap>
    </>
  )
}

export default LoopSlider