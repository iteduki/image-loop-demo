import React from 'react'
import styled, { keyframes } from 'styled-components'

const LoopWrap = styled.div`
  display: flex;
  overflow: hidden;
`
const LoopAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`

const LoopWrapChildFirst = styled.div<{ duration: number }>`
  display: flex;
  animation: ${LoopAnimation} ${({ duration }) => `${duration}s -${duration / 2}s`} linear infinite;
`

const LoopWrapImg = styled.img`
  height: 100%;
`

const LoopAnimation2 = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-200%);
  }
`

const LoopWrapChildLast = styled.div<{ duration: number }>`
  display: flex;
  animation: ${LoopAnimation2} ${({ duration }) => duration}s linear infinite;
`

type Props = {
  imagePaths: string[],
  duration?: number
}

const LoopSlider: React.FC<Props> = ({ imagePaths, duration = 25 }) => {
  const imgs = imagePaths.map(image => <LoopWrapImg src={image} alt={image} key={image} />)
  return (
    <>
      <LoopWrap>
        <LoopWrapChildFirst duration={duration}>
          {imgs}
        </LoopWrapChildFirst>
        <LoopWrapChildLast duration={duration}>
          {imgs}
        </LoopWrapChildLast>
      </LoopWrap>
    </>
  )
}

export default LoopSlider